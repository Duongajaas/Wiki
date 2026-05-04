---
title: VLANs
---

# VLANs

<p align="center"><img width="600" src="/assets/images/network/VLANs.gif"></p>

VLANs (Virtual LANs) là nhóm logic của các thiết bị trong cùng một broadcast domain. VLAN được cấu hình trên switch bằng cách đặt một số interface vào một broadcast domain và một số interface vào broadcast domain khác. VLAN có thể trải rộng trên nhiều switch. Mỗi VLAN được xem như một subnet hoặc broadcast domain riêng, nghĩa là các frame broadcast trên mạng chỉ được chuyển giữa các cổng nằm trong cùng VLAN.

### Tầm quan trọng của VLAN

- **Kiểm soát và hiệu năng**: Trên switch không có VLAN, packet broadcast đi vào sẽ được gửi tới tất cả các cổng của switch, bất kể thiết bị đầu cuối có nhận hay không. Điều này gây ra vấn đề hiệu năng vì tạo ra việc gửi packet không cần thiết. **Lưu lượng broadcast không cần thiết cũng được chặn** nếu mạng được phân tách bằng VLAN.
- **Bảo mật**: Khi dùng VLAN, các nhóm không liên quan trong mạng sẽ không thể giao tiếp với nhau, đồng thời giảm nguy cơ từ mối đe dọa bên ngoài. **Khi các thiết bị trên switch được gán vào VLAN, kẻ tấn công sẽ không có cơ hội kết nối tới bất kỳ đầu cuối nào trong mạng để nghe lén toàn bộ mạng và thu thập thông tin**. Người dùng chỉ có thể hoạt động trong VLAN mà họ được kết nối.
- **Khả năng mở rộng**: Các nhóm broadcast thực chất được tạo ra trên mạng nhờ VLAN. Nó có **tính linh hoạt để gán người dùng vào VLAN mong muốn bất kể vị trí vật lý trên switch**. Tương tự, **một VLAN đang phát triển theo thời gian có thể được chuyển sang các VLAN mới**. Quá trình này khả thi nhờ việc định nghĩa port mới trên switch. Nếu làm điều tương tự mà không dùng VLAN, điểm kết nối cho subnet (mạng) mới phải được kéo vật lý tới router.

## Các loại VLAN

 - **Data VLAN**: Là VLAN được cấu hình để mang lưu lượng chuẩn không đặc biệt. Ví dụ có thể là lưu lượng Internet do người dùng tạo ra. Ngoài ra, một VLAN cũng có thể mang đồng thời lưu lượng thoại hoặc video. Data VLAN còn được gọi là User VLAN.
 - **Default VLAN**: Tất cả các cổng trên switch sẽ tự động được đưa vào Default VLAN khi switch khởi động. Việc tất cả cổng cùng nằm trong Default VLAN sẽ đặt chúng vào cùng một broadcast domain. Điều này cho phép mọi thiết bị nối với switch giao tiếp với nhau. Default VLAN trên thiết bị Cisco là "VLAN 1". VLAN 1 có tính năng giống các VLAN khác, ngoại trừ việc không thể đổi tên hoặc xóa.
 - **Native VLAN**: Native VLAN là VLAN được gán cho cổng "Trunk". Cổng trunk hỗ trợ lưu lượng không gắn thẻ cũng như lưu lượng sinh ra từ nhiều VLAN (tagged traffic). Cổng "Trunk" chuyển tiếp lưu lượng không đến từ VLAN nào về Native VLAN. Lưu lượng do thiết bị tạo ra mà không thuộc VLAN nào sẽ được chuyển qua VLAN trên switch đã được cấu hình là Native VLAN.
 - **Management VLAN**: Management VLAN có thể là bất kỳ VLAN nào được cấu hình để quản trị switch. Nếu không có VLAN chuyên dụng làm Management VLAN, "VLAN 1" sẽ đảm nhiệm vai trò này. Khi đã gán địa chỉ IP và subnet mask cho Management VLAN, switch có thể được kết nối qua HTTP, Telnet, SSH hoặc SNMP. Vì "VLAN 1" là Default VLAN trên thiết bị Cisco, nên xét về bảo mật, tốt hơn là tách Management VLAN khỏi Default VLAN.


## Cấu hình VLAN

Trước khi cấu hình VLAN trên switch, bạn phải **kết nối thiết bị vào đúng cổng của switch**. Đây là topology rõ ràng của tôi.

<p align="center"><img width="400" src="/assets/images/network/vlan.png"></p>


