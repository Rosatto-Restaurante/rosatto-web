import { NextResponse } from 'next/server'
export function GET() {
  return new NextResponse(
`User-agent: *
Allow: /
Sitemap: https://rosatto.com.mx/sitemap.xml
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' }})
}
