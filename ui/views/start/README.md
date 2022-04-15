### 开始


## start 
> yarn install

## 开发
> npm run create
创建组件工作区

- lerna 
lerna : 无法加载文件，系统策略禁止运行脚本
使用管理员身份运行powershell  > Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2

## 构建相关
- 项目根目录执行`build:all`命令，需要触发packages中的业务包自己执行build √
- 业务包自行build出dist产物，publish发布此lib √
- 组件构建
- utils构建
- ts集成

- Qs
1. 构建时排除组件依赖？
2. 组件库发版后，业务端项目yarn install也无法获取到最新的包，需要yarn upgrade更新
3. 发布前需要判断是否有dist文件夹


## 发布相关

- npm login √
开发者可能使用了淘宝镜像源，无法登录npm
1. 使用 > npm login --registry https://registry.npmjs.org
2. 切换淘宝镜像为npm官方 npm config set registry https://registry.npmjs.org

- lerna publish √
检测改动过的包，依次发布
修改一个包，如果其他包依赖这个包，则会自动检测并发布

## 模板策略
新建业务组件时，需要通过命令行执行自动根据template模板创建多个文件 (package.json index.ts ...) TODO


## CHANGELOG
- 目前依赖lerna自动生成CHANGELOG.md，后续引入git commit-msg规范来生成