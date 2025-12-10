import { Button } from '@/components/ui/button'
import { UserPlus, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function PlayerCard({ player, onSelect, isInLineup }) {
  const positionColors = {
    GK: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    DEF: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    MID: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    FWD: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  }

  return (
    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 relative">
          {player.image ? (
            <img 
              src={player.image} 
              alt={player.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold text-lg" style={{ display: player.image ? 'none' : 'flex' }}>
            {player.number}
          </div>
        </div>
        <div>
          <h3 className="font-medium">{player.name}</h3>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <span className={cn('px-1.5 py-0.5 rounded-full mr-2', positionColors[player.position])}>{player.position}</span>
            <span>{player.team}</span>
          </div>
        </div>
      </div>

      <Button variant={isInLineup ? 'secondary' : 'default'} size="sm" onClick={() => onSelect(player)}>
        {isInLineup ? (
          <>
            <Check className="h-4 w-4 mr-1" />
            Selected
          </>
        ) : (
          <>
            <UserPlus className="h-4 w-4 mr-1" />
            Select
          </>
        )}
      </Button>
    </div>
  )
}
