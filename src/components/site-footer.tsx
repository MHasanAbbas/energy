import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-[radial-gradient(circle_at_top_right,rgba(240,201,120,0.14),transparent_22%),linear-gradient(180deg,#113540_0%,#0d252d_100%)] text-white">
      <div className="mx-auto grid max-w-[1240px] gap-6 px-4 py-14 md:px-6 lg:grid-cols-[1.2fr,0.7fr,0.7fr,0.9fr] lg:px-8">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
          <div className="flex items-center gap-3">
            <BrandMark />
            <div className="grid gap-0.5">
              <span className="font-display text-[1.35rem] font-bold uppercase tracking-[-0.06em]">
                OEnergy
              </span>
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white/60">
                Renewable Energy Solutions
              </span>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
            Custom renewable energy solutions delivering solar PV, wind energy, hybrid systems, battery storage, design consultancy, and operation and maintenance services for a sustainable future.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <h3 className="font-display text-xl uppercase tracking-[-0.04em]">Navigation</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <h3 className="font-display text-xl uppercase tracking-[-0.04em]">Solutions</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            <span>Solar PV</span>
            <span>Wind Energy</span>
            <span>Hybrid Systems</span>
            <span>Battery Storage</span>
            <span>Containerized Units</span>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <h3 className="font-display text-xl uppercase tracking-[-0.04em]">Contact</h3>
          <p className="mt-4 text-sm leading-7 text-white/72">{siteConfig.location}</p>
          <a href={`mailto:${siteConfig.email}`} className="mt-3 block text-sm text-white transition hover:text-white/72">
            {siteConfig.email}
          </a>
          <ButtonLink href="/contact" variant="ghost" className="mt-5 w-full">
            Start a Project Brief
          </ButtonLink>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-col gap-2 border-t border-white/10 px-4 py-5 text-sm text-white/55 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <span>© 2026 OEnergy. All rights reserved.</span>
        <span>Premium renewable energy solutions for a sustainable world.</span>
      </div>
    </footer>
  );
}
