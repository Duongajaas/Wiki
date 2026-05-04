---
title: Network Address Translation (NAT)
---

# NAT

<p align="center"><img src="/assets/images/network/NAT.gif"></p>

**Vì số lượng địa chỉ IP do IPv4 cung cấp trên thế giới là không đủ, nên cần một cơ chế chuyển đổi IP**. Từ cơ chế này, người dùng được kỳ vọng sẽ chia địa chỉ IP của mình thành hai loại: IP mạng nội bộ và IP mạng toàn cục. Kết quả là công nghệ NAT ra đời. Network Address Translation (NAT) là dịch vụ cho phép mạng IP riêng dùng Internet và cloud. **NAT chuyển địa chỉ IP riêng trong mạng nội bộ sang một địa chỉ IP công khai trước khi packet được gửi ra mạng ngoài**.

Trong mạng có **ba loại giải pháp NAT**:
- **Static NAT**
- **Dynamic NAT**
- **Overload NAT (PAT)**

## Static NAT


Static network address translation (static NAT) là kiểu NAT ánh xạ lưu lượng từ một địa chỉ IP công khai cố định sang một địa chỉ IP riêng nội bộ và/hoặc một mạng nội bộ. Nó cho phép máy tính, server hoặc thiết bị mạng trong private LAN có địa chỉ IP riêng chưa đăng ký vẫn có thể kết nối Internet hoặc mạng ngoài.

A **static NAT chủ yếu được dùng trong mạng doanh nghiệp** khi nhiều server nội bộ có địa chỉ IP chưa đăng ký và được truy cập từ bên ngoài bằng các địa chỉ IP công khai cố định. Nó giúp **đảm bảo tính trong suốt của mạng**, **bảo mật và riêng tư bằng cách che giấu chi tiết cấu trúc, cách sử dụng và mô hình mạng nội bộ** khỏi người dùng bên ngoài.

A static NAT hoạt động bằng cách **tạo quan hệ one-to-one giữa địa chỉ IP công khai và địa chỉ IP riêng**. Điều này có nghĩa là **mỗi IP riêng chỉ được ánh xạ tới một IP công khai tại một thời điểm**. Vì vậy, **static NAT không cần address pool**. Ở chiều ngược lại, người dùng cuối nhìn thấy thiết bị/mạng từ xa một cách trong suốt và truy cập nó bằng địa chỉ IP công khai đã được ánh xạ.

## Cấu hình Static NAT

Để cấu hình static NAT, cần ba bước:

- Cấu hình ánh xạ IP riêng/công khai bằng lệnh `ip nat inside source static PRIVATE_IP  PUBLIC_IP`. Ở bước này, ta **ánh xạ thủ công địa chỉ IP công khai của thiết bị với địa chỉ IP riêng mà nó dùng trong mạng nội bộ**.
- Cấu hình interface inside của router bằng lệnh `ip nat inside`. Nói cách khác, ta **chỉ định interface bên trong nào của router đang nối với mạng nội bộ**.
- Cấu hình interface outside của router bằng lệnh `ip nat outside`. Cuối cùng, ta **chỉ định interface bên ngoài nào của router đang mở ra mạng toàn cục**.

Sau đây là topology ví dụ của static NAT. Hãy cấu hình nó!

<p align="center"><img height="250" src="/assets/images/network/staticnat_topology.png"></p>

Các máy tính yêu cầu tài nguyên web từ server. Khi gửi yêu cầu tới router, chúng dùng địa chỉ IP riêng của mình. Router nhận yêu cầu, đổi địa chỉ IP riêng sang IP công khai, rồi gửi yêu cầu tới server. Server phản hồi router. Router nhận phản hồi, tra trong NAT table và đổi địa chỉ IP đích về địa chỉ IP riêng của các máy tính.

Trong ví dụ trên, ta cần cấu hình static NAT. Để làm vậy, router cần các lệnh sau:

```
Router(config)#ip nat inside source static 192.168.1.2 100.100.100.20
Router(config)#ip nat inside source static 192.168.1.3 100.100.100.30
Router(config)#interface gigabitEthernet 0/0/0
Router(config-if)#ip nat inside
Router(config-if)#ex
Router(config)#interface gigabitEthernet 0/0/1
Router(config-if)#ip nat outside
```

Sau khi hoàn tất cấu hình, ta truy cập web page thành công.

