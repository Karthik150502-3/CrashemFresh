'use server';

// import { signIn } from '@/auth'; 
import { AuthError } from 'next-auth';
import { signIn } from './../../../auth';
// ...
import { redirect } from 'next/navigation';
import { z } from 'zod'



let loginUser = z.object({
  username: z.string().email(),
  password: z.string().min(6)
})

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    // const validatedFields = loginUser.safeParse({
    //   username: formData.get('email'),
    //   password: formData.get('password'),
    // });

    // console.log(validatedFields)
    // if (!validatedFields.success) {
    //   return {
    //     errors: validatedFields.error.flatten().fieldErrors,
    //     message: 'Missing Fields. Failed to Create Invoice.',
    //   };
    // }
    await signIn('credentials', formData);
    redirect('/')

  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return `Invalid credentials`;
        default:
          return `Something went wrong.`;
      }
    }
    throw error;
  }
}



