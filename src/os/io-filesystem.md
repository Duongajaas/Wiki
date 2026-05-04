---
title: I/O and File Systems
---

# I/O và Hệ thống tệp

Đây là bản dịch chương **I/O Management** và phần **Virtual File System** trong repo gốc. Đây là chương nối hệ điều hành với thế giới thiết bị thật, ổ đĩa thật và file thật.

## I/O Management là gì

OS không làm việc trực tiếp với thiết bị theo kiểu ứng dụng gọi hàm đơn giản. Nó phải:

- có protocol giao tiếp với thiết bị
- có driver và interrupt handler
- tách chi tiết thiết bị khỏi lõi xử lý

## Thiết bị và driver

- device driver là lớp trung gian giữa OS và phần cứng
- interrupt handler phản hồi sự kiện từ thiết bị
- I/O detail được trừu tượng hóa để ứng dụng không cần biết chip cụ thể

## Cách thiết bị được truy cập

### Programmed I/O

CPU chủ động điều khiển thiết bị từng bước.

### DMA

DMA cho phép thiết bị chuyển dữ liệu trực tiếp tới bộ nhớ mà không phải để CPU copy từng byte.

Điều này đặc biệt quan trọng với NIC, disk controller và các thiết bị băng thông lớn.

![DMA and Device Access](/assets/images/os/blockdevicestack.png)

## Dạng truy cập đồng bộ và bất đồng bộ

- synchronous I/O: process bị block cho tới khi thao tác xong
- asynchronous I/O: process tiếp tục làm việc, kết quả được trả về sau

## Device access path

Một request I/O thường đi qua:

1. system call
2. in-kernel stack
3. driver invocation
4. thiết bị thực thi request

## Tại sao I/O có thể làm process chậm

Khi chờ I/O, process không chạy trên CPU mà chuyển sang waiting state.

Đó là lý do rất nhiều chương trình tối ưu CPU nhưng vẫn chậm vì I/O.

## Disk access optimizations

Repo gốc nhấn mạnh 4 kỹ thuật rất quan trọng:

### Buffering / caching

- giảm số lần truy cập đĩa
- lưu tạm trong bộ nhớ
- định kỳ flush xuống disk

### Scheduling I/O

- giảm di chuyển đầu đọc
- tối ưu thứ tự truy cập

### Prefetching

- đoán trước dữ liệu sắp được dùng
- tăng cache hit

![Disk I/O Optimization](/assets/images/os/io.png)

### Journaling

- ghi log trước khi ghi thật
- tăng khả năng phục hồi sau crash

## Virtual File System

VFS cung cấp một lớp trừu tượng thống nhất để ứng dụng nhìn file system theo cùng một cách, bất kể file thật nằm trên ext4, NFS hay device khác.

### Các khái niệm chính

- file: đối tượng mà VFS thao tác
- file descriptor: đại diện OS cho file đang mở
- inode: representation bền vững của file
- dentry: directory entry tương ứng với một path component
- super block: thông tin layout của file system

## Inode

Inode là trung tâm của file system.

- chứa metadata
- chứa con trỏ tới các block dữ liệu
- giúp định vị file không cần lưu tên file trực tiếp

## Inodes với indirect pointers

Để hỗ trợ file lớn, inode có thể dùng:

- direct pointers
- indirect pointer
- double indirect pointer

Điều này giúp inode nhỏ nhưng vẫn hỗ trợ file lớn.

## File system trên đĩa

- file là các data block trên disk
- inode cũng được lưu trên disk ở một block riêng
- super block chứa bức tranh tổng thể của file system

## I/O stack với block device

OS thường phải đi qua block stack trước khi tới disk thật.

Điều này liên quan chặt tới:

- buffering
- write-back
- page cache
- block scheduling

## Kết luận

Muốn hiểu hiệu năng hệ thống, không thể chỉ nhìn CPU. I/O, caching, file system layout và journaling đều có thể quyết định tốc độ thực tế.