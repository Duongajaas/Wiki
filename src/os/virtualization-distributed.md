---
title: Virtualization and Distributed Systems
---

# Ảo hóa và Hệ điều hành Phân tán

Đây là bản dịch các chương **Virtualization**, **Remote Procedure Calls**, **Distributed File Systems** và **Distributed Shared Memory** trong repo gốc. Đây là phần nối OS với cloud, VMM, replica, và các hệ thống phân tán hiện đại.

## Virtualization

Ảo hóa cho phép nhiều OS và ứng dụng chạy đồng thời trên cùng máy vật lý.

### Virtual machine

Một virtual machine là bản sao ảo, cô lập và hiệu quả của máy thật.

### VMM / Hypervisor

Virtual Machine Monitor hoặc hypervisor chịu trách nhiệm quản lý tài nguyên vật lý.

Mục tiêu của VMM:

- fidelity
- performance
- safety and isolation

![Virtual Machine Monitor](/assets/images/os/hypervisor.png)
![VMM Architecture](/assets/images/os/hypervisordirect.png)

### Lợi ích của virtualization

- consolidation: giảm chi phí, dễ quản trị
- migration: tăng availability và reliability
- security: cô lập workload
- debugging và support cho OS cũ

### Hai mô hình chính

- full virtualization
- paravirtualization

### Trap-and-emulate

Đây là mô hình trong đó guest OS tưởng mình đang chạy trực tiếp trên hardware, còn VMM trap các lệnh đặc quyền.

### Binary translation

Dynamic binary translation dịch các block code cần thiết khi guest có lệnh không thể trap trực tiếp.

![Trap and Emulate Virtualization](/assets/images/os/passthrough.png)
![Binary Translation](/assets/images/os/hosted.png)

### Paravirtualization

Guest OS biết mình đang chạy ảo hóa và gọi hypercall rõ ràng để giảm overhead.

## Memory virtualization

Trong full virtualization, địa chỉ có thể đi qua nhiều lớp:

- guest virtual address
- guest physical address
- machine address

Một số mô hình dùng shadow page table để giảm chi phí dịch địa chỉ.

## Device virtualization

Thiết bị thật cũng phải được ảo hóa hoặc chia sẻ an toàn giữa các guest.

## RPC

Remote Procedure Call được thiết kế để làm việc cross address space và cross machine dễ hơn.

### Tại sao cần RPC

- giảm độ phức tạp của giao tiếp giữa các máy
- giúp xử lý error rõ ràng hơn
- đóng gói việc marshal/unmarshal

### RPC steps

1. register
2. bind
3. call
4. marshal

![RPC Communication](/assets/images/os/rpcstructure.png)
![RPC Message Passing](/assets/images/os/messagepassingipc.png)
5. send
6. receive
7. unmarshal
8. actual call
9. result

### IDL

Interface Definition Language mô tả procedure, kiểu tham số, và phiên bản giao diện.

### Pointer handling

RPC không thích pointer “thô” vì pointer chỉ có nghĩa trong address space cục bộ.

Giải pháp:

- không cho pointer
- hoặc serialize dữ liệu mà pointer trỏ tới

### Partial failures

RPC phải xử lý trường hợp thất bại một phần:

- timeout
- mất kết nối
- server chết giữa chừng

## Distributed File Systems

Hệ thống tệp phân tán phải cân bằng giữa:

- consistency
- caching
- availability
- fault tolerance
- scalability

### Remote file service

Repo gốc so sánh giữa mô hình cực đoan và mô hình thực dụng hơn.

### Stateless vs stateful server

- stateless: dễ restart, ít state trên server, nhưng khó caching và consistency
- stateful: hỗ trợ locking/caching tốt hơn nhưng phức tạp hơn

### Replication vs partitioning

- replication: nhiều máy giữ cùng dữ liệu, tăng availability
- partitioning: mỗi máy giữ một phần dữ liệu, tăng scale

### VFS trong DFS

Distributed FS thường dựa trên virtual file system để cung cấp giao diện thống nhất.

## Distributed Shared Memory

DSM cố gắng làm cho bộ nhớ phân tán trông giống như bộ nhớ chia sẻ.

### Page-based DSM

- mỗi node có phần memory cục bộ
- các page có thể được chia sẻ giữa node
- home node hoặc manager node giữ metadata coherence

### Nếu là MRMW

Các node cần local caches để giảm latency.

### Metadata

DSM phải theo dõi:

- page state
- owner hiện tại
- locking
- caching enabled/disabled

## Góc nhìn thực tế

- container không phải VM
- RPC là nền tảng của rất nhiều hệ thống microservice
- DFS và DSM cho thấy OS không chỉ sống trong một máy mà còn có thể mở rộng ra nhiều node

## Kết luận

Phần này là cầu nối từ OS truyền thống sang hạ tầng hiện đại: virtualization, RPC, distributed storage và distributed memory.