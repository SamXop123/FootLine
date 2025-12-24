import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const CommunityLineupCard = ({ post }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
  return (
  )
}