Sau đó, định nghĩa VLAN bằng ID và gán tên cho nó. Tiếp theo, bật trạng thái port ở mức "active" cho các cổng thuộc từng VLAN.

```
SW1(config)#vlan 10
SW1(config-vlan)#name Developers
SW1(config-vlan)#vlan 20
SW1(config-vlan)#name Pentesters
SW1(config-vlan)#vlan 30
SW1(config-vlan)#name Servers
SW1(config-vlan)#ex
SW1(config)#int range fa0/1-5
SW1(config-if-range)#switchport mode access
SW1(config-if-range)#switchport access vlan 10
SW1(config-vlan)#ex
SW1(config)#int range fa0/6-10
SW1(config-if-range)#switchport mode access
SW1(config-if-range)#switchport access vlan 20
SW1(config-vlan)#ex
SW1(config)#int range fa0/11-15
SW1(config-if-range)#switchport mode access
SW1(config-if-range)#switchport access vlan 30
```

Và bạn có thể xem toàn bộ VLAN bằng lệnh sau.

```
SW1(config-if-range)#do sh vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/16, Fa0/17, Fa0/18, Fa0/19
                                                Fa0/20, Fa0/21, Fa0/22, Fa0/23
                                                Fa0/24, Gig0/1, Gig0/2
10   Developers                       active    Fa0/1, Fa0/2, Fa0/3, Fa0/4
                                                Fa0/5
20   Pentesters                       active    Fa0/6, Fa0/7, Fa0/8, Fa0/9
                                                Fa0/10
30   Servers                          active    Fa0/11, Fa0/12, Fa0/13, Fa0/14
                                                Fa0/15
1002 fddi-default                     active    
1003 token-ring-default               active    
1004 fddinet-default                  active    
1005 trnet-default                    active    
```
# VLAN Routing

VLAN là nhóm logic của các thiết bị trong cùng hoặc khác broadcast domain. Theo mặc định, tất cả các port trên switch đều ở VLAN 1. Khi broadcast domain duy nhất được chia thành nhiều broadcast domain, router hoặc switch Layer 3 được dùng để giao tiếp giữa các VLAN khác nhau. Quá trình giao tiếp giữa các VLAN này được gọi là Inter-VLAN Routing (IVR). Inter-VLAN routing là khả năng định tuyến hoặc gửi lưu lượng giữa các VLAN vốn mặc định bị chặn. Switch và VLAN hoạt động ở tầng Data Link (Layer 2). **Không thể định tuyến lưu lượng giữa các VLAN ở Layer 2 chỉ dựa trên địa chỉ MAC**.

Có ba kiểu Inter-VLAN Routing:

- Legacy Inter-VLAN Routing
- Router On Stick
- Layer3 Switch Inter-VLAN Routing

## Legacy Inter-VLAN Routing

<p align="center"><img width="500" src="/assets/images/network/legacy_inter_vlan.png"></p>


Legacy inter-VLAN routing kết nối các interface vật lý khác nhau của router với các port vật lý khác nhau trên switch. **Các cổng switch nối với router phải được đặt ở chế độ access**.

Mỗi interface vật lý của router được gán cho một VLAN khác nhau và interface router sẽ nhận lưu lượng từ VLAN tương ứng với interface switch mà nó kết nối tới. Sau đó router gửi lưu lượng sang các VLAN khác kết nối trên các interface còn lại. Hình dưới minh họa quá trình legacy inter-VLAN routing.

### Cấu hình Legacy Inter-VLAN Routing

Đây là topology legacy Inter-VLAN không có IP của tôi. Hãy gán IP cho các thiết bị.

<p align="center"><img width="400" src="/assets/images/network/LIV_topology.png"></p>

