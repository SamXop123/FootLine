import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import FootballPitch from '@/components/football-pitch'
import PlayerSearch from '@/components/player-search'
import SavedLineups from '@/components/saved-lineups'
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
}
