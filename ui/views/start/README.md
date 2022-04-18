### 开始


## start 
> lerna bootstrap

## 开发
> npm run create 创建组件工作区

> lerna add [@version] [--dev] [--exact]
- 增加本地或者远程package做为当前项目packages里面的依赖
```js
# Adds the module-1 package to the packages in the 'prefix-' prefixed folders
lerna add module-1 packages/prefix-*

# Install module-1 to module-2
lerna add module-1 --scope=module-2

# Install module-1 to module-2 in devDependencies
lerna add module-1 --scope=module-2 --dev

# Install module-1 in all modules except module-1
lerna add module-1

# Install babel-core in all modules
lerna add babel-core
```


- lerna 
lerna : 无法加载文件，系统策略禁止运行脚本
使用管理员身份运行powershell  > Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2

>运行lerna publish如果中途有包发布失败，再运行lerna publish的时候，因为Tag已经打上去了，所以不会再重新发布包到NPM
解决办法：
1. 运行lerna publish from-git，会把当前标签中涉及的NPM包再发布一次，PS：不会再更新package.json，只是执行npm publish
2. 运行lerna publish from-package，会把当前所有本地包中的package.json和远端NPM比对，如果是NPM上不存在的包版本，都执行一次npm publish

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
4. 创建组件工作区时，组件的utils依赖包如何引入？ lerna add ？ template模板写入？


## 发布相关

- npm login √
开发者可能使用了淘宝镜像源，无法登录npm
1. 使用 > npm login --registry https://registry.npmjs.org
2. 切换淘宝镜像为npm官方 npm config set registry https://registry.npmjs.org

- lerna publish √
检测改动过的包，依次发布
修改一个包，如果其他包依赖这个包，则会自动检测并发布

- 只发布dist文件夹下的内容，package.json通过lerna prepublish钩子打包时动态创建

- lerna publish --yes
跳过“您确定要发布上述更改吗？”

## 模板策略
新建业务组件时，需要通过命令行执行自动根据template模板创建多个文件 (package.json index.ts ...) TODO


## CHANGELOG
- 目前依赖lerna自动生成CHANGELOG.md，后续引入git commit-msg规范来生成