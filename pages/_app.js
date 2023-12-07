import Head from 'next/head';
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css';
import '../public/custom.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Blogs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}