"use client";

import Image from "next/image";

interface SlideItem {
  image: string;
  description: string;
  subtext: string;
}

export default function Slider({ slideList }: { slideList: SlideItem[] }) {

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth snap-x hide-scrollbar">
        {slideList.map((slide, index) => (
          <div
            key={index}
            className="w-80 flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden snap-start"
          >
            <div className={`p-3 flex items-center gap-2 text-white`}>
            </div>
            <Image src={slide.image} alt={slide.description} width={320} height={180} className="object-contain rounded-xl" />
            <div className="mt-3">
              <h4 className="font-semibold text-black">{slide.description}</h4>
              <p className="text-sm text-black font-light">{slide.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
