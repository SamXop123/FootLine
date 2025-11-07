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
  const [positionFilter, setPositionFilter] = useState('all')
  const [teamFilter, setTeamFilter] = useState('all')
  const [nationalityFilter, setNationalityFilter] = useState('all')

  const teams = Array.from(new Set(playerDatabase.map((player) => player.team)))
  const nationalities = Array.from(new Set(playerDatabase.map((player) => player.nationality)))

  useEffect(() => {
    let results = playerDatabase

    if (searchTerm) {
      results = results.filter((player) => player.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    if (positionFilter !== 'all') {
      results = results.filter((player) => player.position === positionFilter)
    } else if (selectedPosition && !showAllPositions) {
      results = results.filter((player) => player.position === selectedPosition.type)
    }

    if (teamFilter !== 'all') {
      results = results.filter((player) => player.team === teamFilter)
    }

    if (nationalityFilter !== 'all') {
      results = results.filter((player) => player.nationality === nationalityFilter)
    }

    setFilteredPlayers(results)
  }, [searchTerm, positionFilter, teamFilter, nationalityFilter, selectedPosition, showAllPositions])

  const handleResetFilters = () => {
    setSearchTerm('')
    setPositionFilter('all')
    setTeamFilter('all')
    setNationalityFilter('all')
  }

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

      <div className="space-y-4">
        <Input placeholder="Search players..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="mb-2" />

        <div className="flex items-center gap-2 mb-2">
          <Filter className="h-4 w-4" />
          <span className="text-sm font-medium">Filters</span>
          <Button variant="ghost" size="sm" onClick={handleResetFilters} className="ml-auto text-xs">
            Reset
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <Select value={positionFilter} onValueChange={setPositionFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Positions</SelectItem>
              <SelectItem value="GK">Goalkeeper</SelectItem>
              <SelectItem value="DEF">Defender</SelectItem>
              <SelectItem value="MID">Midfielder</SelectItem>
              <SelectItem value="FWD">Forward</SelectItem>
            </SelectContent>
          </Select>

          <Select value={teamFilter} onValueChange={setTeamFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Teams</SelectItem>
              {teams.map((team) => (
                <SelectItem key={team} value={team}>
                  {team}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={nationalityFilter} onValueChange={setNationalityFilter}>
          </Select>
        </div>

        <div className="mt-4">
        </div>
      </div>
    </div>
  )
}
