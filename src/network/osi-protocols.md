---
title: OSI Protocols
---

# Mô hình OSI

OSI là viết tắt của Open Systems Interconnection. Mô hình này được ISO – ‘International Organization for Standardization‘ phát triển vào năm 1984. Đây là **kiến trúc 7 tầng, trong đó mỗi tầng có chức năng riêng để thực hiện**. Cả 7 tầng này phối hợp với nhau để truyền dữ liệu từ người này sang người khác trên toàn cầu.

<p align="center"><img src="/assets/images/network/OSI_Model.png"></p>



## Tầng Vật lý (Layer 1)

**Tầng thấp nhất của mô hình tham chiếu OSI** là tầng vật lý. Nó chịu trách nhiệm về kết nối vật lý thực tế giữa các thiết bị. Tầng vật lý chứa thông tin dưới dạng **bit**. Nó chịu trách nhiệm truyền từng bit từ node này sang node khác. **Khi nhận dữ liệu, tầng này sẽ nhận tín hiệu rồi chuyển nó thành các số 0 và 1 và gửi lên tầng Data Link, nơi frame sẽ được ghép lại**. 

> Hub, Repeater, Modem, Cable là các thiết bị thuộc tầng vật lý.


## Tầng Liên kết dữ liệu (Layer 2)

Tầng liên kết dữ liệu **chịu trách nhiệm truyền thông điệp từ node tới node**. Chức năng chính của tầng này là đảm bảo việc truyền dữ liệu từ node này sang node khác qua tầng vật lý diễn ra không lỗi. Khi một packet đến mạng, trách nhiệm của DLL là truyền nó tới Host bằng **địa chỉ MAC**. Tầng Data Link được chia thành hai lớp con: 

- **Logical Link Control (LLC)**
* **Media Access Control (MAC)**

Packet nhận từ tầng Network sẽ được chia tiếp thành các frame tùy theo kích thước **frame** của **NIC(Network Interface Card)**. **DLL cũng đóng gói địa chỉ MAC của bên gửi và bên nhận trong phần header**. 

Địa chỉ MAC của bên nhận được **lấy bằng cách gửi một yêu cầu ARP(Address Resolution Protocol)** ra đường truyền với câu hỏi “Ai đang giữ địa chỉ IP đó?” và host đích sẽ phản hồi bằng địa chỉ MAC của nó.

> Packet ở tầng Data Link được gọi là **Frame**. **Switch và Bridge là các thiết bị của tầng Data Link**.

## Tầng Mạng (Layer 3)

Tầng mạng làm việc để truyền dữ liệu từ host này sang host khác nằm trong các mạng khác nhau. **Nó cũng phụ trách chọn đường định tuyến packet theo đường ngắn nhất để truyền packet, từ số lượng tuyến đường có sẵn**. **Địa chỉ IP của bên gửi và bên nhận được tầng mạng đặt vào header**. Các chức năng của tầng Network là:  

- **Routing**: Các giao thức tầng mạng xác định tuyến đường nào phù hợp từ nguồn đến đích. Chức năng này của tầng mạng được gọi là routing.
* **Logical Addressing**: Để nhận diện duy nhất từng thiết bị trên internetwork, tầng mạng định nghĩa một sơ đồ địa chỉ. Địa chỉ IP của bên gửi và bên nhận được tầng mạng đặt vào header. Địa chỉ như vậy giúp phân biệt từng thiết bị một cách duy nhất và trên phạm vi toàn cầu.

> **Segment** ở tầng Network được gọi là Packet. Tầng mạng được triển khai bởi các thiết bị mạng như **router**.

> Một số firewall hoạt động ở tầng Network. 

## Tầng Vận chuyển (Layer 4)

