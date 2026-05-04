---
title: Network Basics
---

# Tổng quan mạng máy tính 101

**Hệ thống mở**: 
Là hệ thống đã được kết nối vào mạng và sẵn sàng giao tiếp. 

**Hệ thống đóng**: 
Là hệ thống không được kết nối vào mạng và không thể giao tiếp.

**Mạng máy tính**: 
Là sự liên kết của nhiều thiết bị, còn gọi là host, được kết nối bằng nhiều đường truyền để gửi/nhận dữ liệu hoặc phương tiện. Mạng máy tính cũng có thể bao gồm nhiều thiết bị/phương tiện giúp việc giao tiếp giữa hai thiết bị khác nhau; chúng được gọi là thiết bị mạng và bao gồm các thứ như router, switch, hub và bridge.

## Thiết bị mạng
<p align="center"><img src="/assets/images/network/network_devices.png"></p>

**Hub**: Hub trong mạng đóng vai trò quan trọng trong **truyền dữ liệu và phát quảng bá**. Hub là một thiết bị phần cứng được dùng ở **tầng vật lý** để kết nối nhiều thiết bị trong mạng. Hub được dùng rộng rãi để kết nối **LAN (Local Area Network)**. Một hub có nhiều cổng và **là một thiết bị không thông minh**. Nó hoạt động như một switch “ngốc” không biết dữ liệu cần chuyển đi đâu nên sẽ phát hoặc gửi dữ liệu đến từng cổng.

**Switch**: Một network switch **kết nối các thiết bị trong mạng với nhau**, cho phép chúng trao đổi dữ liệu để nói chuyện với nhau. Switch có thể là thiết bị phần cứng **quản lý mạng vật lý hoặc thiết bị ảo dựa trên phần mềm**. Switch chiếm phần lớn trong các thiết bị mạng của các hệ thống dữ liệu hiện đại. Chúng cung cấp kết nối có dây cho máy tính để bàn, access point không dây (AP), máy in, máy móc công nghiệp và một số thiết bị IoT như hệ thống kiểm soát ra vào bằng thẻ.

Network switch **hoạt động ở Layer 2 (Data Link Layer)** của mô hình OSI. Trong mạng LAN dùng Ethernet, switch xác định nơi gửi mỗi **frame** đến bằng cách nhìn vào **địa chỉ media access control (MAC)**. **Switch duy trì bảng ánh xạ mỗi địa chỉ MAC với cổng đang nhận địa chỉ MAC đó**.

**Router**: Router là thiết bị **kết nối hai hoặc nhiều mạng chuyển mạch gói hoặc các mạng con**. Nó phục vụ hai chức năng chính: quản lý lưu lượng giữa các mạng này bằng cách chuyển tiếp gói dữ liệu tới **địa chỉ IP đích**, và cho phép nhiều thiết bị dùng chung một kết nối Internet.

**Bộ định tuyến không dây**: Wireless router thường thấy ở gia đình. Đây là thiết bị phần cứng mà các nhà cung cấp dịch vụ Internet dùng để kết nối bạn tới mạng Internet cáp hoặc xDSL. Wireless router, còn gọi là **Wi-Fi router**, **kết hợp chức năng mạng của một wireless access point và một router**. **Router kết nối các mạng cục bộ với các mạng cục bộ khác hoặc với Internet**. Một wireless access point kết nối thiết bị vào mạng bằng sóng không dây.

**Bridge**: Bridge trong mạng máy tính là thiết bị dùng để kết nối nhiều LAN lại với một mạng LAN lớn hơn. Cơ chế gom mạng này được gọi là bridging. Bridge là thiết bị vật lý/phần cứng nhưng **hoạt động ở tầng data link của mô hình OSI và cũng được xem như một dạng switch tầng hai**. 

Trách nhiệm chính của switch là xem lưu lượng đi vào và quyết định lọc hay chuyển tiếp. **Nói đơn giản, bridge trong mạng máy tính được dùng để chia các kết nối mạng thành nhiều phần, và mỗi phần có băng thông riêng cùng một collision domain riêng**. Bridge ở đây được dùng để **cải thiện hiệu năng mạng**. 

**Wireless Bridge**: Wireless bridge là một loại thiết bị mạng **cho phép kết nối qua sóng vô tuyến giữa hai đoạn khác nhau của mạng LAN**. **Wireless bridge dùng tín hiệu radio ở dải microwave hoặc laser để cung cấp truy cập không dây cố định**. Wireless bridge, còn được gọi là **Wi-Fi bridge**, hoạt động gần giống một network bridge có dây. Chúng đóng vai trò quan trọng trong việc kết nối các đoạn LAN bị tách biệt về logic hoặc nằm ở các vị trí vật lý khác nhau.

