---
title: Security Devices
---

# Firewall
<p align="center"><img height="300" src="/assets/images/network/firewall.gif" /></p>

Firewall là thiết bị bảo mật mạng **giám sát lưu lượng mạng đi vào và đi ra** và **quyết định cho phép hay chặn lưu lượng cụ thể dựa trên một bộ quy tắc bảo mật đã định nghĩa**. Firewall đã là tuyến phòng thủ đầu tiên trong bảo mật mạng hơn 25 năm. Chúng tạo ra một ranh giới giữa các mạng nội bộ được bảo vệ và kiểm soát với các mạng bên ngoài không đáng tin cậy như Internet. **Firewall có thể là phần cứng, phần mềm, phần mềm dạng dịch vụ (SaaS), cloud công khai hoặc cloud riêng (ảo)**. Ngoài ra, firewall còn được chia thành hai nhóm theo cấu trúc.

## Firewall phần mềm

Firewall phần mềm là một dạng phần mềm đặc biệt chạy trên máy tính/server. Mục đích chính của nó là bảo vệ máy tính/server khỏi các nỗ lực điều khiển hoặc truy cập từ bên ngoài, tùy theo cách bạn cấu hình firewall. Firewall phần mềm cũng có thể được cấu hình để kiểm tra các yêu cầu đi ra đáng ngờ.

### Ưu điểm của Firewall phần mềm
- Hữu ích trong việc chặn một số website cụ thể.
- Có thể giám sát người dùng cấp thấp và kiểm soát của phụ huynh.
- Dễ bảo trì.
- Phù hợp cho người dùng gia đình.
- Có thể dễ dàng gán các mức truy cập và quyền khác nhau cho người dùng.

### Nhược điểm của Firewall phần mềm
- Cần cài đặt và nâng cấp trên từng máy riêng lẻ.
- Làm chậm hiệu năng hệ thống.
- Việc cài đặt khiến tài nguyên hệ thống bị tiêu tốn.
- Không hoạt động trên smart TV, máy chơi game, v.v.

## Firewall phần cứng
Đây là một thiết bị vật lý được thiết kế để thực hiện chức năng firewall. Firewall phần cứng có thể là một máy tính hoặc một thiết bị chuyên dụng đóng vai trò firewall. Firewall phần cứng thường được tích hợp vào router nằm giữa máy tính và cổng Internet.

### Ưu điểm của Firewall phần cứng
- Hoạt động độc lập nên ít dễ bị tấn công mạng hơn.
- Cài đặt bên ngoài nên không chiếm tài nguyên của server.
- Băng thông cao hơn giúp xử lý nhiều packet hơn mỗi giây.
- Giảm độ trễ.
- Hỗ trợ kết nối VPN để tăng bảo mật và mã hóa.

### Nhược điểm của Firewall phần cứng
- Thiết bị phần cứng chiếm thêm không gian.
- Cần nhân sự IT có kỹ năng.
- Nâng cấp khó khăn và không tiết kiệm chi phí vì có thể phải thay nhiều thiết bị.

## So sánh Firewall phần mềm và Firewall phần cứng	

|Tham số|Firewall phần mềm|Firewall phần cứng|
|:-:|-|-|
|Cấu hình|Cấu hình firewall phần mềm dễ dàng.|Cấu hình firewall phần cứng không dễ.|
|Hoạt động trên|Firewall phần mềm chạy trên hệ thống.|Firewall phần cứng không chạy trên hệ thống.|
|Cách hoạt động|Nó được cài trên các thiết bị riêng lẻ như máy tính và điện thoại, nhờ đó chặn người dùng hoặc thiết bị truy cập các thành phần riêng lẻ của mạng.|Cần đặt thiết bị giữa máy tính và Internet để nó không dễ bị truy cập. Việc cài đặt yêu cầu nối cáp mạng với firewall thay vì kết nối trực tiếp vào router.|
|Chi phí|Chi phí cài đặt thấp hơn, dù có thể tăng lên khi số lượng máy tính thay đổi.|Đắt hơn firewall phần mềm vì cần chi phí đầu tư ban đầu dựa trên mức bảo vệ.|
|Linh hoạt|Linh hoạt, bạn có thể chọn ứng dụng nào sẽ được cài.|Không linh hoạt như firewall phần mềm.|
|Cài đặt|Được cài bên trong từng hệ thống riêng lẻ.|Được cài bên ngoài hệ thống.|
|Bảo vệ|Bảo vệ từng hệ thống một và không áp dụng cho smart TV, máy chơi game, và các thiết bị khác.|Bảo vệ toàn bộ mạng cùng lúc.|
|Hiệu năng|Làm chậm hiệu năng máy tính.|Không ảnh hưởng đến hiệu năng máy tính.|
|Yêu cầu|Cần cài trên từng hệ thống riêng trong mạng.|Chỉ cần cài một thiết bị phần cứng cho cả mạng.|
|Chặn|Trong firewall phần mềm, có thể chặn nội dung dựa trên từ khóa.|Có thể chặn một domain hoặc website bằng firewall phần cứng.|


