import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-28">
      {/* Animated orb background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute left-1/2 top-1/3 h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(226,98,21,0.18), rgba(226,98,21,0.06) 40%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] top-[10%] h-[30vw] w-[30vw] max-h-[400px] max-w-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(226,98,21,0.12), transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-[88rem] px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground"
        >
          <span className="h-px w-8 bg-foreground/30" />
          A design & SEO studio · est. 2024
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-[16ch] text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]"
        >
          Web Design <span className="italic font-light text-accent">&amp;</span> SEO,
          <br className="hidden sm:block" /> Built to Outperform.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 grid gap-6 sm:max-w-2xl"
        >
          <p className="max-w-[700px] text-lg leading-relaxed text-black/80 text-pretty sm:text-xl md:leading-loose">
  We build <span className="text-[#e26215] font-medium">editorial-grade websites</span> and run compounding SEO programs for ambitious brands. No templates. No shortcuts. <span className="text-black font-semibold">Just intent-driven execution.</span>
</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/works"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              See the work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3.5 text-sm font-medium hover:border-foreground"
            >
              Book a call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
