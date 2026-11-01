# 吃π俱乐部改版部署

本改动基于仓库提交 `305ce8a`，新增独立 `chipai` 主题。首页使用实际 Notion 文章数据，卡片进入真实全文地址，不再使用设计预览中的导读弹窗或硬编码文章清单。文章详情、密码保护、评论、归档和标签页面沿用 simple 主题的实现。

## 部署前核对

1. 确认生产项目连接的是 `lujohn3li/NotionNext`，记录生产分支、当前部署版本和环境变量，保留回滚点。
2. 在部署平台为 Preview 环境设置并核对以下非秘密值；环境变量优先于代码默认值：

```dotenv
NOTION_PAGE_ID=aac904a355254d5b9033f1ffd47d5fc8
NEXT_PUBLIC_THEME=chipai
NEXT_PUBLIC_LANG=zh-CN
NEXT_PUBLIC_LINK=https://www.chipai.club
NEXT_PUBLIC_AUTHOR=ChipAi
NEXT_PUBLIC_BIO=从一颗芯片，读懂智能世界。
```

3. 确认网站所用 Notion 数据库与已发布文章可通过现有数据访问方式读取。若部署项目使用私人凭据，仅在部署平台秘密设置中处理，勿提交到仓库或聊天。
4. 不修改现有文章的 slug、POST_URL_PREFIX、伪静态设置和重定向规则，以保留既有 URL。
5. Notion 配置表中显式启用的 THEME 会覆盖默认主题；该项目前应保持未启用，或在预览验证后明确设为 chipai。

## 验证

```sh
npm install --legacy-peer-deps
npm exec jest -- --config jest.chipai.config.js --runInBand
npm run build
```

如果 build 在 Notion 数据读取环节失败，按错误日志检查数据访问、数据库 ID 和 NOTION_INDEX；不要通过恢复空对象兜底或使用虚假文章掩盖问题。数据不可用时应阻止首次部署；已有 ISR 页面应保留最后一次成功生成的页面，而不是覆盖为空白站点。

## 预览验收后才能提升生产

- 首页标题与描述不含 undefined，显示真实已发布文章。
- 四个专题、当前页搜索、无结果清除、分页、手机布局、系统及手动深色模式均正常。
- 文章卡片进入真实全文，关于页面 `/about-club`、分类、标签、归档可访问。
- 锁定文章仍需密码，不暴露未发布正文。
- RSS、站点地图、canonical 使用正式域名。
- 数据库后续修改能在 ISR 周期内反映；数据服务暂时失败时不覆盖有效缓存。

## 回滚

保留原生产部署，在平台恢复到该部署；或回退本次合并提交并恢复记录的环境变量。GitHub main 和生产域名不应在预览验收前被覆盖。

## 配图

`public/images/chipai-hero.svg` 为此次改版生成的 AI 芯片主题概念图，并非具体芯片产品照片。页面配有对应说明。

## 本次本地验证结果与限制

- 数据视图解析回归测试：8 项通过（独立 Node/Jest 环境）。
- TypeScript 检查与 Next.js 优化编译通过；完整生产构建未通过：本地构建环境请求 Notion 的 `loadPageChunk` 返回 HTTP 403，随后按预期阻止生成空白站点。不能据此断定生产环境的 403 原因相同。
- 使用真实主题 React 组件与九篇文章的测试夹具检查了桌面、手机、专题筛选、当前页搜索、清除、文章链接及深色模式。测试中路由、全局上下文及旧文章布局被替身隔离，并非线上端到端验收。
- GitHub 写入授权已修复，修改提交到独立分支供审阅；尚未部署或修改生产域名。
- 待办：确认部署项目、核对 Notion 数据访问方式，在部署 Preview 中验证后再提升生产。

## 接口兼容修复后的复验

- 已确认数据库公开发布；无需扩大分享权限或提供 token_v2。
- 默认 API_BASE_URL 改为当前公开站点 https://lujohn3li.notion.site/api/v3；环境变量仍可覆盖。
- 在 notion-client 解析前解包新版 recordMap，覆盖带/不带 spaceId 的响应；将原来失效的 ky 同步接口重写改为客户端 fetch 适配。
- 移除配置表空结果错误日志中的未定义变量 databaseRecordMap。
- 修复后本地完整生产构建成功，包含真实 Notion 数据读取及静态页面生成；解析与兼容测试共 12 项。
- Vercel Preview 仍需重新构建并单独验收，不代表生产已发布。
