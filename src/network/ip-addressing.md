---
title: IP Addressing
---

# Đến với thế giới IP

## IP là gì?

Nói ngắn gọn, **Internet Protocol** được dùng ở **tầng mạng** trong mô hình OSI và có thể xem nó như một mã định danh được gán cho mỗi thiết bị duyệt Internet. Địa chỉ IP là một số **32-bit** được **chia thành bốn nhóm 8-bit** bằng dấu chấm, gọi là **octet**. Các giá trị trong mỗi octet có thể **dao động từ 0 đến 255**.

## Subnet Mask là gì?
Mỗi thiết bị có một địa chỉ IP gồm hai phần: địa chỉ máy khách/host và địa chỉ máy chủ/mạng. Địa chỉ IP có thể được cấu hình bởi máy chủ DHCP hoặc cấu hình thủ công (địa chỉ IP tĩnh). **Subnet mask chia địa chỉ IP thành phần host và phần mạng, từ đó xác định phần nào của địa chỉ IP thuộc về thiết bị và phần nào thuộc về mạng**. **Subnet mask là một số 32-bit được tạo bằng cách đặt tất cả bit host về 0 và đặt tất cả bit mạng về 1**. **Theo cách này, subnet mask tách địa chỉ IP thành địa chỉ mạng và địa chỉ host**. **Địa chỉ “255” luôn được gán cho địa chỉ broadcast, còn địa chỉ “0” luôn được gán cho địa chỉ mạng**. Cả hai đều không thể gán cho host vì chúng được dành cho các mục đích đặc biệt này.
## Các lớp IPv4 

Trong không gian địa chỉ IP IPv4, **có năm lớp: A, B, C, D và E**. Mỗi lớp có một dải địa chỉ IP riêng (và cuối cùng quyết định số lượng thiết bị bạn có thể có trong mạng). Chủ yếu, lớp A, B và C được phần lớn thiết bị trên Internet sử dụng. Lớp D và lớp E dành cho các mục đích đặc biệt.
## Network Address Translation - NAT

**Để truy cập Internet, cần một địa chỉ IP công khai**, nhưng chúng ta có thể dùng địa chỉ IP riêng trong mạng nội bộ. Ý tưởng của NAT là cho phép nhiều thiết bị truy cập Internet thông qua một địa chỉ công khai duy nhất. Để làm được điều đó, **cần chuyển đổi một địa chỉ IP riêng thành một địa chỉ IP công khai**. NAT là quá trình trong đó một hoặc nhiều **địa chỉ IP nội bộ được chuyển đổi thành một hoặc nhiều địa chỉ IP toàn cục**. Ngoài ra, nó cũng chuyển đổi số port, che port của host bằng một port khác trong packet sẽ được định tuyến đến đích. Sau đó, nó tạo các mục tương ứng về địa chỉ IP và số port trong **bảng NAT**. NAT thường hoạt động trên router hoặc firewall. 
## IPv4 vs IPv6

| IPv4 |IPv6 |
|---|---|
|Example of IPv4:  66.94.29.13|Example of IPv6: 2001:0000:3238:DFE1:0063:0000:0000:FEFB|
| IPv4 loopback (localhost) address : **127.0.0.1** | IPv6 loopback address : **0:0:0:0:0:0:1** or **::1**|
## Rút gọn địa chỉ IPv6

Địa chỉ IPv6 được viết theo hệ thập lục phân và vì chúng là 128-bit nên khá dài. Hãy tưởng tượng bạn phải gọi cho một người bạn và nhờ họ ping địa chỉ sau:
 - 2041:0000:140F:0000:0000:0000:875B:131B

Để cuộc sống dễ thở hơn, địa chỉ IPv6 có thể được rút gọn. Hãy xem một vài ví dụ và tôi sẽ chỉ ra cách nó hoạt động:
- **Original** : 2041:0000:140F:`0000:0000:0000`:875B:131B
- **Short** : 2041:0000:140F::875B:131B

Nếu có một chuỗi số 0 thì bạn có thể xóa chúng một lần. Trong ví dụ trên, tôi đã xóa toàn bộ phần 0000:0000:0000. Bạn chỉ có thể làm việc này **một lần**, thiết bị IPv6 sẽ tự điền số 0 vào phần còn lại cho đến khi đủ một địa chỉ 128 bit. Tuy nhiên, còn có thể rút ngắn địa chỉ hơn nữa:
- **Short**: 2041:`0000`:140F::875B:131B
- **Shorter**: 2041:0:140F::875B:131B

Các số 0 đứng đầu cũng có thể được bỏ đi, đây là một địa chỉ khác để minh họa:
- **Original**: 2001:**000**1:**000**2:**000**3:**000**4:**000**5:**000**6:**000**7
- **Short**: 2001:1:2:3:4:5:6:7

Sau khi bỏ các số 0 này, ta có được một địa chỉ IPv6 ngắn gọn hơn. Tóm lại các quy tắc là:
- Có thể xóa một chuỗi số 0, nhưng chỉ làm được một lần.
- Có thể bỏ 4 số 0, chỉ để lại một số 0.
- Có thể bỏ các số 0 đứng đầu.


**_by wasn0ps_**
# Meet to IP World

## What is IP?

Shortly, **Internet Protocol** is used at **network layer** in OSI Model and we can think of it as an ID that is defined to each device surfing the internet. An IP address is a **32-bit** number that is **separated by decimals into four 8-bit groups**, called **octets**, which are separated by decimals. The numbers in each octet can **range from 0 to 255**.

