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
        
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
