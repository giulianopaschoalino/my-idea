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
          <p>Home &larr;</p>
        </a>
        <h1>[Your Self Introduction]</h1>
        <p>
          (This is a sample website - build a site like this on{' '}
          <a href="https://nextjs.org/learn">Next.js</a>.)
        </p>
      </section>
    </Layout>
  )
}