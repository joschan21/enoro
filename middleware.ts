import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { origin } = req.nextUrl

  if (process.env.MAINTENANCE_MODE === '1') return NextResponse.redirect(`${origin}/maintenance`)
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/impressum', '/404', '/datenschutz'],
}
