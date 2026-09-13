import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-10-14T10:00:00");

function getTimeLeft() {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

const pad = (n) => String(n).padStart(2, "0");

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hrs", value: time.hrs },
    { label: "Mins", value: time.mins },
    { label: "Secs", value: time.secs },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="relative w-16 sm:w-20 py-4 flex flex-col items-center bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <span className="absolute top-0 left-4 w-6 h-px bg-sage" />
          <span className="font-display text-3xl sm:text-4xl text-cream">
            {pad(unit.value)}
          </span>
          <span className="font-body text-[10px] tracking-wideish uppercase text-cream/70 mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}