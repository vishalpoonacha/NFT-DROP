import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NFT Drop</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/128/6228/6228867.png"
        />
      </Head>
      <h1 className="text-4xl font-bold text-red-500">
        Welcome to NFT-Drop Build
      </h1>
    </div>
  )
}

export default Home
