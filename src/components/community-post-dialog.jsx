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

    setIsPosting(true)
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

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
    </Dialog>
  )
}
