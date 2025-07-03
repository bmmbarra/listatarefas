import styles from "./styles.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

function UserMenu({ userName }: { userName: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.userMenu}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={styles.userButton}>Olá, {userName}</button>
      {open && (
        <div className={styles.logoutMenu} onClick={() => signOut()}>
          Sair
        </div>
      )}
    </div>
  );
}

export function Header() {
  const { data: session, status } = useSession();

  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href="/">
            <h1 className={styles.logo}>
              Tarefas<span>+</span>
            </h1>
          </Link>
          {/* fazer essa parte do session depois, pra explicar a mudança de exibição */}
          {session?.user && (
            <Link href="/dashboard" className={styles.link}>
              Meu Painel
            </Link>
          )}
        </nav>

        {status === "loading" ? (
          <></>
        ) : session ? (
          <UserMenu userName={session.user?.name || "Usuário"} />
        ) : (
        <button
          className={styles.loginButton}
          onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })}
        >
          Acessar
        </button>

        )}
      </section>
    </header>
  );
}
