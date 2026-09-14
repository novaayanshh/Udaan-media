import { useEffect, useRef, useState } from "react";

const ANIMATIONS = {
  fadeIn: "opacity-0 animate-fadeIn",
  fadeInUp: "opacity-0 animate-fadeInUp",
  fadeInLeft: "opacity-0 animate-fadeInLeft",
  fadeInRight: "opacity-0 animate-fadeInRight",
};

export default function Reveal({ as: Tag = "div", animation = "fadeInUp", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${visible ? ANIMATIONS[animation] : "opacity-0"} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
