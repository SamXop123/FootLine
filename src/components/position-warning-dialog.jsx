import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function PositionWarningDialog({ isOpen, onClose, player, position, onConfirm, onCancel }) {
  if (!player || !position) return null

  const positionNames = {
    GK: 'Goalkeeper',
    DEF: 'Defender',
    MID: 'Midfielder',
    FWD: 'Forward',
  }

  const playerNaturalPosition = positionNames[player.position]
  const targetPosition = positionNames[position.type]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
        </DialogHeader>
        <DialogFooter className="flex space-x-2 sm:justify-end">
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
