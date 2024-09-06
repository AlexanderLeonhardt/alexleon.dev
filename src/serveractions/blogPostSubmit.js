"use server"

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

  console.log(slug);
}