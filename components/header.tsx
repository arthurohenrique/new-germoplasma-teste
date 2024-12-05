import { Coffee } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-green-700 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="h-6 w-6" />
          <h1 className="text-2xl font-bold">EPAMIG</h1>
        </div>
        <Button asChild variant="ghost" className="text-white hover:bg-green-600 hover:text-white">
          <Link href="/login">Entrar</Link>
        </Button>
      </div>
    </header>
  )
}