**Tầng vận chuyển cung cấp dịch vụ cho tầng ứng dụng và nhận dịch vụ từ tầng mạng**. Dữ liệu ở tầng vận chuyển được gọi là **Segment**. Nó chịu trách nhiệm chuyển trọn vẹn thông điệp từ đầu đến cuối. **Tầng vận chuyển cũng cung cấp cơ chế xác nhận truyền dữ liệu thành công và truyền lại dữ liệu nếu phát hiện lỗi**. Tầng Transport được gọi là **trái tim của mô hình OSI**. Các chức năng của tầng vận chuyển như sau:  

- **Segmentation and Reassembly**: Tầng này nhận thông điệp từ tầng session và chia nó thành các đơn vị nhỏ hơn. **Mỗi segment tạo ra đều có một header đi kèm. Tầng vận chuyển ở trạm đích sẽ ghép lại thông điệp**.

* **Service Point Addressing**: Để gửi thông điệp tới đúng tiến trình, header của tầng vận chuyển có một loại địa chỉ gọi là service point address hoặc port address. Nhờ chỉ rõ địa chỉ này, **tầng vận chuyển đảm bảo thông điệp được gửi đến đúng tiến trình**.

> Dữ liệu ở tầng Transport được gọi là **Segments**. Tầng vận chuyển do hệ điều hành điều khiển. Nó là một phần của hệ điều hành và **giao tiếp với tầng Application bằng các system call**. 

## Tầng Phiên (Layer 5)

Tầng này chịu trách nhiệm về **thiết lập kết nối, duy trì phiên làm việc, xác thực và đảm bảo an toàn**.

- **3 tầng bên dưới (bao gồm cả tầng Session) được tích hợp thành một tầng duy nhất trong mô hình TCP/IP với tên “Application Layer”**.

> Việc triển khai 3 tầng này do chính ứng dụng mạng thực hiện. Chúng còn được gọi là Upper Layers hoặc Software Layers. 

## Tầng Trình bày (Layer 6)

Tầng trình bày còn được gọi là **Translation layer**. Dữ liệu từ tầng ứng dụng được lấy ra ở đây và xử lý theo định dạng cần thiết để truyền qua mạng. Các chức năng của tầng trình bày là: 

- **Translation**
- **Encryption/ Decryption**
- **Compression**


##  Tầng Ứng dụng (Layer 7)

Ở đỉnh của ngăn xếp các tầng trong mô hình tham chiếu OSI là tầng Ứng dụng, được triển khai bởi các ứng dụng mạng. **Các ứng dụng này tạo ra dữ liệu cần được truyền qua mạng**. Tầng này cũng đóng vai trò như một cửa sổ để các dịch vụ ứng dụng truy cập mạng và hiển thị thông tin nhận được cho người dùng. 

> Một số firewall hoạt động ở tầng Application.

## ICMP

Internet Control Message Protocol (ICMP) là một **giao thức tầng mạng** được các thiết bị mạng dùng để chẩn đoán các vấn đề giao tiếp mạng. ICMP chủ yếu được dùng để xác định xem dữ liệu có đến đúng đích đúng lúc hay không. Thông thường, giao thức ICMP được dùng trên các thiết bị mạng như router. **ICMP rất quan trọng cho báo lỗi và kiểm tra, nhưng nó cũng có thể bị dùng trong các cuộc tấn công distributed denial-of-service (DDoS)**.

Mục đích chính của ICMP là **báo lỗi**. Khi hai thiết bị kết nối qua Internet, ICMP sẽ tạo ra lỗi để báo lại cho thiết bị gửi trong trường hợp dữ liệu không đến đúng đích. Ví dụ, nếu một packet quá lớn đối với router, router sẽ loại packet đó và gửi một thông điệp ICMP quay lại nguồn gốc ban đầu của dữ liệu.

Một mục đích phụ của ICMP là **thực hiện chẩn đoán mạng**; các tiện ích dòng lệnh quen thuộc như traceroute và ping đều hoạt động bằng ICMP. Tiện ích traceroute được dùng để hiển thị đường định tuyến giữa hai thiết bị Internet. Đường định tuyến là đường vật lý thực tế của các router được kết nối mà một yêu cầu phải đi qua trước khi đến đích. Hành trình giữa một router và router khác được gọi là một ‘hop’, và traceroute cũng báo thời gian cần cho từng hop trên đường đi. Điều này hữu ích để xác định nguồn gốc độ trễ mạng.

