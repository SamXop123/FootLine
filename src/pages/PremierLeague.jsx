import { Suspense } from 'react'
import LineupBuilder from '@/components/lineup-builder'
import LoadingState from '@/components/loading-state'

export default function PremierLeague() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-blue-800 dark:text-blue-300">Premier League Lineup Builder</h1>
          <p className="text-gray-600 dark:text-gray-300">Build your dream Premier League starting XI</p>
        </div>
        <Suspense fallback={<LoadingState />}>
          <LineupBuilder league="premier-league" />
        </Suspense>
      </div>
    </main>
  )
}
