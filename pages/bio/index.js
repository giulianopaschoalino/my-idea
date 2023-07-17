import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <a href="/" className="card">
          <d>Home &larr;</d>
        </a>
        <h1>Cristão, 25 anos, autodidata.</h1>
        <p>
          Estou tentando aprender a escrever um site em Next.js e otimizá-lo para ser o mais performático possível{' '}
          <a href="https://nextjs.org/learn">Next.js</a>.
        </p>
      </section>
    </Layout>
  )
}