import BaseLayout from '@/layouts/base'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat APP</title>
      </Head>
      <BaseLayout>
        <div>Chat</div>
      </BaseLayout>
    </>
  )
}
