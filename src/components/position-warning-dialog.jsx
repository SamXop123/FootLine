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
        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md">
            <p className="text-sm">
              <span className="font-bold">{player.name}</span> typically plays as a {playerNaturalPosition}. Placing them in a {targetPosition} position may affect their performance.
            </p>
            <p className="text-sm mt-2">Do you want to proceed with this unconventional placement?</p>
          </div>
        </div>
        <DialogFooter className="flex space-x-2 sm:justify-end">
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
