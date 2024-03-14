import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import {createBlogInputs, updateBlogInputs} from "@manipandit/medium-common"


const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string,
  }
}>()


// auth middleware for blog routes
blogRouter.use("/*", async (c, next) => {
  try {
    const authHeader = c.req.header('authorization');
    const token = authHeader?.split(" ")[1] || "";

    const user = await verify(token, c.env.JWT_SECRET);
    if(user){
      c.set("userId", user.id);
      await next();
    }
    else {
      c.status(403);
      return c.json({ message: "You are not authorized"});
    }
  } catch (err) {
      c.status(500);
     return c.json({error: err});
  }
})

// create a new blog
blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

  try {
    const body = await c.req.json();
    const userId = c.get('userId');

    const {success} = createBlogInputs.safeParse(body);
    if(!success){
        c.status(403)
        return c.json({message: "Invalid Inputs"});
    }
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      }
    })

    c.status(201);
    return c.json({message: "blog created successfully", id: blog.id})

  } catch (err) {
     c.status(500);
     return c.json({error: err});
  }
})

// update blog
blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

  try {
    const body = await c.req.json();
    const userId = c.get('userId');

    const {success} = updateBlogInputs.safeParse(body);
    if(!success){
        c.status(403)
        return c.json({message: "Invalid Inputs"});
    }
    const blog = await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      }
    })

    c.status(200);
    return c.json({message: "blog updated successfully"})

  } catch (err) {
     c.status(500);
     return c.json({error: err});
  }
})

// get a specific blog
blogRouter.get("/get/:id", async (c) => {
  const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

  try {
    const id = c.req.param('id') as string;
    const blog = await prisma.post.findUnique({
     where: {
      id: id
     }
    })

    c.status(200);
    return c.json({message: "blog fetched successfully", blog})

  } catch (err) {
     c.status(500);
     return c.json({error: err});
  }
})

// get all blogs [todo: implement pagination]
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

  try {
    
    const blogs = await prisma.post.findMany({
      select: {
        title: true,
        content: true,
        id: true,
        author: {
          select: {
            name: true,
          }
        }
      }
    });

    c.status(200);
    return c.json({blogs})

  } catch (err) {
     c.status(500);
     return c.json({error: err});
  }
})

export default blogRouter;