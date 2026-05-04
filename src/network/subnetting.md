---
title: Subnetting
---

# Tính subnet mask

## Địa chỉ IP và subnet mask
Địa chỉ IP 32-bit xác định duy nhất một thiết bị trên mạng IP. 32 bit nhị phân được subnet mask chia thành phần host và phần mạng, nhưng chúng cũng được tách thành bốn octet 8 bit.

Vì nhị phân khó đọc, chúng ta chuyển đổi từng octet sang dạng thập phân theo dấu chấm. Điều này tạo ra định dạng quen thuộc của địa chỉ IP, ví dụ như 172.16.254.1. Giá trị thập phân nằm trong khoảng từ 0 đến 255 vì nó tương ứng với 00000000 đến 11111111 trong nhị phân.

Đây là một ví dụ với địa chỉ IP **192.168.63.8/24**. Trước tiên, ta có thể tìm địa chỉ mạng và địa chỉ broadcast. Địa chỉ mạng luôn kết thúc bằng 0 và địa chỉ broadcast luôn kết thúc bằng 255, vì vậy **địa chỉ mạng là 192.168.63.0** và **địa chỉ broadcast là 192.168.63.255**. Sau đó, hãy tìm số bit host. Ta có thể tìm **số bit host là 8 bằng cách lấy tổng số bit trừ đi số bit mạng**. Sau đó, ta có thể tính subnet mask của địa chỉ IP này nhờ **số bit host** như trong hình.

<p align="center"><img width="400" src="/assets/images/network/ip_addressing.png"></p> 

<p align="center"><img width="400" src="/assets/images/network/subnetmask-calculate.png"></p> 


Sau đây là thêm một bảng ví dụ về định địa chỉ IP.

|IP ví dụ|Số bit host|Địa chỉ mạng|Địa chỉ broadcast|Subnet mask|
|:---:|:---:|:---:|:---:|:---:|
|144.128.16.9/24|8|144.128.16.0|144.128.16.255|255.255.255.0|
|172.127.46.10/22|10|172.127.44.0|172.127.47.255|255.255.252.0|
|192.168.36.7/26|6|192.168.36.0|192.168.36.63|255.255.255.192|
|27.129.10.2/30|2|27.129.10.0|27.129.10.3|255.255.255.252|
|56.81.33.17/16|16|56.81.0.0|56.81.255.255|255.255.0.0|
|14.34.64.4/23|9|14.34.64.0|14.34.65.255 | 255.255.254.0|
|20.20.20.20/13|19|20.16.0.0|20.23.255.255 | 255.248.0.0|
|39.70.2.1/18|14|39.70.0.0 |39.70.63.255  | 255.255.192.0|
|100.100.100.100/8|24|100.0.0.0|100.255.255.255 |255.0.0.0|
|205.21.53.13/3|29|192.0.0.0|223.255.255.255 |224.0.0.0|
|114.182.47.31/9|23|114.128.0.0|114.255.255.255  |255.128.0.0|


# Subnetting

Quá trình chia một mạng thành 2 hoặc nhiều mạng được gọi là subnetting. Subnet, hay subnetwork, là một mạng **nằm bên trong một mạng khác**. **Subnet giúp mạng hoạt động hiệu quả hơn**. Nhờ subnetting, lưu lượng mạng có thể đi quãng đường ngắn hơn mà không cần đi qua các router không cần thiết để đến đích. Ngoài ra, ta **luôn có thể tạo 2^n subnet trong một mạng**. Ví dụ, nếu ta muốn chia mạng 192.168.10.0/24 thành 3 subnetwork, ta sẽ không làm vậy. Thay vào đó, ta có thể chia mạng 192.168.10.0/24 thành 4 subnetwork và dùng ba trong số đó. Đến lúc hiểu subnetting hoạt động thế nào rồi.

## Chia subnet như thế nào?

Subnetting hoạt động khá giống quá trình định địa chỉ IP. Một lần nữa, ta chuyển địa chỉ IP sang dạng nhị phân để tìm subnet mask và địa chỉ mạng. Tuy nhiên, có một điểm quan trọng: network ID của ta là network ID hiện tại + số subnet dự kiến. Hãy chú ý điểm này!

Sau đó, ta vẽ một đường vuông góc để chia nó thành subnet ngay sau network ID. Đây là lúc điều kỳ diệu xảy ra. Sau dấu chấm cuối cùng, ta cần tăng dần phần dư bắt đầu từ 0 theo chuỗi 1,10,11,100,101,110. Hãy nhìn các hình ví dụ để hiểu rõ hơn.

<p align="left"><img width="500" src="/assets/images/network/subnet.png"></p> 

<p align="center"><img  src="/assets/images/network/subnetting.png"></p> 

Nếu lấy ví dụ trong hình làm tham chiếu, ta có **4 subnet**. Cụ thể là:

|Subnet|Địa chỉ mạng| Địa chỉ broadcast|Dải IP có thể dùng|
|:-:|:-:|:-:|:-:|
|A|192.168.10.0|192.168.10.63|192.168.10.1-62|
|B|192.168.10.64|192.168.10.127|192.168.10.65-126|
|C|192.168.10.128|192.168.10.191|192.168.10.129-190|
|D|192.168.10.192|192.168.10.255|192.168.10.193-254|

# Subnetting với kết nối Serial

Kết nối Serial được dùng để tạo một kết nối WAN nhờ sự hỗ trợ của nhà cung cấp dịch vụ, nơi cung cấp một leased line chuyên dụng cho khách hàng.
Các tổ chức doanh nghiệp mua leased line để thiết lập kết nối WAN nhằm kết nối với các văn phòng và địa điểm kinh doanh khác nhau, có thể cách nhau hàng nghìn dặm. Doanh nghiệp phải trả phí cho các leased line này theo dịch vụ đã sử dụng. Tương ứng, nhà cung cấp dịch vụ tính phí dựa trên băng thông mà họ cung cấp cho khách hàng.

Một trong những kết nối được dùng cho leased line là Serial Connection trong mạng dựa trên Cisco. Nếu hai đầu mạng đều là router Cisco thì cơ chế đóng gói mặc định gọi là HDLC sẽ được router Cisco sử dụng. Tuy nhiên, điều này sẽ không hoạt động với router của hãng khác (tức không phải Cisco) vì giao thức này là độc quyền của Cisco.
Nếu muốn thiết lập kết nối thành công với router của hãng khác thì ta phải cấu hình cùng một giao thức tầng liên kết dữ liệu trên cả hai router. Nếu có sự không khớp thì kết nối không thể thiết lập và trạng thái interface sẽ là down ở tầng data link.

Nếu ta đang cấu hình một router Cisco mới thì mặc định giao thức tầng liên kết dữ liệu sẽ là HDLC, nhưng nếu là thiết bị cũ thì ta nên kiểm tra cấu hình và nếu có khác nhau thì phải cấu hình cùng một giao thức trên cả hai router.

Trong ví dụ này, ta sẽ cấu hình một Serial Connection giữa các router. Ta sẽ đặt clock rate là 56000, tương ứng tốc độ 56 Kbps. Trong thực tế, phía DCE của cáp được nhà cung cấp dịch vụ cấu hình. Thông thường, clock speed được cấu hình theo băng thông mà nhà cung cấp đang cung cấp. Ví dụ sau dùng một cáp serial để mô phỏng nhà cung cấp dịch vụ. Ta sẽ cấu hình clock speed trên router có phía DCE được kết nối.

## Cấu hình mặc định

Ở bước đầu tiên, ta phải chia subnet cho mạng trong topology và gán địa chỉ IP chính xác. Trong topology ví dụ của tôi, tôi đã chia mạng 192.168.10.0/24 thành 4 mạng con. Sau đó, tôi cấu hình router và switch. Tiếp theo, tôi nối bốn router bằng cáp serial. Nếu bạn không biết cách cấu hình, bạn có thể học từ [đây](https://github.com/wasny0ps/Network-Notes/tree/main/0x5%20-%20Router%20%26%20Switch%20Configration).

Để dùng kết nối serial, bạn phải dùng cáp serial với module **NIM-2T** trong router. Khi tắt router, bạn có thể gắn module này vào cổng vật lý như hình.

<p align="center"><img width="500" height="400" src="/assets/images/network/serial.png"></p> 

Sau đó, bạn có thể nối cáp serial vào cổng serial của router. Trước khi cấu hình interface serial, topology ví dụ của tôi trông như sau:

<p align="center"><img  src="/assets/images/network/subnetted--topology.png"></p> 


## Cấu hình giao diện Serial

Bây giờ, chúng ta sẽ gán địa chỉ IP và subnet mask trong CLI của từng router và đặt clock rate 56000 cho `Router 0,Router 1,Router 2`. Sau đó, tôi sẽ dùng static routing. Nếu bạn không biết static routing, hãy học từ [đây](https://github.com/wasny0ps/Network-Notes/tree/main/0x7%20-%20Static%20%26%20Default%20Routing).


Vì có khá nhiều lệnh cần viết, tôi thấy tiện hơn khi chuyển chúng vào một file theo thứ tự thay vì viết hết ở đây. Bạn có thể truy cập toàn bộ lệnh từ [đây](https://github.com/wasny0ps/Network-Notes/blob/main/0x4%20-%20Subnet%20Mask%20Calculate%20%26%20Subnetting/source/configration.txt).

Đây là topology hoàn chỉnh và [file](https://github.com/wasny0ps/Network-Notes/blob/main/0x4%20-%20Subnet%20Mask%20Calculate%20%26%20Subnetting/source/subnetting_with_serial_connection_routing_with_default.pkt).

<p align="center"><img  src="/assets/images/network/end_topology.png"></p> 


