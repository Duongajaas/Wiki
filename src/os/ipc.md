---
title: IPC and Synchronization
---

# IPC và Đồng bộ

Đây là bản dịch các phần **Inter-Process Communication** và **Synchronization** trong repo gốc. Hai chủ đề này thường đi cùng nhau vì bất kỳ cơ chế giao tiếp nào giữa các tiến trình cũng sẽ đụng tới vấn đề đồng bộ.

## IPC là gì

IPC là các cơ chế cho phép process trao đổi dữ liệu hoặc phối hợp với nhau.

## Message passing

### Pipes

- truyền byte stream giữa hai process
- thường dùng để nối output của process này với input process khác

### Message queues

- truyền message thay vì stream thuần
- OS quản lý thứ tự và ưu tiên message
- có API kiểu Sys-V và POSIX

![Message Queue](/assets/images/os/msgq.png)

### Sockets

- là giao diện gửi/nhận dữ liệu giữa process
- có thể dùng trên cùng máy hoặc giữa các máy
- bên trong nó liên quan trực tiếp tới TCP/IP

## Shared memory

Shared memory là cách IPC nhanh nhất vì hai process nhìn vào cùng một vùng nhớ.

Nhưng vì nhanh nên nó đòi hỏi:

- đồng bộ chặt
- tránh race condition
- tránh ghi đè dữ liệu lẫn nhau

![Shared Memory IPC](/assets/images/os/sharedmemoryipc.png)

## Đồng bộ là gì

Đồng bộ là tập các kỹ thuật đảm bảo nhiều thread hoặc process phối hợp đúng thứ tự.

## Mutual exclusion

Mutex là dữ liệu dùng để bảo vệ critical section.

Một mutex thường giữ:

- locked hay chưa
- owner
- thread đang chờ

![Mutex Locking](/assets/images/os/mutex.png)

## Producer-consumer

Đây là ví dụ kinh điển cho đồng bộ:

- producer đẩy dữ liệu vào buffer
- consumer lấy dữ liệu ra
- buffer phải được bảo vệ

![Producer Consumer Pattern](/assets/images/os/producerconsumer.png)

## Readers / Writers

Nếu nhiều reader chỉ đọc, ta có thể cho đọc song song.

Nhưng writer cần quyền độc quyền.

Vấn đề là phải thiết kế sao cho:

- reader không bị chặn quá nhiều
- writer không bị starvation

## Condition variables

Condition variable cho phép thread chờ một điều kiện cụ thể.

- wait khi điều kiện chưa đúng
- signal một thread chờ
- broadcast cho nhiều thread

## Spurious wakeups

Thread có thể tỉnh dậy dù điều kiện chưa đúng.

Vì vậy phải kiểm tra điều kiện bằng vòng lặp, không được tin rằng wakeup luôn đồng nghĩa với điều kiện đã thỏa.

## Deadlocks

Deadlock xảy ra khi các thread chờ nhau theo một vòng kín.

Repo gốc gợi ý ba cách xử lý thực tế:

- giải phóng lock trước khi lấy lock khác nếu có thể
- dùng một lock lớn nếu bài toán đơn giản
- giữ thứ tự lock cố định để tránh chu trình chờ

## Tránh lỗi thường gặp

- luôn ghép đúng resource với đúng mutex
- không quên unlock
- chỉ signal khi đúng loại điều kiện
- dùng broadcast khi nhiều thread cùng có thể tiến triển

## Priority inversion

Đây là tình huống thread ưu tiên thấp giữ lock mà thread ưu tiên cao đang cần, khiến hệ thống bị kẹt theo kiểu ngược đời.

## Atomic operations và memory ordering

Nếu làm hệ thống thực tế, mutex chưa đủ.

Bạn cần hiểu thêm:

- atomic increment / compare-and-swap
- memory barriers
- reorder của compiler và CPU

## Kết nối với phần khác của OS

IPC và synchronization liên quan trực tiếp tới:

- process/thread model
- scheduler
- kernel internals
- event-driven server

## Kết luận

Nếu chỉ học khái niệm, mutex và semaphore là đủ để bắt đầu. Nếu làm hệ thống thật, bạn phải đọc thêm về atomic operations, ordering, deadlock và priority inversion.