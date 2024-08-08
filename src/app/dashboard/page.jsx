import styles from './page.module.css';
import { auth } from '@/auth';
import { SignInButton } from '@/components/SignInButton/SignInButton';

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
      </main>
    );
  }
}

export default DashboardPage;