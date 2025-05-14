import { Day } from "@/pages/Day";
import { errorToJSON } from "next/dist/server/render";
// import {Night} from "@/pages/Night";

// export default function Home() {
//   return (
//     <div className=" flex justify-center items-center">
//       <Day/>
//       <Night />
//     </div>
//   );
// }

import { useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=47.921230&lon=106.918556&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=Ulaanbaatar`;
  const cityUrl = `https://api.api-ninjas.com/v1/city?name=Tokyo`;

  const getCity = async () => {
    try {
      const response = await fetch(cityUrl, {
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_CITY_API_KEY,
        },
      });
      const data = await responce.json();
      console.log(data);
    } catch (error) {
      console.log(errorToJSON);
    }
  };
  const getWeather = async () => {
    try {
      const responce = await fetch(url);
      const data = await responce.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={getWeather} className="border p-2 w-fit">
        get
      </button>
      <Day />
    </div>
  );
}
