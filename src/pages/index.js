import {Day} from "@/pages/Day";
import {Night} from "@/pages/Night";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <Day />
      <Night />
    </div>
  );
}
