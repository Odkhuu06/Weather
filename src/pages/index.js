import { Sun } from "@/Componenets/Sun";
import { Search } from "@/Componenets/Search";
import { Moon } from "@/Componenets/Moon";
import { Toirog } from "@/Componenets/Toirog";
import { useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});
  const url = ``;
  const cityUrl = `https://api.api-ninjas.com/v1/city?name=Tokyo`;

  const getCity = async () => {
    try {
      const response = await fetch(cityUrl, {
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_CITY_API_KEY,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getWeather = async () => {
    try {
      const cityLocation = await getCity();
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityLocation[0].latitude}&lon=${cityLocation[0].longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  console.log("wwww", weather);
  return (
    <div className="flex w-[100wv] h-[100vh]">
      <div className=" bg-[#f3f4f6] w-[50%] flex justify-center items-center">
        <div className="relative w-[800px] h-[1200px]   flex flex-row justify-center items-center">
          <Search get={getWeather} />
          <img
            src="./ellip.png"
            className="w-[174px] h-[174px] absolute top-[120px] left-30 z-0"
          />
          <Sun weather={weather} />
        </div>
      </div>
      <div className="absolute flex justify-center items-center w-[100%] h-[100%]">
        <Toirog />
      </div>
      <div className="bg-[#0F141E] w-[50%] flex justify-center items-center">
        <div className="relative w-[800px] h-[1200px]   flex flex-row justify-center items-center">
          <img
            src="Ellipse 22.png"
            className="w-[174px] h-[174px] absolute top-[870px] left-125"
          />
          <Moon />
        </div>
      </div>
    </div>
  );
}