import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Washington Research",
  description: "Who we are and where we come from.",
  url: `https://${process.env.NEXT_PUBLIC_SERVER_URL}`,
  ogImage: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/og.png`,
  links: {
    github: "https://github.com/jbwashington/washington-research",
  },
  email: "jbwashington@gmail.com",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  signInNav: [
    {
      title: "People",
      href: "/people",
    },
    {
      title: "Places",
      href: "/places",
    },
    {
      title: "Writings",
      href: "/writings",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  footerNav: [
    {
      title: "People",
      href: "/people",
    },
    {
      title: "Places",
      href: "/places",
    },
    {
      title: "Writings",
      href: "/writings",
    },
  ],
};
