import { HomeIcon, IntegrationsIcon, PricingIcon, SettingsIcon, StarIcon, TemplateIcon, UserIcon } from "@/icons/Icons";

export const sidebarData = [
    {
        title: "Dashboard",
        icon: <HomeIcon />,
        path: "/dashboard",
        submenu: [
          { title: "All pages", path: "/dashboard/allpages" },
          { title: "Reports", path: "/dashboard/reports" },
          { title: "Products", path: "/dashboard/products" },
          { title: "Tasks", path: "/dashboard/tasks" },
        ],
      },
      { title: "Features", icon: <StarIcon />, path: "/features" },
      { title: "Users", icon: <UserIcon />, path: "/users" },
      { title: "Pricing", icon: <PricingIcon />, path: "/pricing", submenu: [
          { title: "All pages", path: "/pricing/all-pages" },
          { title: "Reports", path: "/pricing/reports" },
          { title: "Products", path: "/pricing/products" },
          { title: "Tasks", path: "/pricing/tasks" },
        ],
      },
      { title: "Integrations", icon: <IntegrationsIcon />, path: "/integrations" },
      { title: "Settings", icon: <SettingsIcon />, path: "/settings" },
      { title: "Template ", icon: <TemplateIcon />, path: "/templates" },
    ];