import Link from "next/link"
import { ChevronRight } from 'lucide-react'

export function Breadcrumb() {
  return (
    <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/" className="hover:text-foreground">
        Início
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/dashboard" className="hover:text-foreground">
        Painel
      </Link>
    </div>
  )
}

