import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';

const  ChatbotWrapper = dynamic(()=>{return import('../components/chatbot')}, {ssr: false});


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        hello
      </div>
      <ChatbotWrapper />


    </div>
  )
}
