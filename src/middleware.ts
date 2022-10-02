import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname === '/docs/slider/examples') {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/examples/simple`)
  }

  if (pathname === '/docs/modal/examples') {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/examples/lightbox`)
  }

  if (pathname === '/docs/collapsibles/examples') {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/examples/dropdown`)
  }
}
