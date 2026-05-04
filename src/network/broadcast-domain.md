---
title: Broadcast Domain
---

# Domain là gì?

Domain là một **kiểu mạng máy tính** trong đó toàn bộ máy tính người dùng, máy in, tài khoản và các thiết bị khác đều được đăng ký. **Đây là một cơ sở dữ liệu tập trung nằm trên một hoặc nhiều cụm máy tính trung tâm, được gọi là domain controller**.

# Collision Domain

<p align="center"><img height="350" src="/assets/images/network/collision_domain.gif"/></p>

Collision domain, đúng như tên gọi, là phần của mạng nơi packet có thể va chạm. Va chạm xảy ra khi hai thiết bị gửi packet cùng lúc trên một đoạn mạng dùng chung. Các packet va chạm với nhau và cả hai thiết bị phải gửi lại, làm giảm hiệu quả mạng. Va chạm thường xảy ra trong môi trường hub vì mỗi cổng trên hub đều nằm trong cùng một collision domain. Ngược lại, mỗi cổng trên bridge, switch hoặc router đều thuộc một collision domain riêng.

<p align="center"><img height="300" src="/assets/images/network/collision_domain_example.png"/></p>

Đây là một topology ví dụ. Quan sát hình có thể thấy, topology này có 7 collision domain. Hãy xem chi tiết vì sao chúng được xem là collision domain.

- **Thiết bị ở collision domain thứ 1 và thứ 7 được nối với hub**. Nói ngắn gọn, hub là thiết bị "ngốc", nó không chuyển mạch. Vì vậy, **packet có thể được nhận bởi các interface khác của hub**. Do đó **khu vực này được xem là một collision domain**.

<p align="center"><img height="300" src="/assets/images/network/hub.gif"/></p>

- Các thiết bị trong collision domain thứ 2, 3 và 6 kết nối với router. **Router không chuyển packet sang các mạng khác**. Vì vậy, **mọi kết nối giữa thiết bị mạng và router hoặc giữa thiết bị người dùng cuối và router đều tạo thành một collision domain**.
- Còn phần thứ 4 và 5 kết nối với switch. **Switch ngăn lưu lượng mạng giữa các interface của nó**. Vì vậy, **mỗi kết nối gắn với switch cũng là một collision domain**.


## Ưu điểm của Collision Domain
- **Hiệu năng mạng cao:** Collision domain giúp cải thiện hiệu năng mạng bằng cách giảm va chạm trên mạng, từ đó tăng khả năng truyền dữ liệu và giảm mất packet.
- **Sử dụng tài nguyên mạng hiệu quả:** Collision domain giúp sử dụng băng thông hiệu quả hơn bằng cách giảm số lần va chạm và tránh lãng phí tài nguyên mạng.
- **Bảo mật mạng tốt hơn:** Collision domain có thể cải thiện bảo mật mạng bằng cách giảm nguy cơ truy cập trái phép và các cuộc tấn công mạng, vốn có thể xảy ra do nghẽn mạng.

## Nhược điểm của Collision Domain
- **Khả năng mở rộng hạn chế:** Collision domain có thể không mở rộng tốt trong các mạng lớn, vì số lượng thiết bị tăng lên sẽ làm tăng nghẽn mạng và giảm hiệu năng.
- **Quản trị mạng phức tạp:** Collision domain có thể khó quản lý, vì cần dùng các giao thức như CSMA/CD, vốn khó cấu hình và bảo trì.

# Broadcast Domain

  <p align="center"><img height="400" src="/assets/images/network/broadcast_domain.gif"/></p>

Broadcast domain là một phân vùng logic của mạng máy tính. Trong loại domain này, **các node có thể liên lạc với nhau bằng broadcast ở tầng data link**. Broadcast domain có thể nằm trong cùng một đoạn LAN hoặc có thể được cầu nối sang các mạng LAN khác. Domain này chứa tất cả thiết bị có thể với tới nhau ở tầng data link nhờ broadcast. **Mọi cổng trên switch hoặc hub đều nên nằm trong cùng một broadcast domain**.

Tuy nhiên, **tất cả cổng trên router nằm trong các broadcast domain riêng biệt**, và **router không bao giờ broadcast từ domain này sang domain khác**. Hãy nhìn vào topology ví dụ sau.

<p align="center"><img height="300" src="/assets/images/network/broadcast_domain_example.png"/></p>

Nó cho thấy rõ rằng topology này có ba broadcast domain. Ba domain này cũng được nối với router. Nói cách khác, **mỗi interface của router là một broadcast domain**.

## Ưu điểm của Broadcast Domain

- **Giao tiếp mạng hiệu quả:** Broadcast domain giúp nhiều thiết bị nhận cùng một thông điệp đồng thời.
- **Quản lý mạng đơn giản hơn:** Broadcast domain có thể giúp quản trị viên quản lý thiết bị và chính sách mạng dễ hơn.
- **Cộng tác tốt hơn:** Broadcast domain có thể cải thiện khả năng cộng tác nhờ giao tiếp thời gian thực giữa các người dùng mạng.

## Nhược điểm của Broadcast Domain
- **Tăng nghẽn mạng:** Broadcast domain có thể làm tăng nghẽn mạng, đặc biệt trong các mạng lớn, từ đó ảnh hưởng hiệu năng và gây mất packet.
- **Giảm bảo mật mạng:** Broadcast domain có thể làm giảm bảo mật mạng do tăng nguy cơ truy cập trái phép và tấn công mạng, đặc biệt ở môi trường có nhiều thiết bị.

## Broadcast vs Collision Domain

|Broadcast Domain|Collision Domain|
|:--|:--|
|Broadcast domain là kiểu domain trong đó lưu lượng có thể lan khắp toàn mạng.|Collision domain là một phần mạng cho phép lưu lượng đi qua theo hai chiều và có thể xảy ra va chạm.|
|Broadcast domain là tập hợp logic các hệ thống máy tính có thể đến được nhau mà không cần router.|Collision domain là tập hợp thiết bị mà packet có thể va chạm.|
|Broadcast domain không bị giới hạn cố định vào một subnet IP cụ thể cho mọi kiểu IP broadcast.|Collision domain có thể bao gồm các thiết bị thuộc những subnet IP khác nhau.|
|Broadcast domain chủ yếu dùng môi trường switch để phát broadcast nên không xảy ra collision.|Packet collision xảy ra khi nhiều thiết bị truyền dữ liệu trên cùng một đường dây.|
|Switch không phá vỡ broadcast domain.|Switch lại chia nhỏ collision domain.|
|Tất cả cổng trên switch hoặc hub thường nằm trong cùng một broadcast domain.|Trong collision domain, mỗi cổng trên router thuộc các broadcast domain riêng biệt.|
