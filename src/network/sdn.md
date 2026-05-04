---
title: Software Defined Networking (SDN)
---

# Software Defined Networking (SDN)

<p align="center"><img height="350" src="/assets/images/network/SDN.png"></p>

SDN là viết tắt của Software Defined Networking, tức là một cách tiếp cận kiến trúc mạng. Nó **cho phép điều khiển và quản lý mạng bằng các ứng dụng phần mềm**. **Thông qua Software Defined Network (SDN), hành vi mạng của toàn bộ mạng và các thiết bị trong đó được lập trình theo cách điều khiển tập trung bằng phần mềm thông qua các open API**.

Thông thường, **doanh nghiệp dùng SDN** để triển khai ứng dụng nhanh hơn trong khi giảm tổng chi phí triển khai và **chi phí vận hành**. **SDN cho phép quản trị viên IT quản lý và cấp phát dịch vụ mạng từ một vị trí duy nhất**. Trong cloud networking, mô hình software-defined thường dùng white-box systems. Nhà cung cấp cloud thường dùng phần cứng phổ thông để trung tâm dữ liệu cloud có thể thay đổi linh hoạt và tiết kiệm chi phí **CAPEX và OPEX**. Để hiểu mạng software-defined, ta cần nắm các **plane** khác nhau trong mạng:

- **Data plane:** Tất cả hoạt động liên quan tới, cũng như phát sinh từ, các packet dữ liệu do người dùng cuối gửi đều thuộc plane này. Bao gồm:
  
   - **Forwarding of packets**.
   - **Segmentation and reassembly of data**.
   - **Replication of packets for multicasting**. 

- **Control plane:** Tất cả hoạt động cần thiết để thực hiện data plane nhưng không liên quan trực tiếp tới packet của người dùng cuối đều thuộc plane này. Nói cách khác, đây là **bộ não của mạng**. Các hoạt động của control plane gồm:
  
   - **Making routing tables**.
   - **Setting packet handling policies**.


## Vì sao SDN quan trọng?

- **Kết nối mạng tốt hơn:** SDN cung cấp kết nối mạng tốt hơn cho bán hàng, dịch vụ và giao tiếp nội bộ. SDN cũng **giúp chia sẻ dữ liệu nhanh hơn**.
- **Triển khai ứng dụng tốt hơn:** Có thể tăng tốc triển khai ứng dụng, dịch vụ và nhiều mô hình kinh doanh bằng Software Defined Networking.
- **Bảo mật tốt hơn:** Mạng software-defined **cung cấp khả năng quan sát tốt hơn trên toàn mạng**. Người vận hành có thể **tạo các zone riêng cho các thiết bị cần mức bảo mật khác nhau**. Mạng SDN **cho người vận hành nhiều quyền kiểm soát hơn**.
- **Kiểm soát tốt hơn với tốc độ cao:** Software-defined networking **cung cấp tốc độ tốt hơn các kiểu mạng khác nhờ dùng một bộ điều khiển phần mềm theo chuẩn mở**.

Nói ngắn gọn, có thể hiểu rằng **SDN hoạt động như một “chiếc ô lớn hoặc một HUB”**, nơi các công nghệ mạng khác cùng hoạt động bên dưới, được tích hợp với một nền tảng khác để tạo ra kết quả tốt hơn bằng cách giảm lưu lượng và tăng hiệu quả luồng dữ liệu.

### Ưu điểm của SDN

- Mạng có thể **lập trình được**, vì vậy có thể **dễ dàng chỉnh sửa qua controller thay vì từng switch riêng lẻ**.
- **Phần cứng switch rẻ hơn** vì mỗi switch chỉ cần data plane.
- Phần cứng được trừu tượng hóa, nên ứng dụng có thể được viết phía trên controller mà không phụ thuộc vào nhà sản xuất switch.
- Tăng bảo mật vì controller có thể **giám sát lưu lượng** và **triển khai chính sách bảo mật**. Ví dụ, nếu controller phát hiện hoạt động đáng ngờ trong lưu lượng mạng, nó có thể chuyển hướng hoặc loại bỏ packet.

### Nhược điểm của SDN

- Việc phụ thuộc vào thành phần trung tâm khiến mạng có **single point of failure**; nếu controller bị lỗi, toàn bộ mạng sẽ bị ảnh hưởng.
- Việc dùng SDN **ở quy mô lớn vẫn chưa được định nghĩa và khai thác đầy đủ**.


## Khác biệt giữa SDN và mạng truyền thống

|Software Defined Networking|Traditional Networking|
|-|-|
|Software Defined Network là một cách tiếp cận **mạng ảo**.|Mạng truyền thống là cách tiếp cận **mạng cổ điển**.|
|Software Defined Network có **điều khiển tập trung**.|Mạng truyền thống có **điều khiển phân tán**.|
|Mạng này **có thể lập trình**.|Mạng này **không thể lập trình**.|
|Software Defined Network là **giao diện mở**.|Mạng truyền thống là **giao diện đóng**.|
|Trong Software Defined Network, data plane và control plane được tách rời bởi phần mềm.|Trong mạng truyền thống, data plane và control plane nằm trên cùng một thiết bị.|

