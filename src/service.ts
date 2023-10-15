import prisma from './client'
import { SaveCommentDto, SaveSuperChatDto, SaveUserDto } from './type/dto'

export const saveUser = async (data: SaveUserDto) => {
    const res = await prisma.user.upsert({
        create: { ...data, uid: String(data.uid) },
        update: { ...data, uid: String(data.uid) },
        where: {
            uid: String(data.uid),
        },
    })
    return res
}

export const saveComment = async (data: SaveCommentDto) => {
    const res = await prisma.comment.create({
        data: {
            originId: data.originId,
            sendTime: new Date(data.timestamp),
            content: data.content,
            uid: String(data.user.uid),
            badge: data.user.badge ?? {},
            identity: data.user.identity ?? {},
            in_message_emoticon: data.in_message_emoticon,
        },
    })
    return res
}

export const saveSuperChat = async (data: SaveSuperChatDto) => {
    const res = await prisma.super_chat.create({
        data: {
            originId: data.originId,
            uid: String(data.uid),
            time: data.time,
            content: data.content,
            content_color: data.content_color,
            price: data.price,
        },
    })
    return res
}
