# bilibili直播弹幕监听服务

实现监听B站直播间弹幕并保存至mqsql数据库<br/>
配合前端项目https://github.com/boiboif/nipo-biliLiveChat

## 技术栈
typescript + prisma.js + mysql

## 本地开发
安装依赖
```bash
npm i
```
1. 首先在项目根目录创建一个 .env 环境变量文件
- .env文件
```env
# 数据库连接地址
DATABASE_URL="mysql://username:password@localhost:3306/nipo_live_chat"
```

2. 通过prisma创建数据库

```bash
npx prisma generate && npx prisma db push
```

3. 打开./src/index.ts文件修改监听和房间号和进行鉴权
```typescript
// 监听的房间id
const ROOM_ID = 0
```
4. 鉴权

  - 由于近期b站对弹幕监听服务进行了限制，现在必须要进行鉴权。
    1. 首先在浏览器中打开b站进行登录。
    2. <strong>登陆后</strong>打开这个地址(roomId修改为你需要监听的房间号)<br/>
       https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo?id={roomId}
    4. 该地址会返回一个json，我们需要用到里面的 data.token
    5. 编辑index.ts文件
```typescript
// 修改鉴权用户id，就是网页端登录的b站用户的uid
const UID = 0
// 将下面代码中key的值修改为刚获取的data.token
startListen(ROOM_ID, handler, {
  ws: {
    uid: UID,
    key: '',
  },
})
```
6. 启动项目
```bash
npm run dev
```

## 使用pm2管理服务
```bash
npm i -g pm2

npm run build

pm2 start ./dist/index.js
```

## Credits
[blive-message-listener](https://github.com/ddiu8081/blive-message-listener)
