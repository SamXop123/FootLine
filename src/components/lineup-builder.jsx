import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Share2, Save, RefreshCw } from 'lucide-react'
import FootballPitch from '@/components/football-pitch'
import PlayerSearch from '@/components/player-search'
import SavedLineups from '@/components/saved-lineups'
import PositionWarningDialog from '@/components/position-warning-dialog'
import { formations } from '@/lib/formations'
import { generateRandomLineup } from '@/lib/utils'
import { toast } from 'react-toastify'
import { playerDatabase } from '@/lib/player-database'

export default function LineupBuilder() {
  const [activeTab, setActiveTab] = useState('build')
  const [selectedFormation, setSelectedFormation] = useState(formations[0])
  const [lineup, setLineup] = useState({
    name: 'My Lineup',
    formation: formations[0],
    players: Array(11).fill(null),
  })
  const [savedLineups, setSavedLineups] = useState([])
  const [selectedPosition, setSelectedPosition] = useState(null)

  const [showPositionWarning, setShowPositionWarning] = useState(false)
  const [pendingPlayer, setPendingPlayer] = useState(null)
  const [pendingPosition, setPendingPosition] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('savedLineups')
    if (saved) {
      setSavedLineups(JSON.parse(saved))
    }
  }, [])

  const handleFormationChange = (formation) => {
    setSelectedFormation(formation)
    setLineup((prev) => ({
      ...prev,
      formation,
      players: Array(11).fill(null),
    }))
    setSelectedPosition(null)
  }

  const handlePositionClick = (position) => {
    setSelectedPosition(position)
  }

  const assignPlayerToPosition = (player, position) => {
    const newLineup = { ...lineup }
    const positionIndex = position.id - 1

    const existingIndex = newLineup.players.findIndex((p) => p && p.id === player.id)
    if (existingIndex !== -1) {
      newLineup.players[existingIndex] = null
    }

    newLineup.players[positionIndex] = player
    setLineup(newLineup)
  }

  const handlePlayerSelect = (player) => {
    if (!selectedPosition) return
    if (player.position !== selectedPosition.type) {
      setPendingPlayer(player)
      setPendingPosition(selectedPosition)
      setShowPositionWarning(true)
    } else {
      assignPlayerToPosition(player, selectedPosition)
    }
  }

  const handleConfirmNonStandardPosition = () => {
    if (pendingPlayer && pendingPosition) {
      assignPlayerToPosition(pendingPlayer, pendingPosition)
      toast.warning(`${pendingPlayer.name} has been placed in a non-standard position.`)
    }
    setShowPositionWarning(false)
    setPendingPlayer(null)
    setPendingPosition(null)
  }

  const handleCancelNonStandardPosition = () => {
    setShowPositionWarning(false)
    setPendingPlayer(null)
    setPendingPosition(null)
  }

  const handleRemovePlayer = (positionId) => {
    const newLineup = { ...lineup }
    newLineup.players[positionId - 1] = null
    setLineup(newLineup)
  }

  const handleSaveLineup = () => {
    const newLineup = {
      ...lineup,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    }
    const updatedLineups = [...savedLineups, newLineup]
    setSavedLineups(updatedLineups)
    localStorage.setItem('savedLineups', JSON.stringify(updatedLineups))
    toast.success('Your lineup has been saved successfully.')
  }

  const handleShareLineup = () => {
    navigator.clipboard.writeText(`Check out my FootLine lineup: ${lineup.name} (${lineup.formation.name})`)
    toast.success('Shareable link copied to clipboard.')
  }

  const handleLoadLineup = (savedLineup) => {
    setLineup(savedLineup)
    setSelectedFormation(savedLineup.formation)
    setActiveTab('build')
  }

  const handleDeleteLineup = (id) => {
    const updatedLineups = savedLineups.filter((l) => l.id !== id)
    setSavedLineups(updatedLineups)
    localStorage.setItem('savedLineups', JSON.stringify(updatedLineups))
    toast.success('Your lineup has been deleted.')
  }

  const handleGenerateAILineup = () => {
    const aiLineup = generateRandomLineup(playerDatabase, selectedFormation)
    setLineup(aiLineup)
    toast.success(`Created a ${selectedFormation.name} lineup based on player stats.`)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="build">Build Lineup</TabsTrigger>
          <TabsTrigger value="saved">Saved Lineups</TabsTrigger>
        </TabsList>


              <FootballPitch
                formation={selectedFormation}
                lineup={lineup}
                onPositionClick={handlePositionClick}
                selectedPosition={selectedPosition}
                onRemovePlayer={handleRemovePlayer}
              />
            </div>

            <div className="lg:w-1/3">
              <PlayerSearch
                onPlayerSelect={handlePlayerSelect}
                selectedPosition={selectedPosition}
                currentLineup={lineup}
                showAllPositions={true}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <SavedLineups lineups={savedLineups} onLoad={handleLoadLineup} onDelete={handleDeleteLineup} />
        </TabsContent>
      </Tabs>

    </div>
  )
}
