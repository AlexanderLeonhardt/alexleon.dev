import styles from './page.module.css';
import Image from "next/image";
import { auth } from '@/auth';
import { SignInButton, SignOutButton } from '@/components/AuthButtons/AuthButtons';

async function DashboardPage() {
  const session = await auth();
  if (!session) {
    return (
      <SignInButton/>
    );
  } else {
    const user = session.user;
    return (
      <main className={`main card`}>
        <h1>Dashboard</h1>
        <div className={`${styles.user}`}>
          <p>Welcome, {user?.name}</p>
          <Image 
            src={user?.image} 
            alt={`${user?.name} GitHub profile picture`}
            width={40} 
            height={40} 
            priority={true} 
            className={styles.profilepic}
          />
          <SignOutButton />
        </div>
      </main>
    );
  }
}

export default DashboardPage;