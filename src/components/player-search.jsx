import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Search, Filter } from 'lucide-react'
import { playerDatabase } from '@/lib/player-database'
import PlayerCard from '@/components/player-card'
import { Badge } from '@/components/ui/badge'

export default function PlayerSearch({ onPlayerSelect, selectedPosition, currentLineup, showAllPositions = true }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPlayers, setFilteredPlayers] = useState(playerDatabase)
  const teams = Array.from(new Set(playerDatabase.map((player) => player.team)))
  const nationalities = Array.from(new Set(playerDatabase.map((player) => player.nationality)))
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 h-full">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Search className="mr-2 h-5 w-5" />
        Player Search
        {selectedPosition && (
          <Badge variant="secondary" className="ml-2">
            {selectedPosition.name}
          </Badge>
        )}
      </h2>
    </div>
  )
}
