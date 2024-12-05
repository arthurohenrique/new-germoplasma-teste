import { Coffee, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const iconMap = {
  Coffee,
  ThumbsUp,
  ThumbsDown,
}

interface Card {
  icon: keyof typeof iconMap;
  title: string;
  value: string | number;
  description: string;
}

interface StatsCardsProps {
  cards: Card[];
}

export function StatsCards({ cards }: StatsCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => {
        const IconComponent = iconMap[card.icon] || Coffee
        return (
          <Card key={index} className="bg-white">
            <CardContent className="flex items-start gap-4 p-6">
              <IconComponent className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">{card.title}</p>
                <p className="text-2xl font-bold">{card.value}</p>
                <p className="text-xs text-muted-foreground">{card.description}</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

