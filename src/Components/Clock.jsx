import { useState, useEffect } from "react";
export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = new Intl.DateTimeFormat('mn-MN', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(time);

  return (
    <p className="text-gray-500 text-sm mt-1">
      🕒 {formattedTime} ({timeZone})
    </p>
  );
}

// export default function Clock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const formattedTime = time.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   });

//   return (
//     <p className="text-gray-500 text-sm mt-1">
//       🕒 {formattedTime}
//     </p>
//   );
// }