## Các thành phần của Software Defined Networking (SDN)

<p align="center"><img height="300" src="/assets/images/network/SDN_components.png"></p>

Ba thành phần chính tạo nên SDN là:
- **SDN Applications:** Ứng dụng SDN chuyển tiếp yêu cầu hoặc điều khiển mạng thông qua SDN Controller bằng API.
- **SDN controller:** SDN Controller thu thập thông tin mạng từ phần cứng và gửi thông tin này tới ứng dụng.
- **SDN networking devices:** Các thiết bị mạng SDN hỗ trợ các tác vụ chuyển tiếp và xử lý dữ liệu.


## SDN Controller

Tất cả thiết bị mạng truyền thống như router và switch đều dùng distributed control plane. Nhưng mô hình mạng mới hơn, **Software Defined Networking (SDN) dùng centralized control plane**. Distributed control plane có nghĩa là control plane của từng thiết bị mạng nằm ngay trong chính thiết bị đó.

Mỗi thiết bị có control plane riêng để điều khiển data plane. Trong hệ thống centralized control plane, có một thiết bị chứa control plane của tất cả thiết bị. Thiết bị này điều khiển hoạt động của data plane trên toàn bộ thiết bị mạng cùng lúc. Thiết bị đó được gọi là **controller hoặc SDN controller**. Hình sau cho thấy mô hình mạng dựa trên controller.

<p align="center"><img height="300" src="/assets/images/network/SDN_controller.png"></p>


#### Southbound Interface

Trong SDN, tất cả thiết bị mạng phải được kết nối với controller để nó có thể **điều phối data plane của toàn bộ thiết bị**. Khi vẽ kiến trúc mạng, thường kiến trúc sư mạng đặt các thiết bị mạng bên dưới controller. Theo quy ước bản đồ, interface giữa controller và thiết bị mạng nằm về phía nam của controller. Vì vậy, các interface này được gọi là Southbound Interface.

**Southbound interface là interface giữa chương trình trên controller và chương trình trên thiết bị mạng**. Lưu ý rằng các interface này là interface phần mềm, **không phải vật lý**. Có một số lựa chọn thay thế để dùng southbound interface như:

- **OpenFlow**
- **Cisco OpFlex**
- **CLI**

#### OpenFlow

<p align="center"><img height="350" src="/assets/images/network/openflow.png"></p>

OpenFlow là giao thức truyền thông và là thành phần cơ bản của cấu trúc software-defined networking nằm trong vùng điều khiển và định tuyến của mạng. SDN tạo ra trí tuệ mạng và trung tâm quản trị trong các software controller duy trì cái nhìn toàn cục về mạng. Hiện tại, OpenFlow là **giao thức duy nhất dựa trên chuẩn mở để giao tiếp giữa SDN controller và các chi tiết mạng**. **Nó cho phép lập trình trực tiếp phần cứng mạng như cả switch vật lý lẫn ảo và các tác nhân bên ngoài để làm mạng linh hoạt hơn, dễ quản lý hơn và phản hồi cảnh báo nhanh hơn**.

Một tính năng quan trọng của OpenFlow là **nó dùng luồng để định nghĩa lưu lượng mạng dựa trên các quy tắc khớp đã định nghĩa trước, có thể lập trình tĩnh hoặc động bằng phần mềm điều khiển SDN**. Nói đơn giản hơn, OpenFlow **truyền thông tin từ controller tới switch và cho chúng biết phải làm gì**. Ngược lại, switch cung cấp bộ đếm và dữ liệu khác về controller.

Vì hoạt động theo luồng, OpenFlow cung cấp khả năng điều khiển chi tiết để phản ứng với thay đổi thời gian thực ở mức ứng dụng, người dùng và phiên làm việc. OpenFlow cho phép IT định nghĩa cách lưu lượng đi qua mạng dựa trên các yếu tố như mẫu sử dụng, yêu cầu ứng dụng, thỏa thuận mức dịch vụ và tài nguyên cloud.

#### Cisco OpFlex

OpFlex là một giao thức southbound trong mạng software-defined (SDN) được thiết kế cho giao tiếp giữa SDN Controller và hạ tầng (switch và router). Từ khóa ở đây là **“môi trường đa nhà cung cấp”** - tức là OpenFlow được thiết kế để hỗ trợ thiết bị mạng của mọi nhà cung cấp. Mục tiêu là tạo ra một chuẩn cho phép áp dụng chính sách trên switch/router vật lý và ảo trong môi trường đa nhà cung cấp.

#### Northbound Interface

<p align="center"><img height="250" src="/assets/images/network/northbound.png"></p>

