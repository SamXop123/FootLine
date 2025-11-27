import { ExternalLink, Globe, BookOpen, Tv, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const resources = [
  {
    category: 'Official Sites',
    icon: Globe,
    items: [
      { name: 'Premier League', url: 'https://www.premierleague.com', description: 'Official PL website with fixtures, stats, and news' },
      { name: 'UEFA', url: 'https://www.uefa.com', description: 'European competitions and international football' },
      { name: 'FIFA', url: 'https://www.fifa.com', description: 'World football governing body' },
    ]
  },
  {
    category: 'News & Analysis',
    icon: BookOpen,
    items: [
      { name: 'BBC Sport - Football', url: 'https://www.bbc.co.uk/sport/football', description: 'Comprehensive football news and analysis' },
      { name: 'ESPN FC', url: 'https://www.espn.com/soccer', description: 'Latest football news and features' },
      { name: 'The Athletic', url: 'https://www.theathletic.com/football', description: 'In-depth football journalism' },
    ]
  },
  {
    category: 'Statistics & Data',
    icon: Tv,
    items: [
      { name: 'Transfermarkt', url: 'https://www.transfermarkt.com', description: 'Player values, transfers, and statistics' },
      { name: 'FBref', url: 'https://fbref.com', description: 'Comprehensive football statistics' },
      { name: 'WhoScored', url: 'https://www.whoscored.com', description: 'Detailed player ratings and match analysis' },
    ]
  },
  {
    category: 'Community & Forums',
    icon: Users,
    items: [
      { name: 'Reddit Soccer', url: 'https://www.reddit.com/r/soccer', description: 'Football discussion community' },
      { name: 'Football Manager Forum', url: 'https://community.sigames.com', description: 'Tactical discussion and insights' },
      { name: 'r/FootballManagerGames', url: 'https://www.reddit.com/r/FootballManagerGames', description: 'FM tactics and discussion' },
    ]
  }
]

export default function Resources() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-purple-800 dark:text-purple-300">Helpful Football Resources</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the best football websites for news, statistics, tactics, and community discussions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {resources.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.category} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-purple-200 dark:border-purple-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-purple-700 dark:text-purple-300">
                    <Icon className="w-5 h-5" />
                    <span>{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors duration-200 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-purple-800 dark:text-purple-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex items-center space-x-2">
                            <span>{item.name}</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-300 dark:border-purple-600">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">
                Want to suggest a resource?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Help us build the best collection of football resources by suggesting your favorite sites
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
