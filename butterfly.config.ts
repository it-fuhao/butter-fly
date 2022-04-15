
export interface IRoute {
  path: string;
  name: string;
  title: string;
  showMobile?: boolean;
}

export interface ISide {
  sideName: string;
  sideItems?: IRoute[];
}

// 配置指引
export const guide: IRoute[] = [
  {
    path: "/start",
    name: "start",
    title: "开始",
    showMobile: false,
  },
]

// 配置组件
export const components: IRoute[] = [
  {
    path: "/button",
    name: "button",
    title: "按钮 button",
    showMobile: true,
  },
  {
    path: "/card",
    name: "card",
    title: "卡片 card",
    showMobile: true,
  },
]

// 配置side
export const side: ISide[] = [
  {
    sideName: '指引',
    sideItems: guide,
  },
  {
    sideName: '组件',
    sideItems: components,
  },
  {
    sideName: 'Utils',
  },
]