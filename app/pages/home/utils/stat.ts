export interface TimeDifference {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const calculateTimeDifference = (targetDate: Date): TimeDifference => {
  const now = new Date();
  const diffMs = now.getTime() - targetDate.getTime();
  const absDiffMs = Math.abs(diffMs);

  const years = Math.floor(absDiffMs / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((absDiffMs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((absDiffMs % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((absDiffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((absDiffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((absDiffMs % (1000 * 60)) / 1000);

  return { years, months, days, hours, minutes, seconds };
};

export const formatTimeDifference = (diff: TimeDifference): string => {
  const { years, months, days } = diff;
  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "year" : "years"}`);
    if (months > 0) {
      parts.push(`${months} ${months === 1 ? "month" : "months"}`);
    }
  } else if (months > 0) {
    parts.push(`${months} ${months === 1 ? "month" : "months"}`);
    if (days > 0) {
      parts.push(`${days} ${days === 1 ? "day" : "days"}`);
    }
  } else if (days > 0) {
    parts.push(`${days} ${days === 1 ? "day" : "days"}`);
  } else {
    parts.push(`0 days`);
  }

  return `${parts.slice(0, 2).join(" ")}`;
};