# WAF

<p align="center"><img height="300" src="/assets/images/network/WAF.gif" /></p>

Web Application Firewall, hay WAF, là công cụ bảo mật dùng để **giám sát, lọc và chặn các packet dữ liệu đi vào và đi ra từ web application hoặc website**. WAF có thể là **host-based**, **network-based** hoặc **cloud-based** và thường được **triển khai thông qua reverse proxy, đặt ở phía trước ứng dụng hoặc website**. WAF có thể chạy dưới dạng thiết bị mạng, plugin trên server hoặc dịch vụ cloud, kiểm tra từng packet và **phân tích logic tầng ứng dụng (Layer 7) theo quy tắc để lọc lưu lượng đáng ngờ hoặc nguy hiểm**.

- **WAF dựa trên mạng:** Thường là dạng phần cứng. Vì được cài đặt cục bộ nên độ trễ thấp, nhưng đây là **lựa chọn đắt nhất** và cũng **cần lưu trữ, bảo trì thiết bị vật lý**.
- **WAF dựa trên host:** Có thể tích hợp hoàn toàn vào phần mềm của ứng dụng. Giải pháp này rẻ hơn WAF dựa trên mạng và linh hoạt hơn. Nhược điểm là tiêu tốn tài nguyên server cục bộ, phức tạp khi triển khai và tốn chi phí bảo trì. Những thành phần này thường cần thời gian kỹ thuật và có thể khá tốn kém.
- **WAF dựa trên cloud:** Đây là lựa chọn dễ triển khai và chi phí thấp; thường chỉ cần thay đổi DNS để chuyển hướng lưu lượng. Cloud-based WAF cũng có **chi phí ban đầu rất thấp**, vì người dùng trả theo tháng hoặc theo năm cho bảo mật dưới dạng dịch vụ. Nó cũng có thể cung cấp giải pháp **được cập nhật thường xuyên để chống lại các mối đe dọa mới nhất mà không cần thêm công sức hay chi phí** từ phía người dùng.

# Honeypot

<p align="center"><img height="350" src="/assets/images/network/honeypot.png" /></p>

Honeynet là một mạng các honeypot được **thiết kế để trông giống một mạng thật**, bao gồm nhiều hệ thống, cơ sở dữ liệu, server, router và các tài sản số khác. Vì honeynet, hay hệ honeypot, mô phỏng cấu trúc rộng lớn của một mạng điển hình, nó thường giữ chân tội phạm mạng lâu hơn. Với quy mô của honeynet, ta cũng có thể thao túng môi trường, dụ đối thủ đi sâu hơn vào hệ thống để thu thập thêm thông tin về năng lực hoặc danh tính của họ.

# Unified Threat Management (UTM)

<p align="center"><img height="350" src="/assets/images/network/UTM.png" /></p>

UTM là khi nhiều tính năng hoặc dịch vụ bảo mật được gộp vào một thiết bị duy nhất trong mạng của bạn. Khi dùng UTM, người dùng mạng được bảo vệ bởi nhiều tính năng như antivirus, lọc nội dung, lọc email và web, chống spam, v.v. UTM giúp tổ chức gom các dịch vụ bảo mật CNTT vào một thiết bị, qua đó đơn giản hóa việc bảo vệ mạng. Nhờ vậy, doanh nghiệp có thể giám sát mọi mối đe dọa và hoạt động liên quan tới bảo mật qua một giao diện duy nhất. Cách này giúp bạn có khả năng quan sát đầy đủ và đơn giản hóa toàn bộ kiến trúc bảo mật hoặc không dây.

## Ngăn ngừa mất dữ liệu (DLP)

