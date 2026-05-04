---
title: Topologies
---

# Các loại mạng máy tính


**PAN**: **Personal Area Network**. Nó kết nối các thiết bị điện tử trong phạm vi gần của người dùng. **Kích thước của PAN dao động từ vài centimet đến vài mét**. Một ví dụ thực tế rất phổ biến của PAN là **kết nối giữa tai nghe Bluetooth và điện thoại thông minh**. PAN cũng có thể kết nối laptop, máy tính bảng, máy in, bàn phím và các thiết bị điện tử khác.

**WLAN**: **Wireless Local Area Network**. Đây là một nhóm máy tính hoặc thiết bị nằm cùng khu vực tạo thành mạng dựa trên truyền sóng vô tuyến thay vì kết nối có dây. Mạng Wi-Fi là một dạng WLAN; bất kỳ ai đang kết nối Wi-Fi khi đọc trang này đều đang dùng WLAN.

**LAN**: **Local Area Network**. Đây là tập hợp các thiết bị **được kết nối với nhau trong một địa điểm vật lý**, chẳng hạn như một **tòa nhà, văn phòng hoặc ngôi nhà**. LAN có thể nhỏ hoặc lớn, từ mạng gia đình chỉ có một người dùng đến mạng doanh nghiệp với hàng nghìn người dùng và thiết bị trong văn phòng hoặc trường học.

**MAN**: **Metropolitan Area Network**. **Nó bao phủ khu vực lớn hơn LAN nhưng nhỏ hơn WAN**. Nó kết nối hai hoặc nhiều máy tính ở xa nhau nhưng **nằm trong cùng hoặc các thành phố khác nhau**. Nó bao phủ một khu vực địa lý rộng và có thể phục vụ như một ISP (Internet Service Provider). MAN được thiết kế cho những khách hàng cần kết nối tốc độ cao.

**WAN**: **Wide Area Network**. Đây là tập hợp các mạng cục bộ hoặc các mạng khác giao tiếp với nhau. WAN về cơ bản là một mạng của các mạng, trong đó **Internet là WAN lớn nhất thế giới**. Ngày nay có nhiều loại WAN được xây dựng cho nhiều trường hợp sử dụng khác nhau, chạm tới hầu như mọi khía cạnh của cuộc sống hiện đại.

Đây là hình minh họa về các loại mạng máy tính:

<p align="center"><img src="/assets/images/network/types_of_computer_networks.png"></p>

## Topology vật lý

Topology vật lý cho biết cách sắp xếp các thành phần khác nhau của một mạng. Nó phản ánh bố cục vật lý của thiết bị và cáp để tạo thành một mạng được kết nối. Nó tập trung vào các yếu tố cốt lõi của mạng, bỏ qua các chi tiết nhỏ như cách truyền dữ liệu và loại thiết bị. Mô hình sắp xếp các node (máy tính) và cáp mạng phụ thuộc vào mức độ dễ cài đặt và thiết lập của mạng. Nó ảnh hưởng đến chi phí và khả năng băng thông dựa trên giải pháp thiết bị. Nó cũng tính đến vị trí các node và khoảng cách giữa chúng.


Các loại topology vật lý:

- Bus Topology
* Ring Topology
+ Star Topology
- Mesh Topology
* Tree Topology


## Topology Bus

<p align="center"><img src="/assets/images/network/bus_topology.png"></p>

Bus topology, còn gọi là line topology, là kiểu topology mạng trong đó tất cả thiết bị trong mạng được nối bằng một **cáp mạng RJ-45 hoặc cáp đồng trục** trung tâm. Sợi cáp duy nhất nơi toàn bộ dữ liệu được truyền giữa các thiết bị được gọi là bus, backbone hoặc trunk. Nó hai chiều. Đây là kết nối đa điểm và là topology không bền vững vì nếu backbone hỏng thì topology sẽ sụp đổ. Trong Bus Topology, các kết nối LAN Ethernet tuân theo nhiều giao thức MAC (Media Access Control).


| Advantage | Problems |
| :---:| :---:|
|  Adding a new device is easy.   |  Problem detection is difficult.   | 
|A broken device does not affect other devices.|A broken main network effects other devices|


## Topology vòng

<p align="center"><img height="250" src="/assets/images/network/ring_topology.png"></p>


Trong topology này, các thiết bị được nối thành một vòng, mỗi thiết bị có đúng hai thiết bị láng giềng. Một số repeater được dùng cho topology vòng khi số lượng node lớn, vì nếu ai đó muốn gửi dữ liệu đến node cuối cùng trong topology có 100 node thì dữ liệu phải đi qua 99 node để tới node thứ 100. Vì vậy, để **ngăn mất dữ liệu, repeater được dùng trong mạng**. Trong topology này, **giao thức Token Ring Passing** được các workstation dùng để truyền dữ liệu.

| Advantage | Problems |
| :---:| :---:|
|  Device count doesn't affect network's performance.   |  The problem with the station affects the entire network.   | 


## Topology sao

<p align="center"><img src="/assets/images/network/star_topology.png"></p>

Trong star topology, tất cả thiết bị đều **được kết nối tới một hub duy nhất** bằng cáp. Hub này là node trung tâm và tất cả node khác kết nối với node trung tâm. Hub có thể mang tính thụ động, tức là không thông minh như thiết bị phát quảng bá; đồng thời hub cũng có thể thông minh, được gọi là active hub. Active hub có repeater bên trong. Cáp đồng trục hoặc cáp RJ-45 được dùng để nối các máy tính.

| Advantage | Problems |
| :---:| :---:|
|  Adding a new device is easy.  |  Requires a lot of cables.  | 
|Problem detetection is snap. |If the concentrator (hub) on which the whole topology relies fails, the whole system will crash down.|


## Topology lưới

<p align="center"><img src="/assets/images/network/mesh_topology.png"></p>


Trong một mesh topology, mỗi thiết bị được kết nối với thiết bị khác qua một kênh riêng.

| Advantage | Problems |
| :---:| :---:|
|  Communication is very fast between the nodes.  |  The cost of cables is high as bulk wiring is required, hence suitable for less number of devices.  | 
|Data is reliable because data is transferred among the devices through dedicated channels or links. |The cost of maintenance is high.|
|Provides security and privacy.| Installation and configuration are difficult.|


## Topology cây

<p align="center"><img width="500" src="/assets/images/network/tree-topology.png"></p>

Trong mạng máy tính, tree topology là một kiểu topology mạng **giống như cây**. Trong tree topology, có một node trung tâm (phần **trunk**), và mỗi node được kết nối với node trung tâm qua một đường duy nhất. Các node có thể được xem như những nhánh mọc ra từ trunk. Tree topology thường được dùng để tạo các mạng lớn.

| Advantage | Problems |
| :---:| :---:|
|  Error detection and error correction are very easy.  |  If the central hub gets fails the entire system fails.  | 
|We can add new devices to the existing network. |The cost is high because of the cabling.|
|It allows the network to get isolated and also prioritize from different computers.| If new devices are added, it becomes difficult to reconfigure.|


