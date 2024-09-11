"use server"

import { getBlogPost } from "@/lib/data";
import { BlogPost } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import slugify from "slugify";

export async function blogPostSubmit(postData) {
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
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Failed to submit blog post." };
  }
  
}

export async function updateBlogPost({ slug, description, content }) {
  try {
    connectToDb();
    const doc = await getBlogPost(slug);
    doc.description = description;
    doc.content = content;
    await doc.save();
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Failed to update blog post." };
  }
}

export async function deleteBlogPost(slug) {
  try {
    connectToDb();
    await BlogPost.findOneAndDelete({ slug });
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Failed to delete blog post." };
  }
}