---
title: Router và Switch
---

# Cấu hình mạng

Trước khi cấu hình, bạn phải tạo một topology. Đây là topology ví dụ của tôi trước khi cấu hình. Hãy bắt đầu.

<p align="center"><img  src="/assets/images/network/start.png" ></p>


## Cấu hình Router

Sau khi tạo xong topology, việc đầu tiên bạn cần làm là gán IP và subnet mask cho các interface của router trong mạng. Sau đó bạn có thể thực hiện các cấu hình khác trong CLI của router. Tuy nhiên, trước khi cấu hình router, ta nên xem qua **các chế độ CLI**. 

- **User Execution Mode** : Ngay khi thông báo interface up xuất hiện và bạn nhấn Enter, prompt `router>` sẽ hiện ra. Đây được gọi là user execution mode. Chế độ này chỉ giới hạn ở một số lệnh giám sát. 

- **Privileged Mode** : Khi gõ `enable` từ user mode, ta vào Privileged mode, nơi có thể xem và thay đổi cấu hình router. Các lệnh như `show running-configuration`, `show ip interface brief`, v.v. có thể chạy ở chế độ này và thường được dùng để xử lý sự cố.

- **Global Configuration Mode** : Khi gõ `configure terminal` từ user mode, ta sẽ vào global configuration mode. Các lệnh nhập ở chế độ này được gọi là global commands và chúng ảnh hưởng đến running configuration của router. Ở chế độ này, ta có thể thực hiện các cấu hình khác như tạo cơ sở dữ liệu cục bộ trên router bằng username/password, đặt enable password và secret password, v.v. 

- **Interface Configuration Mode** : Ở chế độ này, chỉ cấu hình interface được thực hiện. Gán địa chỉ IP cho interface và bật interface là các tác vụ thường làm ở chế độ này. 

|Chế độ|Phương thức truy cập|Prompt|Cách thoát|
|:---:|:---:|:---:|:---:|
|User Execution Mode|Đăng nhập|Router>|Dùng lệnh `logout`|
|Privilege Mode|Dùng lệnh `enable` trong user mode|Router#|Dùng lệnh `disable` để quay lại user mode|
|Global Configuration Mode|Dùng lệnh `configure terminal`|Router(config)#|Dùng lệnh `exit` để quay về privilege mode|
|Interface Mode|Dùng lệnh `interface` và chỉ định một interface trong global configuration mode|Router(config-if)#|Dùng lệnh `exit` để quay về global configuration mode hoặc dùng lệnh `end` để quay về privilege mode.|

Sau đó, hãy lần lượt thực hiện các cấu hình này.

## Đặt đồng hồ và múi giờ

Trước hết, ta phải vào privileged mode. Sau đó, nhập lệnh `clock set`.

<img  src="/assets/images/network/clock.png" >

## Đổi hostname của router

Chuyển sang global configuration mode và dùng lệnh `hostname`.

<img height="50" src="/assets/images/network/hostname.png" >

## Đặt mật khẩu enable mode

Enable password được dùng để giới hạn những người có thể thực hiện thao tác trên router. Bạn có thể đặt enable password bằng cách gõ `enable secret yourpassword`. 

<img width="250" src="/assets/images/network/enable.png" >

Sau đó, khi muốn chuyển sang privilege mode, router sẽ yêu cầu enable password.

> Trong khi enable password được lưu dưới dạng văn bản thuần trong file running-config, enable secret được giữ ở dạng băm. Vì lý do này, nên dùng enable secret.

## Gán IP và subnet mask

Để router giao tiếp với mạng và các thiết bị đầu cuối, cần gán IP và subnet mask cho interface của router nằm trong mạng đó.

<img src="/assets/images/network/ip.png" >

## Đặt mật khẩu console

Thông thường console password được đặt khi kết nối thiết bị bằng cáp console (rollover cable). Việc cấu hình console thường được thực hiện trong global configuration mode với thông tin xác thực cục bộ. 

<img src="/assets/images/network/console.png" >


## Cấu hình Telnet

Kết nối Telnet được dùng để truy cập router từ xa. Cấu hình Telnet được thực hiện trong global configuration mode. Trước hết, ta phải đặt username và password cho kết nối Telnet. Thứ hai, ta nên định nghĩa có bao nhiêu người dùng có thể truy cập router bằng Telnet.

<img src="/assets/images/network/telnet.png" >

## Cấu hình SSH

SSH được dùng cho cùng mục đích với Telnet. Tuy nhiên, **SSH an toàn hơn Telnet khi truy cập từ xa**. Vì vậy, nên dùng SSH khi truy cập thiết bị từ xa. Bước đầu tiên của cấu hình SSH là tạo file `id_rsa`, vốn là SSH key dùng để xác thực danh tính của người dùng hoặc tiến trình muốn truy cập hệ thống từ xa bằng giao thức SSH, bằng cách tạo một crypto key, **là sự kết hợp giữa thuật toán RSA, domain name và hostname của router**. Bước thứ hai là đặt kích thước file `id_rsa` và dùng ssh version 2.

<img src="/assets/images/network/ssh.png" >


## Cấu hình NVRAM

Đôi khi ta muốn lưu một bản sao của running-config sang startup-config. Trong trường hợp này, ta có thể sao chép running-config vào NVRAM.

<img src="/assets/images/network/nvram.png" >

<!--## Cấu hình FTP và TFTP

Tất cả công ty đều muốn sao lưu và lưu router, switch của họ. Trong trường hợp này, phần lớn bản sao lưu được gửi tới ftp hoặc tftp server. Vì vậy, điều quan trọng là biết cách sao chép file cấu hình router lên server.-->



## Cấu hình Switch

## Cấu hình VLAN

VLAN là các mạng được tạo bên trong một mạng cục bộ. Nhờ đó, bạn có thể cô lập hoàn toàn các mạng này khỏi nhau bằng cách chia mạng cục bộ thành nhiều phần. Các công ty thường dùng phương pháp này để đảm bảo an toàn giữa các mạng trong nội bộ công ty.

<img src="/assets/images/network/switch.png" >


## Cấu hình Default Gateway

Ngay cả khi switch được gán IP và subnet mask, switch vẫn không thể nói chuyện với router. Lý do là chưa có IP router nào được định nghĩa hoặc chuyển tiếp cho nó. Từ đây có thể thấy rằng default router IP cho switch và thiết bị đầu cuối là rất quan trọng.

<img src="/assets/images/network/defaultgateway.png" >


## Cấu hình thiết bị đầu cuối

Sau khi kết nối một thiết bị đầu cuối với thiết bị mạng bằng cáp, điều đầu tiên cần làm là thực hiện các cấu hình cần thiết cho thiết bị đầu cuối. Cấu hình đầu tiên là **gán IP và subnetmask** cho thiết bị và **đặt IP của default gateway**.

<p align="center"><img width="500" src="/assets/images/network/pc.png" ></p>

# Kết luận

Đây là topology hoàn chỉnh của tôi.

<p align="center"><img  src="/assets/images/network/finish_topology.png" ></p>


