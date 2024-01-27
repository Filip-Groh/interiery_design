import NextAuth from 'next-auth';
import GitHubProvider  from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    providers: [GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    })],
    adapter: PrismaAdapter(prisma),
});