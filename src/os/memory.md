---
title: Memory Management
---

# Quản lý Bộ nhớ

Đây là bản dịch chương **Memory Management** trong repo gốc. Phần này là trung tâm của OS vì nó quyết định cách hệ điều hành phân phối và bảo vệ bộ nhớ giữa các process.

## Mục tiêu quản lý bộ nhớ

Hệ điều hành không chỉ “cấp phát RAM”, mà còn phải:

- chuyển đổi giữa virtual memory và physical memory
- bảo vệ process khỏi xâm phạm lẫn nhau
- tối ưu hiệu năng truy cập
- cho phép chia sẻ khi cần
- phát hiện lỗi truy cập bộ nhớ

## Vai trò của phần cứng

### MMU

Memory Management Unit thực hiện dịch địa chỉ và báo lỗi khi truy cập sai.

### Registers

CPU giữ những thanh ghi trỏ đến bảng trang hoặc thông tin segment.

### TLB

Translation Lookaside Buffer lưu các ánh xạ địa chỉ đã dịch để giảm số lần phải đi xuống bảng trang.

## Paging

Paging chia không gian nhớ thành các trang và frame.

- OS tạo page table riêng cho từng process
- khi context switch, OS đổi page table tương ứng
- PTE chứa present, dirty, accessed và các bit bảo vệ

![Paging Structure](/assets/images/os/pts.png)

### Page fault

Page fault xảy ra khi trang được truy cập chưa có trong RAM hoặc vi phạm quyền truy cập.

Đây không hẳn là lỗi nghiêm trọng ngay lập tức; nhiều trường hợp chỉ là OS cần nạp trang vào bộ nhớ.

![Page Fault Handling](/assets/images/os/pagefaults.png)

## Hierarchical page tables

Trong hệ thống lớn, một bảng trang phẳng quá lớn và lãng phí.

Giải pháp là nhiều tầng page table:

- giảm kích thước bảng
- chỉ cấp phát phần cần dùng
- nhưng tăng số lần truy cập khi dịch địa chỉ

![Hierarchical Page Tables](/assets/images/os/hierarchicalpt.png)
![Inverted Page Table](/assets/images/os/invertedpt.png)

## Page table cache

Khi ánh xạ được dùng nhiều, OS và CPU sẽ tận dụng cache để giảm latency dịch địa chỉ.

## Segmentation

Segmentation ánh xạ virtual sang physical bằng các segment.

- segment có kích thước linh hoạt
- hợp với code, heap, data, stack
- phải kiểm tra base và limit

![Segmentation](/assets/images/os/segmentation.png)
![Segmentation with Paging](/assets/images/os/segmentationpaging.png)

## Paging + segmentation

Nhiều hệ thống kết hợp hai cơ chế này để vừa linh hoạt vừa dễ bảo vệ.

## Page size

Page nhỏ thì tiết kiệm bộ nhớ nội bộ, page lớn thì giảm số lượng mục trong bảng trang.

Nhưng page lớn cũng có nhược điểm:

- internal fragmentation cao hơn
- nếu dùng quá lớn sẽ phí RAM

## Memory allocation

Allocator quyết định ánh xạ virtual address sang physical address.

- kernel allocator dùng cho state của kernel
- user allocator dùng cho heap và cấp phát động

Ví dụ thư viện cấp phát thường gặp:

- malloc/free
- jemalloc
- tcmalloc

## Demand paging

Không phải mọi trang đều phải nạp ngay từ đầu.

- chỉ nạp khi cần
- giảm thời gian khởi động
- giảm áp lực RAM

## Checkpointing

Checkpointing là kỹ thuật lưu trạng thái định kỳ để có thể phục hồi nhanh khi lỗi.

Ứng dụng:

- phục hồi sau crash
- migration sang máy khác
- rewind/replay để debug

## Đi sâu hơn: TLB, cache và thực tế

Đây là phần rất quan trọng nhưng các note cơ bản hay lướt qua:

- TLB miss làm chậm dịch địa chỉ
- cache locality ảnh hưởng lớn đến hiệu năng
- NUMA làm cho vị trí RAM cũng quan trọng
- copy-on-write giúp tối ưu khi fork

## Kết luận

Nếu chỉ học để hiểu lý thuyết, paging và segmentation là đủ. Nếu muốn hiểu hiệu năng thật, phải đọc thêm TLB, cache, huge pages, NUMA và page fault behavior.