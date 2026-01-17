import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import clientPromise from "../lib/data"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import bcrypt from "bcryptjs"

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt"
  },

  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials")
        }

        const client = await clientPromise
        const db = client.db()

        const user = await db.collection("users").findOne({
          email: credentials.email
        })

        if (!user) {
          throw new Error("User not found")
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isValid) {
          throw new Error("Invalid password")
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email
        }
      }
    }),
    // Google
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    // ⚫ GitHub
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },

    async session({ session, token }) {
      session.user.id = token.id
      return session
    },

    async signIn({ user, account }) {
      if (account.provider === "google" || account.provider === "github") {
        const client = await clientPromise
        const db = client.db()

        const existingUser = await db
          .collection("users")
          .findOne({ email: user.email })

        if (!existingUser) {
          await db.collection("users").insertOne({
            name: user.name,
            email: user.email,
            password: null,
            provider: account.provider,
            resumes: [], // 👈 resume builder ready
            createdAt: new Date()
          })
        }
      }
      return true
    }
  }
})