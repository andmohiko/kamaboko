import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Ogp: NextPage = () => {
  return (
    <div>
      <head>
        <title>The posts title</title>
        <meta
          property="og:image"
          content="https://my-og-img.vercel.app/api/og?title=たいとる&emoji=🍣"
        />
      </head>

      <div
        style={{
          background: 'linear-gradient(299deg, rgba(2,0,36,1) 0%, rgba(118,42,147,1) 23%, rgba(0,212,255,1) 100%)',
          backgroundSize: '150px 150px',
          height: '630px',
          width: '1200px',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
        }}
      >
        <span style={{
            fontSize: 80
          }}
        >
          🍣
        </span>
        <p
          style={{
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            color: 'white',
            marginTop: 30,
            padding: '0 120px',
            lineHeight: 1.4,
            whiteSpace: 'pre-wrap',
          }}
        >
          タイトル
        </p>
      </div>
    </div>
  )
}

export default Ogp