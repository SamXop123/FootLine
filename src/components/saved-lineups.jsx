import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Trash2, Download, Calendar, Share2 } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import CommunityPostDialog from './community-post-dialog'

export default function SavedLineups({ lineups, onLoad, onDelete }) {
  const [showCommunityDialog, setShowCommunityDialog] = useState(false)
  const [selectedLineup, setSelectedLineup] = useState(null)

  const handlePostToCommunity = (lineup) => {
    setSelectedLineup(lineup)
    setShowCommunityDialog(true)
  }

  const handleCloseDialog = () => {
    setShowCommunityDialog(false)
    setSelectedLineup(null)
  }
  if (lineups.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-400 mb-2">No Saved Lineups</h2>
        <p className="text-gray-500">Create and save your first lineup to see it here.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Your Saved Lineups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lineups.map((lineup) => (
          <Card key={lineup.id}>
            <CardHeader>
              <CardTitle>{lineup.name}</CardTitle>
              <div className="text-sm text-gray-500 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {lineup.date ? formatDate(lineup.date) : 'No date'}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                <p>
                  <strong>Formation:</strong> {lineup.formation.name}
                </p>
                <p>
                  <strong>Players:</strong> {lineup.players.filter(Boolean).length}/11
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-2">
                <Button variant="default" onClick={() => onLoad(lineup)}>
                  <Download className="h-4 w-4 mr-2" />
                  Load
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handlePostToCommunity(lineup)}
                  className="text-green-600 border-green-600 hover:bg-green-50"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Post
                </Button>
              </div>
              <Button variant="destructive" onClick={() => onDelete(lineup.id || '')}>
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {selectedLineup && (
        <CommunityPostDialog
          isOpen={showCommunityDialog}
          onClose={handleCloseDialog}
          lineup={selectedLineup.players}
          formation={selectedLineup.formation.name}
        />
      )}
    </div>
  )
}
