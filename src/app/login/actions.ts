"use server";

import { cookies } from "next/headers";

import { COOKIE_KEY } from "@/lib/constants";

export async function authenticate(_state: unknown, formData: FormData) {
  try {
    const username = formData.get("username") as string;
    const title = formData.get("title") as string;
    const profile = { username, title };

    cookies().set(COOKIE_KEY, JSON.stringify(profile), { secure: true });
    return false;
  } catch (error: any) {
    console.log("An error occurred:", error);
    return error.message as string;
  }
}
