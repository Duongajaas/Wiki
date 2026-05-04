---
title: Static Routing
---

# Định tuyến

**Router nhận các packet dữ liệu và tìm địa chỉ Internet Protocol (IP) đích**. Khi đã biết địa chỉ IP hoặc mạng đích, router sẽ kiểm tra **bảng định tuyến** để chọn **tuyến đường tốt nhất** để chuyển packet. Tuyến tốt nhất được chọn dựa trên administrative distance và các chỉ số chi phí như băng thông, độ nghẽn và tốc độ cáp, v.v. Để có thể định tuyến một packet, router phải biết ít nhất các thông tin sau:

- Địa chỉ đích mà packet hướng tới. Các giao thức tầng 3 như IP đảm nhiệm việc này.
- Các router lân cận từ đó có thể học được các mạng từ xa và chuyển packet đến chúng trên đường tới đích.
- Các tuyến tới mạng từ xa và cách xác định tuyến tốt nhất cho từng tuyến.
- Cách học, xác minh và quản lý thông tin định tuyến. Thông tin định tuyến thiếu, sai hoặc không ổn định còn tệ hơn là không có thông tin định tuyến. Nếu router không có thông tin định tuyến, nó sẽ loại bỏ packet và báo cho nguồn biết. Nếu router có thông tin định tuyến sai, vòng lặp có thể hình thành và làm sập mạng.

Mỗi tuyến là sự kết hợp của địa chỉ mạng đích, subnet mask và next hop hướng tới đích. Có ba cách để router học các tuyến:

- **Static Routing**: Đây là phương pháp mà quản trị viên **thủ công thêm các tuyến vào bảng định tuyến của router**. Đây là phương pháp dành cho **mạng nhỏ** nhưng không mở rộng tốt cho mạng lớn.

- **Default Routing**: Đây là phương pháp trong đó **tất cả router được cấu hình để gửi mọi packet tới một router duy nhất**. Đây là phương pháp rất hữu ích cho mạng nhỏ hoặc mạng chỉ có một điểm vào và một điểm ra. 

- **Dynamic Routing**: Đây là phương pháp dùng các giao thức và thuật toán để **tự động lan truyền thông tin định tuyến**. Đây là **phương pháp phổ biến nhất và cũng phức tạp nhất**. 

## Static Routing

Khi bạn thêm các tuyến vào bảng định tuyến theo cách thủ công, đó được gọi là static routing. Việc dùng static routing có cả ưu điểm lẫn nhược điểm. Ưu điểm là:

- Không có overhead về mức sử dụng CPU của router cũng như băng thông giữa các router. Khi dùng dynamic routing, các packet được trao đổi giữa router với nhau và điều đó tiêu tốn băng thông. Điều này có thể tốn kém khi chúng đi qua các liên kết WAN. Router cũng phải xử lý các packet này và **cũng tiêu tốn một phần chu kỳ CPU**.

- Nó mang lại một mức độ bảo mật nhất định vì quản trị viên kiểm soát các tuyến mà router có thể biết và học.

Nhược điểm của static routing là:

- Quản trị viên phải hiểu internetwork rất rõ để biết mỗi mạng đích nằm ở đâu và next hop nào dẫn tới nó.

- Mọi thay đổi đều phải được thực hiện thủ công trên từng router trong internetwork.

- Trong mạng lớn, việc này có thể trở nên **không thể quản lý nổi**.

## Ví dụ về Static Routing

Điểm khởi đầu của static routing là kết nối các thiết bị đầu cuối với các thiết bị mạng. Đây là topology ví dụ của tôi.

<p align="center"><img src="/assets/images/network/static_routing_start.png" ></p>

## Cấu hình router và thiết bị
Trước hết, chúng ta cần ba khối IP khác nhau để các router có thể giao tiếp với các mạng cục bộ và với nhau. Các khối IP của tôi là **192.168.10.0/24**, **192.168.20.0/24**, **192.168.30.0/24**. Sau đó, ta phải gán IP và subnet mask cho tất cả thiết bị. Nếu bạn không biết cách cấu hình router và thiết bị, bạn có thể học từ [đây](https://github.com/wasny0ps/Network-Notes/tree/main/0x5%20-%20Router%20%26%20Switch%20Configration).

Sau khi cấu hình, topology của tôi trông như sau.

<p align="center"><img src="/assets/images/network/first_conf.png" ></p>

Trước khi cấu hình thủ công router để học các mạng bên ngoài, bạn nên kiểm tra xem mình đã gán đúng địa chỉ IP và subnet mask cho interface của router trong mạng 192.168.30.0/24 hay chưa. Hình này được chụp khi chưa gán địa chỉ IP trong mạng 192.168.30.0/24. Hãy cẩn thận.


## Học mạng thủ công

Bạn có thể dạy router học các mạng bên ngoài bằng lệnh `ip route -địa chỉ mạng bên ngoài- -subnet mask của mạng bên ngoài- -địa chỉ IP của interface router sẽ route tới mạng đó-` trong chế độ global configuration.

<img src="/assets/images/network/r1.png" >
<img src="/assets/images/network/r2.png" >

Bạn có thể kiểm tra bằng cách ping sang mạng khác. Nếu ping được thì topology của bạn không có vấn đề gì.

<img src="/assets/images/network/itworks.png" >


## Default Routing

Default routing có thể được xem là một dạng đặc biệt của static routing. Khác biệt giữa static route bình thường và default route là default route được dùng để gửi packet tới bất kỳ đích không xác định nào đến một địa chỉ next hop duy nhất. Để hiểu cách hoạt động, hãy giả sử ta có hai router tên là Router1 và Router2. Router1 được kết nối trực tiếp với leg IP 192.168.1.1 đến mạng 192.168.1.0/24 và không có static route nào. Khi nó nhận packet hướng tới 192.168.5.0/24, nó sẽ loại packet đó vì không biết mạng đích ở đâu. Nếu thêm default route trong Router1 với địa chỉ next hop là Router2, mọi packet hướng đến đích không xác định, chẳng hạn 192.168.5.0/24, sẽ được gửi tới Router2.

Default route hữu ích khi làm việc với mạng chỉ có một điểm thoát ra. Nó cũng hữu ích khi một loạt mạng đích phải được định tuyến tới một thiết bị next hop duy nhất. Khi thêm default route, bạn nên đảm bảo thiết bị next hop có thể định tuyến packet tiếp, nếu không nó sẽ loại packet. Một điểm nữa cần nhớ là khi trong bảng định tuyến đã có một route cụ thể hơn tới đích, router sẽ dùng route đó chứ không dùng default route. Router chỉ dùng default route khi không tồn tại route cụ thể nào.




