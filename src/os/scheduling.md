---
title: CPU Scheduling
---

# Lập lịch CPU

Đây là bản dịch của chương **Scheduling** trong repo gốc. Chương này trả lời câu hỏi: khi có nhiều tiến trình hoặc luồng cùng chờ CPU, OS chọn ai trước.

## CPU Scheduler làm gì

CPU scheduler quyết định task nào trong các task sẵn sàng sẽ được dispatch lên CPU.

Scheduler thường chạy khi:

- CPU rảnh
- có task mới chuyển sang ready
- timeslice hết hạn

## Mục tiêu của scheduling

- throughput cao
- waiting time thấp
- response time tốt
- tránh starvation
- công bằng giữa các task

## Run queue

Scheduler không chọn task trực tiếp từ “tất cả tiến trình”, mà từ một cấu trúc như run queue.

Thiết kế run queue sẽ ảnh hưởng trực tiếp tới:

- độ phức tạp chọn task
- độ công bằng
- khả năng scale trên nhiều core

## Run-to-completion scheduling

Mô hình run-to-completion giả định:

- danh sách job biết trước
- không preemption
- một CPU

Từ đó ta mới phân tích các metric như throughput và completion time.

## Các thuật toán lập lịch cơ bản

### FCFS

- task nào đến trước chạy trước
- đơn giản
- không starvation
- nhưng có thể làm response time tệ nếu job dài đứng đầu

![FCFS Scheduling](/assets/images/os/rr1.png)

### SJF

- job ngắn chạy trước
- tối ưu trung bình về thời gian chờ
- nhưng cần biết hoặc ước lượng thời lượng công việc

### Priority scheduling

- task có priority cao được ưu tiên
- dễ dẫn tới starvation nếu không có aging

### Round Robin

- chia CPU theo time slice
- phù hợp hệ thống tương tác
- tăng fairness nhưng có thể tăng context switch

![Round Robin Scheduling](/assets/images/os/rr2.png)
![Round Robin Example](/assets/images/os/rr3.png)

## Preemptive và non-preemptive

- **non-preemptive**: task tự nhả CPU khi xong hoặc block
- **preemptive**: OS có thể ngắt task đang chạy để chạy task khác

## Time slice

Time slice phải đủ nhỏ để hệ thống phản hồi tốt, nhưng không được quá nhỏ vì context switch sẽ rất tốn.

![Time Slice Scheduling](/assets/images/os/timeslice.png)

## Scheduling decisions

Khi chọn thuật toán, OS phải cân bằng giữa:

- số lượng task
- kiểu workload
- overhead scheduling
- nhu cầu realtime
- mức độ interactive

## Linux scheduling ở mức khái niệm

Linux hiện đại dùng CFS cho workload thông thường.

- mỗi task có vruntime
- scheduler cố giữ công bằng theo thời gian CPU đã dùng
- task có vruntime nhỏ hơn thường được ưu tiên chạy trước

## Realtime và normal task

Một hệ điều hành thường phải xử lý hai nhóm lớn:

- task bình thường
- task realtime

Realtime task cần phản hồi nhanh hơn nên có chính sách riêng.

## Những thứ ảnh hưởng tới scheduling thực tế

- CPU affinity
- pinning task vào core
- load balancing giữa core
- NUMA locality
- tick và timer resolution

## Vì sao scheduling liên quan tới phần khác của OS

Scheduling không đứng riêng:

- nó liên quan tới process/thread
- nó liên quan tới I/O và block state
- nó liên quan tới synchronization khi thread chờ lock

## Kết luận

Nếu học để thi, nắm thuật toán cơ bản là đủ. Nếu học để hiểu kernel thật, phải đọc thêm CFS, run queue và cơ chế preemption của Linux.