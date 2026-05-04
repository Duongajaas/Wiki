---
title: VPN and IPsec
---

# VPN

<p align="center"><img height="300" src="/assets/images/network/VPN.png"></p>

VPN là viết tắt của virtual private network. Virtual private network (VPN) là công nghệ tạo ra **kết nối an toàn và được mã hóa trên một mạng kém an toàn hơn**, chẳng hạn như Internet. VPN là cách mở rộng một mạng riêng bằng cách sử dụng mạng công cộng như Internet. Cái tên chỉ ra rằng đây là một mạng “riêng” ảo, cho phép người dùng tham gia vào một mạng cục bộ dù đang ở vị trí từ xa. Nó sử dụng các giao thức tunneling để thiết lập kết nối an toàn.

|Ưu điểm của VPN|Nhược điểm của VPN|
|-|-|
|Truy cập từ xa vào mạng riêng|Tốc độ kết nối chậm|
|Bảo mật và riêng tư|Tải CPU cao hơn|
|Truy cập tài nguyên bị chặn theo vùng|Có thể bị ghi nhật ký hoạt động và kiểm tra lưu lượng|
|Không cần phần cứng bổ sung|Định tuyến không tối ưu hoặc không mong muốn|


## Các loại VPN

Có rất nhiều loại VPN khác nhau, nhưng bạn chắc chắn nên nắm ba loại chính sau:

- **SSL VPN**
- **Site-to-site VPN**
- **Client-to-Server VPN**

### SSL VPN

<p align="center"><img height="275" src="/assets/images/network/SSL_VPN.png"></p>

Không phải lúc nào mọi nhân viên trong công ty cũng có laptop của công ty để làm việc từ xa. Trong giai đoạn khủng hoảng corona vào mùa xuân 2020, nhiều công ty gặp vấn đề không đủ thiết bị cho nhân viên. Trong những trường hợp như vậy, người ta thường dùng thiết bị cá nhân (PC, laptop, tablet, điện thoại). Khi đó, công ty sẽ dùng giải pháp SSL-VPN, thường được **triển khai qua một thiết bị phần cứng tương ứng**.

Điều kiện cần thường là một trình duyệt hỗ trợ HTML-5 để truy cập trang đăng nhập của công ty. Trình duyệt hỗ trợ HTML-5 gần như có trên mọi hệ điều hành. Việc truy cập được bảo vệ bằng tên người dùng và mật khẩu.

### Site-to-Site VPN

<p align="center"><img height="275" src="/assets/images/network/Site_to_Site_VPN.png"></p>

A site-to-site VPN về cơ bản là một mạng riêng được thiết kế để che giấu các intranet riêng và cho phép người dùng của các mạng an toàn này truy cập tài nguyên của nhau. **Site-to-site VPN hữu ích nếu công ty có nhiều địa điểm, mỗi nơi có một mạng cục bộ riêng được nối vào WAN**. Nó cũng hữu ích nếu bạn có hai intranet riêng biệt và muốn gửi file giữa chúng mà người dùng của một intranet không truy cập trực tiếp vào intranet còn lại.

**Site-to-site VPN chủ yếu được dùng trong các công ty lớn**. Chúng phức tạp khi triển khai và **không linh hoạt bằng SSL VPN**. Tuy nhiên, chúng là **cách hiệu quả nhất để đảm bảo giao tiếp trong và giữa các phòng ban lớn**.

### Client-to-Server VPN

Kết nối qua VPN client có thể hình dung như **nối PC ở nhà với công ty bằng một dây nối dài**. Nhân viên có thể kết nối vào mạng công ty từ văn phòng tại nhà qua kết nối an toàn và hoạt động như đang ngồi trong văn phòng. Tuy nhiên, **trước hết phải cài đặt và cấu hình VPN client trên máy tính**. Điều này có nghĩa là người dùng không kết nối Internet qua ISP của mình, mà thiết lập kết nối trực tiếp thông qua nhà cung cấp VPN. Điều này thực chất rút ngắn giai đoạn tunnel của hành trình VPN. Thay vì dùng VPN để **tạo tunnel mã hóa nhằm che giấu kết nối Internet hiện có, VPN có thể tự động mã hóa dữ liệu trước khi dữ liệu được cung cấp cho người dùng**.

**Đây là một dạng VPN ngày càng phổ biến**, đặc biệt hữu ích cho người dùng public WLAN không an toàn. Nó **ngăn bên thứ ba truy cập và xâm phạm kết nối mạng** và **mã hóa dữ liệu cho đến tận nhà cung cấp**. Nó cũng **ngăn ISP truy cập dữ liệu vốn vì lý do nào đó vẫn chưa được mã hóa và vượt qua mọi giới hạn trên truy cập Internet của người dùng**.

