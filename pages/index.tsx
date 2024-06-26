import Image from "next/image";
import { Inter } from "next/font/google";
import Video from "@/components/video";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`inherit z-30 w-full max-h-screen min-h-screen overflow-hidden h-full flex flex-col items-center justify-start p-10 md:p-16 bg-blue gap-14`}
    >
        <Image src={'/jakeybackground.jpg'} className="w-full max-h-screen overflow-hidden absolute z-0 mix-blend-multiply opacity-20 object-cover top-0" alt='Jakey Background' width={1000} height={2000}></Image>
      <h1 className="relative z-40 text-4xl md:text-6xl"><span className="text-tangelo">Jakey</span><span className="text-yellow">Content</span><span className="text-light-blue">4</span><span className="text-green">Charity</span></h1>
        <Video></Video>
    </main>
  );
}