Controller cần biết rất nhiều thông tin về mạng để có thể điều khiển data plane của các thiết bị mạng. Tất cả thông tin này được cung cấp bởi network programmer. Network programmer cung cấp thông tin cần thiết cho controller thông qua nhiều phần mềm hoặc script về những chức năng cần thực hiện. Các phần mềm/script này lại nằm phía trên controller trong kiến trúc mạng. Việc đặt phần mềm/script như vậy khiến interface giữa controller và phần mềm nằm theo hướng bắc, theo quy ước bản đồ. Vì vậy, interface giữa controller và phần mềm được gọi là Northbound Interface. Các interface này cho phép mạng có thể lập trình được.
Tất cả interface đã nói ở trên đều là interface dựa trên chương trình. Nói rộng hơn, chúng được gọi là Application Program Interface (API). API là interface mà qua đó hai chương trình có thể trao đổi dữ liệu với nhau.

Nhiều ứng dụng có thể truy cập SDN controller thông qua API:
- Thông tin về mạng từ giao diện GUI của SDN controller có thể được truy xuất.
- Các lệnh viết bằng Java hoặc Python có thể dùng API để lấy thông tin từ SDN controller hoặc cấu hình mạng.

## Kiến trúc SDN

<p align="center"><img height="350" src="/assets/images/network/SDN_architecture.png"></p>


Trong mạng truyền thống, mỗi switch có data plane và control plane riêng. Control plane của các switch trao đổi thông tin topology và từ đó xây dựng forwarding table quyết định packet đi vào sẽ được chuyển tiếp qua data plane như thế nào. Software-defined networking (SDN) là cách tiếp cận tách control plane ra khỏi switch và giao nó cho một đơn vị tập trung gọi là SDN controller. Nhờ vậy, quản trị viên mạng có thể điều phối lưu lượng qua một console tập trung mà không cần chạm vào từng switch riêng lẻ. Data plane vẫn nằm trong switch, và khi packet đi vào switch, việc chuyển tiếp của nó được quyết định dựa trên các mục trong flow table, vốn được controller gán trước. Flow table gồm các match field (như số cổng vào và header packet) và các instruction. Packet sẽ được so khớp trước với các match field trong flow table. Sau đó, instruction tương ứng của flow entry đó sẽ được thực thi. Các instruction có thể là chuyển packet qua một hoặc nhiều port, loại bỏ packet, hoặc thêm header vào packet. Nếu packet không khớp với mục nào trong flow table, switch sẽ hỏi controller và controller sẽ gửi một flow entry mới cho switch. Switch sẽ chuyển tiếp hoặc loại bỏ packet dựa trên flow entry này.

Một kiến trúc SDN điển hình gồm ba lớp:

- **Application layer:** Chứa các ứng dụng mạng điển hình như phát hiện xâm nhập, firewall và cân bằng tải.
- **Control layer:** Gồm SDN controller, đóng vai trò bộ não của mạng. Nó cũng cho phép trừu tượng hóa phần cứng đối với các ứng dụng chạy phía trên.
- **Infrastructure layer:** Gồm các switch vật lý tạo nên data plane và thực hiện việc di chuyển packet thực tế.

Các lớp giao tiếp với nhau qua một tập interface gọi là north-bound API (giữa application layer và control layer) và southbound API (giữa control layer và infrastructure layer).

## Các mô hình SDN khác nhau

Trong SDN có một số mô hình được sử dụng:

- Open SDN
- SDN via APIs
- SDN via Hypervisor-based Overlay Network
- Hybrid SDN

### Open SDN

<p align="center"><img height="350" src="/assets/images/network/open_sdn.png"></p>

Open SDN được triển khai bằng OpenFlow switch. Đây là cách triển khai SDN trực tiếp và đơn giản. Trong Open SDN, controller giao tiếp với các switch bằng south-bound API thông qua giao thức OpenFlow.

### SDN thông qua API

<p align="center"><img height="350" src="/assets/images/network/SDN_APIs.png"></p>


Trong SDN qua API, các chức năng trên thiết bị từ xa như switch được gọi bằng các phương thức truyền thống như SNMP hoặc CLI, hoặc bằng các phương thức mới hơn như REST API. Ở đây, các thiết bị được cung cấp control point để controller có thể điều khiển thiết bị từ xa bằng API.

### SDN qua mạng overlay dựa trên Hypervisor

<p align="center"><img height="350" src="/assets/images/network/SDN_supervisor.png"></p>

Trong SDN qua hypervisor, cấu hình của các thiết bị vật lý không thay đổi. Thay vào đó, các mạng overlay dựa trên hypervisor được tạo trên mạng vật lý. Chỉ các thiết bị ở rìa mạng vật lý được kết nối tới mạng ảo hóa, nhờ đó che giấu thông tin của các thiết bị khác trong mạng vật lý.

### Hybrid SDN

<p align="center"><img height="350" src="/assets/images/network/hybrid_SDN.png"></p>

Hybrid Networking là sự kết hợp giữa mạng truyền thống và software-defined networking trong cùng một mạng để hỗ trợ nhiều loại chức năng khác nhau.


