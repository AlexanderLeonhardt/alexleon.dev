import styles from './page.module.css';
import { SignInButton } from '@/components/SignInButton/SignInButton';

function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
      <SignInButton />
    </main>
  );
}

export default DashboardPage;