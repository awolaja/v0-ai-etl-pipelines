import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ErrorBoundary } from 'react-error-boundary'
import './globals.css'

// Optimized font loading with display swap
const geistSans = GeistSans({
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'AI ETL Pipelines',
    template: '%s | AI ETL Pipelines'
  },
  description: 'Advanced AI-powered ETL pipeline management and analytics platform',
  keywords: ['ETL', 'AI', 'data pipelines', 'analytics', 'data processing'],
  authors: [{ name: 'AI ETL Team' }],
  creator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-etl-pipelines.vercel.app',
    title: 'AI ETL Pipelines',
    description: 'Advanced AI-powered ETL pipeline management and analytics platform',
    siteName: 'AI ETL Pipelines',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI ETL Pipelines',
    description: 'Advanced AI-powered ETL pipeline management and analytics platform',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Error fallback component
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
          </div>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          {process.env.NODE_ENV === 'development' ? error.message : 'An unexpected error occurred. Please try again.'}
        </div>
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Reload Page
        </button>
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font preloading for critical fonts */}
        <link
          rel="preload"
          href="/fonts/geist-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/geist-mono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
        {/* Only load analytics and speed insights in production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
