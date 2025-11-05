import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import FootballPitch from '@/components/football-pitch'
import PlayerSearch from '@/components/player-search'
import SavedLineups from '@/components/saved-lineups'
import { formations } from '@/lib/formations'
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

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    </div>
  )
}
