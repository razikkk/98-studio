import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6">
        <div
          className={`glass flex items-center justify-between rounded-full border hairline px-4 sm:px-6 ${
            scrolled ? "py-2.5" : "py-3"
          }`}
        >
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
            aria-label={`${site.brand.name} — home`}
          >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-[#e26215] to-black text-white text-xs font-bold transition-all duration-500 hover:rotate-12 hover:shadow-[0_0_15px_rgba(226,98,21,0.4)]">
  {site.brand.mark}
</span>
            <span className="hidden sm:inline text-sm">{site.brand.name}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative rounded-full px-4 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground data-[status=active]:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute inset-x-4 -bottom-0.5 h-px bg-accent" />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Book a call
            </Link>
            <button
              type="button"
              className="md:hidden grid h-9 w-9 place-items-center rounded-full hover:bg-secondary"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl border hairline p-2">
            <nav className="flex flex-col">
              {site.nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-xl px-4 py-3 text-sm hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
