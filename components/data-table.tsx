import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DataTableProps {
  data: Array<{ [key: string]: any }>;
  searchTerm: string;
}

export function DataTable({ data, searchTerm }: DataTableProps) {
  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      val?.toString().toLowerCase().includes((searchTerm || '').toLowerCase())
    )
  )

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="px-0">
        <CardTitle>
          Tabela <span className="text-sm font-normal text-muted-foreground">| Atualizada</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Número</TableHead>
                <TableHead>Material</TableHead>
                <TableHead>Local</TableHead>
                <TableHead>Proprietário</TableHead>
                <TableHead>Idade</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Coletor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.numero}</TableCell>
                  <TableCell>{row.material}</TableCell>
                  <TableCell>{row.local}</TableCell>
                  <TableCell>{row.proprietario}</TableCell>
                  <TableCell>{row.idade}</TableCell>
                  <TableCell>{row.data}</TableCell>
                  <TableCell>{row.coletor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
