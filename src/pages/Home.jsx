import { Suspense } from 'react'
import LineupBuilder from '@/components/lineup-builder'
import LoadingState from '@/components/loading-state'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-green-800 dark:text-green-300">FootLine</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Build your dream football lineup</p>
        <Suspense fallback={<LoadingState />}> 
          <LineupBuilder />
        </Suspense>
      </div>
    </main>
  )
}
