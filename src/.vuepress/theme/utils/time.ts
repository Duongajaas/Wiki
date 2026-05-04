export const show_runtime = (): void => {
  const startTime = new Date("2026-05-03T10:00:00");

  const update = () => {
    const longtime = calculateTimePassed(startTime);
    const el = document.getElementById("runtime_span");

    if (el) {
      el.textContent = `Trang web đã hoạt động được: ${longtime}`;
    }
  };

  update();
  setInterval(update, 1000);
};

const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const calculateTimePassed = (startTime: Date): string => {
  const start = startTime;
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  let hours = now.getHours() - start.getHours();
  let minutes = now.getMinutes() - start.getMinutes();
  let seconds = now.getSeconds() - start.getSeconds();

  // Adjust time
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }

  // Adjust leap years
  let leapDays = 0;
  for (let i = start.getFullYear(); i <= now.getFullYear(); i++) {
    if (isLeapYear(i)) {
      leapDays++;
    }
  }
  days += leapDays;

  // Adjust months
  if (days < 0) {
    const previousMonth = now.getMonth() - 1 < 0 ? 11 : now.getMonth() - 1;
    const daysInPreviousMonth = new Date(
      now.getFullYear(),
      previousMonth + 1,
      0
    ).getDate();
    days += daysInPreviousMonth;
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  return `${years} năm ${months} tháng ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
};