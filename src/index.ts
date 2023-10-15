import { startListen } from 'blive-message-listener'
import type { MsgHandler } from 'blive-message-listener'
import { saveComment, saveSuperChat, saveUser } from './service'

// 监听的房间id
const ROOM_ID = 0
// 鉴权用户id
const UID = 0

async function main() {
    const handler: MsgHandler = {
        onIncomeDanmu: async (msg) => {
            console.log('onIncomeDanmu')
            console.log(msg.id, JSON.stringify(msg.body))
            try {
                await saveUser({ uid: msg.body.user.uid, uname: msg.body.user.uname })
                await saveComment({ originId: msg.id, ...msg.body })
                console.log('新增弹幕成功')
            } catch (error) {
                console.log(error)
            }
        },
        onIncomeSuperChat: async (msg) => {
            console.log('onIncomeSuperChat')
            console.log(msg.id, msg.body)
            try {
                await saveUser({ uid: msg.body.user.uid, uname: msg.body.user.uname })
                await saveSuperChat({ originId: msg.id, uid: msg.body.user.uid, ...msg.body })
                console.log('新增醒目留言成功')
            } catch (error) {
                console.log(error)
            }
        },
        onClose: () => {
            console.log('连接关闭!')
        },
        onOpen: () => {
            console.log('连接成功!')
        },
        onError: () => {
            console.log('连接错误!')
        },
    }

    startListen(ROOM_ID, handler, {
        ws: {
            uid: UID,
            // https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo?id={roomId}
            key: '',
        },
    })
}

main()