Khả năng ngăn ngừa mất dữ liệu mà bạn **có được từ một thiết bị UTM cho phép phát hiện các vụ rò rỉ dữ liệu và các nỗ lực exfiltration, rồi ngăn chặn chúng**. Để làm được điều đó, hệ thống DLP **giám sát dữ liệu nhạy cảm**, và khi phát hiện một nỗ lực từ kẻ tấn công muốn đánh cắp dữ liệu, nó sẽ chặn hành vi đó, **từ đó bảo vệ dữ liệu**.


# Hệ thống phát hiện xâm nhập (IDS)

<p align="center"><img src="/assets/images/network/IDS.png" /></p>

IDS quan sát lưu lượng mạng để tìm giao dịch độc hại và gửi cảnh báo ngay khi phát hiện. Đây là phần mềm **kiểm tra mạng hoặc hệ thống để tìm hoạt động độc hại hoặc vi phạm chính sách**. **Mỗi hoạt động trái phép hoặc vi phạm thường được ghi lại tập trung bằng hệ thống SIEM hoặc được thông báo tới quản trị viên**. IDS giám sát mạng hoặc hệ thống để phát hiện hoạt động độc hại và bảo vệ mạng máy tính khỏi truy cập trái phép từ người dùng, kể cả người trong nội bộ. Bài toán của hệ thống phát hiện xâm nhập là xây dựng mô hình dự đoán có thể phân biệt giữa **“kết nối xấu” (xâm nhập/tấn công)** và **kết nối bình thường “tốt”**.

- Thông thường, ***IDS kết nối với switch*** bằng **cổng SPAN**.

***IDS có hai phương pháp phát hiện***:

- **Phương pháp dựa trên chữ ký:** IDS dựa trên chữ ký phát hiện tấn công bằng các mẫu cụ thể như số byte, số bit 1 hoặc số bit 0 trong lưu lượng mạng. Nó cũng phát hiện dựa trên chuỗi lệnh độc hại đã biết mà malware sử dụng. Các mẫu được phát hiện trong IDS được gọi là signatures. IDS dựa trên chữ ký có thể dễ dàng phát hiện các tấn công mà mẫu (signature) đã có sẵn trong hệ thống, nhưng rất khó phát hiện malware mới vì signature của chúng chưa được biết.
- **Phương pháp dựa trên bất thường:** IDS dựa trên bất thường được đưa ra để phát hiện các cuộc tấn công malware chưa biết, vì malware mới được phát triển rất nhanh. Trong IDS dựa trên bất thường, machine learning được dùng để tạo mô hình hoạt động đáng tin cậy và mọi thứ đi vào sẽ được so sánh với mô hình đó; nếu không khớp, nó sẽ bị xem là đáng ngờ. Phương pháp dựa trên machine learning có khả năng khái quát tốt hơn so với IDS dựa trên chữ ký vì các mô hình này có thể được huấn luyện theo ứng dụng và cấu hình phần cứng.

## IDS hoạt động như thế nào?

- IDS (Intrusion Detection System) giám sát lưu lượng trên mạng máy tính để phát hiện hoạt động đáng ngờ.
- Nó phân tích dữ liệu đi qua mạng để tìm các mẫu và dấu hiệu hành vi bất thường.
- IDS so sánh hoạt động mạng với một bộ quy tắc và mẫu đã định nghĩa trước để xác định hoạt động nào có thể là tấn công hoặc xâm nhập.
- Nếu IDS phát hiện điều gì đó khớp với một quy tắc hoặc mẫu, nó sẽ gửi cảnh báo tới quản trị viên hệ thống.
- Quản trị viên sau đó có thể điều tra cảnh báo và hành động để ngăn thiệt hại hoặc xâm nhập tiếp diễn.


## Ưu điểm của IDS
- **Phát hiện hoạt động độc hại:** IDS có thể phát hiện các hoạt động đáng ngờ và cảnh báo quản trị viên trước khi gây thiệt hại lớn.
- **Cải thiện hiệu năng mạng:** IDS có thể nhận diện các vấn đề hiệu năng trên mạng, từ đó giúp cải thiện hiệu năng.
- **Đáp ứng yêu cầu tuân thủ:** IDS hỗ trợ đáp ứng các yêu cầu tuân thủ bằng cách giám sát hoạt động mạng và tạo báo cáo.
- **Cung cấp thông tin hữu ích:** IDS tạo ra các hiểu biết giá trị về lưu lượng mạng, dùng để phát hiện điểm yếu và cải thiện bảo mật.

