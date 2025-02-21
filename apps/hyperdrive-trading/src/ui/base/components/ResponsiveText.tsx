import classNames from "classnames";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";
interface ResponsiveTextProps {
  children: ReactNode;
  className?: string;
  minFontSize?: number;
  maxFontSize?: number;
}

export function ResponsiveText({
  children,
  className,
  minFontSize = 12,
  maxFontSize = 32,
}: ResponsiveTextProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  useLayoutEffect(() => {
    function adjustFontSize() {
      if (!containerRef.current || !textRef.current) {
        return;
      }

      // Measure at max font size
      textRef.current.style.fontSize = `${maxFontSize}px`;
      const containerWidth = containerRef.current.clientWidth;
      const textWidth = textRef.current.scrollWidth;

      // Calculate new font size
      const scaledSize = maxFontSize * (containerWidth / textWidth);
      const newSize =
        textWidth > containerWidth
          ? Math.max(minFontSize, scaledSize)
          : maxFontSize;

      setFontSize(newSize);
    }

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);
    return () => window.removeEventListener("resize", adjustFontSize);
  }, [children, minFontSize, maxFontSize]);

  return (
    <div ref={containerRef} className="w-full max-w-48 overflow-hidden">
      <span
        ref={textRef}
        className={classNames("inline-block whitespace-nowrap", className)}
        style={{ fontSize: `${fontSize}px` }}
      >
        {children}
      </span>
    </div>
  );
}
