import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

// Generate a random lineup based on player stats and formation
export function generateRandomLineup(players, formation) {
  const lineup = {
    id: Date.now().toString(),
    name: `AI ${formation.name} Lineup`,
    formation: formation,
    players: Array(11).fill(null),
    date: new Date().toISOString(),
  }

  const goalkeepers = players.filter((player) => player.position === "GK")
  const defenders = players.filter((player) => player.position === "DEF")
  const midfielders = players.filter((player) => player.position === "MID")
  const forwards = players.filter((player) => player.position === "FWD")

  formation.positions.forEach((position, index) => {
    let positionPlayers
    switch (position.type) {
      case "GK":
        positionPlayers = goalkeepers
        break
      case "DEF":
        positionPlayers = defenders
        break
      case "MID":
        positionPlayers = midfielders
        break
      case "FWD":
        positionPlayers = forwards
        break
      default:
        positionPlayers = []
    }

    const availablePlayers = positionPlayers.filter(
      (player) => !lineup.players.some((p) => p && p.id === player.id),
    )

    if (availablePlayers.length > 0) {
      const randomIndex = Math.floor(Math.random() * availablePlayers.length)
      lineup.players[index] = availablePlayers[randomIndex]
    }
  })

  return lineup
}

export function calculatePositionCompatibility(playerPosition, targetPosition) {
  if (playerPosition === targetPosition) return 100

  const compatibilityMatrix = {
    GK: { GK: 100, DEF: 20, MID: 10, FWD: 5 },
    DEF: { GK: 15, DEF: 100, MID: 60, FWD: 30 },
    MID: { GK: 10, DEF: 60, MID: 100, FWD: 70 },
    FWD: { GK: 5, DEF: 30, MID: 70, FWD: 100 },
  }

  return compatibilityMatrix[playerPosition]?.[targetPosition] || 0
}
