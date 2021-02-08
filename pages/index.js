import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juicy Foods - Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
