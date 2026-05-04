---
title: Access Control Lists
---

# Danh Sách Kiểm Soát Truy Cập

Access Control Lists (ACL) là một trong những **cơ chế bảo mật và kiểm soát dùng trên router**. Chúng chủ yếu **lọc lưu lượng đi vào và đi ra** khỏi router. Nói cách khác, nhờ access list, ta có thể lọc lưu lượng đến từ bất kỳ đâu và đi tới bất kỳ đâu. Ví dụ, với ACL ta có thể chặn một số người dùng truy cập một server hoặc dịch vụ cụ thể. Hoặc ta chỉ cho phép người trong một mạng cụ thể dùng FTP sang mạng khác. Hoặc ta có thể giới hạn một mạng ping sang mạng khác. Có rất nhiều cách kết hợp và nhiều dòng ACL khác nhau tùy nhu cầu. ACL cũng mang lại nhiều lợi ích trong mạng. Một vài ví dụ:

- **Cải thiện hiệu năng mạng**.
- **Tăng cường bảo mật vì quản trị viên có thể cấu hình access list theo nhu cầu và chặn các packet không mong muốn đi vào mạng**.
- **Kiểm soát lưu lượng vì có thể cho phép hoặc từ chối theo nhu cầu của mạng**.

Có nhiều loại access control list dùng trong mạng. Mỗi loại phục vụ mục đích khác nhau. Tùy nhu cầu, bạn có thể dùng một trong các loại sau:

- **Standard Access-Lists**
- **Extended Access-Lists**
- **Named Access-Lists**

ACL được tạo theo từng loại và mỗi dòng sau khi tạo chỉ phù hợp với đúng loại đó. Nghĩa là nếu bạn dùng standard ACL thì các dòng ACL chỉ có thể dùng địa chỉ nguồn. Nếu dùng extended ACL thì có thể dùng địa chỉ nguồn, đích, và thông tin protocol hoặc port.

## Standard ACL

Standard Access-Lists là loại ACL **chỉ dùng địa chỉ nguồn của lưu lượng**. Nói cách khác, chúng **lọc lưu lượng theo nguồn**. Các số ACL **1-99** và 1300-1999 được dùng cho standard ACL. **Standard ACL nên được đặt gần đích**.

## Cấu hình Standard ACL

Để tạo một standard access list trên router, ta dùng lệnh sau trong global configuration mode:

```
Router(config)# access-list ACL_NUMBER permit|deny IP_ADDRESS WILDCARD_MASK
```

Ta cũng có thể dùng từ khóa host để chỉ định host muốn cho phép hoặc từ chối:

```
Router(config)# access-list ACL_NUMBER permit|deny host IP_ADDRESS
```

Sau khi tạo xong access list, ta cần áp nó vào một interface. Ta làm điều đó bằng lệnh phụ `ip access-group ACL_NUMBER in|out`. **Từ khóa 'in' và 'out' xác định hướng áp dụng ACL**. **'in' nghĩa là ACL áp cho lưu lượng đi vào interface**, còn **'out' nghĩa là ACL áp cho lưu lượng rời khỏi interface**.

Hãy giả sử ta có một topology như hình dưới. Ta chỉ muốn developer truy cập được server. Nghĩa là người dùng thường không được truy cập server. Vì lý do đó, ta sẽ tạo một standard ACL trên router.

<p align="center"><img height="500" src="/assets/images/network/standard_ACL_topology.png"></p>

