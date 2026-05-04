---
title: Dynamic Routing
---

# Định tuyến động

Định tuyến động là khi các giao thức, gọi là giao thức định tuyến, được dùng để xây dựng bảng định tuyến trong toàn mạng. Dùng giao thức định tuyến dễ hơn static routing và default routing, nhưng lại tốn CPU và băng thông hơn. Mỗi giao thức định tuyến tự định nghĩa quy tắc riêng để giao tiếp giữa các router và chọn ra **tuyến tốt nhất**.

- Một số giao thức định tuyến động: **RIP, OSPF, BGP, EIGRP**

## Routing Information Protocol (RIP)

<p align="center"><img width="400" src="/assets/images/network/rip.png"></p>

RIP là một giao thức định tuyến động dùng **hop count làm metric định tuyến** để tìm đường đi tốt nhất giữa nguồn và mạng đích. Đây là một **giao thức distance-vector có giá trị AD là 120** và hoạt động ở tầng Network của mô hình OSI.

#### Hop Count

Hop count là **số router nằm giữa mạng nguồn và mạng đích**. Đường đi có **hop count thấp nhất được xem là tuyến tốt nhất** để tới một mạng và vì vậy được đưa vào bảng định tuyến. **RIP ngăn vòng lặp định tuyến bằng cách giới hạn số hop được phép trong một đường đi từ nguồn đến đích**. Hop count tối đa cho RIP là 15 và hop count 16 được xem là mạng không thể truy cập. 

## Đặc điểm của RIP

- Thông tin cập nhật của mạng được trao đổi theo chu kỳ.
- **Các bản cập nhật (thông tin định tuyến) luôn được broadcast**. 
- **Toàn bộ bảng định tuyến được gửi trong các bản cập nhật**. 
- Router luôn tin tưởng thông tin định tuyến nhận được từ router lân cận. Điều này còn được gọi là Routing on rumors. 

## Các phiên bản RIP

Theo thời gian, cấu trúc class của mạng không còn đáp ứng được nhu cầu và hệ thống subnet ra đời. Vì lý do đó, ba phiên bản của routing information protocol đã xuất hiện: RIP Version1, RIP Version2 và RIPng. 

|RIPv1|RIPv2|RIPng|
|-|-|-|
|Sends update as broadcast|Sends update as multicast|Sends update as multicast|
|Broadcast at 255.255.255.255|Multicast at 224.0.0.9|Multicast at FF02::9 (RIPng can only run on IPv6 networks)|
|Doesn’t support authentication of updated messages|Supports authentication of RIPv2 update messages|-|
|Classful routing protocol|Classless protocol updated supports classful|Classless updates are sent|

- **RIP v1 được biết đến là Classful Routing Protocol vì nó không gửi thông tin subnet mask trong bản cập nhật định tuyến**. 
- **RIP v2 được biết đến là Classless Routing Protocol vì nó gửi thông tin subnet mask trong bản cập nhật định tuyến**. 

## Cấu hình RIP

Đây là topology chưa cấu hình của tôi. Hãy cấu hình thôi!

<p align="center"><img  src="/assets/images/network/rip_topology.png"></p>

Gán IP vào các interface của router.
- Router0:

```
R0(config)#interface gigabitEthernet 0/0/0
R0(config-if)#ip ad 192.168.1.1 255.255.255.192
R0(config-if)#no shut
R0(config-if)#ex
R0(config)#interface se0/1/0
R0(config-if)#ip ad 85.0.0.1 255.0.0.0
R0(config-if)#no shut
```
- Router1:

```
R1(config)#interface gigabitEthernet 0/0/0
R1(config-if)#ip ad 192.168.1.65 255.255.255.192
R1(config-if)#no shut
R1(config-if)#ex
R1(config)#interface se0/1/0
R1(config-if)#ip ad 86.0.0.1 255.0.0.0
R1(config-if)#no shut
R1(config-if)#ex
R1(config)#interface se0/1/1
R1(config-if)#ip ad 85.0.0.2 255.0.0.0
R1(config-if)#no shut
```

- Router2:

```
R2(config)#interface gigabitEthernet 0/0/0
R2(config-if)#ip ad 192.168.1.129 255.255.255.192
R2(config-if)#no shut
R2(config-if)#ex
R2(config)#in
R2(config)#interface se0/1/1
R2(config-if)#ip ad 86.0.0.2 255.0.0.0
R2(config-if)#no shut

```

