# nanodoodle-trade

基于 [Next.js](https://nextjs.org) 构建的项目,使用 App Router + TypeScript + Tailwind CSS v4。

## 技术栈

- **Next.js** 16.2.3 (Turbopack)
- **React** 19.2.4
- **TypeScript** 5
- **Tailwind CSS** v4
- **ESLint** 9

## 开发

安装依赖:

```bash
npm install
```

启动开发服务器:

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

编辑 `src/app/page.tsx` 即可修改首页,文件保存后页面会自动热更新。

## 脚本

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run start` | 启动生产服务器 |
| `npm run lint` | 运行 ESLint 检查 |

## 项目结构

```
src/
└── app/
    ├── layout.tsx    # 根布局
    ├── page.tsx      # 首页
    ├── nav.tsx       # 导航栏（玻璃磨砂效果 + 移动端抽屉）
    ├── reveal.tsx    # 滚动显隐动画组件（IntersectionObserver）
    └── globals.css   # 全局样式 & 动画关键帧
public/               # 静态资源（hero.png, why-us.png 等）
```

## 部署

推荐使用 [Vercel](https://vercel.com) 一键部署:推送到 GitHub 后在 Vercel 导入仓库即可,后续每次 push 到 `main` 会自动部署生产环境。
