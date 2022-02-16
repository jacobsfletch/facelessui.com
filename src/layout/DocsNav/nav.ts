export type NavItem = {
  type: 'title' | 'link' | 'group' | 'overview'
  label: string
  items?: NavItem[]
  href?: string
  versionName?: string
}

export type DocsNav = NavItem[];

export const nav: DocsNav = [
  {
    type: 'title',
    label: 'Documentation'
  },
  {
    type: 'group',
    href: "/docs/getting-started",
    label: 'Getting Started',
    items: [
      {
        type: 'overview',
        href: "/docs/getting-started",
        label: 'Overview',
      },
    ]
  },
  {
    type: 'title',
    label: 'Utilities'
  },
  {
    type: 'group',
    href: "/docs/window-info",
    label: 'Window Info',
    items: [
      {
        type: 'overview',
        href: "/docs/window-info",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/window-info/installation",
        label: 'Installation',
        versionName: 'window-info',
      },
      {
        type: 'link',
        href: "/docs/window-info/api",
        label: 'API Reference'
      },
    ]
  },
  {
    type: 'group',
    href: "/docs/scroll-info",
    label: 'Scroll Info',
    items: [
      {
        type: 'overview',
        href: "/docs/scroll-info",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/scroll-info/installation",
        label: 'Installation',
        versionName: 'scroll-info',
      },
      {
        type: 'link',
        href: "/docs/scroll-info/api",
        label: 'API Reference'
      },
    ]
  },
  {
    type: 'group',
    href: "/docs/mouse-info",
    label: 'Mouse Info',
    items: [
      {
        type: 'overview',
        href: "/docs/mouse-info",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/mouse-info/installation",
        label: 'Installation',
        versionName: 'mouse-info',
      },
      {
        type: 'link',
        href: "/docs/mouse-info/api",
        label: 'API Reference'
      },
    ]
  },
  {
    type: 'title',
    label: 'Components'
  },
  {
    type: 'group',
    href: "/docs/modal",
    label: 'Modal',
    items: [
      {
        type: 'overview',
        href: "/docs/modal",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/modal/installation",
        label: 'Installation',
        versionName: 'modal',
      },
      {
        type: 'link',
        href: "/docs/modal/examples",
        label: 'Examples'
      },
      {
        type: 'link',
        href: "/docs/modal/api",
        label: 'API Reference'
      },
    ]
  },
  {
    type: 'group',
    href: "/docs/css-grid",
    label: 'CSS Grid',
    items: [
      {
        type: 'overview',
        href: "/docs/css-grid",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/css-grid/installation",
        label: 'Installation',
        versionName: 'css-grid',
      },
      {
        type: 'link',
        href: "/docs/css-grid/examples",
        label: 'Examples'
      },
      {
        type: 'link',
        href: "/docs/css-grid/api",
        label: 'API Reference'
      },
    ]
  },
  {
    type: 'group',
    href: "/docs/slider",
    label: 'Slider',
    items: [
      {
        type: 'overview',
        href: "/docs/slider",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/slider/installation",
        label: 'Installation',
        versionName: 'slider',
      },
      {
        type: 'link',
        href: "/docs/slider/examples",
        label: 'Examples'
      },
      {
        type: 'link',
        href: "/docs/slider/api",
        label: 'API Reference'
      },
    ]
  },
  {
    type: 'group',
    href: "/docs/collapsibles",
    label: 'Collapsibles',
    items: [
      {
        type: 'overview',
        href: "/docs/collapsibles",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/collapsibles/installation",
        label: 'Installation',
        versionName: 'collapsibles',
      },
      {
        type: 'link',
        href: "/docs/collapsibles/examples",
        label: 'Examples'
      },
      {
        type: 'link',
        href: "/docs/collapsibles/api",
        label: 'API Reference'
      },
    ]
  },
]