## Nhược điểm của IDS
- **Không chặn tấn công, chỉ phát hiện.**
- **Không tự phòng ngừa tấn công, nên quản trị viên phải làm việc đó.**

# Hệ thống ngăn chặn xâm nhập (IPS)

<p align="center"><img width="500" src="/assets/images/network/IPS.png" /></p>


Đây là ứng dụng bảo mật mạng **giám sát hoạt động của mạng hoặc hệ thống để tìm hoạt động độc hại**. Các chức năng chính của hệ thống **ngăn chặn xâm nhập là nhận diện hoạt động độc hại**, **thu thập thông tin về hoạt động đó**, **báo cáo và cố gắng chặn hoặc dừng nó lại**. IPS thường ghi lại thông tin liên quan đến các sự kiện được quan sát, thông báo cho quản trị viên bảo mật về những sự kiện quan trọng và tạo báo cáo. Nhiều IPS cũng có thể phản ứng với mối đe dọa đã phát hiện bằng cách cố ngăn nó thành công. Chúng dùng nhiều kỹ thuật phản hồi khác nhau, như tự dừng cuộc tấn công, thay đổi môi trường bảo mật hoặc thay đổi nội dung tấn công.

- ***IPS kết nối với firewall để kiểm tra packet trước khi chúng đi tới switch***. Vì vậy, **nó kiểm tra mọi packet, bao gồm cả nội dung của packet**.

IPS thường dùng ba phương pháp phát hiện sau:

- **Phát hiện dựa trên chữ ký:** IDS dựa trên chữ ký kiểm tra packet trong mạng và so sánh với các mẫu tấn công đã được xây sẵn, được gọi là signatures.
- **Phát hiện dựa trên bất thường thống kê:** IDS dựa trên bất thường giám sát lưu lượng mạng và **so sánh nó với một baseline đã thiết lập**. **Baseline sẽ xác định điều gì là bình thường đối với mạng đó và những giao thức nào đang được dùng**. Tuy nhiên, nó có thể báo động giả nếu baseline không được cấu hình thông minh.
- **Phát hiện dựa trên phân tích giao thức có trạng thái:** Phương pháp IDS này nhận ra sự lệch chuẩn của giao thức bằng cách so sánh các sự kiện quan sát được với **các profile dựng sẵn của những định nghĩa được chấp nhận chung về hoạt động không gây hại**.


## Các loại IPS

- **Network-Based IPS:** Được cài ở **biên mạng** và giám sát toàn bộ **lưu lượng đi vào và đi ra khỏi mạng**.
- **Host-Based IPS:** Được cài trên **từng host riêng lẻ** và giám sát **lưu lượng đi vào và đi ra của host đó**.

## Ưu điểm của IPS

- **Bảo vệ trước mối đe dọa đã biết và chưa biết:** IPS có thể chặn các mối đe dọa đã biết và cả các mối đe dọa chưa từng thấy trước đó.
- **Bảo vệ theo thời gian thực:** IPS có thể phát hiện và chặn lưu lượng độc hại ngay lập tức, ngăn tấn công gây thiệt hại.
- **Yêu cầu tuân thủ:** Nhiều ngành có quy định yêu cầu dùng IPS để bảo vệ thông tin nhạy cảm và ngăn rò rỉ dữ liệu.
- **Tiết kiệm chi phí:** IPS là cách bảo vệ mạng tiết kiệm hơn so với chi phí xử lý hậu quả của một vụ vi phạm an ninh.
- **Tăng khả năng quan sát mạng:** IPS cho bạn nhìn rõ hơn những gì đang diễn ra trên mạng và nhận diện rủi ro bảo mật tiềm ẩn.

## Nhược điểm của IPS

- **Làm chậm lưu lượng mạng**.
- **Nếu cảm biến của IPS bị quá tải, nó sẽ ảnh hưởng tới lưu lượng mạng**.

## IPS và IDS

- Hệ thống ngăn chặn xâm nhập được đặt inline và có thể chủ động ngăn hoặc chặn các cuộc xâm nhập đã phát hiện.
- IPS có thể thực hiện các hành động như gửi cảnh báo, loại bỏ packet độc hại đã phát hiện, reset kết nối hoặc chặn lưu lượng từ địa chỉ IP gây sự cố.
- IPS cũng có thể sửa lỗi cyclic redundancy check (CRC), chống phân mảnh luồng packet, giảm các vấn đề sắp xếp TCP và loại bỏ các tùy chọn không mong muốn ở tầng transport và network.

