import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Программы", href: "#programs" },
  { label: "Расписание", href: "#schedule" },
  { label: "Цены", href: "#pricing" },
  { label: "Контакты", href: "#contact" },
];

const VkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.188 1.368 1.259 2.184 1.814.616.42 1.084.328 1.084.328l2.178-.03s1.14-.07.6-.964c-.044-.073-.314-.661-1.618-1.869-1.366-1.265-1.183-1.06.462-3.246.998-1.328 1.398-2.14 1.273-2.487-.12-.331-.853-.244-.853-.244l-2.454.015s-.182-.025-.317.056c-.131.079-.216.263-.216.263s-.388 1.032-.904 1.91c-1.09 1.854-1.526 1.953-1.705 1.838-.416-.268-.312-1.074-.312-1.647 0-1.79.272-2.536-.529-2.729-.266-.064-.461-.106-1.14-.113-.87-.009-1.606.003-2.023.207-.278.136-.492.438-.362.455.162.021.528.099.722.363.25.341.241 1.108.241 1.108s.144 2.108-.335 2.369c-.328.179-.778-.186-1.744-1.855-.495-.856-.868-1.8-.868-1.8s-.072-.176-.2-.271c-.155-.115-.372-.151-.372-.151l-2.335.015s-.35.01-.479.162c-.114.135-.009.414-.009.414s1.826 4.273 3.895 6.426c1.896 1.972 4.049 1.842 4.049 1.842h.975z"/>
  </svg>
);

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="JumpFitness логотип" className="h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleSmoothScroll(e, l.href)}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://vk.ru/jumpfitnessamara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="ВКонтакте"
          >
            <VkIcon />
          </a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                handleSmoothScroll(e, l.href);
                setOpen(false);
              }}
              className="block text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://vk.ru/jumpfitnessamara"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            <VkIcon />
            ВКонтакте
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
