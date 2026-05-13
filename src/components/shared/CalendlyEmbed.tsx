import { useEffect, useRef, useState } from "react";

export function CalendlyEmbed({ minHeight = 700 }: { minHeight?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  
  // Your specific Calendly URL
  const calendlyUrl = "https://calendly.com/9eightstudio/30min";

  useEffect(() => {
    if (!ref.current) return;

    // Check if script already exists to avoid duplicates
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );

    const initWidget = () => {
      const Calendly = (window as any).Calendly;
      if (Calendly && ref.current) {
        Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: ref.current,
          prefill: {},
          utm: {},
        });
        setLoaded(true);
      }
    };

    if (existingScript) {
      // If script is already there, just init
      initWidget();
    } else {
      // Load CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);

      // Load JS
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden rounded-2xl border hairline bg-[#fafafa]"
      style={{ height: `${minHeight}px`, minWidth: '320px' }}
      aria-label="Schedule a call"
    >
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-black/40">
          {/* Custom Spinner using your #e26215 accent */}
          <div
            className="h-8 w-8 rounded-full border-2 border-black/5 border-t-[#e26215] animate-spin"
            aria-hidden
          />
          <p className="text-xs uppercase tracking-widest font-medium">
            Syncing Calendar...
          </p>
        </div>
      )}
    </div>
  );
}