import { useEffect, useState } from "react";

const SLIDES = ["/images/banner1.jpg", "/images/banner2.jpg", "/images/banner3.jpg"];

export default function BannerSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
