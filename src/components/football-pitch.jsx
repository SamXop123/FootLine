import { Button } from '@/components/ui/button'
import { X, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function FootballPitch({
  formation,
  lineup,
  selectedPosition,
  onPositionClick,
  onRemovePlayer,
}) {
  const isNonStandardPosition = (positionId) => {
    const player = lineup.players[positionId - 1]
    if (!player) return false
    const position = formation.positions.find((pos) => pos.id === positionId)
    if (!position) return false
    return player.position !== position.type
  }

  return (
    <div className="relative w-full h-[500px] bg-green-600 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/2 border-b-2 border-white/70"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-white/70 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 left-1/2 w-36 h-16 border-b-2 border-l-2 border-r-2 border-white/70 -translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-36 h-16 border-t-2 border-l-2 border-r-2 border-white/70 -translate-x-1/2"></div>
      </div>

      {formation.positions.map((position) => {
        const player = lineup.players[position.id - 1]
        const nonStandardPos = player && isNonStandardPosition(position.id)
        return (
        )
      })}
    </div>
  )
}
