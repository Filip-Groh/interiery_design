import { PrismaClient } from "@prisma/client"

let prisma = new PrismaClient()

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

export const getArticles = async () => {
    try {
        const query = prisma.article.findMany({
            include: {
                tags: true,
                images: true
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
} 

export const setTag = async (name) => {
    try {
        const query = prisma.tag.create({
            data: {
                name: name
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getTags = async () => {
    try {
        const query = prisma.tag.findMany()
        return query
    } catch (error) {
        console.log(error)
    }
}

export const delTag = async (id, name) => {
    try {
        const query = prisma.tag.delete({
            where: {
                id: id,
                name: name
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getImages = async () => {
    try {
        const query = prisma.image.findMany()
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getPreviews = async () => {
    try {
        const query = prisma.preview.findMany({
            include: {
                images: true
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}