Không giống Internet Protocol (IP), **ICMP không gắn với giao thức tầng vận chuyển như TCP hoặc UDP**. Điều này khiến ICMP trở thành một **giao thức không kết nối**: một thiết bị không cần mở kết nối với thiết bị khác trước khi gửi thông điệp ICMP. Lưu lượng IP bình thường được gửi bằng TCP, nghĩa là bất kỳ hai thiết bị nào trao đổi dữ liệu sẽ phải thực hiện một TCP handshake trước để đảm bảo cả hai đều sẵn sàng nhận dữ liệu. **ICMP không mở kết nối theo cách này**. Giao thức ICMP cũng **không cho phép nhắm tới một port cụ thể trên thiết bị**.

## TCP 

TCP (Transmission Control Protocol) là một trong những giao thức chính của bộ giao thức Internet. **Nó nằm giữa tầng Application và Network** và được dùng để cung cấp dịch vụ truyền tin cậy. Đây là một **giao thức hướng kết nối** cho truyền thông, giúp trao đổi thông điệp giữa các thiết bị khác nhau qua mạng. Internet Protocol (IP), giao thức thiết lập kỹ thuật gửi data packet giữa các máy tính, hoạt động cùng với TCP. TCP dùng cơ chế bắt tay ba bước để thiết lập một kết nối tin cậy.

### Bắt tay ba bước

Kết nối là full duplex, và hai bên đồng bộ (SYN) và xác nhận (ACK) lẫn nhau. Việc trao đổi bốn cờ này diễn ra trong ba bước là SYN, SYN-ACK và ACK như hình bên dưới.

<p align="center"><img src="/assets/images/network/tcp_three_way_handshake.png"></p>

- **Bước 1 (SYN)** : Ở bước đầu tiên, client muốn thiết lập kết nối với server nên gửi một segment có SYN (Synchronize Sequence Number), cho server biết client sắp bắt đầu giao tiếp và bắt đầu các segment với sequence number nào.

- **Bước 2 (SYN+ACK)** : Server phản hồi yêu cầu của client với các bit tín hiệu SYN-ACK được bật. Acknowledgement (ACK) biểu thị phản hồi cho segment đã nhận, còn SYN biểu thị sequence number mà server dự định bắt đầu các segment bằng nó.

- **Bước 3 (ACK)** : Ở phần cuối, client xác nhận phản hồi của server và cả hai cùng thiết lập một kết nối tin cậy để bắt đầu truyền dữ liệu thực sự.

## UDP

UDP (User Datagram Protocol) là một giao thức truyền thông được dùng trên Internet. Nó đặc biệt hữu ích cho **các truyền tải nhạy với thời gian** như phát video hoặc truy vấn DNS. Nó hoạt động bằng cách tạo ra một mô hình truyền không kết nối, **chỉ cần cơ chế giao thức tối thiểu**.

UDP cho phép giao tiếp giữa các tiến trình và hoạt động bằng cách dùng các giao thức Internet để đóng gói dữ liệu trong một UDP packet. Packet này có thông tin header gồm port nguồn, port đích, độ dài packet và checksum. Sau khi UDP packet được đóng gói vào một Internet Protocol packet, chúng sẽ được gửi đến đích.

Nó phù hợp nhất cho các dịch vụ thời gian thực như:

- Gaming
- Voice hoặc video communication
- Hội nghị trực tuyến

> Một nhược điểm của UDP là nó là một **giao thức không tin cậy** vì không yêu cầu thiết lập kết nối trước khi truyền dữ liệu.

## TCP vs UDP