**WAP**: **Wireless access point** là thiết bị mạng cho phép các thiết bị có khả năng không dây kết nối vào mạng có dây. Việc cài đặt WAP để nối tất cả máy tính hoặc thiết bị trong mạng sẽ đơn giản và dễ hơn nhiều so với dùng dây và cáp.

Đây là một topology mạng đơn giản.

<p align="center"><img width="500px" src="/assets/images/network/basic_network_topology.png"></p>

## Dây cáp trong mạng

**Thiết bị đầu cuối**: Endpoints là **các thiết bị vật lý** kết nối và trao đổi thông tin với mạng máy tính. Một số ví dụ là **thiết bị di động**, **máy tính để bàn**, **firewall**, máy ảo, thiết bị nhúng và máy chủ.

**Thiết bị mạng**: Network devices là các thiết bị vật lý cho phép phần cứng trong mạng máy tính tương tác và giao tiếp với nhau. Nói đơn giản, ta có thể mô tả network devices là các thiết bị kết nối máy fax, máy tính, máy in và các thiết bị điện tử khác vào mạng.

**Cáp thẳng**: Straight through cable là một loại **twisted pair cable** được dùng trong mạng LAN để nối máy tính với một **hub** mạng như **router**.

Sử dụng cáp Ethernet thẳng cho các kết nối sau:
- Switch to router
* Switch to PC or server
+ Hub to PC or server

<p align="center"><img width="500px" src="/assets/images/network/straight-through-cable.png"></p>

**Cáp chéo**: Crossover Ethernet cable là một loại **cáp Ethernet** dùng để nối trực tiếp các thiết bị tính toán với nhau. Khác với cáp thẳng, cáp RJ45 crossover dùng hai chuẩn đi dây khác nhau: một đầu theo **T568A**, đầu còn lại theo **T568B**. Đi dây bên trong của cáp crossover sẽ đảo tín hiệu truyền và nhận. Nó thường được dùng để nối hai thiết bị cùng loại: ví dụ hai **máy tính hoặc hai switch** với nhau.

Dùng cáp chéo cho các kết nối sau:
- Switch to switch
* Switch to hub
+ Hub to hub
- Router to router
* PC to PC

<p align="center"><img width="500px" src="/assets/images/network/crossover-cable.png"></p>

## Các loại cáp

**Cáp quang**: Fiber optic cable, còn gọi là optical fiber cable, là một **loại cáp Ethernet** gồm một hoặc nhiều sợi quang dùng để truyền dữ liệu. Nó là một tổ hợp giống như **cáp điện** nhưng dùng để mang ánh sáng và **giá cáp quang cao hơn nhiều so với cáp đồng**. Được thiết kế để dùng xung ánh sáng, cáp quang **hỗ trợ viễn thông đường dài và truyền dữ liệu tốc độ cao**. Thông thường, cáp quang có thể chạy ở tốc độ 10 Gbps, 40 Gbps và thậm chí 100 Gbps. Vì vậy, nó được dùng rộng rãi trong Internet, truyền hình cáp và hệ thống điện thoại trên toàn thế giới.

**Cáp đồng trục**: Coaxial cable là cáp điện có lõi dẫn bằng đồng, lớp cách điện bao quanh và lưới kim loại bện giúp ngăn nhiễu tín hiệu và xuyên âm. Cáp đồng trục còn gọi là **coax**.

**Lõi dẫn bằng đồng** được dùng để truyền tín hiệu, còn lớp cách điện dùng để cách ly lõi đồng. Bên ngoài lớp cách điện là một lớp dẫn kim loại bện giúp **ngăn nhiễu tín hiệu điện và tránh xuyên âm**. **Toàn bộ cấu trúc này lại được bọc thêm một lớp nhựa bảo vệ để tăng độ an toàn cho cáp**.

**Cáp UTP**: Viết tắt của **unshielded twisted pair**, UTP là loại cáp dùng trong mạng máy tính gồm hai dây có bọc xoắn quanh nhau. Đúng như tên gọi, các dây này không có lớp cách điện (shielding) giữa từng cặp dây. Vì vậy, **chúng không chặn được nhiễu điện từ, dẫn đến nguy cơ mất gói hoặc hỏng dữ liệu cao hơn**.
