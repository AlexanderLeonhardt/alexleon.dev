import styles from './page.module.css';
import { auth } from '@/auth';
import { SignInButton, SignOutButton } from '@/components/AuthButtons/AuthButtons';

async function DashboardPage() {
  const session = await auth();
  if (!session) {
    return (
      <SignInButton/>
    );
  } else {
    return (
      <main>
        <h1>Dashboard</h1>
        <SignOutButton />
      </main>
    );
  }
}

export default DashboardPage;