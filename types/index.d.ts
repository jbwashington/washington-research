
/**
 * Site configuration interface
 * @interface SiteConfig
 */
export interface SiteConfig {
  name: string;
  phone?: string;
  email?: string;
  description: string;
  url: string;
  ogImage?: string;
  links?: {
    instagram?: string;
    twitter?: string;
    github?: string;
  };
  mainNav: {
    title: string;
    href: string;
    external?: boolean;
  }[];
  signInNav: {
    title: string;
    href: string;
    external?: boolean;
  }[];
  footerNav: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}
export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;
export type SignInNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type LoginConfig = {
  loginNav: LoginNavItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
    stripeCurrentPeriodEnd: number;
    isPro: boolean;
  };
