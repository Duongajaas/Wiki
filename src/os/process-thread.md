---
title: Processes and Threads
---

# Tiến trình và Luồng

Đây là bản dịch của phần **Processes and Process Management** và **Threads and Concurrency** trong repo gốc. Hai chương này là nền của toàn bộ hệ điều hành vì chúng trả lời câu hỏi: hệ điều hành quản lý công việc đang chạy như thế nào.

## Tiến trình là gì

Một tiến trình là một thể hiện đang thực thi của một chương trình.

- nó có trạng thái thực thi riêng
- nó giữ program counter, stack pointer, register state
- nó có thể đang chờ I/O, đang chạy, hoặc đang sẵn sàng chạy
- nó là đơn vị mà OS cấp tài nguyên và bảo vệ

Về mặt khái niệm, process không chỉ là file chương trình trên đĩa. Khi chương trình được nạp vào bộ nhớ và bắt đầu thực thi, nó mới trở thành process.

## Process trông như thế nào

Thông thường một process gồm:

- Text và Data: phần tĩnh khi nạp chương trình
- Heap: vùng cấp phát động trong lúc chạy
- Stack: vùng cho lời gọi hàm, biến cục bộ, checkpoint để quay lui

## OS biết process đang làm gì bằng cách nào

Hệ điều hành và CPU cần theo dõi:

- program counter
- CPU registers
- stack pointer

Những thứ này thường được lưu trong PCB, tức Process Control Block.

## Process Control Block

PCB là cấu trúc trung tâm của mỗi process.

- PCB được tạo khi process được tạo
- một số trường đổi rất thường xuyên như program counter
- một số trường khác chỉ đổi khi trạng thái process thay đổi, ví dụ ánh xạ bộ nhớ

PCB là thứ giúp OS dừng một process rồi sau đó chạy tiếp đúng chỗ cũ.

![Process Control Block](/assets/images/os/pcb.png)

## Context switch

Context switch là quá trình OS lưu trạng thái process đang chạy và khôi phục trạng thái của process khác.

Các bước chính thường là:

1. lưu register và state của process hiện tại
2. chọn process kế tiếp
3. nạp state của process đó
4. chuyển sang user mode và tiếp tục thực thi

Đây là chi phí thật, nên mọi OS đều cố giảm context switch không cần thiết.

## Vòng đời process

Một process thường đi qua các trạng thái:

- new
- ready
- running
- waiting / blocked
- terminated

Quá trình chuyển trạng thái gắn chặt với scheduling và I/O.

![Process Lifecycle](/assets/images/os/processlifecycle.png)

## Process creation

Khi một process tạo process khác, OS phải quyết định:

- process con có dùng cùng chương trình hay không
- tiến trình con có chia sẻ tài nguyên nào với cha không
- ưu tiên và ngữ cảnh có được kế thừa hay không

## CPU scheduler làm gì

CPU scheduler quyết định process nào trong hàng đợi ready sẽ được chạy tiếp.

OS phải:

- preempt: ngắt và lưu context hiện tại
- schedule: chọn process kế tiếp
- dispatch: chuyển CPU sang context mới

## Thiết kế scheduling

Khi thiết kế scheduling, OS thường phải cân bằng:

- throughput
- response time
- waiting time
- fairness
- starvation

## I/O và process

Process không phải lúc nào cũng chạy liên tục. Rất nhiều lúc nó rơi vào waiting vì I/O.

- đọc file
- chờ network
- chờ thiết bị
- chờ lock

Điều này dẫn tới việc OS phải phân biệt rõ running và blocked.

## Can process interact?

Có. Process có thể giao tiếp qua IPC:

- pipes
- message queues
- sockets
- shared memory

## Luồng là gì

Thread là đơn vị thực thi bên trong một process.

- nhiều thread có thể cùng chia sẻ không gian nhớ
- mỗi thread vẫn có stack và register state riêng
- thread thường nhẹ hơn process vì không cần tách biệt toàn bộ tài nguyên

## Process vs Thread

| Process | Thread |
|---|---|
| Cô lập hơn | Chia sẻ nhiều hơn |
| Nặng hơn | Nhẹ hơn |
| Context switch đắt hơn | Context switch rẻ hơn |
| An toàn hơn khi lỗi | Dễ race condition hơn |

## Tại sao thread hữu ích

- tận dụng đa lõi
- tăng khả năng phản hồi
- tách logic xử lý I/O và logic xử lý chính
- dễ làm pipeline và boss-worker

## Multithreading patterns

Repo gốc nhấn mạnh nhiều mô hình rất thực tế:

### Boss-workers

- boss giao việc
- workers làm việc
- throughput bị giới hạn bởi boss nếu boss quá chậm

### Pipeline

- mỗi thread làm một công đoạn
- dữ liệu đi qua nhiều stage
- throughput phụ thuộc stage chậm nhất

### Layered pattern

- mỗi tầng thread xử lý một nhóm subtasks
- dễ chuyên môn hóa
- nhưng không phải lúc nào cũng phù hợp

## Mutual exclusion

Mutex là cấu trúc dùng để đảm bảo chỉ một thread vào critical section tại một thời điểm.

```text
lock(mutex)
	critical section
unlock(mutex)
```

Thông thường mutex lưu các thông tin như:

- locked hay chưa
- owner là ai
- thread nào đang bị chặn

## Producer-consumer

Đây là mô hình điển hình của chia sẻ dữ liệu giữa thread:

- producer tạo dữ liệu
- consumer lấy dữ liệu
- shared buffer cần đồng bộ

## Readers / Writers

Vấn đề đọc/ghi là bài toán kinh điển:

- nhiều reader có thể đọc cùng lúc
- writer thì cần quyền độc quyền

Điểm quan trọng là phải cân bằng giữa độ an toàn và hiệu năng.

## Tránh lỗi thường gặp

- luôn ghép đúng lock với đúng resource
- không quên unlock
- không dùng signal khi cần broadcast
- kiểm soát thứ tự thực thi bằng condition variable một cách rõ ràng

## Spurious wakeups

Một thread có thể thức dậy dù điều kiện chưa thật sự đúng. Vì vậy không nên viết code chờ kiểu “thức dậy là chạy luôn”.

## Deadlock

Deadlock xảy ra khi hai hay nhiều thread chờ nhau và không ai tiếp tục được.

Có ba cách xử lý cơ bản:

- tháo lock theo đúng thứ tự
- dùng một mega lock nếu bài toán cho phép
- giữ lock order nhất quán để tránh chu trình chờ

## Thread design considerations

Repo gốc còn nhấn mạnh các vấn đề như:

- user-level thread vs kernel-level thread
- dữ liệu thread nên chia nhỏ hay giữ chung
- signal mask và system call args
- overhead của cấu trúc quá lớn

## Interrupts và signals

Phần này thường bị bỏ qua, nhưng rất quan trọng để hiểu OS thực tế.

- interrupt là sự kiện từ phần cứng hoặc hệ thống
- signal là cơ chế OS báo cho process/thread
- một số signal là synchronous, một số là asynchronous

## Event-driven model

Trong mô hình event-driven:

- một dispatcher giữ vai trò state machine
- handler chạy đến hết công việc rồi mới trả quyền điều khiển
- nếu cần block, handler phải chuyển sang cơ chế bất đồng bộ

Mô hình này rất gần với server hiện đại.