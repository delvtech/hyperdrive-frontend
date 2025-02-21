import { ReactNode, useLayoutEffect, useRef, useState } from "react";

interface ResponsiveTextProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties; // applied to the container
  minFontSize?: number;
  maxFontSize?: number;
}

export function ResponsiveText({
  children,
  className,
  style,
  minFontSize = 12,
  maxFontSize = 48,
}: ResponsiveTextProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  useLayoutEffect(() => {
    function adjustFontSize() {
      if (containerRef.current && textRef.current) {
        // Temporarily set to max to measure natural width
        textRef.current.style.fontSize = `${maxFontSize}px`;
        const containerWidth = containerRef.current.clientWidth;
        const textWidth = textRef.current.scrollWidth;
        console.log("containerWidth", containerWidth, "textWidth", textWidth);
        let newFontSize = maxFontSize;
        if (containerWidth && textWidth > containerWidth) {
          newFontSize = Math.max(
            minFontSize,
            maxFontSize * (containerWidth / textWidth)
          );
        }
        setFontSize(newFontSize);
      }
    }
    // Use requestAnimationFrame to ensure layout is settled
    const rafId = requestAnimationFrame(adjustFontSize);
    window.addEventListener("resize", adjustFontSize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", adjustFontSize);
    };
  }, [children, minFontSize, maxFontSize]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", overflow: "hidden", ...style }}
    >
      <span
        ref={textRef}
        className={className}
        style={{
          fontSize: `${fontSize}px`,
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
    </div>
  );
}
