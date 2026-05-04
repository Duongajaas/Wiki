#!/usr/bin/python3
# -*- coding: UTF-8 -*-

import json
import os
import requests
import argparse
import xml.etree.ElementTree as ET
from oauth2client.service_account import ServiceAccountCredentials
from googleapiclient.discovery import build

# Extract sitemap from command line arguments


def get_sitemap_path():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        '--sitemap', help='Path to current file', required=True)
    parser.add_argument(
        '--prevsitemap', help='Path to prev file', required=True)
    args = parser.parse_args()
    global sitemap_path
    global prev_sitemap_path
    sitemap_path = getattr(args, 'sitemap')
    prev_sitemap_path = getattr(args, 'prevsitemap')
    print(f"Current: {sitemap_path} \nPrevious: {prev_sitemap_path}")

# Extract URLs from sitemap


def extract_urls_from_sitemap(sitemap_path):
    urls = []
    with open(sitemap_path, 'r') as f:
        tree = ET.parse(f)
        root = tree.getroot()
        for url in root.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url'):
            # Get the text content of the loc element
            loc = url.find(
                '{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text
            urls.append(loc)
    return urls

# Get updated URLs


def diff_urls(urls, prev_urls):
    final_urls = list(set(urls) - set(prev_urls))
    return final_urls

# Push URL list to Baidu Webmaster


def push_urls_to_baidu(urls, site_url):
    token = os.environ["BAIDU_KEY"]  # Uppercase because $ prefix is uppercase
    url = 'http://data.zz.baidu.com/urls?site={}&token={}'.format(
        site_url, token)
    headers = {
        'Content-Type': 'text/plain',
        'User-Agent': 'curl/7.12.1',
        'Host': 'data.zz.baidu.com'
    }
    data = '\n'.join(urls)
    response = requests.post(url, headers=headers, data=data)
    if response.status_code == 200:
        print(f"🎉Baidu push successful!:\n{response.content}")
    else:
        print(f"🛎Baidu Error:\n{response.content} ")

# Call Bing API to submit URLs


def push_urls_to_bing(urls, site_url):
    bing_api_key = os.environ["BING_KEY"]
    bing_api_url = "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=" + bing_api_key

    headers = {"Content-Type": "application/json"}

    data = {
        "siteUrl": site_url,
        "urlList": urls
    }

    response = requests.post(bing_api_url, json=data, headers=headers)
    if response.status_code == 200:
        print(f"🎉Bing push successful!:\n{response.content}")
    else:
        print(f"🛎Bing Error:\n{response.content} ")

# Google index API


def push_urls_to_google(urls):
    SCOPES = ["https://www.googleapis.com/auth/indexing"]

    # service_account_file.json is the private key that you created for your service account.
    JSON_KEY_FILE = json.loads(os.environ["GOOGLE_JSON"])

    credentials = ServiceAccountCredentials.from_json_keyfile_dict(
        JSON_KEY_FILE, scopes=SCOPES)

    # Build service
    service = build('indexing', 'v3', credentials=credentials)
    batch = service.new_batch_http_request(callback=insert_event)

    for url in urls:

        batch.add(service.urlNotifications().publish(
            body={"url": url, "type": 'URL_UPDATED'}))
    batch.execute()

# Google batch processing callback


def insert_event(request_id, response, exception):
    if exception is not None:
        print(f"🛎Google Exception:\n{exception} ")
    else:
        print(f"🎉Google push successful!:\n{response}")


# Main program
if __name__ == '__main__':
    site_url = 'https://duongajaas.github.io'
    sitemap_path = ''
    prev_sitemap_path = ''
    get_sitemap_path()
    urls = extract_urls_from_sitemap(sitemap_path)
    prev_urls = extract_urls_from_sitemap(prev_sitemap_path)
    final_urls = diff_urls(urls, prev_urls)
    print(f"URLs to be updated:{final_urls}")
    if len(final_urls) > 0:
        push_urls_to_bing(urls, site_url)
        push_urls_to_baidu(urls, site_url)
        push_urls_to_google(final_urls)
    else:
        print("✨No URLs to be updated found")
