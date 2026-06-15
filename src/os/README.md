---
title: Hệ điều hành
icon: linux
---

# Hệ điều hành

Đây là bản dịch tiếng Việt của repo **Operating-Systems-Notes**. Mục tiêu là giữ nguyên tuyến kiến thức của repo gốc, đồng thời diễn đạt lại bằng tiếng Việt rõ ràng hơn và bổ sung những chỗ thường bị lướt qua khi học theo note ngắn.

## Nội dung trong repo gốc

- [Tổng quan hệ điều hành](#tổng-quan-hệ-điều-hành)
- [Tiến trình và quản lý tiến trình](process-thread.md)
- [Luồng và đồng thời](process-thread.md#luồng-và-đồng-thời)
- [Lập lịch](scheduling.md)
- [Quản lý bộ nhớ](memory.md)
- [IPC](ipc.md)
- [Đồng bộ](ipc.md#đồng-bộ)
- [Quản lý I/O](io-filesystem.md)
- [Hệ thống tệp ảo](io-filesystem.md#hệ-thống-tệp-ảo-vfs)
- [Ảo hóa](virtualization-distributed.md)
- [Remote Procedure Call](virtualization-distributed.md#rpc)
- [Hệ thống tệp phân tán](virtualization-distributed.md#hệ-thống-tệp-phân-tán)
- [Bộ nhớ chia sẻ phân tán](virtualization-distributed.md#bộ-nhớ-chia-sẻ-phân-tán)

## Repo này mạnh ở đâu

Repo này bao quát khá chuẩn những phần nền tảng của hệ điều hành:

- Process / Thread
- Scheduling
- Memory
- IPC / Synchronization
- I/O
- Virtualization
- Distributed systems

Nói cách khác, đây là kiểu note đúng format giáo trình, rất gần với Silberschatz.

## Thiếu gì nếu học để đi sâu hơn

Nếu chỉ học repo gốc, bạn vẫn nên bổ sung thêm các mảng sau:

- chi tiết về system call
- nội bộ kernel
- Linux scheduling thực chiến
- paging thực tế, TLB, cache
- file system như inode, ext4
- bảo mật hệ điều hành
- deadlock chi tiết hơn

## Cách học đề xuất

1. Đọc theo thứ tự từ tổng quan đến quản lý tài nguyên.
2. Khi gặp mỗi chương, thử nối nó với một tình huống thực tế.
3. Khi đọc đến virtual memory, hãy luôn hỏi: hệ điều hành làm gì, phần cứng làm gì, và vùng nào là chi phí.
4. Khi đọc đến synchronization, nhớ đặt cạnh deadlock và race condition.

## Mục tiêu của bản dịch

Không rút gọn ý chính của repo gốc, mà giữ nguyên tinh thần học OS theo giáo trình nhưng diễn đạt lại cho dễ học bằng tiếng Việt.