| Basics | TCP| UDP|
|---|---|---|
|Type of Service|TCP is a connection-oriented protocol. Connection-orientation means that the communicating devices should establish a connection before transmitting data and should close the connection after transmitting the data.|UDP is the Datagram-oriented protocol. This is because there is no overhead for opening a connection, maintaining a connection, and terminating a connection. UDP is efficient for broadcast and multicast types of network transmission.|
|Reliability	|TCP is reliable as it guarantees the delivery of data to the destination router.	|The delivery of data to the destination cannot be guaranteed in UDP.|
|Error checking mechanism	| TCP provides extensive error-checking mechanisms because of it provides flow control and acknowledgment of data.|UDP has only the basic error checking mechanism using checksums.|
|Acknowledgment| An acknowledgment segment is present.| No acknowledgment segment.|
|Sequence| Sequencing of data is a feature of TCP. This means that packets arrive in order at the receiver.	|There is no sequencing of data in UDP. If the order is required, it has to be managed by the application layer.|
|Speed| TCP is comparatively slower than UDP.	|UDP is faster, simpler, and more efficient than TCP.|
|Retransmission| Retransmission of lost packets is possible in TCP, but not in UDP.	|There is no retransmission of lost packets in UDP.|
|Header Length| TCP has a 20-60 bytes variable length header.	|UDP has an 8 bytes fixed-length header.|
|Weight| TCP is heavy-weight.	| UDP is lightweight.|
|Handshaking Techniques|Uses handshakes such as SYN, ACK, SYN-ACK| It’s a connectionless protocol which means no handshake.|
|Broadcasting	|TCP doesn’t support Broadcasting.| UDP supports Broadcasting.|
|Stream Type| The TCP connection is a byte stream.	| UDP connection is message stream.|
|Overhead	| Low but higher than UDP.	| Very low.|

# Common Used Protocols

| Protocol | Function | Used Ports | Used Transport Protcol |
|:---|:---|:---:|:---:|
|FTP - File Transfer Protocol| It is a standard communication protocol used for the transfer of computer files from a server to a client on a computer network. | 21 | TCP|
|SSH - Secure Shell|It is a cryptographic network protocol for operating network services securely over an unsecured network. It's most notable applications are remote login and command-line execution. | 22 | TCP|
|TELNET - Telecommunication Network| It is a client/server application protocol that provides access with unsafe way to virtual terminals of remote systems on local area networks or the Internet. | 23 | TCP|
|SMTP - Simple Mail Transfer Network|It is an Internet standard communication protocol for electronic mail transmission. Mail servers and other message transfer agents use SMTP to send and receive mail messages. | 25 | TCP|
|DNS - Domain Name Server|It is a hierarchical and distributed naming system for computers, services, and other resources in the IP networks. It associates various information with domain names assigned to each of the associated entities. | 53 | TCP/UDP|
|DHCP - Dynamic Host Configration Protocol|It is a network management protocol used on IP networks for automatically assigning IP addresses and other communication parameters to devices connected to the network using a client–server architecture. | 67,68 | UDP|
|TFTP - Trivial File Transfer Protocol| It is a simple lockstep File Transfer Protocol which allows a client to get a file from or put a file onto a remote host. One of its primary uses is in the early stages of nodes booting from a local area network. | 69 | UDP|
|HTTP - Hypertext Transfer Protocol|It is an application layer protocol in the Internet protocol suite model for distributed, collaborative, hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web, where hypertext documents include hyperlinks to other resources that the user can easily access. | 80 | TCP|
|HTTPS - Secure Hypertext Transfer Protocol|It is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website. HTTPS is encrypted in order to increase security of data transfer. | 443 | TCP|
|POP3 - Post Office Protocol|It is an application-layer Internet standard protocol used by e-mail clients to retrieve e-mail from a mail server. | 110 | TCP|
|SNMP - Simple Network Management Protocol |It is an Internet Standard protocol for collecting and organizing information about managed devices on IP networks and for modifying that information to change device behaviour. | 161,162 | TCP/UDP|