**Ưu điểm của kiểu truy cập VPN này là hiệu quả cao hơn và khả năng truy cập phổ quát vào tài nguyên công ty**. Nếu có hệ thống điện thoại phù hợp, nhân viên có thể kết nối vào hệ thống bằng headset và làm việc như đang ở công ty. Ví dụ, khách hàng thậm chí không thể biết nhân viên đang ở văn phòng công ty hay đang làm việc tại nhà.

## Khái niệm Tunnel

VPN khác nhau về kiến trúc và giao thức vận chuyển dùng để thiết lập overlay network. Kiến trúc VPN có thể là point-to-point hoặc site-to-site. VPN point-to-point được dùng để cung cấp cho một thiết bị quyền truy cập từ xa vào mạng riêng. Ngược lại, site-to-site VPN được dùng để thiết lập một **cầu nối giả định giữa hai mạng riêng như thể chúng được nối trực tiếp với nhau**:

<p align="center"><img height="300" src="/assets/images/network/VPN_architecture.png"></p>

Kết nối vận chuyển được thiết lập giữa hai thực thể VPN thường được gọi là tunnel và quá trình định tuyến lưu lượng qua tunnel đó được gọi là **tunneling**. Điều này chỉ xảy ra bằng phần mềm mà không cần phần cứng bổ sung. Tất nhiên cũng có các hộp VPN phần cứng, nhưng chúng thường dùng cho những mục đích đòi hỏi biện pháp bảo mật rất mạnh.

Theo mô hình nhiều tầng ISO/OSI, tunnel về mặt lý thuyết có thể được thiết lập ở bất kỳ tầng nào, bắt đầu từ Data link layer (L2) đi qua Network Layer (L3) tới các tầng cao hơn. Hơn nữa, overlay network có thể là mạng L2 hoặc L3. Trong trường hợp L2, ta đang nói tới bridging (hoặc switching), còn ở L3 là routing. Ví dụ, một VPN có thể cung cấp dịch vụ L2 phía trên transport layer TCP.

## Giao thức VPN

Các giao thức VPN thường được thiết kế cho một tổ hợp cụ thể giữa lớp overlay và lớp transport. Những giao thức VPN phổ biến nhất là:

- **PPTP (Point-to-Point Tunneling Protocol):** provides a point-to-point L2 service (PPP) over TCP (Transport layer). This protocol was once very popular but is now obsolete.
- **PPPoE (Point-to-Point over Ethernet):** provides a point-to-point L2 service (PPP) over Ethernet (L2).
- **L2TP (Layer 2 Tunneling Protocol):** provides a point-to-point L2 service (PPP) over UDP (Transport layer).
- **IPsec (Internet Protocol Security):** provides both point-to-point and site-to-site L3 service over IPv4 and v6 (L3) depending on the operation mode.
- **SSL & TLS:** Both provide a point-to-point L3 service over a secure transport connection established by using either the SSL or TLS protocol.
- **SSTP (Secure Socket Tunneling Protocol):** provides a point-to-point L2 service (PPP) over SSL or TLS secure connection. It was designed to replace less secure PPTP and L2TP.
- **DTLS (Datagram Transport Layer Security):** provides a point-to-point L3 service over UDP (Transport layer).
- **OpenVPN:** It is an open-source VPN that can provide both a point-to-point and site-to-site L3 service over a secure transport connection (L4) established by using either the SSL or TLS protocol.
- **SSH Tunnels:** They are used for tunneling connections using SSH. They are also a kind of VPN, but provide an L4 service, so it’s rather called port forwarding. We mention SSH tunnels because they provide a transport service over an SSH connection and don’t need any special software (VPN server or client) to be installed on both sides of the tunnel. For more information and usage examples see the article on SSH tunneling and proxying.

## Tính riêng tư của VPN

Mặc dù **VPN cung cấp bảo mật bằng cách mã hóa dữ liệu truyền đi, nó không đảm bảo tính riêng tư**. Máy chủ VPN từ xa có thể ghi lại tên người dùng, địa chỉ IP và hoạt động của người dùng. Ngoài ra, một số dịch vụ có thể dùng định vị dựa trên địa chỉ IP hoặc hệ thống định vị Wi-Fi để tiết lộ vị trí người dùng, đôi khi chính xác đến bất ngờ. Khi dùng máy chủ VPN, dịch vụ vị trí chỉ thấy vị trí của máy chủ VPN chứ không phải vị trí của client. Vậy nếu ta không muốn tiết lộ danh tính hoặc vị trí cho máy chủ VPN hay dịch vụ từ xa thì sao? Ta có thể thiết lập một tunnel VPN tới một máy chủ VPN khác (hop) bên trong tunnel VPN. Ta thậm chí có thể lặp lại việc này nhiều lần bằng cách lồng các tunnel VPN. Cách lồng này được gọi là **multi-hop VPN** hoặc **onion routing**. Ở mỗi hop tiếp theo, một lớp VPN lồng bên trong sẽ bị bóc đi, giống như bóc từng lớp của củ hành:

<p align="center"><img width="700" src="/assets/images/network/onion_routing.png"></p>

Cách tiếp cận này được dùng bởi mạng relay Tor nổi tiếng. Vì VPN client tới đích (điểm cuối của tunnel trong cùng) một cách gián tiếp qua nhiều hop, rất khó để tiết lộ địa chỉ IP thật và danh tính của client. Tất nhiên, điều này phải đánh đổi bằng overhead cao hơn và tốc độ kết nối ảo chậm hơn.



## IPsec

<p align="center"><img width="600" src="/assets/images/network/ipsec.png"></p>

IPSec là giao thức bảo mật do IETF (Internet Engineering Task Force) phát triển để **đáp ứng nhu cầu bảo mật của giao thức IP bằng cách dùng mã hóa và các dịch vụ an ninh**. Nhờ giao thức này, dữ liệu đến các đích cần đến một cách an toàn trên mạng. **Nó hoạt động ở network layer của IPSec, cung cấp khả năng bảo vệ và xác thực IP packet giữa các thiết bị IPSec**. Vì IPSec hoạt động ở network layer, **nó mã hóa dữ liệu độc lập với ứng dụng và cho phép dữ liệu đi dễ dàng trên Internet với phần header mà nó tạo ra sau khi dùng mật khẩu--. Do đó, nó tạo nên nền tảng của công nghệ VPN (Virtual Private Network) ngày nay**. Các thuật ngữ IPsec và VPN thường bị nhầm lẫn với nhau. **VPN dùng để thiết lập một mạng ảo giữa hai đầu cuối**. **IPSec cung cấp các chức năng tăng cường bảo mật cho các kết nối VPN đã tạo**. Có nhiều cách khác nhau để tạo VPN ở layer 2 và layer 3. IPSec chỉ là một trong những cách đó. Ngày nay, cùng với sự phát triển của Internet, hai khái niệm này gắn chặt với nhau vì có thể tạo kết nối IPSec VPN rất dễ dàng.

Vì các giao thức IPSec hoạt động ở network layer, chúng **linh hoạt hơn các giao thức bảo mật khác**. SSL (Secure Socket Layer - Secure Socket Layer), TLS (Transport Layer Security - Transit Layer Security), SSH (Secure Shell - Secure Shell) hoạt động ở tầng 4 và cao hơn. **IPSec có thể bảo vệ các giao thức tầng 4 và cao hơn, bao gồm TCP và UDP**. Một ưu điểm của **IPSec so với các giao thức bảo mật khác là nó có thể hoạt động độc lập với application layer, tức là phần mềm của người dùng**. Tuy nhiên, để dùng các giao thức khác (như SSL), phần mềm của người dùng phải hỗ trợ giao thức đó.

Khung IPSec bao gồm 5 khối cơ bản:

<p align="center"><img height="350" src="/assets/images/network/IPsec_framework.png"></p>

**IPSec có thể cung cấp truyền dữ liệu an toàn giữa gateway với nhau, giữa client với nhau và giữa gateway với client. Sử dụng khung IPSec, có thể hiện thực 4 yêu cầu bảo mật cơ bản.**

### Tính bảo mật (Confidentiality)

Nó đảm bảo tính bảo mật bằng các phương pháp mã hóa của IPSec. Mức độ bảo mật phụ thuộc vào độ dài khóa dùng trong thuật toán mã hóa. Khóa càng ngắn thì càng dễ bị bẻ, và lỗ hổng càng dễ xuất hiện. Ví dụ, một khóa 64 bit có thể mất khoảng 1 năm để máy tính bẻ khóa.

- **Des:** Là hệ thống dùng kỹ thuật mã hóa đối xứng 56 bit. Nếu dữ liệu được mã hóa bằng cùng một khóa và mở bằng chính khóa đó, nghĩa là đang dùng thuật toán đối xứng.
- **3Des:** Là biến thể của DES. Nó bảo mật hơn DES bằng cách dùng 3 lần mã hóa độc lập 56 bit.
- **AES:** Là hệ thống an toàn hơn 3Des và DES. Nó có ba độ dài khóa khác nhau: 128 bit, 192 bit và 256 bit.
- **Seal:** Là hệ thống do Phillip Rogaway và Don Coppersmith phát triển năm 1993, dùng khóa dài 160 bit.

### Tính toàn vẹn (Integrity)

