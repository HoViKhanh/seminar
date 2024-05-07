
import Image from "next/image";

export function Greeting() {
    return (
    <div className="flex flex-col items-center">
        <Image
          src="/seminar.png"
          width={1000}
          height={1000}
          alt="Screenshot of nextjs"
          className="w-full h-full shadow-xl rounded-2xl mt-5"
        />
    </div>
    )
}