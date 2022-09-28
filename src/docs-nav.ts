export type NavItem = {
  type: 'title' | 'link' | 'group' | 'overview' | 'jumplist' | 'subnav'
  label: string
  items?: NavItem[]
  href?: string
  versionName?: string
  id?: string
}

export type DocsNav = NavItem[];

export const modalAPINav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/modal/api#modalprovider",
    label: 'ModalProvider',
    id: 'provider',
  },
  {
    type: 'link',
    href: "/docs/modal/api#modalcontainer",
    label: 'ModalContainer',
    id: 'container',
  },
  {
    type: 'link',
    href: "/docs/modal/api#modal",
    label: 'Modal',
    id: 'modal',
  },
  {
    type: 'link',
    href: "/docs/modal/api#modaltoggler",
    label: 'ModalToggler',
    id: 'toggler',
  },
  {
    type: 'link',
    href: "/docs/modal/api#usemodal",
    label: 'useModal',
    id: 'useModal',
  },
  {
    type: 'link',
    href: "/docs/modal/api#asmodal",
    label: 'asModal',
    id: 'asModal',
  },
  {
    type: 'link',
    href: "/docs/modal/api#accessibility",
    label: 'Accessibility',
    id: 'accessibility',
  },
  {
    type: 'link',
    href: "/docs/modal/api#typescript",
    label: 'TypeScript',
    id: 'typescript',
  },
];

export const modalExamplesNav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/modal/examples/lightbox",
    label: 'Lightbox',
  },
  {
    type: 'link',
    href: "/docs/modal/examples/drawer",
    label: 'Drawer',
  },
]

export const cssGridAPINav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/css-grid/api#gridprovider",
    label: 'GridProvider',
    id: 'provider'
  },
  {
    type: 'link',
    href: "/docs/css-grid/api#grid",
    label: 'Grid',
    id: 'grid'
  },
  {
    type: 'link',
    href: "/docs/css-grid/api#cell",
    label: 'Cell',
    id: 'cell'
  },
  {
    type: 'link',
    href: "/docs/css-grid/api#usecell",
    label: 'useCell',
    id: 'useCell'
  },
  {
    type: 'link',
    href: "/docs/css-grid/api#usegrid",
    label: 'useGrid',
    id: 'useGrid'
  },
  {
    type: 'link',
    href: "/docs/css-grid/api#usesettings",
    label: 'useSettings',
    id: 'useSettings'
  },
  {
    type: 'link',
    href: "/docs/css-grid/api#typescript",
    label: 'TypeScript',
    id: 'link'
  },
]

export const jumplistAPINav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/jumplist/api#jumplistprovider",
    label: 'JumplistProvider',
    id: 'provider',
  },
  {
    type: 'link',
    href: "/docs/jumplist/api#jumplistnode",
    label: 'JumplistNode',
    id: 'node',
  },
  {
    type: 'link',
    href: "/docs/jumplist/api#jumplistbutton",
    label: 'JumplistButton',
    id: 'button',
  },
  {
    type: 'link',
    href: "/docs/jumplist/api#usejumplist",
    label: 'useJumplist',
    id: 'useJumplist',
  },
  {
    type: 'link',
    href: "/docs/jumplist/api#typescript",
    label: 'TypeScript',
    id: 'link'
  },
]

export const sliderAPINav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/slider/api#sliderprovider",
    label: 'SliderProvider',
    id: 'provider',
  },
  {
    type: 'link',
    href: "/docs/slider/api#slidertrack",
    label: 'SliderTrack',
    id: 'track',
  },
  {
    type: 'link',
    href: "/docs/slider/api#slide",
    label: 'Slide',
    id: 'slide',
  },
  {
    type: 'link',
    href: "/docs/slider/api#sliderbutton",
    label: 'SliderButton',
    id: 'sliderbutton',
  },
  {
    type: 'link',
    href: "/docs/slider/api#sliderprogress",
    label: 'SliderProgress',
    id: 'progress',
  },
  {
    type: 'link',
    href: "/docs/slider/api#dotnav",
    label: 'DotNav',
    id: 'dotnav'
  },
  {
    type: 'link',
    href: "/docs/slider/api#useslider",
    label: 'useSlider',
    id: 'useSlider',
  },
  {
    type: 'link',
    href: "/docs/slider/api#typescript",
    label: 'TypeScript',
    id: 'link'
  },
]

export const sliderExamplesNav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/slider/examples/simple",
    label: 'Simple Slider',
  },
  {
    type: 'link',
    href: "/docs/slider/examples/responsive",
    label: 'Responsive Slider',
  },
  {
    type: 'link',
    href: "/docs/slider/examples/snap",
    label: 'Snap Slider',
  },
  {
    type: 'link',
    href: "/docs/slider/examples/marquee",
    label: 'Marquee Slider',
  },
  {
    type: 'link',
    href: "/docs/slider/examples/free-scrolling",
    label: 'Free-Scrolling Slider',
  },
  {
    type: 'link',
    href: "/docs/slider/examples/thumbnail",
    label: 'Thumbnail Slider',
  },
  {
    type: 'link',
    href: "/docs/slider/examples/lightbox",
    label: 'Lightbox Slider',
  },
  {
    type: 'link',
    href: "/docs/slider/examples/custom-scrollbar",
    label: 'Custom Scrollbar',
  },
  {
    type: 'link',
    href: "/docs/slider/examples/dots",
    label: 'Dots Nav',
  },
]

