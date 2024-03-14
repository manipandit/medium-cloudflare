import { Hono } from 'hono'
import {sign,verify,decode} from "hono/jwt"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {signinInputs, signupInputs} from "@manipandit/medium-common";


const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

// signup route
userRouter.post("/signup", async (c) => {
    // initialize the prisma client with accelerate [as we are in serverless environment]
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const body = await c.req.json();
        const {success} = signupInputs.safeParse(body);
        if(!success){
            c.status(403)
            return c.json({message: "Invalid Inputs"});
        }
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password
            }
        })

        const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
        c.status(200);
        return c.json(jwt)
    } catch (err) {
        c.status(500);
        return c.json({error: err});
    }    

})

// signin route
userRouter.post("/signin", async (c) => {
  // initialize the prisma client with accelerate [as we are in serverless environment]
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const body = await c.req.json();

        const {success} = signinInputs.safeParse(body);
        if(!success){
            c.status(403)
            return c.json({message: "Invalid Inputs"});
        }

        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        })

        if(!user){
            c.status(403);
            return c.json({message: "User not found"})
        }

        const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
        return c.json(jwt);
    }
    catch (err) {
        c.status(500);
        return c.json({error: err});
    }
})

export default userRouter;