## What is Subnet Mask?

Every device has an IP address with two pieces: the client or host address and the server or network address. IP addresses are either configured by a DHCP server or manually configured (static IP addresses). **The subnet mask splits the IP address into the host and network addresses, thereby defining which part of the IP address belongs to the device and which part belongs to the network**. **A subnet mask is a 32-bit number created by setting host bits to all 0s and setting network bits to all 1s**. **In this way, the subnet mask separates the IP address into the network and host addresses**. **The “255” address is always assigned to a broadcast address, and the “0” address is always assigned to a network address**. Neither can be assigned to hosts, as they are reserved for these special purposes.

## IPv4 Classes 

In the IPv4 IP address space, **there are five classes: A, B, C, D and E**. Each class has a specific range of IP addresses (and ultimately dictates the number of devices you can have on your network). Primarily, class A, B, and C are used by the majority of devices on the Internet. Class D and class E are for special uses.

|Class| Public IP Range | Private IP Range | Subnet Mask |
|:-:|:-:|:-:|:-:|
|A|1.0.0.0 - 127.255.255.255|10.0.0.0 - 10.255.255.255 | 255.0.0.0 (8 bits) |
|B|128.0.0.0 - 191.255.255.255|172.16.0.0 - 172.31.255.255|255.255.0.0 (16 bits)|
|C|192.0.0.0 - 223.255.255.255|192.168.0.0 - 192.168.255.255|255.255.255.0 (24 bits)|
|D|224.0.0.0 - 239.255.255.255|---|---|
|E|240.0.0.0 - 255.255.255.255|---|---|


## Network Address Translation - NAT

**To access the Internet, one public IP address is needed**, but we can use a private IP address in our private network. The idea of NAT is to allow multiple devices to access the Internet through a single public address. To achieve this, **the translation of a private IP address to a public IP address is required**. NAT is a process in which one or more **local IP address is translated into one or more Global IP address**. Also, it does the translation of port numbers, masks the port number of the host with another port number, in the packet that will be routed to the destination. It then makes the corresponding entries of IP address and port number in the **NAT table**. NAT generally operates on a router or firewall. 

## IPv4 vs IPv6

| IPv4 |IPv6 |
|---|---|
|Example of IPv4:  66.94.29.13|Example of IPv6: 2001:0000:3238:DFE1:0063:0000:0000:FEFB|
| IPv4 loopback (localhost) adress : **127.0.0.1** | IPv6 loopback address : **0:0:0:0:0:0:1** or **::1**|
|IPv4 has a **32-bit** address length | IPv6 has a **128-bit** address length|
| IPv4 consist of 4 fields which are separated by dot (.) | IPv6 consist of 8 fields, which are separated by colon (:)|
|It supports manual and DHCP address configuration|It supports Auto and renumbering address configuration|
|In IPv4 end to end, connection integrity is Unachievable|In IPv6 end to end, connection integrity is Achievable|
|It can generate 4.29×109 address space|Address space of IPv6 is quite large it can produce 3.4×1038 address space|
|The Security feature is dependent on application|The Security feature is dependent on application|
|Address representation of IPv4 is in decimal	| Address representation of IPv6 is in hexadecimal|
|Fragmentation performed by sender and forwarding routers	|In IPv6 fragmentation performed only by the sender|
|In IPv4 Packet flow identification is not available| In IPv6 packet flow identification are Available and uses the flow label field in the header|
|It has broadcast Message Transmission Scheme	|In IPv6 multicast and anycast message transmission scheme is available|
|In IPv4 Encryption and Authentication facility not provided	|In IPv6 Encryption and Authentication are provided |
|IPv4 can be converted to IPv6| Not all IPv6 can be converted to IPv4|
IPv4 has a header of 20-60 bytes | IPv6 has header of 40 bytes fixed |
|IPv4’s  IP addresses are divided into five different classes. Class A, B, C, D, E| IPv6 does not have any classes of IP address|
|IPv4 supports VLSM(Variable Length subnet mask) | IPv6 does not support VLSM|	

## Shortening IPv6 Addresses

IPv6 addresses are hexadecimal and since they are 128-bit, they are quite long. Imagine you have to call a friend and ask him/her to ping the following address:
- 2041:0000:140F:0000:0000:0000:875B:131B

To make our lives a bit better, IPv6 addresses can be shortened.  Let’s take a look at some examples and I’ll show you how it works:

- **Original** : 2041:0000:140F:`0000:0000:0000`:875B:131B
- **Short** : 2041:0000:140F::875B:131B

If there is a string of zeros then you can remove them once. In the example above I removed the entire 0000:0000:0000 part. You can only do this **once**, your IPv6 device will fill up the remaining space with zeros until it has a 128 bit address. There is more however, the address can be shortened even more:

- **Short**: 2041:`0000`:140F::875B:131B
- **Shorter**: 2041:0:140F::875B:131B

Leading zeros can also be removed, here’s another address to demonstrate this:

- **Original**: 2001:**000**1:**000**2:**000**3:**000**4:**000**5:**000**6:**000**7
- **Short**: 2001:1:2:3:4:5:6:7

By removing these zeros we get a nice short IPv6 address. To summarize these rules:

- An entire string of zeros can be removed, you can only do this once.
- 4 zeros can be removed, leaving only a single zero.
- Leading zeros can be removed.


