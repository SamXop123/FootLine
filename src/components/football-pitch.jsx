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
          <div
            key={position.id}
            className={cn(
              'absolute flex flex-col items-center cursor-pointer transition-all',
              selectedPosition?.id === position.id ? 'scale-110' : '',
            )}
            style={{ left: `${position.x}%`, top: `${position.y}%`, transform: 'translate(-50%, -50%)' }}
            onClick={() => onPositionClick(position)}
          >
            <div
              className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-1',
                player ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300',
                selectedPosition?.id === position.id ? 'ring-2 ring-yellow-400' : '',
                nonStandardPos ? 'ring-2 ring-yellow-500' : '',
              )}
            >
              {player ? (
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">{player.number}</div>
                  {player && (
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute -top-2 -right-2 h-5 w-5 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        onRemovePlayer(position.id)
                      }}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  )}
                  {nonStandardPos && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="absolute -bottom-2 -right-2 h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center">
                            <AlertTriangle className="h-3 w-3 text-white" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            {player.name} is a {player.position} playing in a {position.type} position
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              ) : (
                position.shortName
              )}
            </div>
            <div className="text-xs font-medium text-white bg-black/50 px-2 py-0.5 rounded-full whitespace-nowrap">
              {player ? player.name : position.name}
            </div>
          </div>
        )
      })}
    </div>
  )
}
