
export interface IRoute {
  path: string;
  name: string;
  title: string;
}

export interface ISide {
  sideName: string;
  sideItems?: IRoute[];
}

// 配置组件
export const components: IRoute[] = [
  {
    path: "/button",
    name: "button",
    title: "按钮 button",
  },
  {
    path: "/card",
    name: "card",
    title: "卡片 card",
  },
]

// 配置side
export const side: ISide[] = [
  {
    sideName: '指引',
  },
  {
    sideName: '组件',
    sideItems: components,
  },
  {
    sideName: 'Utils',
  },
]