---
title: Kernel & System Call
---

# Kernel, System Call và Bảo mật

Phần này gom các ý cốt lõi từ **tổng quan hệ điều hành** và các phần bảo vệ hệ thống trong repo gốc. Đây là chỗ giúp bạn hiểu vì sao OS là lớp “có quyền” nhất của máy.

## Hệ điều hành nằm ở đâu

OS là lớp trung gian giữa hardware và application.

- che giấu độ phức tạp của phần cứng
- quản lý CPU, memory, devices và storage
- đảm bảo cô lập và bảo vệ ứng dụng với nhau

## User mode và kernel mode

- user-level: ứng dụng thường chạy ở mode không đặc quyền
- kernel-level: kernel có quyền truy cập phần cứng

Sự chuyển đổi giữa hai mode này được thực hiện bằng trap và system call.

![User vs Kernel Mode](/assets/images/os/hwprotectionlevels.png)

## User/kernel protection boundary

Ranh giới này là một trong những nền tảng quan trọng nhất của OS.

- ứng dụng không thể tùy tiện chạm vào RAM hay thiết bị
- mọi truy cập đặc quyền phải qua kernel
- nhờ đó OS mới đảm bảo isolation

![Protection Boundary](/assets/images/os/userkernelprotectionboundary.png)

## System calls

System call là cách ứng dụng yêu cầu OS làm việc thay mình.

### Các nhóm cơ bản

- process control: fork, exit, wait
- file manipulation: open, read, write
- device manipulation: ioctl
- information maintenance: getpid, alarm, sleep
- communication: pipe, shmget, mmap
- protection: chmod, umask, chown

## Linux architecture

Repo gốc nhắc rằng Linux là một ví dụ rất thực tế để nối lý thuyết với hệ thống thật.

## Basic OS services

OS cung cấp các dịch vụ cơ bản sau:

- process management
- file management
- device management
- memory management
- storage management
- security

## Kernel internals ở mức nhập môn

Khi system call xảy ra, kernel phải:

- nhận trap từ user mode
- lưu ngữ cảnh cần thiết
- kiểm tra quyền truy cập
- thực thi handler phù hợp
- trả kết quả về user space

## Bảo mật

Các nguyên lý nên nhớ:

- principle of least privilege
- isolation giữa các ứng dụng
- kiểm tra quyền trước khi thực thi hành động đặc quyền
- không cho process tự ý can thiệp kernel state

## Security ở tầng OS

Những thứ thường liên quan tới bảo mật OS:

- permission và ownership trên file
- protection bits trên memory
- isolation của process
- sandboxing / namespace / capability theo hướng hiện đại

## Kết luận

Nếu nắm được ranh giới user/kernel và flow system call, bạn sẽ đọc kernel docs và debug lỗi hệ thống tự tin hơn rất nhiều.
