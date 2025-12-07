import { ExternalLink, Globe, BookOpen, Tv, Users, Trophy, Target, BarChart3, Play, Gamepad2, Smartphone, Star, Clock, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const resources = [
  {
    category: 'Official Sites',
    icon: Globe,
    items: [
      { name: 'Premier League', url: 'https://www.premierleague.com', description: 'Official PL website with fixtures, stats, and news', badge: 'PL' },
      { name: 'UEFA', url: 'https://www.uefa.com', description: 'European competitions and international football', badge: 'EU' },
      { name: 'FIFA', url: 'https://www.fifa.com', description: 'World football governing body', badge: 'FIFA' },
      { name: 'La Liga', url: 'https://www.laliga.com', description: 'Spanish football official website', badge: 'ES' },
      { name: 'Serie A', url: 'https://www.legaseriea.it', description: 'Italian football official website', badge: 'IT' },
      { name: 'Bundesliga', url: 'https://www.bundesliga.com', description: 'German football official website', badge: 'DE' },
    ]
  },
  {
    category: 'News & Analysis',
    icon: BookOpen,
    items: [
      { name: 'BBC Sport - Football', url: 'https://www.bbc.co.uk/sport/football', description: 'Comprehensive football news and analysis', badge: 'UK' },
      { name: 'ESPN FC', url: 'https://www.espn.com/soccer', description: 'Latest football news and features', badge: 'US' },
      { name: 'The Athletic', url: 'https://www.theathletic.com/football', description: 'In-depth football journalism', badge: 'Premium' },
      { name: 'Sky Sports', url: 'https://www.skysports.com/football', description: 'Premier League coverage and analysis', badge: 'UK' },
      { name: 'Goal.com', url: 'https://www.goal.com', description: 'Global football news and rumors', badge: 'Global' },
      { name: 'Guardian Football', url: 'https://www.theguardian.com/football', description: 'Quality football journalism', badge: 'UK' },
    ]
  },
  {
    category: 'Statistics & Data',
    icon: BarChart3,
    items: [
      { name: 'Transfermarkt', url: 'https://www.transfermarkt.com', description: 'Player values, transfers, and statistics', badge: 'Market' },
      { name: 'FBref', url: 'https://fbref.com', description: 'Comprehensive football statistics', badge: 'Stats' },
      { name: 'WhoScored', url: 'https://www.whoscored.com', description: 'Detailed player ratings and match analysis', badge: 'Ratings' },
      { name: 'Sofascore', url: 'https://www.sofascore.com', description: 'Live scores and detailed statistics', badge: 'Live' },
      { name: 'Understat', url: 'https://understat.com', description: 'Expected goals (xG) and advanced stats', badge: 'xG' },
      { name: 'Opta Analyst', url: 'https://theanalyst.com', description: 'Professional football analytics', badge: 'Pro' },
    ]
  },
  {
    category: 'Tactical Analysis',
    icon: Target,
    items: [
      { name: 'Twitter - Tactical Accounts', url: 'https://twitter.com', description: 'Follow tactical analysts like @BetweenThePosts', badge: 'Social' },
      { name: 'Football Manager', url: 'https://www.footballmanager.com', description: 'Tactical insights from simulation game', badge: 'Game' },
      { name: 'Betfair Insights', url: 'https://www.betfair.com/insights/football', description: 'Betting-driven tactical analysis', badge: 'Betting' },
      { name: 'StatsBomb', url: 'https://statsbomb.com', description: 'Advanced football analytics and data', badge: 'Analytics' },
    ]
  },
  {
    category: 'Live Streaming & TV',
    icon: Play,
    items: [
      { name: 'Sky Sports', url: 'https://www.skysports.com/watch', description: 'Premier League broadcasts', badge: 'Paid' },
      { name: 'BT Sport', url: 'https://www.bt.com/sport', description: 'Champions League and more', badge: 'Paid' },
      { name: 'Peacock', url: 'https://www.peacocktv.com/sports', description: 'Premier League streaming in US', badge: 'US' },
      { name: 'ESPN+', url: 'https://www.espn.com/espnplus', description: 'Bundesliga and other leagues', badge: 'US' },
      { name: 'Paramount+', url: 'https://www.paramountplus.com', description: 'Champions League in US', badge: 'US' },
    ]
  },
  {
    category: 'Mobile Apps',
    icon: Smartphone,
    items: [
      { name: 'OneFootball', url: 'https://www.onefootball.com', description: 'News, scores, and updates', badge: 'Free' },
      { name: 'ESPN App', url: 'https://www.espn.com/espn/apps/espn', description: 'Comprehensive sports coverage', badge: 'Free' },
      { name: 'BBC Sport', url: 'https://www.bbc.co.uk/sport/football/app', description: 'UK football news app', badge: 'Free' },
      { name: 'FotMob', url: 'https://www.fotmob.com', description: 'Live scores and detailed stats', badge: 'Free' },
      { name: 'Sofascore', url: 'https://www.sofascore.com/mobile', description: 'Live scores with detailed analytics', badge: 'Free' },
    ]
  },
  {
    category: 'Gaming & Fantasy',
    icon: Gamepad2,
    items: [
      { name: 'Fantasy Premier League', url: 'https://fantasy.premierleague.com', description: 'Official PL fantasy game', badge: 'Free' },
      { name: 'FIFA Ultimate Team', url: 'https://www.ea.com/games/fifa/fifa-ultimate-team', description: 'Build your dream team', badge: 'Game' },
      { name: 'Football Manager', url: 'https://www.footballmanager.com', description: 'Management simulation game', badge: 'Game' },
      { name: 'Dream Team', url: 'https://www.dreamteamfc.com', description: 'Fantasy football game', badge: 'Free' },
    ]
  },
  {
    category: 'Community & Forums',
    icon: Users,
    items: [
      { name: 'Reddit Soccer', url: 'https://www.reddit.com/r/soccer', description: 'Football discussion community', badge: 'Forum' },
      { name: 'Reddit Football Manager', url: 'https://www.reddit.com/r/FootballManagerGames', description: 'FM tactics and discussion', badge: 'Forum' },
      { name: 'BigSoccer', url: 'https://www.bigsoccer.com', description: 'American soccer community', badge: 'Forum' },
      { name: 'Twitter Football', url: 'https://twitter.com', description: 'Real-time football discussions', badge: 'Social' },
      { name: 'Discord Football Servers', url: 'https://discord.com', description: 'Real-time chat communities', badge: 'Chat' },
    ]
  },
  {
    category: 'Transfer News',
    icon: TrendingUp,
    items: [
      { name: 'Transfermarkt', url: 'https://www.transfermarkt.com/transfers/neueste-transfers/statistik', description: 'Latest transfer news and rumors', badge: 'Market' },
      { name: 'Fabrizio Romano', url: 'https://twitter.com/FabrizioRomano', description: 'Renowned transfer journalist', badge: 'Journalist' },
      { name: 'Goal Transfers', url: 'https://www.goal.com/transfers', description: 'Transfer news and rumors', badge: 'News' },
      { name: 'BBC Transfer Tracker', url: 'https://www.bbc.co.uk/sport/football/transfers', description: 'BBC transfer coverage', badge: 'News' },
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
            Discover the best football websites for news, statistics, tactics, streaming, and community discussions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {resources.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.category} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-purple-200 dark:border-purple-700 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-purple-700 dark:text-purple-300">
                    <Icon className="w-5 h-5" />
                    <span>{category.category}</span>
                    <Badge variant="secondary" className="ml-auto text-xs">
                      {category.items.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-lg bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors duration-200 group"
                    >
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-1">
                          <h3 className="font-semibold text-purple-800 dark:text-purple-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 truncate">
                            {item.name}
                          </h3>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 text-center">
                          {item.description}
                        </p>
                      </div>
                      {item.badge && (
                        <div className="flex justify-center mt-2">
                          <Badge variant="outline" className="text-xs bg-white/50 dark:bg-gray-800/50">
                            {item.badge}
                          </Badge>
                        </div>
                      )}
                    </a>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Card className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-300 dark:border-purple-600">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">
                  Want to suggest a resource?
                </h3>
              </div>
              <p className="text-gray-600 text-left dark:text-gray-400 mb-4">
                Help us build the best collection of football resources by suggesting your favorite sites
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">News</Badge>
                <Badge variant="secondary">Stats</Badge>
                <Badge variant="secondary">Tactics</Badge>
                <Badge variant="secondary">Apps</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 border-blue-300 dark:border-blue-600">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">
                  Quick Access
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-left mb-4">
                Bookmark this page for quick access to all your football resources
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Live Scores</Badge>
                <Badge variant="secondary">News</Badge>
                <Badge variant="secondary">Stats</Badge>
                <Badge variant="secondary">Community</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        
      </div>
    </main>
  )
}