Nhờ dùng các thuật toán toàn vẹn dữ liệu của IPSec, ta đảm bảo dữ liệu truyền đi tới đích mà không bị thay đổi. **HMAC (Hashed Message Authentication Codes - Encrypted Message Authentication Code) là thuật toán bảo vệ tính toàn vẹn của dữ liệu nhờ giá trị "hash"**. Mục đích của nó không phải là mã hóa dữ liệu, mà là đảm bảo dữ liệu đúng bằng cách ngăn dữ liệu bị thay đổi trên đường đi. Ở phía gửi, dữ liệu được mã hóa và tạo ra giá trị hash bằng thuật toán hash. Ở phía nhận, ta kiểm tra xem giá trị hash sinh ra bằng cách đảo thuật toán hash có giống giá trị nhận được từ phía gửi hay không. Nếu giống, tính toàn vẹn của dữ liệu được đảm bảo; nếu khác, dữ liệu đã bị thay đổi và sẽ không được dùng. Có hai loại thuật toán HMAC:

- **HMAC – MD5:** Dùng dữ liệu mã hóa 128 bit. Đầu ra của thuật toán cũng là giá trị hash 128 bit.
- **HMAC – SHA1:** Dùng kỹ thuật keying dài 160 bit. Thuật toán này mạnh hơn HMAC – MD5 về mặt bảo mật.


### Xác thực (Authentication)

Nói chung, việc xác thực một tài liệu được thực hiện bằng chữ ký. Trên thiết bị điện tử, xác thực được cung cấp thông qua các gói chứa mật khẩu đặc biệt của thiết bị gửi, gọi là digital signature. IPSec dùng hai thuật toán khác nhau để cung cấp xác thực: PSK và RSA.

- **PSK:** Viết tắt của pre-shared secret keying method. Một giá trị số được xác định để cung cấp xác thực trên thiết bị sẽ **được nhập thủ công vào các thiết bị cần thiết**. Sau khi mỗi thiết bị biết giá trị của thiết bị đối diện, mạng trở nên an toàn và việc truyền dữ liệu bắt đầu. Giá trị số đã nhập được chấp nhận như chữ ký của thiết bị và việc xác thực được cung cấp.
- **RSA:** **Là thuật toán mã hóa bất đối xứng**. Thay vì dùng một khóa duy nhất như mã đối xứng, nó dùng hai khóa: một private và một public. Điều này đặc biệt đúng với các hệ thống nhiều người dùng. **Yếu tố quan trọng nhất ảnh hưởng tới độ tin cậy và tốc độ của hệ thống là độ dài của khóa được dùng**.

Một phương pháp khác để đảm bảo xác thực là giao thức **IKE (Internet Key Exchange)**. **IKE thực hiện xác thực qua nhiều cách như username/password, mật khẩu một lần và chứng chỉ số**.

### Trao đổi khóa an toàn

**IPSec dùng các thuật toán gọi là Diffie-Hellman để trao đổi public key giữa các thiết bị**. Cách đơn giản nhất để mã hóa và giải mã giữa các thiết bị là trao đổi khóa. Nhờ Diffie-Hellman, gọi tắt là DH, việc trao đổi khóa giữa các thiết bị có thể diễn ra trơn tru ngay cả khi truyền dữ liệu qua kênh không an toàn.


## IPSec Protocols

As shown in the figure before, IPSec protocols are ranked 1st in the IPSec building block. There are 2 types, AH and ESP.

### AH (Authentication Header)

The AH protocol is generally used when privacy is not required or allowed. In order to prevent changes that may occur during transmission and to protect the integrity of the sent packet, the IP packet is given a sequence number. **If the packages reach the recipient side in a way that does not match the sequence number, the packages are not accepted**. However, since **AH does not provide privacy, it can create a security vulnerability if used alone**.

### ESP (Encapsulating Security Payload)

The ESP protocol can provide both **privacy and authentication**. This protocol primarily **encrypts IP packets with sequence numbers given by AH using specified algorithms** and decrypts them using the same algorithms when they reach the destination. Thus, the vulnerability that may occur by AH is prevented.

AH and ESP protocols can be applied to IP packets in two different ways.

#### Transport Mode

In this mode, security is a feature provided only at the Transport layer and above from the OSI layers. Transport mode provides protection of IP packet with AH or ESP. While protection takes place over the payload portion of the packet, the actual IP address does not change. It can be used by devices within the same local network.

#### Tunnel Mode

In this mode, security is performed over the entire IP packet. The real IP packet is encrypted and encapsulated with the help of another IP packet. Generally, tunnel mode is used when data is going to traverse a different network. In tunnel mode, encryption is done on the gateway while data leaves the network. There is no need to use IPSec in internal networks.

