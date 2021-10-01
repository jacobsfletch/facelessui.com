export type Item = {
  type: 'title' | 'link' | 'group'
  label: string
  items?: Item[]
  href?: string
}

export const nav: Item[] = [
  {
    type: 'link',
    href: "/docs/getting-started",
    label: 'Getting started'
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
        type: 'link',
        href: "/docs/window-info/installation",
        label: 'Installation'
      },
      {
        type: 'link',
        href: "/docs/window-info/examples",
        label: 'Examples'
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
        type: 'link',
        href: "/docs/scroll-info/installation",
        label: 'Installation'
      },
      {
        type: 'link',
        href: "/docs/scroll-info/examples",
        label: 'Examples'
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
        type: 'link',
        href: "/docs/mouse-info/installation",
        label: 'Installation'
      },
      {
        type: 'link',
        href: "/docs/mouse-info/examples",
        label: 'Examples'
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
    href: "/docs/css-grid",
    label: 'CSS Grid',
    items: [
      {
        type: 'link',
        href: "/docs/css-grid/installation",
        label: 'Installation'
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
    href: "/docs/collapsibles",
    label: 'Mouse Info',
    items: [
      {
        type: 'link',
        href: "/docs/collapsibles/installation",
        label: 'Installation'
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
  {
    type: 'group',
    href: "/docs/modal",
    label: 'Modal',
    items: [
      {
        type: 'link',
        href: "/docs/modal/installation",
        label: 'Installation'
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
    href: "/docs/slider",
    label: 'Slider',
    items: [
      {
        type: 'link',
        href: "/docs/slider/installation",
        label: 'Installation'
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
]
