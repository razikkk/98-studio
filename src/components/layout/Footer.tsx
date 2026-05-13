import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t hairline bg-white">
      <div className="mx-auto max-w-[88rem] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          
          {/* Brand & SEO Tagline */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-[#e26215] to-black text-white text-xs font-bold transition-all duration-500 hover:rotate-12 hover:shadow-[0_0_15px_rgba(226,98,21,0.4)]">
  {site.brand.mark}
</span>
              <span className="font-bold tracking-tighter text-xl uppercase">{site.brand.name}</span>
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-black/60 text-pretty">
              <strong>Web Design & SEO Built to Outperform.</strong> A senior-led studio in Kerala crafting brand-led websites and compounding SEO programs for a global audience.
            </p>
          </div>

          {/* SEO-Rich Expertise Column */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#e26215]">Expertise</p>
            <ul className="mt-6 space-y-3 text-sm font-medium">
              <li><Link to="/works" className="hover:text-[#e26215] transition-colors">Next.js Development</Link></li>
              <li><Link to="/works" className="hover:text-[#e26215] transition-colors">Premium UI/UX Design</Link></li>
              <li><Link to="/works" className="hover:text-[#e26215] transition-colors">Technical SEO Strategy</Link></li>
              <li><Link to="/works" className="hover:text-[#e26215] transition-colors">Local SEO & Growth</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-black">Connect</p>
            <ul className="mt-6 space-y-3 text-sm font-medium">
              <li>
                <a href={site.contact.emailHref} className="text-lg hover:text-[#e26215] transition-colors">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a href={site.contact.instagram} className="hover:text-[#e26215]" target="_blank" rel="noreferrer">Instagram</a>
                <a href={site.contact.linkedin} className="hover:text-[#e26215]" target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: SEO Location & Technical Credits */}
        <div className="mt-20 flex flex-col gap-4 border-t hairline pt-8 text-[10px] uppercase tracking-[0.15em] text-black/40 sm:flex-row sm:items-center sm:justify-between font-bold">
          <p>© {new Date().getFullYear()} {site.brand.name} - Built with Intent.</p>
          <div className="flex gap-6">
            <span>{site.contact.location}</span>
            <span className="hidden sm:inline text-black/10">|</span>
            {/* <span className="text-black/20 italic">Next.js + Sanity CMS</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}