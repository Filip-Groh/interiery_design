import { PrismaClient } from "@prisma/client"
import { writeFile } from 'fs/promises'

let prisma = new PrismaClient()

export const setArticle = async (title, text) => {
    try {
        const query = prisma.article.create({
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

export const getArticle = async () => {
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
        const query = prisma.image.findMany()
        return query
    } catch (error) {
        console.log(error)
    }
}

export const delImage = async (id) => {
    try {
        const query = prisma.image.delete({
            where: {
                id: id
            }
        })
        return query
    } catch (error) {
        console.log(error)
    }
}

export const setPreview = async (title) => {
    try {
        const query = prisma.preview.create({
            data: {
                title: title
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
                images: true
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

export const setRealization = async (title, task) => {
    try {
        const query = prisma.realization.create({
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

export const getRealization = async () => {
    try {
        const query = prisma.realization.findMany()
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
        const query = prisma.tag.findMany()
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