// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const { origin } = req.nextUrl

  if (process.env.MAINTENANCE_MODE) return NextResponse.redirect(`${origin}/maintenance`)
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/impressum', '/404', '/datenschutz'],
}
