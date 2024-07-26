"use server";

import { redirect } from 'next/navigation';

export async function submitForm(formData) {

  try {
    formData.append("access_key", process.env.WEB3FORMS_ACCESSKEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    console.log('User submitted email');
  } catch (err) {
    throw new Error(err);
  }

  redirect("https://web3forms.com/success");
}