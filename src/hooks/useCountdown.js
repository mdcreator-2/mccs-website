import { useState, useEffect } from 'react';

/**
 * useCountdown — returns zero-padded string values for days, hours, minutes, seconds.
 *
 * @param {Date} targetDate
 * @returns {{ days: string, hours: string, minutes: string, seconds: string }}
 */
export default function useCountdown(targetDate) {
  const calcRemaining = () => {
    const diff = Math.max(0, targetDate.getTime() - Date.now());
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const [time, setTime] = useState(calcRemaining);

  useEffect(() => {
    const id = setInterval(() => setTime(calcRemaining()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return time;
}