export const collapsiblesAPINav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/collapsibles/api#collapsible",
    label: 'Collapsible',
    id: 'collapsible'
  },
  {
    type: 'link',
    href: "/docs/collapsibles/api#collapsiblecontent",
    label: 'CollapsibleContent',
    id: 'content'
  },
  {
    type: 'link',
    href: "/docs/collapsibles/api#collapsibletoggler",
    label: 'CollapsibleToggler',
    id: 'toggler'
  },
  {
    type: 'link',
    href: "/docs/collapsibles/api#collapsiblegroup",
    label: 'CollapsibleGroup',
    id: 'group'
  },
  {
    type: 'link',
    href: "/docs/collapsibles/api#accessibility",
    label: 'Accessibility',
    id: 'accessibility'
  },
  {
    type: 'link',
    href: "/docs/collapsibles/api#typescript",
    label: 'TypeScript',
    id: 'typescript'
  },
];

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
    label: 'Components'
  },
  {
    type: 'group',
    href: "/docs/modal",
    label: 'Modal',
    versionName: 'modal',
    items: [
      {
        type: 'overview',
        href: "/docs/modal",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/modal/setup",
        label: 'Basic Setup',
      },
      {
        type: 'link',
        href: "/docs/modal/routing",
        label: 'Routing'
      },
      {
        type: 'jumplist',
        href: "/docs/modal/api",
        label: 'API Reference',
        items: modalAPINav
      },
      {
        type: 'subnav',
        href: "/docs/modal/examples",
        label: 'Examples',
        items: modalExamplesNav
      },
      {
        type: 'link',
        href: "/docs/modal/releases",
        label: 'Releases',
      },
    ]
  },
  {
    type: 'group',
    href: "/docs/slider",
    label: 'Slider',
    versionName: 'slider',
    items: [
      {
        type: 'overview',
        href: "/docs/slider",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/slider/setup",
        label: 'Basic Setup',
      },
      {
        type: 'jumplist',
        href: "/docs/slider/api",
        label: 'API Reference',
        items: sliderAPINav
      },
      {
        type: 'subnav',
        label: 'Examples',
        href: "/docs/slider/examples",
        items: sliderExamplesNav
      },
      {
        type: 'link',
        href: "/docs/slider/releases",
        label: 'Releases',
      },
    ]
  },
  {
    type: 'group',
    href: "/docs/css-grid",
    label: 'CSS Grid',
    versionName: 'css-grid',
    items: [
      {
        type: 'overview',
        href: "/docs/css-grid",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/css-grid/setup",
        label: 'Basic Setup',
      },
      {
        type: 'jumplist',
        href: "/docs/css-grid/api",
        label: 'API Reference',
        items: cssGridAPINav
      },
      {
        type: 'link',
        href: "/docs/css-grid/releases",
        label: 'Releases',
      },
    ]
  },
  {
    type: 'group',
    href: "/docs/jumplist",
    label: 'Jumplist',
    versionName: 'jumplist',
    items: [
      {
        type: 'overview',
        href: "/docs/jumplist",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/jumplist/setup",
        label: 'Basic Setup',
      },
      {
        type: 'jumplist',
        href: "/docs/jumplist/api",
        label: 'API Reference',
        items: jumplistAPINav
      },
      {
        type: 'link',
        href: "/docs/jumplist/releases",
        label: 'Releases',
      },
    ]
  },
  {
    type: 'group',
    href: "/docs/collapsibles",
    label: 'Collapsibles',
    versionName: 'collapsibles',
    items: [
      {
        type: 'overview',
        href: "/docs/collapsibles",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/collapsibles/setup",
        label: 'Basic Setup',
      },
      {
        type: 'jumplist',
        href: "/docs/collapsibles/api",
        label: 'API Reference',
        items: collapsiblesAPINav
      },
      {
        type: 'link',
        href: "/docs/collapsibles/releases",
        label: 'Releases',
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
    versionName: 'window-info',
    items: [
      {
        type: 'overview',
        href: "/docs/window-info",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/window-info/setup",
        label: 'Basic Setup',
      },
      {
        type: 'link',
        href: "/docs/window-info/api",
        label: 'API Reference'
      },
      {
        type: 'link',
        href: "/docs/window-info/releases",
        label: 'Releases',
      },
    ]
  },
  {
    type: 'group',
    href: "/docs/scroll-info",
    label: 'Scroll Info',
    versionName: 'scroll-info',
    items: [
      {
        type: 'overview',
        href: "/docs/scroll-info",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/scroll-info/setup",
        label: 'Basic Setup',
      },
      {
        type: 'link',
        href: "/docs/scroll-info/api",
        label: 'API Reference'
      },
      {
        type: 'link',
        href: "/docs/scroll-info/releases",
        label: 'Releases',
      },
    ]
  },
  {
    type: 'group',
    href: "/docs/mouse-info",
    label: 'Mouse Info',
    versionName: 'mouse-info',
    items: [
      {
        type: 'overview',
        href: "/docs/mouse-info",
        label: 'Overview',
      },
      {
        type: 'link',
        href: "/docs/mouse-info/setup",
        label: 'Basic Setup',
      },
      {
        type: 'link',
        href: "/docs/mouse-info/api",
        label: 'API Reference'
      },
      {
        type: 'link',
        href: "/docs/mouse-info/releases",
        label: 'Releases',
      },
    ]
  },
]
