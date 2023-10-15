import { DanmuMsg, SuperChatMsg } from 'blive-message-listener'

export type SaveUserDto = {
    /** b站用户id */
    uid: number
    /** b站用户名 */
    uname: string
}

export type SaveCommentDto = {
    originId: string
} & DanmuMsg

export type SaveSuperChatDto = {
    originId: string
    uid: number
} & Omit<SuperChatMsg, 'id' | 'user'>
