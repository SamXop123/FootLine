import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Users, Calendar, Trophy } from 'lucide-react'

const CommunityLineupCard = ({ post }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-bold text-gray-900">
              {post.customName}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1">
              by {post.userName} • {formatDate(post.timestamp)}
            </p>
          </div>
          <Badge variant="secondary" className="ml-2">
            {post.formation}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {post.lineup.slice(0, 11).map((player, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-1 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-gray-700">
                  {player.number}
                </span>
              </div>
              <p className="text-xs font-medium text-gray-900 truncate">
                {player.name}
              </p>
              <p className="text-xs text-gray-500">
                {player.position}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              {post.likes || 0} likes
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {post.views || 0} views
            </span>
          </div>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Community() {
  const [communityLineups, setCommunityLineups] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load community lineups from localStorage
    const loadCommunityLineups = () => {
      try {
        const stored = localStorage.getItem('communityLineups')
        const lineups = stored ? JSON.parse(stored) : []
        setCommunityLineups(lineups.sort((a, b) => b.timestamp - a.timestamp))
      } catch (error) {
        console.error('Error loading community lineups:', error)
        setCommunityLineups([])
      } finally {
        setLoading(false)
      }
    }

    loadCommunityLineups()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading community lineups...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Community Lineups
        </h1>
        <p className="text-lg text-gray-600">
          Discover and share amazing football lineups from fans around the world
        </p>
      </div>

      {communityLineups.length === 0 ? (
        <div className="text-center py-16">
          <Users className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No community lineups yet
          </h3>
          <p className="text-gray-500 mb-6">
            Be the first to share your lineup with the community!
          </p>
          <Button className="bg-green-600 hover:bg-green-700">
            Create Your First Lineup
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Recent Lineups ({communityLineups.length})
            </h2>
            <div className="flex gap-2">
              <Button variant="outline">
                Most Popular
              </Button>
              <Button variant="outline">
                Recent
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityLineups.map((post, index) => (
              <CommunityLineupCard key={index} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
