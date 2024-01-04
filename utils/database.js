"use server"

import { PrismaClient } from "@prisma/client"
import { writeFile, rm } from "fs/promises"

let prisma = new PrismaClient()

export const setArticle = async (title, text, images, tags) => {
    try {
        images = images.map(image => {
            return { id: Number(image) }
        })
        tags = tags.map(tag => {
            return { id: Number(tag) }
        })

        const query = prisma.article.create({
            data: {
                title: title,
                text: text,
                images: {
                    connect: images
                },
                tags: {
                    connect: tags
                }
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
} 

export const getArticle = async () => {
    try {
        const query = prisma.article.findMany({
            include: {
                tags: true,
                images: true,
                comments: true
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
} 

export const getArticleById = async (id) => {
    try {
        const query = prisma.article.findFirst({
            where: {
                id: id
            },
            include: {
                tags: true,
                images: true,
                comments: true
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
} 

export const modArticle = async (id, title, text) => {
    try {
        const query = prisma.article.update({
            where: {
                id: id
            },
            data: {
                title: title,
                text: text
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
} 

export const delArticle = async (id) => {
    try {
        const query = prisma.article.delete({
            where: {
                id: id
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
} 

export const setDesigner = async (name, role, email, mobil) => {
    try {
        const query = prisma.designer.create({
            data: {
                name: name,
                role: role,
                email: email,
                mobil: mobil
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
} 

export const getDesigner = async () => {
    try {
        const query = prisma.designer.findMany()
        return query
    } catch (error) {
        console.log(error)
    }
} 

export const modDesigner = async (id, name, role, email, mobil) => {
    try {
        const query = prisma.designer.update({
            where: {
                id: id
            },
            data: {
                name: name,
                role: role,
                email: email,
                mobil: mobil
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
} 

export const delDesigner = async (id) => {
    try {
        const query = prisma.designer.delete({
            where: {
                id: id
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
} 

export const setImage = async (file, description) => {
    try {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const pathOfFile = `./public/${file.name}`
        const pathOfData = `/${file.name}`
        await writeFile(pathOfFile, buffer)

        const query = prisma.image.create({
            data: {
                path: pathOfData,
                description: description
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getImage = async () => {
    try {
        const query = prisma.image.findMany({
            include: {
                _count: true
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const delImage = async (id) => {
    try {
        const image = await prisma.image.findFirst({
            where: {
                id: id
            }
        })
        const path = `./public/${image.path}`
        const query = prisma.image.delete({
            where: {
                id: id
            }
        })
        await rm(path)
        return query
    } catch (error) {
        console.log(error)
    }
}

export const setPreview = async (title, image1Id, image2Id) => {
    try {
        const query = prisma.preview.create({
            data: {
                title: title,
                images: {
                    connect: [
                        {
                            id: image1Id
                        },
                        {
                            id: image2Id
                        }
                    ]
                }
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getPreview = async () => {
    try {
        const query = prisma.preview.findMany({
            include: {
                images: true,
                _count: true
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const modPreview = async (id, title) => {
    try {
        const query = prisma.preview.update({
            where: {
                id: id
            },
            data: {
                title: title
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const delPreview = async (id) => {
    try {
        const query = prisma.preview.delete({
            where: {
                id: id
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const setRealization = async (title, task, images, previews, tags) => {
    try {
        images = images.map(image => {
            return { id: Number(image) }
        })
        previews = previews.map(preview => {
            return { id: Number(preview) }
        })
        tags = tags.map(tag => {
            return { id: Number(tag) }
        })

        const query = prisma.realization.create({
            data: {
                title: title,
                task: task,
                image: {
                    connect: images
                },
                preview: {
                    connect: previews
                },
                tags: {
                    connect: tags
                }
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getRealization = async () => {
    try {
        const query = prisma.realization.findMany({
            include: {
                image: true,
                preview: true,
                comments: true,
                tags: true
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getRealizationById = async (id) => {
    try {
        const query = prisma.realization.findFirst({
            where: {
                id: id
            },
            include: {
                image: true,
                preview: {
                    include: {
                        images: true
                    }
                },
                comments: true,
                tags: true
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const modRealization = async (title, task) => {
    try {
        const query = prisma.realization.update({
            where: {
                id: id
            },
            data: {
                title: title,
                task: task
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const delRealization = async (id) => {
    try {
        const query = prisma.realization.delete({
            where: {
                id: id
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

export const getTag = async () => {
    try {
        const query = prisma.tag.findMany({
            include: {
                _count: true
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const modTag = async (id, name) => {
    try {
        const query = prisma.tag.update({
            where: {
                id: id
            },
            data: {
                name: name
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const delTag = async (id) => {
    try {
        const query = prisma.tag.delete({
            where: {
                id: id
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}