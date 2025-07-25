import { useEffect, useRef } from 'react';

export default function usePiliDecoratorParallax() {
  const decoratorsRef = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const frame = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const animate = () => {
      decoratorsRef.current.forEach((el) => {
        if (!el) return;
        const speed = parseFloat(el.dataset.moveSpeed || 1);
        const x = mouse.current.x * 50 * speed;
        const y = mouse.current.y * 50 * speed;
        el.style.transition = `transform 0.5s ease-out, translate ${parseFloat(el.dataset.transition || 0.5)}s ease-out`;
        el.style.transform = `translate(${x}px, ${y}px) rotate(${el.dataset.rotate || 0}deg)`;
      });

      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    setTimeout(() => {
      frame.current = requestAnimationFrame(animate);
    }, 0);

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return decoratorsRef;
};
