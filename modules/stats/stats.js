export class Stats {
  static calculateTimeDifference(targetDate) {
    const now = new Date();
    const diff = targetDate - now;
    return diff;
  }

  static formatTimeDifference(diff) {
    const isPast = diff < 0;
    const absoluteDiff = Math.abs(diff);

    const years = Math.floor(absoluteDiff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((absoluteDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((absoluteDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((absoluteDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((absoluteDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((absoluteDiff % (1000 * 60)) / 1000);

    const timeParts = [];
    if (years > 0) timeParts.push(`${years}y`);
    if (months > 0) timeParts.push(`${months}mo`);
    if (days > 0) timeParts.push(`${days}d`);
    timeParts.push(`${hours}h`, `${minutes}m`, `${seconds}s`);

    return `${timeParts.join(' ')} ${isPast ? 'ago' : 'remaining'}`;
  }
}
