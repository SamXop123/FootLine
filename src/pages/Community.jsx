import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CommunityLineupCard = ({ post }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-bold text-gray-900">
              {post.customName}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1">
              by {post.userName} • {formatDate(post.timestamp)}
            </p>
          </div>
          <Badge variant="secondary" className="ml-2">
            {post.formation}
          </Badge>
      </CardHeader>
    </Card>
  )
}
  return (
  )
}
