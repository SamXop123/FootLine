import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'react-toastify'

export default function CommunityPostDialog({ isOpen, onClose, lineup, formation }) {
  const [customName, setCustomName] = useState('')
  const [userName, setUserName] = useState('')
  const [description, setDescription] = useState('')
  const [isPosting, setIsPosting] = useState(false)

  const handlePostToCommunity = async () => {
    if (!customName.trim() || !userName.trim()) {
      toast.error('Please fill in both lineup name and your name')
      return
    }

    setIsPosting(true)

    try {
      // Create the community post object
      const communityPost = {
        id: Date.now().toString(),
        customName: customName.trim(),
        userName: userName.trim(),
        description: description.trim(),
        formation: formation,
        lineup: lineup,
        timestamp: Date.now(),
        likes: 0,
        views: 0
      }

      // Get existing community lineups from localStorage
      const existingLineups = localStorage.getItem('communityLineups')
      let communityLineups = existingLineups ? JSON.parse(existingLineups) : []

      // Add new post to the beginning of the array
      communityLineups.unshift(communityPost)

      // Save back to localStorage
      localStorage.setItem('communityLineups', JSON.stringify(communityLineups))

      // Show success message
      toast.success('Lineup posted to community successfully!')

      // Reset form
      setCustomName('')
      setUserName('')
      setDescription('')

      // Close dialog
      onClose()

    } catch (error) {
      console.error('Error posting to community:', error)
      toast.error('Failed to post lineup. Please try again.')
    } finally {
      setIsPosting(false)
    }
  }

  const handleClose = () => {
    if (!isPosting) {
      setCustomName('')
      setUserName('')
      setDescription('')
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share Lineup with Community</DialogTitle>
          <DialogDescription>
            Share your amazing lineup with football fans around the world!
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="customName">Lineup Name *</Label>
            <Input
              id="customName"
              placeholder="e.g., Ultimate Premier League Team"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              maxLength={50}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="userName">Your Name *</Label>
            <Input
              id="userName"
              placeholder="e.g., John Doe"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              maxLength={30}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Tell us about your tactical approach..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={200}
              rows={3}
            />
          </div>

          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Formation: <span className="text-green-600">{formation}</span>
            </p>
            <p className="text-sm text-gray-600">
              {lineup.filter(player => player).length} players selected
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={handleClose}
            disabled={isPosting}
          >
            Cancel
          </Button>
          <Button 
            onClick={handlePostToCommunity}
            disabled={isPosting || !customName.trim() || !userName.trim()}
            className="bg-green-600 hover:bg-green-700"
          >
            {isPosting ? 'Posting...' : 'Post to Community'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
