import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Trash2, Download, Calendar } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export default function SavedLineups({ lineups, onLoad, onDelete }) {

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Your Saved Lineups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lineups.map((lineup) => (
          <Card key={lineup.id}>
            <CardHeader>
              <CardTitle>{lineup.name}</CardTitle>
              <div className="text-sm text-gray-500 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {lineup.date ? formatDate(lineup.date) : 'No date'}
              </div>
            </CardHeader>

          </Card>
        ))}
      </div>
    </div>
  )
}
