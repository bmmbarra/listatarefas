import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import heroImg from "../../public/assets/hero.png"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>       
        <title>Tarefas+ | Organize Suas Tarefas</title>
        </Head>

         <main className={styles.main}>
          <Image
          className={styles.heroImage}
          alt="logo Tarefas+"
          src={heroImg}
          width={480}
          height={480}
          priority
          />

        <h1 className={styles.title}>
          Sistema para organizar <br/>
          seus estudos e tarefas!
          </h1>

          <div className={styles.infoContent}>
            <section className={styles.box}>
              <span>+12 posts</span>
            </section>
            <section className={styles.box}>
              <span>+90 comentários</span>
            </section>
          </div>
     </main> 
    </div>    
  );
}
