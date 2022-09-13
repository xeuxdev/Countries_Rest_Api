import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Know Your Country</title>
        <meta name="description" content="Know Your Country" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-5 md:px-7 lg:px-6 xl:px-0">
        <section className="flex items-center flex-col md:flex-row md:justify-between">
          <div className="input h-16 w-full md:w-[480px]">
            <input
              type="text"
              className="w-full h-full bg-light_Mode_Elements dark:bg-dark_Mode_Elements"
            />
          </div>
        </section>
      </div>

      <footer></footer>
    </>
  )
}

export default Home
