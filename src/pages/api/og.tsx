// /pages/api/og.tsx

import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const hasEmoji = searchParams.has('emoji');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';
    const emoji = hasEmoji
      ? searchParams.get('emoji')
      : '🥺';

    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(299deg, rgba(2,0,36,1) 0%, rgba(118,42,147,1) 23%, rgba(0,212,255,1) 100%)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
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
            {emoji}
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
            {title}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
