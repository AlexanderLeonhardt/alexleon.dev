import { signIn, signOut } from "@/auth"
 
export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", {redirectTo: "/dashboard"});
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  );
}

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut();
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
}