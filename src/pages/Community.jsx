import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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
  )
}
