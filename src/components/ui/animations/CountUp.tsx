import React, { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 1200 }) {
  const [value, setValue] = useState(0);
  const raf = useRef<number | undefined>();

  const isPercent = typeof end === "string" && end.includes("%");
  const cleanEnd =
    typeof end === "string" ? end.replace(/,/g, "").replace("%", "") : end;
  const target = parseFloat(cleanEnd);

  useEffect(() => {
    let startTime: any;
    function animate(ts: any) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    }
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);

  function formatNumber(val: any) {
    if (isNaN(val)) return end;
    let str = val.toLocaleString();
    if (isPercent) str += "%";
    return str;
  }

  return (
    <span className="inline-block overflow-hidden h-[1em] align-bottom">
      <span
        key={value}
        className="block transition-transform duration-200 ease-out"
        style={{ transform: "translateY(0)" }}
      >
        {formatNumber(value)}
      </span>
    </span>
  );
}

export default CountUp;
