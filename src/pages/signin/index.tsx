import { getProviders, signIn } from "next-auth/react";
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { FaGoogle, FaGithub } from "react-icons/fa";
import type { IconType } from "react-icons";
import styles from "./signin.module.css";


const providerIcons: Record<string, IconType> = {
    google: FaGoogle,
    github: FaGithub,
};

export default function SignInPage({
    providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>){
    return(
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>
                    Tarefas<span>+</span>
                    </h1>

                 {Object.values(providers).map((provider) => {
                    const providerId = provider.id.toLowerCase();
                    const Icon = providerIcons[providerId]; // pega o componente do mapa

                    return(
                        <div key={provider.name} className={styles.providerContainer}>
                            <button className={`${styles.button} ${styles[providerId] || ""}`}
                            onClick={()=>
                                signIn(provider.id, {callbackUrl: "/dashboard"})}>
                                    {Icon && <Icon size={20}/>}
                                    <span>Acessar com {provider.name}</span>
                            </button>
                            </div>   
                );                
            })}
                    </div>
                </div>          
    );
}

export async function getServerSideProps(context:GetServerSidePropsContext) {
    const providers = await getProviders();
    return{
        props: {providers: providers ?? []},
    };    
}