<p align="center"><img height="200" src="/assets/images/network/web_page.png"></p>

Bạn cũng có thể kiểm tra topology bằng lệnh `show ip nat translations` trên router. Ngoài ra, bạn có thể lấy topology của tôi [tại đây](https://github.com/wasny0ps/Network-Notes/blob/main/1x2%20-%20NAT/src/Static_NAT.pkt)

```
Router#show ip nat translations 
Pro  Inside global     Inside local       Outside local      Outside global
---  100.100.100.20    192.168.1.2        ---                ---
---  100.100.100.30    192.168.1.3        ---                ---
tcp 100.100.100.20:1025192.168.1.2:1025   100.100.100.2:80   100.100.100.2:80
```

## Dynamic NAT

Trong Dynamic NAT, **các địa chỉ IP được ánh xạ động với nhau theo kiểu one-to-one tùy nhu cầu**. Nó thiết lập **một ánh xạ giữa địa chỉ IP inside local và một pool các địa chỉ IP global**. Kiểu chuyển đổi này rất hữu ích khi có nhiều người dùng trong mạng riêng truy cập Internet. Các bản ghi Dynamic NAT sẽ nằm trong translation table cho tới khi không còn lưu lượng từ IP nội bộ ra IP toàn cục hoặc cho tới khi hết thời gian timeout (mặc định là 24 giờ).

## Cấu hình Dynamic NAT

> Trong cấu hình này, ACL sẽ được dùng. Nếu bạn chưa biết cách cấu hình ACL, hãy [xem thư mục này](https://github.com/wasny0ps/Network-Notes/tree/main/1x1%20-%20Access%20Control%20Lists).

Để cấu hình dynamic NAT, ta cần làm bốn bước sau:

- Cấu hình interface inside hoặc outside của router bằng lệnh `ip nat outside / inside`.
- **Tạo một pool các địa chỉ IP global** bằng lệnh `ip nat pool <pool-name> <starting-IP> <ending-IP> prefix-length <prefix-length>`.
- **Tạo access list để cho phép một mạng địa chỉ IP cụ thể** bằng lệnh `access-list <acl-number> permit <source-ip-network> <wildcard-mask>`.
- Cuối cùng, **bật dynamic NAT** bằng lệnh `ip nat inside source list <acl-number> pool <pool-name>`.

Sau đây là một topology ví dụ của dynamic NAT. Bắt đầu thôi.

  <p align="center"><img height="300" src="/assets/images/network/dynamic_NAT_topology.png"></p>

Trước hết, ta cần cấu hình RIP trên các router. Nếu chưa biết cách cấu hình RIP, bạn cũng nên [xem thư mục này](https://github.com/wasny0ps/Network-Notes/tree/main/0x8%20-%20Dynamic%20Routing).

Sau đó, ta cần đặt interface gi0/0/0 là phía 'inside' của NAT và interface gi0/0/1 là phía 'outside' của NAT:
   
```
R2(config)#int gi0/0/0
R2(config-if)#ip nat inside
R2(config-if)#exit
R2(config)#int gi0/0/1
R2(config-if)#ip nat outside
```

Tiếp theo, ta phải tạo access list để lọc những mạng nào sẽ được cấp IP động từ IP pool này trên router R2:

```
R2(config)#access-list 1 permit 192.168.1.0 0.0.0.255
R2(config)#ip nat pool POOL 30.1.1.10 30.1.1.20 netmask 255.255.255.0
R2(config)#ip nat inside source list 1 pool POOL
```

Khi kiểm tra topology, ta sẽ thấy rõ rằng không có PC nào ping được tới server. Tuy nhiên, chúng vẫn có thể dùng các dịch vụ mà server cho phép.

  <p align="center"><img height="225" src="/assets/images/network/web_test.png"></p>

  <p align="center"><img height="225" src="/assets/images/network/ftp_test.png"></p>

  
Cuối cùng, bạn cũng có thể kiểm tra cấu hình trên router. Bạn có thể lấy topology này [tại đây](https://github.com/wasny0ps/Network-Notes/blob/main/1x2%20-%20NAT/src/Dynamic_NAT.pkt)

```
R2#show ip nat statistics 
Total translations: 0 (0 static, 0 dynamic, 0 extended)
Outside Interfaces: GigabitEthernet0/0/1
Inside Interfaces: GigabitEthernet0/0/0
Hits: 0  Misses: 6
Expired translations: 0
Dynamic mappings:
-- Inside Source
access-list 1 pool POOL refCount 0
 pool POOL: netmask 255.255.255.0
       start 30.1.1.10 end 30.1.1.20
       type generic, total addresses 11 , allocated 0 (0%), misses 0
```

## NAT Overload (PAT)

Với Port Address Translation (PAT), một địa chỉ IP công khai duy nhất được dùng cho tất cả IP riêng nội bộ, nhưng mỗi IP riêng sẽ được gán một port khác nhau. Kiểu NAT này còn được gọi là NAT Overload và là dạng NAT phổ biến trong các mạng ngày nay. Nó thậm chí còn được hỗ trợ bởi hầu hết router dân dụng. PAT cho phép hỗ trợ nhiều host chỉ với rất ít địa chỉ IP công khai. Nó hoạt động bằng cách tạo ánh xạ NAT động, trong đó một địa chỉ IP global (công khai) và một port duy nhất được chọn. Router giữ một entry trong NAT table cho mỗi tổ hợp duy nhất giữa IP riêng và port, rồi ánh xạ sang địa chỉ global và một port duy nhất.

## Cấu hình NAT Overload (PAT)

Ta sẽ dùng ví dụ mạng sau để giải thích lợi ích của PAT:

|Private IP Address : Port|Public IP Address : Port| 
|:-:|:-:|
|10.0.0.2:1055|192.168.10.2:1055| 
|10.0.0.3:1055|192.168.10.2:1055|
|10.0.0.4:1055|192.168.10.2:1055|

<p align="center"><img height="300" src="/assets/images/network/PAT_topology.png"></p>

Như bạn thấy trong bảng, PAT dùng các source port duy nhất trên địa chỉ IP inside global (công khai) để phân biệt các bản chuyển đổi. Ví dụ, nếu host có địa chỉ IP 10.0.0.3 muốn truy cập server trên Internet, địa chỉ IP riêng của host sẽ được router chuyển thành 192.168.10.1:1055 và yêu cầu sẽ được gửi tới switch. Switch sẽ phản hồi về 192.168.10.1:1055. Router nhận phản hồi đó, tra trong NAT translation table và chuyển tiếp yêu cầu tới host.

Để cấu hình PAT, cần các lệnh sau:

- Configure the router’s inside interface using the `ip nat inside` command.
- Configure the router’s outside interface using the `ip nat outside` command.
- Configure an access list that includes a list of the inside source addresses that should be translated.
- Enable PAT with the `ip nat inside source list <acl-number> interface type overload` global configuration command.

Trước tiên, ta định nghĩa các interface inside và outside trên router:
```
Router(config)#int gigabitEthernet 0/0/0
Router(config-if)#ip nat inside
Router(config-if)#ex
Router(config)#int gigabitEthernet 0/0/1
Router(config-if)#ip nat outside
```
Tiếp theo, ta định nghĩa access list bao gồm tất cả địa chỉ IP riêng mà ta muốn chuyển đổi:

```
Router(config)#access-list 1 permit 10.10.10.0 0.0.0.255
```

Access list ở trên bao gồm tất cả địa chỉ IP trong dải 10.10.10.0 – 10.10.10.255. Bây giờ ta cần bật NAT và tham chiếu tới ACL đã tạo ở bước trước, cũng như interface có địa chỉ IP sẽ dùng để chuyển đổi:

```
Router(config)#ip nat inside source list 1 interface Gi0/0/1 overload
```

Để kiểm tra NAT translations, ta có thể dùng lệnh `show ip nat translations` sau khi các host yêu cầu tài nguyên web từ switch. Cuối cùng, bạn có thể truy cập ví dụ của chúng tôi [tại đây](https://github.com/wasny0ps/Network-Notes/blob/main/1x2%20-%20NAT/src/PAT.pkt)

```
Router#show ip nat translations 
Pro  Inside global     Inside local       Outside local      Outside global
icmp 192.168.10.1:1024 10.10.10.2:2       192.168.10.2:2     192.168.10.2:1024
icmp 192.168.10.1:1    10.10.10.2:1       192.168.10.2:1     192.168.10.2:1
icmp 192.168.10.1:2    10.10.10.4:2       192.168.10.2:2     192.168.10.2:2
icmp 192.168.10.1:3    10.10.10.3:3       192.168.10.2:3     192.168.10.2:3
```
