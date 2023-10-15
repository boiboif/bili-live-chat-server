import { LiveTCP, LiveWS, getRoomid } from 'bilibili-live-ws'

console.log(getRoomid(5558))

// const live = new LiveWS(986264, {
//     uid: 1519338,
//     // address: 'wss://broadcastlv.chat.bilibili.com:443/sub',
// })

// const live = new LiveWS(986264, {
//     address: 'wss://ali-bj-live-comet-08.chat.bilibili.com:443/sub',
//     authBody: {
//         roomid: 986264,
//         protover: 2,
//         uid: 1797569576373400,
//         key: 'Ali0HBtgWS7fIHCh33BeakJlpZImBxagE9BMNKobKl33ziSyLGFIiP86CHdlBrUdj3XLIYMu-6PDld01PoxrRlw5_H3Y3s_WvyOzpgAUginYUDMHq5EJdTgljAwz9t6xaqT6Fsn2GCTx06t48EOGc8qOUIi04F0=',
//         group: 'open',
//     },
// })

// live.on('open', () => {
//     console.log('open')
// })
// live.on('live', () => {
//     console.log('live')
// })

// live.on('msg', (data) => {
//     console.log(data)
// })

// live.on('DANMU_MSG', (data) => {
//     console.log(data)
// })
