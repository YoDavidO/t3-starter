import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div>
            <h1>T3-Starter Kit</h1>
            <p>This starter kit utilizes a few pieces of tech to get you started with building a NextJS app.</p>
            <ul>
                <li>Typescript</li>
                <li>tRPC: E2E typing from the API layer to client side</li>
                <li>Prisma: ORM used to connect to the Planetscale</li>
                <li>NextJS: Client side</li>
                <li>Stitches: CSS framework best used for making design systems</li>
            </ul>
            <p>For hosting & database I liked to use Vercel &amp; Planetscale</p>
        </div>
    )
}

export default Home
