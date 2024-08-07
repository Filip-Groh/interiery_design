"use server"

import { PrismaClient } from "@prisma/client"
import { writeFile, rm } from "fs/promises"

const prisma = new PrismaClient()
  
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

export const getArticle = async () => {
    try {
        const query = prisma.article.findMany({
            include: {
                tags: true,
                images: true,
                comments: true
            },
            orderBy: {
                createDate: "desc"
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
                images: {
                    include: {
                        tags: true
                    }
                },
                comments: {
                    include: {
                        user: true,
                        likers: true,
                        dislikers: true
                    },
                    orderBy: {
                        createDate: "desc"
                    }
                }
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
} 

export const getArticleBySet = async (pageSize, currentPage) => {
    try {
        const query = prisma.article.findMany({
            include: {
                images: true,
                comments: true,
                tags: true
            },
            skip: pageSize * (currentPage - 1),
            take: pageSize,
            orderBy: {
                createDate: "desc"
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getArticleBySetWithTags = async (pageSize, currentPage, tags) => {
    try {
        const query = prisma.article.findMany({
            where: {
                AND: tags.map(tag => ({
                    tags: {
                        some: {
                            id: tag
                        }
                    }
                }))
            },
            include: {
                images: true,
                comments: true,
                tags: true
            },
            skip: pageSize * (currentPage - 1),
            take: pageSize,
            orderBy: {
                createDate: "desc"
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getNumberOfArticles = async () => {
    try {
        const query = prisma.article.count()
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getNumberOfArticlesWithTags = async (tags) => {
    try {
        const query = prisma.article.count({
            where: {
                AND: tags.map(tag => ({
                    tags: {
                        some: {
                            id: tag
                        }
                    }
                }))
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

export const setDesigner = async (name, role, email, mobil, image) => {
    try {
        const query = prisma.designer.create({
            data: {
                name: name,
                role: role,
                email: email,
                mobil: mobil,
                image: {
                    connect: {
                        id: image
                    }
                }
            },
            include: {
                image: true                
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
} 

export const getDesigner = async () => {
    try {
        const query = prisma.designer.findMany({
            include: {
                image: true                
            },
            orderBy: {
                createDate: "desc"
            }
        })
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

export const setImage = async (file, description, tags) => {
    try {
        tags = tags.map(tag => {
            return { id: Number(tag) }
        })

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const pathOfFile = `./public/images/${file.name}`
        const pathOfData = `/images/${file.name}`
        await writeFile(pathOfFile, buffer)

        const query = prisma.image.create({
            data: {
                path: pathOfData,
                description: description,
                tags: {
                    connect: tags
                }
            },
            include: {
                _count: true,
                tags: true
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
                _count: true,
                tags: true
            },
            orderBy: {
                createDate: "desc"
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getImageWithTags = async (tags) => {
    try {
        const query = prisma.image.findMany({
            where: {
                AND: tags.map(tag => ({
                    tags: {
                        some: {
                            id: tag
                        }
                    }
                }))
            },
            include: {
                _count: true,
                tags: true
            },
            orderBy: {
                createDate: "desc"
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

export const setPreview = async (title, image1Id, image2Id, tags) => {
    try {
        tags = tags.map(tag => {
            return { id: Number(tag) }
        })

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
                },
                tags: {
                    connect: tags
                }
            },
            include: {
                images: true,
                tags: true,
                _count: true
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
                _count: true,
                tags: true
            },
            orderBy: {
                createDate: "desc"
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getPreviewWithTags = async (tags) => {
    try {
        const query = prisma.preview.findMany({
            where: {
                AND: tags.map(tag => ({
                    tags: {
                        some: {
                            id: tag
                        }
                    }
                }))
            },
            include: {
                images: true,
                _count: true,
                tags: true
            },
            orderBy: {
                createDate: "desc"
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
            },
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

export const getRealization = async () => {
    try {
        const query = prisma.realization.findMany({
            include: {
                image: true,
                preview: true,
                comments: true,
                tags: true
            },
            orderBy: {
                createDate: "desc"
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getRealizationBySet = async (pageSize, currentPage) => {
    try {
        const query = prisma.realization.findMany({
            include: {
                image: true,
                preview: true,
                comments: true,
                tags: true
            },
            skip: pageSize * (currentPage - 1),
            take: pageSize,
            orderBy: {
                createDate: "desc"
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getRealizationBySetWithTags = async (pageSize, currentPage, tags) => {
    try {
        const query = prisma.realization.findMany({
            where: {
                AND: tags.map(tag => ({
                    tags: {
                        some: {
                            id: tag
                        }
                    }
                }))
            },
            include: {
                image: true,
                preview: true,
                comments: true,
                tags: true
            },
            skip: pageSize * (currentPage - 1),
            take: pageSize,
            orderBy: {
                createDate: "desc"
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
                image: {
                    include: {
                        tags: true
                    }
                },
                preview: {
                    include: {
                        images: true,
                        tags: true
                    }
                },
                comments: {
                    include: {
                        user: true,
                        likers: true,
                        dislikers: true
                    },
                    orderBy: {
                        createDate: "desc"
                    }
                },
                tags: true
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getNumberOfRealizations = async () => {
    try {
        const query = prisma.realization.count()
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getNumberOfRealizationsWithTags = async (tags) => {
    try {
        const query = prisma.realization.count({
            where: {
                AND: tags.map(tag => ({
                    tags: {
                        some: {
                            id: tag
                        }
                    }
                }))
            },
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
            },
            include: {
                _count: true
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
            },
            orderBy: {
                createDate: "desc"
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

export const setRealizationComment = async (text, userName, userEmail, realizationId) => {
    try {
        const query = prisma.comment.create({
            data: {
                text: text,
                likes: 0,
                user: { 
                    connect: {
                        name: userName,
                        email: userEmail
                    }  
                },
                realization: {
                    connect: {
                        id: realizationId
                    }
                }
            },
            include: {
                user: true
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const setArticleComment = async (text, userName, userEmail, articleId) => {
    try {
        const query = prisma.comment.create({
            data: {
                text: text,
                likes: 0,
                user: { 
                    connect: {
                        name: userName,
                        email: userEmail
                    }  
                },
                article: {
                    connect: {
                        id: articleId
                    }
                }
            },
            include: {
                user: true
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getComment = async () => {
    try {
        const query = prisma.comment.findMany({
            include: {
                _count: true
            },
            orderBy: {
                createDate: "desc"
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getCommentById = async (id) => {
    try {
        const query = prisma.comment.findFirst({
            where: {
                id: id
            },
            include: {
                likers: true,
                dislikers: true
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const modComment = async (id, title, text) => {
    try {
        const query = prisma.comment.update({
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

export const delComment = async (id) => {
    try {
        const query = prisma.comment.delete({
            where: {
                id: id
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const likeComment = async (userEmail, commentId) => {
    try {
        const query = prisma.comment.update({
            where: {
                id: commentId
            },
            data: {
                likers: {
                    connect: [
                        {
                            email: userEmail
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

export const dislikeComment = async (userEmail, commentId) => {
    try {
        const query = prisma.comment.update({
            where: {
                id: commentId
            },
            data: {
                dislikers: {
                    connect: [
                        {
                            email: userEmail
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

export const unComment = async (userEmail, commentId) => {
    try {
        const query = prisma.comment.update({
            where: {
                id: commentId
            },
            data: {
                likers: {
                    disconnect: [
                        {
                            email: userEmail
                        }
                    ]
                },
                dislikers: {
                    disconnect: [
                        {
                            email: userEmail
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

export const updateLikesOnComment = async (id) => {
    try {
        const numberOfLikers = await prisma.comment.findFirst({
            where: {
                id: id
            },
            include: {
                likers: true,
                dislikers: true
            }
        })
        const likes = numberOfLikers.likers.length - numberOfLikers.dislikers.length
        const query = prisma.comment.update({
            where: {
                id: id
            },
            data: {
                likes: {
                    set: likes
                }
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const setSettings = async (key, value) => {
    try {
        const query = prisma.settings.upsert({
            create: {
                key: key,
                value: value
            },
            update: {
                value: value
            },
            where: {
                key: key
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getSettings = async (key) => {
    try {
        const query = prisma.settings.findFirst({
            where: {
                key: key
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const delSettings = async (key) => {
    try {
        const query = prisma.settings.delete({
            where: {
                key: key
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const setQuery = async (name, email, queryInput) => {
    try {
        const query = prisma.query.create({
            data: {
                name: name,
                email: email,
                query: queryInput
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getQueries = async () => {
    try {
        const query = prisma.query.findMany({
            orderBy: {
                createDate: "desc"
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const delQuery = async (id) => {
    try {
        const query = prisma.query.delete({
            where: {
                id: id
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const setQandA = async (question, answer) => {
    try {
        const query = prisma.qandA.create({
            data: {
                question: question,
                answer: answer
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const getQandA = async () => {
    try {
        const query = prisma.qandA.findMany({
            orderBy: {
                createDate: "desc"
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const delQandA = async (id) => {
    try {
        const query = prisma.qandA.delete({
            where: {
                id: id
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}