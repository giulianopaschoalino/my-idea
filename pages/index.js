import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home - Giuliano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          Bem-vindo ao <br></br>
          <Link href="/">
            <a>Meu site pessoal</a>
          </Link>
        </h1>

        <p className="description">
          <code>made by</code> Giuliano <code>Stofella</code> Paschoalino
        </p>

        <div className="grid">
          <a href="/" className="card">
            <h3>MyBio &rarr; (Em breve)</h3>
            <p>Site experimental da minha Bio</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Aprender &rarr;</h3>
            <p>Aprenda sobre Next.js em um curso interativo com quizzes!</p>
          </a>

          <a href="#" className="card">
            <h3>Sobre &rarr; (Em breve)</h3>
            <p>Em breve...</p>
          </a>

          <a
            href="https://github.com/giulianopaschoalino?tab=repositories"
            target="_blank"
            className="card"
          >
            <h3>GitHub &rarr;</h3>
            <p>
              Mais projetos feitos por mim! <br></br>:)
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://stofella.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proporcionado por{" "}
          <img src="/logo.png" alt="Logo de Giuliano" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: linear-gradient(to bottom right, #000000, #19547b);
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
        }

        footer {
          width: 80%;
          height: 100px;
          border-top: 2px solid rgba(255, 255, 255, 0.25);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #eaeaea;
          text-decoration: none;
        }

        .title a {
          color: #19547b;
          display: inline-block;
        }

        .title a::after {
          content: "";
          width: 0px;
          height: 6px;
          display: block;
          background: #19547b;
          transition: 300ms;
        }

        .title a:hover::after {
          width: 100%;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
          padding: 0.75rem;
          font-size: 1.4rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          color: #060606;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 16px;
          grid-row-gap: 16px;
          max-width: 50rem;
        }

        .card {
          position: relative;
          display: inline-block;
          background-image: linear-gradient(to top left, #42275a, #19547b);
          opacity: 0.6;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: #ffffff;
          text-decoration: none;
          border: 1px solid #0070f3;
          border-radius: 10px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
          -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .card::after {
          content: "";
          border-radius: 5px;
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          opacity: 0;
          -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .card:hover,
        .card:focus,
        .card:active {
          -webkit-transform: scale(1.01, 1.01);
          transform: scale(1.01, 1.01);
          background-image: linear-gradient(to top left, #19547b, #ff8800);
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .box:hover::after {
          opacity: 1;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1.2em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
