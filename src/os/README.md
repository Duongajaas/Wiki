---
title: Operating Systems
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
- [I/O Management](io-filesystem.md)
- [Virtual File System](io-filesystem.md#hệ-thống-tệp-ảo-vfs)
- [Virtualization](virtualization-distributed.md)
- [Remote Procedure Calls](virtualization-distributed.md#rpc)
- [Distributed File Systems](virtualization-distributed.md#hệ-thống-tệp-phân-tán)
- [Distributed Shared Memory](virtualization-distributed.md#bộ-nhớ-chia-sẻ-phân-tán)

## Repo này mạnh ở đâu

Repo này cover khá chuẩn những phần nền tảng của OS:

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

- system call detail
- kernel internals
- Linux scheduling thực chiến
- paging thực tế, TLB, cache
- file system như inode, ext4
- OS security
- deadlock chi tiết hơn

## Cách học đề xuất

1. Đọc theo thứ tự từ tổng quan đến quản lý tài nguyên.
2. Khi gặp mỗi chương, thử nối nó với một tình huống thực tế.
3. Khi đọc đến virtual memory, hãy luôn hỏi: hệ điều hành làm gì, phần cứng làm gì, và vùng nào là chi phí.
4. Khi đọc đến synchronization, nhớ đặt cạnh deadlock và race condition.

## Mục tiêu của bản dịch

Không rút gọn ý chính của repo gốc, mà giữ nguyên tinh thần học OS theo giáo trình nhưng diễn đạt lại cho dễ học bằng tiếng Việt.