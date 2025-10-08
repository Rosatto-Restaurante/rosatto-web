// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin'
import type {NextConfig} from 'next'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  /* puedes dejarlo vacío por ahora */
}

export default withNextIntl(nextConfig)
