import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  console.log(pathname);
  if (pathname === '/docs/slider/examples') {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/examples/simple`)
  }

  if (pathname === '/docs/modal/examples') {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/docs/slider/modal/lightbox`)
  }
}
