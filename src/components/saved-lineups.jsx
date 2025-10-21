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
            <CardContent>
              <div className="text-sm">
                <p>
                  <strong>Formation:</strong> {lineup.formation.name}
                </p>
                <p>
                  <strong>Players:</strong> {lineup.players.filter(Boolean).length}/11
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="default" onClick={() => onLoad(lineup)}>
                <Download className="h-4 w-4 mr-2" />
                Load
              </Button>
              <Button variant="destructive" onClick={() => onDelete(lineup.id || '')}>
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
