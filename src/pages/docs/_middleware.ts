import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname: nextPath } = req.nextUrl
  if (nextPath === '/docs') {
    return NextResponse.redirect('/docs/getting-started')
  }
}
