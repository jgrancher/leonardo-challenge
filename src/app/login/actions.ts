"use server";

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    return Promise.resolve("");
    // await signIn("credentials", formData);
  } catch (error: any) {
    console.log("An error occurred whilst authenticating the user:", error);
    throw error;
  }
}
