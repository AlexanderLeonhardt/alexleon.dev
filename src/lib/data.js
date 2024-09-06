import { connectToDb } from "./utils";
import { BlogPost } from "./models";

export const getBlogPosts = async () => {
  try {
    await connectToDb();
    const blogPosts = await BlogPost.find();
    return blogPosts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts.");
  }
}

export const getBlogPost = async (slug) => {
  try {
    await connectToDb();
    const blogPost = await BlogPost.findOne({slug});
    return blogPost;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post.");
  }
}