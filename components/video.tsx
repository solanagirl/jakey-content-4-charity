import Image from "next/image";
import { useState } from "react";

export default function Video() {
    const [fakeAllow, setFakeAllow] = useState(false);

    return (
        <div className="w-full inherit z-50 flex justify-center items-center resize">
            {
                fakeAllow ? (
                    <span className="bg-green px-4">
                        <video height="452" width="768" controls playsInline className="object-cover">
                            <source src="https://ik.imagekit.io/ikmedia/example_video.mp4" />
                        </video>
                    </span>
                ) : (
                    <span className="bg-tangelo px-4">
                        <div className="md:w-[768px] md:h-[452px] bg-black object-cover flex flex-col justify-center items-center text-center">
                            <Image src="/lock.png" width={240} height={240} alt='Lock emoji'/>
                            <p className="text-tangelo text-4xl">Heres how this works.</p>
                            <p className="text-tangelo text-2xl">This is why you should do it.</p>
                            <p className="text-light-blue text-2xl">Here's how to do it.</p>
                            <p className="text-green text-4xl">Make a CTA!</p>
                            <button onClick={() => setFakeAllow(true)}>Allow</button>
                        </div>
                    </span>
                )
            }
        </div>
    )
}