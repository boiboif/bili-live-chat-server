import prisma from '../client'

export const getComments = async () => {
    const res = await prisma.comment.findMany()
    console.log(res[2].createdAt.toLocaleString())
}

getComments()
