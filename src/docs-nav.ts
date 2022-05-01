export type NavItem = {
  type: 'title' | 'link' | 'group' | 'overview' | 'jumplist'
  label: string
  items?: NavItem[]
  href?: string
  versionName?: string
  id?: string
}

export type DocsNav = NavItem[];

export const modalJumplistNav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/modal/api#provider",
    id: 'provider',
    label: 'ModalProvider'
  },
  {
    type: 'link',
    href: "/docs/modal/api#container",
    id: 'container',
    label: 'ModalContainer'
  },
  {
    type: 'link',
    href: "/docs/modal/api#modal",
    id: 'modal',
    label: 'Modal'
  },
  {
    type: 'link',
    href: "/docs/modal/api#toggler",
    id: 'toggler',
    label: 'ModalToggler'
  },
  {
    type: 'link',
    href: "/docs/modal/api#useModal",
    id: 'useModal',
    label: 'useModal'
  },
  {
    type: 'link',
    href: "/docs/modal/api#asModal",
    id: 'asModal',
    label: 'asModal'
  },
];

export const cssGridJumplistNav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/css-grid/api#provider",
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
  }
]

export const jumplistJumplistNav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/jumplist/api#provider",
    label: 'JumplistProvider',
    id: 'provider',
  },
  {
    type: 'link',
    href: "/docs/jumplist/api#node",
    label: 'JumplistNode',
    id: 'node',
  },
  {
    type: 'link',
    href: "/docs/jumplist/api#track",
    label: 'JumplistTrack',
    id: 'track',
  },
  {
    type: 'link',
    href: "/docs/jumplist/api#useJumplist",
    label: 'useJumplist',
    id: 'useJumplist',
  },
]

export const sliderJumplistNav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/slider/api#provider",
    label: 'SliderProvider',
    id: 'provider',
  },
  {
    type: 'link',
    href: "/docs/slider/api#slider",
    label: 'Slider',
    id: 'slider',
  },
  {
    type: 'link',
    href: "/docs/slider/api#track",
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
    href: "/docs/slider/api#button",
    label: 'SliderButton',
    id: 'button',
  },
  {
    type: 'link',
    href: "/docs/slider/api#useSlider",
    label: 'useSlider',
    id: 'useSlider',
  },
]

export const collapsiblesJumplistNav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/collapsibles/api#collapsible",
    label: 'Collapsible',
    id: 'collapsible'
  },
  {
    type: 'link',
    href: "/docs/collapsibles/api#content",
    label: 'CollapsibleContent',
    id: 'content'
  },
  {
    type: 'link',
    href: "/docs/collapsibles/api#toggler",
    label: 'CollapsibleToggler',
    id: 'toggler'
  },
  {
    type: 'link',
    href: "/docs/collapsibles/api#group",
    label: 'CollapsibleGroup',
    id: 'group'
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
        items: modalJumplistNav
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
        items: cssGridJumplistNav
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
        items: sliderJumplistNav
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
        items: jumplistJumplistNav
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
        items: collapsiblesJumplistNav
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
    ]
  },
]
