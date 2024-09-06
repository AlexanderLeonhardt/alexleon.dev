"use server"

import { BlogPost } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import slugify from "slugify";

export default async function blogPostSubmit(postData) {
  const title = postData.title;
  const description = postData.description;
  const content = postData.content;
  
  const slug = slugify(title, {
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: true,
  });

  try {
    connectToDb();
    const newBlogPost = new BlogPost({
      slug,
      title,
      description,
      content,
    });

    await newBlogPost.save();
    console.log("Blog Post created!");
  } catch (error) {
    console.log(error);
    return { error: "Failed to submit blog post." };
  }
  
}