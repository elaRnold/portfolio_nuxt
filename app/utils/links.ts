import type { NavigationMenuItem } from "@nuxt/ui";

export const navLinks: NavigationMenuItem[] = [
  {
    label: "Home",
    icon: "i-lucide-home",
    to: "/",
  },
  {
    label: "Proyectos",
    icon: "i-lucide-folder",
    to: "/projects",
  },
  {
    label: "Sobre mí",
    icon: "i-lucide-user",
    to: "/about",
  },
];
