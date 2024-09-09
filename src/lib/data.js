import { connectToDb } from "./utils";
import { BlogPost } from "./models";
import { unstable_noStore as noStore} from "next/cache";

export const getBlogPosts = async () => {
  noStore();
  try {
    await connectToDb();
    const blogPosts = await BlogPost.find();

    blogPosts.sort(function(postA, postB){
      const postATime = postA.createdAt.getTime();
      const postBTime = postB.createdAt.getTime();
      return postBTime - postATime;
    });

    return blogPosts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts.");
  }
}

export const getBlogPost = async (slug) => {
  noStore();
  try {
    await connectToDb();
    const blogPost = await BlogPost.findOne({slug});
    return blogPost;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post.");
  }
}