Trong bước này, tạo VLAN và cấu hình theo thông tin topology chính xác. Nếu bạn không biết cấu hình, hãy xem [tại đây](https://github.com/wasny0ps/Network-Notes/edit/main/0x9%20-%20VLANs/README.md#vlan-configration). Nếu làm đúng, bạn sẽ thấy kết quả tương tự khi kiểm tra ping các thiết bị. Bạn có thể truy cập topology này [tại đây](https://github.com/wasny0ps/Network-Notes/blob/main/0x9%20-%20VLANs/src/Legacy_Inter-VLAN_Routing.pkt).

<p align="center"><img width="250" src="/assets/images/network/ping.png"></p>


## Router On Stick

<p align="center"><img width="300" src="/assets/images/network/router_on_stick.png"></p>


Interface của router được chia thành các sub-interface, và mỗi sub-interface đóng vai trò default gateway cho VLAN tương ứng.

### Cấu hình Router On Stick

Đây là topology mềm của tôi. **Chỉ gán địa chỉ IP cho thiết bị người dùng, không gán cho router!**

<p align="center"><img width="500" src="/assets/images/network/ROS_topology.png"></p>

Sau đó, tạo VLAN và cấu hình giao thức trunk. Trunk giúp trao đổi thông tin VLAN với nhau. Nói cách khác, nó gửi packet tới router theo một hướng.

```
S0(config)#vlan 10
S0(config-vlan)#name DEVS
S0(config-vlan)#vlan 20
S0(config-vlan)#name CYBR
S0(config-vlan)#ex
S0(config)#int range fa0/1-10
S0(config-if-range)#switchport mode access
S0(config-if-range)#switchport access vlan 10
```

```
S1(config)#vlan 10
S1(config-vlan)#name DEVS
S1(config-vlan)#vlan 20
S1(config-vlan)#name CYBR
S1(config-vlan)#ex
S1(config)#int range fa0/11-20
S1(config-if-range)#switchport mode access
S1(config-if-range)#switchport access vlan 20
```
```
S0(config)#int range fa0/11
S0(config-if-range)#switchport mode trunk
S0(config-if-range)#ex
S0(config)#int range fastEthernet 0/21
S0(config-if-range)#switchport mode trunk 
```
```
S1(config)#int range fa0/10
S1(config-if-range)#switchport mode trunk 
```

Cuối cùng, cấu hình router. Trước hết, vào interface nối với switch và **chỉ shutdown rồi thoát ra**. Thứ hai, **gán địa chỉ IP và subnet mask cho sub-interface cùng với VLAN ID sau khi thực hiện lệnh** `encapsulation dot1Q vlan ID`.

```
R1(config)#int gi0/0/1
R1(config-if)#no shut
R1(config-if)#ex
R1(config)#int range gi0/0/1.10
R1(config-if-range)#encapsulation dot1Q 10
R1(config-if-range)#ip add 192.168.10.1 255.255.255.0
R1(config-if-range)#no shut
R1(config-if-range)#ex
R1(config)#int range gi0/0/1.20
R1(config-if-range)#encapsulation dot1Q 20
R1(config-if-range)#ip add 192.168.20.1 255.255.255.0
R1(config-if-range)#no shut
```

Bạn có thể truy cập topology này [tại đây](https://github.com/wasny0ps/Network-Notes/blob/main/0x9%20-%20VLANs/src/Router_On_Stick.pkt).

## Layer3 Switch Inter-VLAN Routing

<p align="center"><img width="500" src="/assets/images/network/Layer%203%20switch_inter_vlan.gif"></p>


Switch là thiết bị thường hoạt động ở tầng 2 của mô hình OSI. Nó kiểm tra frame và chuyển chúng giữa các interface dựa trên địa chỉ MAC trong Ethernet header. Loại thiết bị này chỉ được gọi là switch hoặc Layer 2 switch. Nó không nhìn sâu hơn Ethernet header và không đưa ra quyết định dựa trên thông tin trong IP header. Ngược lại, router bóc phần Ethernet header của frame và xem packet trong payload của frame. Router đưa ra quyết định định tuyến dựa trên địa chỉ IP trong Layer 3 header và gắn một Ethernet header mới trước khi chuyển frame ra interface khác.

**Multilayer switch** có thể thực hiện cả hai chức năng trên với tốc độ rất cao. Nó có thể chuyển **frame như một switch bình thường và cũng có thể định tuyến IP như một router**. Vì thế nó có thể hoạt động ở cả tầng 2 lẫn tầng 3 của mô hình OSI. Đó là lý do chúng được gọi là **Multilayer Switch** hoặc **Layer 3 switch**.

### Cấu hình Layer3 Switch Inter-VLAN Routing

Đây là topology ban đầu của tôi. Hãy gán địa chỉ IP cho thiết bị người dùng và cấu hình VLAN.

<p align="center"><img  src="/assets/images/network/MLSW_inter_vlan_topology.png"></p>

Sau khi hoàn thành bước trước, cấu hình trunk protocol giữa switch-switch và switch-router.

```
S0(config)#interface fastEthernet 0/20
S0(config-if)#switchport mode trunk 
```
```
S1(config)#interface fastEthernet 0/20
S1(config-if)#switchport mode trunk
S1(config-if)#ex
S1(config)#interface fastEthernet 0/21
S1(config-if)#switchport mode trunk
S1(config-if)#ex
S1(config)#interface fastEthernet 0/24
S1(config-if)#switchport mode trunk
```
```
S2(config)#interface fastEthernet 0/21
S2(config-if)#switchport mode trunk 
```

Việc cuối cùng là thực thi lệnh `ip routing` trên multilayer switch để hoạt động ở layer 3. Sau đó, tạo các VLAN tương ứng và gán địa chỉ IP cho interface VLAN.

```
MLSW(config)#ip routing
MLSW(config)#vlan 10
MLSW(config-vlan)#name DEVS
MLSW(config-vlan)#vlan 20
MLSW(config-vlan)#name CYBR
MLSW(config-vlan)#vlan 30
MLSW(config-vlan)#name LMRS
MLSW(config-vlan)#ex
MLSW(config)#int vlan 10
MLSW(config-if)#ip add 192.168.10.1 255.255.255.0
MLSW(config-if)#no shut
MLSW(config-if)#ex
MLSW(config)#int vlan 20
MLSW(config-if)#ip add 192.168.20.1 255.255.255.0
MLSW(config-if)#no shut
MLSW(config-if)#ex
MLSW(config)#int vlan 30
MLSW(config-if)#ip add 192.168.30.1 255.255.255.0
MLSW(config-if)#no shut
```

Bạn có thể truy cập topology này [tại đây](https://github.com/wasny0ps/Network-Notes/blob/main/0x9%20-%20VLANs/src/MLSW_Inter-Vlan.pkt).

## Spanning Tree Protocol (STP)

STP là giao thức dùng để **ngăn các vòng lặp có thể xảy ra giữa các switch trong mạng**. **STP chọn một root bridge trong số các switch đang hoạt động trong mạng và chặn các cổng có thể gây vòng lặp giữa các switch**. Bằng cách này, STP loại bỏ nguy cơ loop vật lý trong các mạng gồm switch. Tuy nhiên, nếu không chú ý đủ đến bảo mật STP, các cuộc tấn công STP có thể xảy ra và tạo ra vòng lặp vô hạn.
Các mối đe dọa STP phổ biến nhất là: chiếm root bridge, thay đổi topology đang hoạt động của STP, thay đổi timer STP và liên tục tạo Topology Change Notification.

[Tìm hiểu thêm về STP](https://content.cisco.com/chapter.sjs?uri=/searchable/chapter/content/en/us/td/docs/routers/nfvis/switch_command/b-nfvis-switch-command-reference/spanning_tree_commands.html.xml).

### Portfast

Để bật PortFast, dùng lệnh `spanning-tree portfast` trong chế độ cấu hình interface của switch. Ở chế độ PortFast, interface sẽ ngay lập tức chuyển sang trạng thái forwarding khi link up mà không phải chờ thời gian chuyển tiếp chuẩn. Để tắt PortFast, dùng dạng `no` của lệnh này.

```
SW(config-switch)# interface gigabitEthernet 1/1
SW(config-switch-if)# spanning-tree portfast enable
```

### Bảo vệ BPDU

Kẻ tấn công có thể gây loop bằng cách nối switch của họ vào các cổng đã bật portfast. Vì ở những cổng bật portfast, port sẽ lập tức chuyển sang trạng thái truyền nên có thể xuất hiện vòng lặp.

Để ngăn tình huống này, tính năng gọi là "BPDU Guard" đã được phát triển. Khi BPDU Protection nhận BPDU từ các cổng đang bật portfast, nó sẽ đóng cổng đó. Do vậy, **khi người dùng độc hại nối switch của họ vào mạng, cổng họ nối sẽ tự động bị đóng**.

- Theo từng port
```
SW(config-switch)# interface gigabitEthernet 1/1
SW(config-switch-if)# spanning-tree bpduguard enable 
```

- Áp dụng cho tất cả cổng

```
SW(config)# spanning-tree portfast bpduguard default
```

## Dynamic Trunking Protocol (DTP)

Dynamic Trunking Protocol là một giao thức mạng chạy ở tầng "Data Link", tức tầng thứ hai của mô hình OSI do Cisco phát triển. Nói ngắn gọn, DTP là giao thức làm việc giữa các Cisco switch và cho phép hai switch **biến cổng mà chúng đang kết nối thành cổng Trunk bằng các message DTP mà chúng trao đổi với nhau**. Thông qua Dynamic Trunk Protocol, việc "trunking" giữa các cổng diễn ra tự động. **Có 4 kiểu mode có thể áp dụng để thực hiện Dynamic Trunk Protocol: "Switchport" có thể là Auto (tự động) hoặc Desirable (mong muốn) theo DTP**. Ngoài auto và desirable, switchport có thể được quản trị viên đặt thành static, access hoặc trunk. Dynamic Desirable và Dynamic Auto quyết định cổng có thể tự động "trunk" hay không, và việc này liên quan đến việc gửi packet DTP trên đường truyền. Các mode này có xu hướng trở thành "trunk". Cách các cổng này hoạt động khi ở auto hoặc desirable có thể hiểu qua bảng dưới đây.

<p align="center"><img width="500" src="/assets/images/network/DTP.png"></p>


Khi chưa thực thi lệnh `switchport nonegotiate`, DTP luôn hoạt động trên switch.


## VLAN Trunking Protocol (VTP)

VTP là cơ chế VLAN trong các mạng có số lượng switch lớn. Ở một nghĩa nào đó, VTP cũng có thể gọi là VLAN Domain. Các quyền như thêm, xóa, đổi tên VLAN được trao cho quản trị viên mạng VTP, và thông tin mới sẽ được báo tới các switch khác trong mạng nhờ VTP.

Nhờ VTP, **có thể cung cấp quản trị tập trung trong các mạng có nhiều switch**. **Nó giúp tránh việc phải cấu hình riêng từng switch khi thêm, xóa, đổi tên VLAN trong mạng được quản lý và giảm các lỗi có thể xảy ra trong quá trình cấu hình**. Các thay đổi cần thiết được thực hiện trên một switch duy nhất, và những thay đổi này sẽ được truyền sang các switch khác qua trunk port nhờ VTP.

**Khái niệm Domain rất quan trọng** trong VTP. Một vùng VTP được tạo trong mạng nơi VLAN cần được truyền bằng VTP. Các switch trong cùng domain trao đổi **VTP packet**, còn switch ở các **VTP domain** khác nhau thì không trao đổi với nhau. Tên VTP Domain được nhập vào switch để tạo domain. **Tên VTP domain về cơ bản mặc định là NULL**. Các switch có cùng VTP domain sẽ thuộc cùng một domain. Ngoài ra, có thể nhập **VTP Password** tùy chọn để tăng bảo mật. Các switch trong cùng domain phải dùng cùng một mật khẩu, nếu không chúng sẽ không trao đổi được VTP packet.

VTP có thể chạy ở 3 chế độ khác nhau: **Server**, **Client** và **Transparent**.
- **Server**: Là chế độ có quyền thực hiện mọi **thay đổi trên VLAN**, **gửi thông tin thay đổi** mà nó tạo ra, nhận thông tin và cập nhật. Trong mỗi VTP domain, ít nhất cần một switch hoạt động ở chế độ VTP server để thêm và cấu hình VLAN. **Mọi thay đổi trong chế độ này đều được thông báo tới VTP domain đó và truyền tới các switch khác trong domain**. **Các cấu hình này được lưu trong NVRAM (Non-Volatile RAM)**.
- **Client**: Là các switch có thể nhận, cập nhật và gửi thông tin từ VTP server, nhưng **không có quyền thay đổi VLAN**. **Cấu hình của chế độ này không được lưu trong NVRAM, nó chỉ tạm thời**.
- **Transparent**: Switch hoạt động ở chế độ này thực chất giống như server, có thể tạo, xóa hoặc thay đổi VLAN trên đó. Những hành động này **chỉ ảnh hưởng tới VLAN database của switch này**, **các thay đổi ở đây không thể truyền sang switch khác**. Ngoài ra, nó chuyển tiếp thông tin nhận từ các switch khác qua trunk port sang các switch khác, nhưng không sử dụng thông tin đó và không cập nhật VLAN database của mình theo thông tin nhận được. **Cấu hình của chế độ này được lưu trong NVRAM**.

### VTP Pruning

Nếu pruning được bật trong một domain, lưu lượng broadcast liên quan đến VLAN đó sẽ không đi tới switch không có cổng active cho VLAN đó. VTP pruning; **nó tiết kiệm băng thông bằng cách ngăn packet thuộc các VLAN đó được gửi tới thiết bị có VLAN không được dùng**. Để VTP pruning hoạt động, nó phải được triển khai trên tất cả switch **trong cùng một domain**. Tính năng này không thể bật ở chế độ client. Nó được bật ở chế độ Server và được truyền tới các thiết bị khác. VTP pruning mặc định bị tắt trên thiết bị mới và bạn có thể bật bằng lệnh sau.

```
SW#vtp pruning enable
```

## Etherchannel

<p align="center"><img width="500" src="/assets/images/network/etherchannel.png"></p>

Etherchannel là **công nghệ gộp liên kết** dùng trong switch. Việc thương lượng cần cho link aggregation được thực hiện động bởi các giao thức. **Nhiều cổng có thể được đại diện như một cổng duy nhất với công nghệ Etherchannel để tăng băng thông**. Có thể gộp tối đa 8 cổng bằng công nghệ này. Về mặt vật lý, Etherchannel có nhiều hơn một cổng, nhưng về logic chỉ có một cổng. Thông thường, nếu dùng nhiều hơn một cổng giữa các switch sẽ xảy ra loop, nhưng STP (Spanning Tree Protocol) sẽ ngăn vòng lặp đó. Với công nghệ này, các cổng sẽ xuất hiện như một cổng duy nhất, nên **STP sẽ không cần chặn gì cả**.

**Etherchannel cung cấp dự phòng**. Dự phòng là việc tiếp tục truyền qua các kết nối khác khi một kết nối bị lỗi. **Một điểm quan trọng cần nhớ là các cổng phải có cùng tốc độ, và một điểm nữa là các cổng được gộp phải ở cùng một virtual local area network**. Nếu các cổng được dùng như trunk thì chúng phải có cùng native VLAN. **Packet sẽ được chuyển tiếp từ một cổng cụ thể dựa trên thuật toán hash được dùng**. Thuật toán có thể dùng địa chỉ MAC nguồn, địa chỉ MAC đích hoặc cả hai; nó cũng có thể dùng địa chỉ IP nguồn, địa chỉ IP đích hoặc cả hai, hoặc số port TCP/UDP. **Điểm quan trọng nhất của công nghệ này là nó tăng băng thông**. Băng thông có thể lên tới 800 Mbit/s, 8 Gbit/s hoặc 80 Gbit/s khi dùng tối đa 8 cổng active.

Trong Etherchannel, các switch có thể bật cấu hình liên kết để thực hiện động. Hai giao thức được dùng cho việc này là: **PAgP (Port Aggregation Protocol)** và **LACP (Link Aggregation Control Protocol)**. PAgP là giao thức dành riêng cho thiết bị Cisco, còn LACP là giao thức chuẩn không phụ thuộc thiết bị.

### Cấu hình Etherchannel

Đây là topology thử của tôi. Hãy gán địa chỉ IP và tạo VLAN.

<p align="center"><img width="500" src="/assets/images/network/etherchannel_topology.png"></p>


- For PAgP
```
S0(config)#interface range fastEthernet 0/3
S0(config-if-range)#duplex full
S0(config-if-range)#speed 100
S0(config-if-range)#channel-group 1 mode desirable
S0(config-if-range)#ex
S0(config)#int port-channel 1
S0(config-if)#switchport mode trunk
S0(config-if)#switchport trunk allowed vlan 2,99
```
```
S1(config)#interface range fastEthernet 0/3
S1(config-if-range)#duplex full
S1(config-if-range)#speed 100
S1(config-if-range)#channel-group 1 mode desirable
S1(config-if-range)#ex
S1(config)#int port-channel 1
S1(config-if)#switchport mode trunk
S1(config-if)#switchport trunk allowed vlan 2,99
```

- For LACP

```
S0(config)#interface range fastEthernet 0/3
S0(config-if-range)#duplex full
S0(config-if-range)#speed 100
S0(config-if-range)#channel-group 1 mode active
S0(config-if-range)#ex
S0(config)#int port-channel 1
S0(config-if)#switchport mode trunk
S0(config-if)#switchport trunk allowed vlan 2,99
```
```
S1(config)#interface range fastEthernet 0/3
S1(config-if-range)#duplex full
S1(config-if-range)#speed 100
S1(config-if-range)#channel-group 1 mode active
S1(config-if-range)#ex
S1(config)#int port-channel 1
S1(config-if)#switchport mode trunk
S1(config-if)#switchport trunk allowed vlan 2,99
```

Bạn có thể truy cập topology này [tại đây](https://github.com/wasny0ps/Network-Notes/blob/main/0x9%20-%20VLANs/src/Etherchannel.pkt).