Trước hết, bạn phải cấu hình RIP trên các router. Nếu chưa biết cấu hình, hãy [xem thư mục này](https://github.com/wasny0ps/Network-Notes/tree/main/0x8%20-%20Dynamic%20Routing).

Sau đó, ta muốn cho phép lưu lượng từ LAN của developer tới server. Trước tiên, ta cần viết ACL để cho phép lưu lượng từ LAN 192.168.10.0/24 tới server. Ta có thể dùng lệnh sau trên router:

```
Router(config)#access-list 1 permit 192.168.10.0 0.0.0.255
```

Lệnh trên cho phép lưu lượng từ tất cả địa chỉ IP bắt đầu bằng 10.0.0. Ta cũng có thể chỉ định host cụ thể bằng từ khóa host:

```
Router(config)#access-list 1 permit host 192.168.10.2
Router(config)#access-list 1 permit host 192.168.10.3
```
Tiếp theo, ta sẽ từ chối lưu lượng từ LAN của Users:

```
Router(config)#access-list 1 deny 192.168.20.0 0.0.0.255
```

Tiếp theo, ta cần áp access list vào một interface. Nên đặt standard ACL **càng gần đích càng tốt**. Trong trường hợp này, đó là interface Gi0/0/0 trên router. Vì ta muốn kiểm tra mọi packet cố thoát ra Gi0/0/0, ta sẽ chỉ định hướng outbound bằng từ khóa out:

```
Router(config)#int gi0/0/0
Router(config-if)#ip access-group 1 out
```

Hãy ping tới server từ các máy tính ở mạng khác để kiểm tra cấu hình.

<p align="center"><img src="/assets/images/network/pinging.png"></p>

Ta đã thành công. Bạn cũng có thể kiểm tra ACL bằng lệnh `show ip access-list <acl-number>`. Ngoài ra, bạn có thể lấy topology này [tại đây](https://github.com/wasny0ps/Network-Notes/blob/main/1x1%20-%20Access%20Control%20Lists/src/Standard_ACL.pkt)

```
Router#show ip access-lists 1
Standard IP access list 1
    permit 192.168.10.0 0.0.0.255 (4 match(es))
    permit host 192.168.10.2
    permit host 192.168.10.3
    deny 192.168.20.0 0.0.0.255 (4 match(es))
```

## Extended ACL

Extended Access-Lists là phiên bản nâng cấp của standard ACL. Trong Extended ACL, **địa chỉ nguồn, địa chỉ đích, số port và loại protocol được dùng để lọc lưu lượng**. Các số ACL **100-199** và 2000-2699 được dùng cho extended ACL. **Extended ACL nên được đặt gần nguồn**.

## Cấu hình Extended ACL

Hai bước cần để cấu hình extended access list:

- Cấu hình một extended access list bằng lệnh sau.

```
Router(config)#access list NUMBER permit|deny IP_PROTOCOL SOURCE_ADDRESS WILDCARD_MASK [PROTOCOL_INFORMATION] DESTINATION_ADDRESS WILDCARD_MASK PROTOCOL_INFORMATION
```

- Áp access list vào interface bằng lệnh `ip access-group ACL_NUMBER in | out`.

Để hiểu rõ hơn khái niệm extended ACL, hãy xem ví dụ sau:


<p align="center"><img height="250" src="/assets/images/network/extended_acl_topology.png"></p>

Trong ví dụ này, ta muốn **Users chỉ truy cập dịch vụ web của server**. **Developer chỉ truy cập dịch vụ FTP của server**. Và **máy của Hacker không được truy cập bất kỳ dịch vụ nào của server**. Trước hết, ta cần cho phép lưu lượng từ users tới port 80 của server. Ta có thể làm như sau:

```
Router(config)#access-list 100 permit tcp 192.168.10.2 0.0.0.0 172.160.10.2 0.0.0.0 eq 80
```

Bằng cách dùng từ khóa tcp, ta có thể lọc packet theo port nguồn và đích. Trong ví dụ trên, ta đã cho phép lưu lượng từ 192.168.10.2 (máy Users) tới 172.160.10.2 (Server) trên port 80. Phần cuối `eq 80` chỉ định port đích là 80. Vì cuối mỗi access list đều có một lệnh deny all ngầm định, ta không cần thêm dòng nào khác. Sau khi áp ACL, mọi lưu lượng không xuất phát từ 192.168.10.2 và đi tới 192.168.0.1 trên port 80 sẽ bị từ chối.

Sau đó, ta cho phép lưu lượng từ developer tới port 21 của server. Làm như sau:

```
Router(config)#access-list 100 permit tcp 192.168.10.4 0.0.0.0 172.160.10.2 0.0.0.0 eq 21
```
Tiếp theo, ta từ chối các địa chỉ IP không được phép truy cập các port không được phép của server bằng các lệnh sau:

```
Router(config)#access-list 100 deny tcp 192.168.10.4 0.0.0.0 172.160.10.2 0.0.0.0 eq 80
Router(config)#access-list 100 deny tcp 192.168.10.2 0.0.0.0 172.160.10.2 0.0.0.0 eq 21
```

Như thường lệ, ta phải chặn kết nối server đến từ hacker. Vì vậy, ta phải từ chối tất cả port trên server này từ 192.168.10.3 (địa chỉ IP của hacker) theo chính sách bảo mật của mạng. Ta làm như sau:

```
Router(config)#access-list 100 deny ip 192.168.10.3 0.0.0.0 172.160.10.2 0.0.0.0
```

Cuối cùng, ta cần xác định hướng áp access list. Ta làm như sau:

```
Router(config)#int gigabitEthernet 0/0/0
Router(config-if)#ip access-group 100 in
```

Kết thúc cấu hình, đến lúc kiểm tra. Hãy ping thử.

<p align="center"><img src="/assets/images/network/extended_ping_test.png"></p>

Kết quả cho thấy không có thiết bị nào ping được tới server vì gần như tất cả protocol đã bị extended ACL chặn. Hãy xem các kết quả khác!

<p align="center"><img height="275" src="/assets/images/network/extended_web_page_test.png"></p>

<p align="center"><img height="250" src="/assets/images/network/extended_ftp_test.png"></p>

Hai hình trên cho thấy các quy tắc topology của ta hoạt động đúng. Hãy nhìn từ góc nhìn của hacker:

<p align="center"><img height="125" src="/assets/images/network/extended_web_page_test_hacker.png"></p>

<p align="center"><img height="300" src="/assets/images/network/extended_ftp_test_hacker.png"></p>

Hai hình cuối cho thấy hacker không có gì để làm cả. Hắn không truy cập được dịch vụ web và file, đúng như kế hoạch cấu hình của ta. Cuối cùng, bạn có thể lấy topology này [tại đây](https://github.com/wasny0ps/Network-Notes/blob/main/1x1%20-%20Access%20Control%20Lists/src/Extended_ACL.pkt)

## Named ACL

Named Access-Lists là ACL **dùng tên ACL thay vì số ACL**. **Chúng có thể dùng cho cả Standard và Extended ACL**. Loại ACL này **dễ nhớ hơn vì có tên mô tả**.

## Cấu hình Named ACL

Tên và loại ACL được định nghĩa bằng cú pháp sau:

```
Router(config) ip access-list STANDARD|EXTENDED NAME
```
Lệnh trên đưa ta vào chế độ cấu hình ACL, nơi ta có thể cấu hình các dòng permit và deny. Giống như ACL dạng số, named ACL cũng kết thúc bằng lệnh deny ngầm định, vì vậy **mọi lưu lượng không được cho phép rõ ràng sẽ bị chặn**. Trong cấu hình này, ta sẽ dùng topology sau làm ví dụ:


<p align="center"><img height="200" src="/assets/images/network/named_ACL_topology.png"></p>

Ta muốn từ chối máy trạm của user truy cập bất kỳ kiểu nào tới domain server. Ta cũng muốn cho user truy cập không giới hạn tới file share. Trước hết, ta tạo và đặt tên ACL:

```
Router(config)#ip access-list extended allow_file_share
```
Sau khi vào chế độ cấu hình ACL, ta cần tạo một dòng từ chối máy trạm của user truy cập domain server:
```
Router(config-ext-nacl)#20 deny ip 10.0.0.2 0.0.0.0 192.168.0.2 0.0.0.0
```

Số 20 biểu thị dòng mà ta muốn đặt entry này trong ACL. Điều đó cho phép ta sắp xếp lại các dòng sau này nếu cần. Tiếp theo, ta tạo dòng cho phép máy trạm truy cập file share:

```
Router(config-ext-nacl)#50 permit ip 10.0.0.2 0.0.0.0 192.168.0.3 0.0.0.0
```

Cuối cùng, ta cần áp access list vào interface Gi0/0/0 trên router:

```
Router(config)#int gi0/0/0
Router(config-if)#ip access-group allow_traffic_fileshare in
```
Các lệnh trên buộc router kiểm tra mọi packet đi vào Gi0/0/0. Nếu máy trạm cố truy cập domain server, lưu lượng sẽ bị chặn bởi dòng ACL đầu tiên. Tuy nhiên, nếu người dùng truy cập file server, lưu lượng sẽ được phép bởi dòng thứ hai. Cấu hình named ACL của ta trông như sau:

```
Router#sh ip access-lists 
Extended IP access list allow_file_share
    20 deny ip host 10.0.0.2 host 192.168.0.2 (2 match(es))
    50 permit ip host 10.0.0.2 host 192.168.0.3 (2 match(es))
```

Hãy chú ý số thứ tự ở đầu mỗi entry. Nếu cần chèn một entry mới giữa hai dòng này, ta có thể làm bằng cách dùng số thứ tự trong khoảng từ 20 đến 50. Nếu không chỉ định số thứ tự, entry sẽ được thêm xuống cuối danh sách. Hãy ping tới server từ các máy tính ở mạng khác để kiểm tra cấu hình. Đây là hình chứng minh cấu hình named ACL của ta hoạt động đúng. Cuối cùng, bạn có thể lấy topology này [tại đây](https://github.com/wasny0ps/Network-Notes/blob/main/1x1%20-%20Access%20Control%20Lists/src/Named_ACL.pkt)

<p align="center"><img height="60"  src="/assets/images/network/valideting.png"></p>