Sau khi gán địa chỉ IP, ta phải cấu hình giao thức RIP. Ở bước này, bạn nên nhập các mạng được kết nối trực tiếp với interface của router để giới thiệu mạng cho các router khác. Ngoài ra, trong ví dụ này, mạng có cấu trúc classful vì đã dùng subnetting. Đó là lý do ta dùng lệnh `version 2`. Hơn nữa, nếu bạn thắc mắc vì sao dùng lệnh `no auto-summary`, bạn có thể tham khảo [liên kết này](https://community.cisco.com/t5/switching/what-is-the-use-of-no-auto-summary-command/td-p/1340409).

- Router0:
```
R0(config)#router rip
R0(config-router)#network 192.168.1.0
R0(config-router)#network 85.0.0.0
R0(config-router)#version 2
R0(config-router)#no auto-summary 
```

- Router1:

```
R1(config)#router rip
R1(config-router)#network 192.168.1.64
R1(config-router)#network 85.0.0.0
R1(config-router)#network 86.0.0.0
R1(config-router)#version 2
R1(config-router)#no auto-summary 
```

- Router2:

```
R2(config)#router rip
R2(config-router)#network 192.168.1.128
R2(config-router)#network 86.0.0.0
R2(config-router)#version 2
R2(config-router)#no auto-summary 
```

Và bạn có thể kiểm tra cấu hình bằng lệnh này.

```
R1#show ip route rip 
     192.168.1.0/24 is variably subnetted, 4 subnets, 2 masks
R       192.168.1.0/26 [120/1] via 85.0.0.1, 00:00:06, Serial0/1/1
R       192.168.1.128/26 [120/1] via 86.0.0.2, 00:00:05, Serial0/1/0

```

You can download this example [here](https://github.com/wasny0ps/Network-Notes/blob/main/0x8%20-%20Dynamic%20Routing/src/RIP.pkt).

## Open Shortest Path First (OSPF)



<p align="center"><img width="400" src="/assets/images/network/ospf.png"></p>


Đây là giao thức do IETF (Internet Engineering Task Force) phát triển để cải thiện và sửa một số hạn chế của giao thức RIP. **Khác với RIP, OSPF được thiết kế như một giao thức Link-state**. **Các giao thức định tuyến link-state có thể nhìn thấy toàn bộ topology cũng như gửi cập nhật kích hoạt trên hình ảnh mạng**. Theo đó, sau khi nhận đủ thông tin về tất cả các tuyến giữa hai điểm trong mạng, chúng **quyết định tuyến nào tốt nhất bằng cách sử dụng các phép tính SPF (Shortest Path First)**. **Còn được gọi là Link-state Refresh, nó gửi cập nhật mỗi 30 phút**.

Đặc điểm quan trọng nhất của giao thức OSPF khiến nó khác với các giao thức khác là nó là một **giao thức trạng thái đường truyền**. Theo đó, OSPF rất thành công trong **việc học thông tin đường đi nhanh chóng**, **hoạt động tốt hơn trong các mạng lớn và phức tạp**, và **độ tin cậy**. Ngoài ra, OSPF còn có các đặc điểm khác bên cạnh những đặc điểm quan trọng này.

- Nó cung cấp **địa chỉ hóa hiệu quả hơn** vì hỗ trợ **VLSM (Variable Length Subnet Masking)** và **Supernetting**.
- Nó có **cấu trúc classless**.
- Nó đảm bảo tải nhận trên mạng được chia đều cho các server (**Load Balancing**). Nhờ vậy đạt được hiệu năng tốt hơn.
- **AD (Administrative Distance) có giá trị 110**.
- Giá trị Area rất quan trọng trong OSPF. Trong các mạng lớn, **kích thước bảng định tuyến và độ phức tạp của mạng có thể được giảm bằng cách chia thành các vùng**.

Giao thức OSPF không dùng metric giống các giao thức distance vector. Vì vậy **không có giới hạn về số chữ số**. Nó dùng các giá trị tỉ lệ nghịch với **băng thông** trong phép tính metric. **Tuyến tốt nhất là tuyến có cost thấp nhất**, và các tuyến tốt nhất sẽ được đưa vào bảng định tuyến.

### OSPF Working Structure

<p align="center"><img width="400" src="/assets/images/network/ospf_structure.png"></p>

OSPF tạo ra một packet cập nhật mỗi khi có thay đổi trong mạng. **Khi trạng thái của một đường link thay đổi, router phát hiện ra nó sẽ broadcast một packet gọi là LSA** (Link-State Advertisement). Packet LSA được chuyển tiếp đến tất cả hàng xóm. **Mỗi router nhận một bản sao của LSA, cập nhật LSDB (Link-State Database) và chuyển tiếp LSA cho các router lân cận**. Nhờ LSA được gửi đi này, toàn mạng phát hiện ra thay đổi trong mạng và phản ánh nó vào topology mới. **LSDB được dùng để tính toán đường đi tốt nhất đến mạng đích**.

Có **3 loại bảng trong OSPF**. Đó là **Neighborhood Table**, **Topology Table** và **Routing Table**.

- Neighborhood table lưu danh sách các hàng xóm của router.
- Topology table được gọi là LSDB. Tất cả router và các kết nối của chúng trong mạng được lưu ở đây. Các LSA được đưa vào bảng này, và quan trọng nhất là LSDB của mỗi router trong mạng phải giống hệt nhau.
- Routing table còn được gọi là routing database. Thông tin về các đường đi ngắn nhất tới mạng đích được lưu trong bảng này.


Trong các mạng Multi-Access, một router gọi là **DR (Designated Router) được chọn để quản lý toàn bộ lưu lượng trong môi trường và cung cấp liên lạc**. Ngoài ra, một **router dự phòng gọi là BDR (Backup Designated Router) được chọn làm backup cho DR**. Việc chọn DR và BDR được thực hiện bằng Router ID. **Router ID là địa chỉ IP cao nhất trên các interface đang hoạt động của router**. Tuy nhiên, nếu trong mạng có định nghĩa loopback address thì ID của router đó là IP loopback.


Các packet LSA bắt đầu được gửi theo phản hồi của **Hello packets** trong giao thức OSPF. Packet LSA chứa thông tin về kết nối của router, interface và trạng thái đường truyền. **Mỗi router trao đổi packet LSA sẽ có bảng LSA riêng, và bảng LSA được tạo này được gửi cho các router khác, tạo thành một cơ sở dữ liệu nơi tất cả router trong mạng học bảng LSA của nhau**. Nhờ cơ sở dữ liệu được tạo ra này, thông tin tuyến và khoảng cách trong mạng được tính toán. Với sự trợ giúp của thuật toán SPF, topology mạng được trích xuất và quá trình này được thực hiện lại **mỗi 30 phút**. Nếu không có thay đổi nào trên mạng, sẽ không có cập nhật nào được tạo ra và không có lưu lượng nào được sinh ra ngoài Hello packets.

## Cấu hình OSPF

Đây là topology chưa cấu hình của tôi. Hãy cấu hình thôi!

<p align="center"><img src="/assets/images/network/ospf_topology.png"></p>

Gán IP vào các interface của router.
- Router0:

```
R0(config)#interface gi0/0/0
R0(config-if)#ip ad 192.168.10.1 255.255.255.128
R0(config-if)#no shut
R0(config-if)#ex
R0(config)#int se0/1/0
R0(config-if)#ip ad 85.0.0.10 255.0.0.0
R0(config-if)#no shut
R0(config-if)#ex
R0(config)#int se0/1/1
R0(config-if)#ip ad 87.0.0.12 255.0.0.0
R0(config-if)#no shut
```
- Router1:

```
R1(config)#int se0/1/0
R1(config-if)#ip ad 85.0.0.11 255.0.0.0
R1(config-if)#no shut
R1(config-if)#ex
R1(config)#int se0/1/1
R1(config-if)#ip ad 86.0.0.11 255.0.0.0
R1(config-if)#no shut
```

- Router2:

```
R2(config)#int gi0/0/0
R2(config-if)#ip ad 192.168.12.1 255.255.255.128
R2(config-if)#no shut
R2(config-if)#ex
R2(config)#int se0/1/0
R2(config-if)#ip ad 86.0.0.12 255.0.0.0
R2(config-if)#no shut
R2(config-if)#ex
R2(config)#int se0/1/1
R2(config-if)#ip ad 87.0.0.10 255.0.0.0
R2(config-if)#no shut
```

Sau khi gán địa chỉ IP, ta phải cấu hình **giao thức OSPF với process ID**. Ở bước này, bạn nên nhập các mạng được kết nối trực tiếp với interface của router để giới thiệu mạng cho các router khác. Ngoài ra, khi giới thiệu mạng, ta **phải nhập network wildcard address và số area để OSPF dễ tính toán tuyến tốt nhất**. Nói ngắn gọn, **wildcard address là một địa chỉ IP cục bộ đặc biệt và giúp router chỉ tập trung vào các bit được mask chọn thay vì toàn bộ địa chỉ IP**.

<p align="center"><img width="500" src="/assets/images/network/wilcard_address.png"></p>

Trong Router0 và Router2, ta sẽ thực hiện lệnh `passive-interface` dùng để **ngăn các OSPF hello packets** trên một interface cụ thể.

- Router0:

```
R0(config)#router ospf 10
R0(config-router)#network 192.168.10.1 0.0.0.127 area 0
R0(config-router)#network 85.0.0.0 0.0.0.255 area 0
R0(config-router)#network 87.0.0.0 0.0.0.255 area 0
R0(config-router)#passive-interface gi0/0/0
```

- Router1:

```
R1(config)#router ospf 10
R1(config-router)#network 85.0.0.0 0.0.0.255 area 0
R1(config-router)#network 86.0.0.0 0.0.0.255 area 0
```

- Router2:

```
R2(config)#router ospf 10
R2(config-router)#network 192.168.12.0 0.0.0.127 area 0
R2(config-router)#network 86.0.0.0 0.0.0.255 area 0
R2(config-router)#network 87.0.0.0 0.0.0.255 area 0
R2(config-router)#passive-interface gigabitEthernet 0/0/0
```

Và bạn có thể kiểm tra cấu hình bằng lệnh này.

```
R0#show ip ospf 
 Routing Process "ospf 10" with ID 192.168.10.1
 Supports only single TOS(TOS0) routes
 Supports opaque LSA
 SPF schedule delay 5 secs, Hold time between two SPFs 10 secs
 Minimum LSA interval 5 secs. Minimum LSA arrival 1 secs
 Number of external LSA 0. Checksum Sum 0x000000
 Number of opaque AS LSA 0. Checksum Sum 0x000000
 Number of DCbitless external and opaque AS LSA 0
 Number of DoNotAge external and opaque AS LSA 0
 Number of areas in this router is 1. 1 normal 0 stub 0 nssa
 External flood list length 0
    Area BACKBONE(0)
        Number of interfaces in this area is 3
        Area has no authentication
        SPF algorithm executed 7 times
        Area ranges are
        Number of LSA 3. Checksum Sum 0x01d907
        Number of opaque link LSA 0. Checksum Sum 0x000000
        Number of DCbitless LSA 0
        Number of indication LSA 0
        Number of DoNotAge LSA 0
        Flood list length 0
```

You can download this example [here](https://github.com/wasny0ps/Network-Notes/blob/main/0x8%20-%20Dynamic%20Routing/src/OSPF.pkt).


## RIP vs OSPF


|RIP|OSPF|
|-|-|
|RIP works on the Bellman-Ford algorithm|OSPF works on Dijkstra algorithm|
|It is a Distance Vector protocol and it uses the distance or hops count to determine the transmission path|It is a link-state protocol and it analyzes different sources like the speed, cost and path congestion while identifying the shortest path|
|It is used for smaller size organizations|It is used for larger size organizations in the network|
|It allows a maximum of 15 hops|There is no such restriction on the hop count|
|It is not a more intelligent dynamic routing protocol|It is a more intelligent routing protocol than RIP|
|Its administrative distance is 120|Its administrative distance is 110|
|RIP uses UDP Protocol|OSPF works for IP Protocol|
|It calculates the metric in terms of Hop Count|It calculates the metric in terms of bandwidth|
|In RIP, the whole routing table is to be broadcasted to the neighbors every 30 seconds by the routers|In OSPF, parts of the routing table are only sent when a change has been made to it|
|RIP utilizes less memory compared to OSPF but is CPU intensive like OSPF|OSPF device resource requirements are CPU intensive and memory|
|Its multicast address is 224.0.0.9|OSPF’s multicast addresses are 224.0.0.5 and 224.0.0.6|

