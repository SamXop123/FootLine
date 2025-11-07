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
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            Non-standard Position
          </DialogTitle>
          <DialogDescription>
            You're placing a {playerNaturalPosition} in a {targetPosition} position.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex space-x-2 sm:justify-end">
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
