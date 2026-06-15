---
title: File System
---

# Hệ thống tệp

Trang này bổ sung trực tiếp cho phần quản lý I/O của repo gốc, tập trung vào cách dữ liệu được tổ chức trên đĩa và truy cập qua VFS.

## Khái niệm cốt lõi

- **inode**: lưu metadata của file, không lưu tên file.
- **directory entry**: ánh xạ tên file sang inode.
- **block**: đơn vị lưu trữ cơ bản trên disk.
- **journal**: ghi nhật ký để phục hồi an toàn sau lỗi.

## Virtual File System

VFS cho phép OS cung cấp giao diện thống nhất cho nhiều file system khác nhau.

### Abstractions

- file
- file descriptor
- inode
- dentry
- super block

### File descriptor

File descriptor là representation của file đang mở ở mức OS. Nó gắn với các thao tác như:

- open
- read
- write
- sendfile
- lock
- close

## Inodes

Inode là index của các block dữ liệu của file.

### Inodes with indirect pointers

Để hỗ trợ file lớn, inode có thể dùng:

- direct pointer
- indirect pointer
- double indirect pointer

Ưu điểm là file có thể lớn hơn rất nhiều so với một inode nhỏ.

Nhược điểm là truy cập file có thể chậm hơn vì phải đi qua nhiều tầng con trỏ.

## Filesystem trên disk

- file là tập các data blocks
- inode cũng được lưu trên disk
- super block chứa bố cục tổng thể của file system

## ext4 và journaling

ext4 là ví dụ phổ biến của file system có journaling.

- journaling giúp giảm nguy cơ corrupt khi crash
- log mô tả thao tác trước khi ghi thật
- sau đó hệ thống mới apply update vào vị trí chính thức

## Permission và ownership

Những thứ thường gắn với file system:

- owner
- group
- mode / permission
- ACL nếu cần mở rộng

## Buffer cache và page cache

Khi ứng dụng đọc/ghi file, OS không nhất thiết truy cập disk ngay.

- buffer/cache giúp giảm I/O thật
- write-back giúp gom ghi lại để tối ưu
- fsync buộc dữ liệu phải được flush an toàn

## Hard link và symbolic link

- hard link trỏ cùng inode
- symbolic link là một file đặc biệt chứa path tới file khác

## fsync và tính bền vững

fsync rất quan trọng khi bạn muốn đảm bảo dữ liệu đã được ghi ra storage thật.

## Tại sao file system ảnh hưởng hiệu năng

Nhiều vấn đề chậm không nằm ở CPU mà nằm ở:

- cache miss
- random I/O
- journaling overhead
- metadata lookup

## Kết luận

Nếu hiểu inode, VFS, journaling và cache, bạn sẽ nhìn file system đúng như một lớp quản lý dữ liệu chứ không chỉ là “folder và file”.
