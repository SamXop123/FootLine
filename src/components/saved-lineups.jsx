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
            
          </Card>
        ))}
      </div>
    </div>
  )
}
