import logo from "../assets/logo-text.png";

const LINK_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const SOCIALS = ["GitHub", "Twitter", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-medium text-slate-500">
              {SOCIALS.map((social) => (
                <a key={social} href="#" className="hover:text-slate-800">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-slate-500">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-slate-800">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
