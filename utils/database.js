import prisma from "./prismaClient"

export const queryData = async () => {
    const query = "Hello world!"
    return query
}

export const getDesigners = async () => {
    try {
        const query = prisma.designer.findMany()
        return query
    } catch (error) {
        console.log(error)
    }
} 