# Nzoth

🦑 Nzoth 是一个用于快速构建自己的 Vue 组件库的基础模板框架

## 版本

* Vue 3.0 版本 ｜ [Vue 2.0 版本](https://github.com/pdsuwwz/nzoth/tree/vue2.0)

## 依赖支持

* Vue 3.0.x

## 安装

* 首先需要通过 git 将 Nzoth 仓库 clone 下来 :

```bash
$ git clone https://github.com/pdsuwwz/nzoth.git
```

* 运行以下命令并等待所有的依赖包安装完毕

```bash
$ pnpm i
```

## 本地调试

使用以下命令来启动测试用例：

```bash
$ pnpm dev:example

# 或

$ npm run dev:example
```

执行完毕后，不出意外的话会自动拉取浏览器并打开下方链接: 

http://localhost:8080/


接下来进一步了解下组件 src、example 示例 这两者是怎么通过示例页面呈现出来的。

我们看下目录结构：

```bash
.
├── babel.config.js # babel 配置
├── build # 构建打包配置
│   ├── utils.js
│   ├── webpack.config.js
│   └── webpack.example.js
├── example # 编写测试用例的目录，方便实时预览当前开发的组件库
│   ├── App.vue
│   ├── index.html
│   ├── main.js
│   ├── router.js
│   └── src
│       ├── components
│       └── views
├── lib # 打包完成后的输出目录（打包构建后才会生成）
│   ├── lib-index.js
│   └── lib-index.js.map
└── src # 编写组件库的目录
    ├── components
    │   └── CustomButton
    ├── main.js
    └── utils
        └── type.js
```

由此我们知道，开发和测试是分开的：

即我们会在 `src` 中开发组件库，在 `example` 中测试组件库

## 开发组件库

默认组件库代码位于 `/src/*` 目录下

在 components 目录中已内置好了一个 `CustomButton.vue` 测试组件，后续可以根据需求自由修改。

本地调试时可以随时查看当前开发的组件库组件


__只需要做的就是进入 `/example/main.js` 目录，将做好的 `CustomButton.vue` 注册为全局组件即可:__

```js
import { createApp } from 'vue'
import CustomPackage from '@/main'
import App from './App.vue'

createApp(App)
  .use(CustomPackage)
  .mount('#app')

```

具体可查看该文件：[/example/main.js](https://github.com/pdsuwwz/nzoth/blob/vue3.0/example/main.js)


__使用：__

```html
<template>
  <CustomButton
    @click="handleClick('Button 1')"
  >
    Button 1
  </CustomButton>
</template>
```

> 💡 __上述测试代码都已经写好，无需再次编写，只需要根据需求自行修改即可。__


## 构建组件库

组件库编写完后就可以开始构建了，使用以下命令打包构建已经开发好的组件库：

```bash
$ pnpm build
```

构建完毕后会看到根目录生成了一个 `lib` 文件夹:

```bash
├── lib
│   ├── lib-index.js
│   └── lib-index.js.map
```

这也就是将要发布到 Npm 上的核心文件。

## 注册并登录 Npm 账号

首先需要提前注册下 Npm 账号 https://docs.npmjs.com/creating-a-new-npm-user-account

注册完后在终端登录 Npm 账号：

会提示输入 Username, Password, Email...，按照提示走就可以：

```bash
$ npm login
```

## 🚀 发布
最后一步，执行以下命令进行发布

```bash
$ npm publish
```

## 💡 注意事项

> 引入组件的方式默认为全局注册，也可以更改为局部注册，只需要通过解构的方式引入 @/main 即可，请根据需要自由搭配 ~
>
> 引入的路径中使用了 Webpack 的 alias，包括 root, @, example 等, 若有需要可在 `/build` 中自行修改配置文件
>
> 每次发布新版本都需要更改 package.json 中的 version 版本号，不然会发布不了的哦
>
> package.json 中的 main 入口路径与 Webpack 中的 output 配置是一一对应的，若需要修改，记得保持一致 ~
