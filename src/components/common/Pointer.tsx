import { useEffect, useRef } from "react";
import { createAnimatable, utils } from "animejs";
import { MousePointer2 } from "lucide-react";

const Pointer = () => {
  const pointerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pointerRef.current || !containerRef.current) return;

    const square = pointerRef.current;
    const container = containerRef.current;

    let bounds = container.getBoundingClientRect();
    const refreshBounds = () => {
      bounds = container.getBoundingClientRect();
    };

    const animatableSquare = createAnimatable(square, {
      x: 0,
      y: 0,
      ease: "out(3)",
    });

    const onMouseMove = (e: MouseEvent) => {
      const { width, height, left, top } = bounds;
      const hw = width / 2;
      const hh = height / 2;
      const x = utils.clamp(e.clientX - left - hw, -hw, hw);
      const y = utils.clamp(e.clientY - top - hh, -hh, hh);
      animatableSquare.x(x);
      animatableSquare.y(y);
    };

    window.addEventListener("mousemove", onMouseMove);
    container.addEventListener("scroll", refreshBounds);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("scroll", refreshBounds);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-none cursor-none"
    >
      <div
        ref={pointerRef}
        className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2"
      >
        <MousePointer2 className="text-primary w-full h-full" />
      </div>
    </div>
  );
};

export default Pointer;
