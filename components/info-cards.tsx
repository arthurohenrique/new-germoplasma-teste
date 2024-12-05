import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CardInfo {
  image: string;
  title: string;
  description: string;
}

interface InfoCardsProps {
  cards: CardInfo[];
}

export function InfoCards({ cards }: InfoCardsProps) {
  return (
    <div className="grid gap-6">

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((info, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <Image
              src={info.image}
              alt={info.title}
              width={400}
              height={200}
              className="h-48 w-full object-cover"
            />
            <CardContent className="flex flex-col gap-2 p-4">
              <CardTitle className="text-lg font-semibold text-green-800">{info.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{info.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

