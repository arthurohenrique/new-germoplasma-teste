'use client'

import { useState } from 'react'
import { Breadcrumb } from "@/components/breadcrumb"
import { DataTable } from "@/components/data-table"
import { InfoCards } from "@/components/info-cards"
import { StatsCards } from "@/components/stats-cards"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function HomePage() {
  const [statsCards, setStatsCards] = useState([
    { title: 'Totais', value: 1327, description: 'germoplasma de café cadastrados', icon: 'Coffee' as const },
    { title: 'Resistentes à Ferrugem', value: 999, description: 'germoplasma resistentes', icon: 'ThumbsUp' as const },
    { title: 'Não resistentes à Ferrugem', value: 999, description: 'germoplasma não resistentes', icon: 'ThumbsDown' as const },
  ])

  const [tableData, setTableData] = useState([
    { numero: "MG 0001", material: "Típica Nacional", local: "Fazenda Santa Elisa", proprietario: "Instituto Agronômico", idade: "", data: "09/2005", coletor: "Luiz Carlos Fazuoli" },
    { numero: "MG 0002", material: "Típica UFV S36", local: "Área Experimental do Fundão", proprietario: "Universidade Federal de Viçosa", idade: "28 anos", data: "05/2005", coletor: "Delfim Floriano Vieira" },
  ])

  const [infoCards, setInfoCards] = useState([
    { title: "Café Conilon", description: "O café Conilon (Coffea canephora) é uma variedade resistente e produtiva, cultivada em regiões de clima quente e baixa altitude, com destaque no Espírito Santo, Brasil. Possui sabor robusto, menos acidez, alto teor de cafeína, e é usado em blends e cafés solúveis. É essencial para a economia e equilíbrio do mercado global.", image: "/placeholder.svg?height=200&width=300" },
    { title: "Café Cultivar Paraiso", description: "O café cultivar Paraíso é uma variedade de Coffea arabica, desenvolvida no Brasil com foco em alta produtividade, resistência à pragas e doenças, e qualidade de bebida. Adaptado a diferentes regiões, combina excelente perfil sensorial com características de doçura, corpo equilibrado e acidez moderada, sendo valorizado em produções de cafés especiais.", image: "/placeholder.svg?height=200&width=300" },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const addStatsCard = (newCard: { title: string; value: number; description: string; icon: 'Coffee' | 'ThumbsUp' | 'ThumbsDown' }) => {
    setStatsCards([...statsCards, newCard])
  }

  const addTableRow = (newRow: { numero: string; material: string; local: string; proprietario: string; idade: string; data: string; coletor: string }) => {
    setTableData([...tableData, newRow])
  }

  const addInfoCard = (newCard: { title: string; description: string; image: string }) => {
    setInfoCards([...infoCards, newCard])
  }

  const deleteStatsCard = () => {
    if (statsCards.length > 0 && window.confirm('Tem certeza que deseja excluir o último card de estatísticas?')) {
      setStatsCards(statsCards.slice(0, -1))
    }
  }

  const deleteTableRow = () => {
    if (tableData.length > 0 && window.confirm('Tem certeza que deseja excluir a última linha da tabela?')) {
      setTableData(tableData.slice(0, -1))
    }
  }

  const deleteInfoCard = () => {
    if (infoCards.length > 0 && window.confirm('Tem certeza que deseja excluir o último card de informação?')) {
      setInfoCards(infoCards.slice(0, -1))
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <Breadcrumb />
          <h1 className="mb-6 text-2xl font-bold">Germoplasma de Café</h1>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Estatísticas</h2>
              <div className="flex gap-2">
                <Button
                  onClick={deleteStatsCard}
                  className="rounded-full w-10 h-10 bg-red-500 text-white hover:bg-red-600 flex items-center justify-center"
                >
                  <span className="text-2xl">-</span>
                </Button>
                <Button
                  onClick={() => document.getElementById('addStatsCardDialog')?.click()}
                  className="rounded-full w-10 h-10 bg-black text-white hover:bg-gray-800 flex items-center justify-center"
                >
                  <span className="text-2xl">+</span>
                </Button>
              </div>
            </div>
            <StatsCards cards={statsCards} />
            <AddStatsCardDialog onAdd={addStatsCard} />

            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Dados da Tabela</h2>
              <div className="flex gap-2">
                <Button
                  onClick={deleteTableRow}
                  className="rounded-full w-10 h-10 bg-red-500 text-white hover:bg-red-600 flex items-center justify-center"
                >
                  <span className="text-2xl">-</span>
                </Button>
                <Button
                  onClick={() => document.getElementById('addTableRowDialog')?.click()}
                  className="rounded-full w-10 h-10 bg-black text-white hover:bg-gray-800 flex items-center justify-center"
                >
                  <span className="text-2xl">+</span>
                </Button>
              </div>
            </div>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Pesquisar itens..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <DataTable data={tableData.filter(item => Object.values(item).some(val => val?.toString().toLowerCase().includes(searchTerm?.toLowerCase() || '')
            )
            )} searchTerm={searchTerm} />
            <AddTableRowDialog onAdd={addTableRow} />

            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">O café</h2>
              <div className="flex gap-2">
                <Button
                  onClick={deleteInfoCard}
                  className="rounded-full w-10 h-10 bg-red-500 text-white hover:bg-red-600 flex items-center justify-center"
                >
                  <span className="text-2xl">-</span>
                </Button>
                <Button
                  onClick={() => document.getElementById('addInfoCardDialog')?.click()}
                  className="rounded-full w-10 h-10 bg-black text-white hover:bg-gray-800 flex items-center justify-center"
                >
                  <span className="text-2xl">+</span>
                </Button>
              </div>
            </div>
            <InfoCards cards={infoCards} />
            <AddInfoCardDialog onAdd={addInfoCard} />
          </div>
        </div>
      </div>
    </div>
  )
}

function AddStatsCardDialog({ onAdd }: { onAdd: (newCard: { title: string; value: number; description: string; icon: 'Coffee' | 'ThumbsUp' | 'ThumbsDown' }) => void }) {
  const [newCard, setNewCard] = useState({ title: '', value: 0, description: '', icon: 'Coffee' as 'Coffee' | 'ThumbsUp' | 'ThumbsDown' })

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onAdd(newCard)
    setNewCard({ title: '', value: 0, description: '', icon: 'Coffee' })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button id="addStatsCardDialog" className="hidden">Adicionar Novo Card de Estatísticas</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Novo Card de Estatísticas</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Título</Label>
            <Input id="title" value={newCard.title} onChange={(e) => setNewCard({...newCard, title: e.target.value})} required />
          </div>
          <div>
            <Label htmlFor="value">Valor</Label>
            <Input id="value" type="number" value={newCard.value} onChange={(e) => setNewCard({...newCard, value: parseInt(e.target.value)})} required />
          </div>
          <div>
            <Label htmlFor="description">Descrição</Label>
            <Input id="description" value={newCard.description} onChange={(e) => setNewCard({...newCard, description: e.target.value})} required />
          </div>
          <div>
            <Label htmlFor="icon">Ícone</Label>
            <select id="icon" value={newCard.icon} onChange={(e) => setNewCard({...newCard, icon: e.target.value as 'Coffee' | 'ThumbsUp' | 'ThumbsDown'})} required>
              <option value="Coffee">Coffee</option>
              <option value="ThumbsUp">ThumbsUp</option>
              <option value="ThumbsDown">ThumbsDown</option>
            </select>
          </div>
          <Button type="submit">Adicionar</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function AddTableRowDialog({ onAdd }: { onAdd: (newRow: { numero: string; material: string; local: string; proprietario: string; idade: string; data: string; coletor: string }) => void }) {
  const [newRow, setNewRow] = useState({ numero: '', material: '', local: '', proprietario: '', idade: '', data: '', coletor: '' })

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onAdd(newRow)
    setNewRow({ numero: '', material: '', local: '', proprietario: '', idade: '', data: '', coletor: '' })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button id="addTableRowDialog" className="hidden">Adicionar Nova Linha na Tabela</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Nova Linha na Tabela</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="numero">Número</Label>
            <Input id="numero" value={newRow.numero} onChange={(e) => setNewRow({...newRow, numero: e.target.value})} required />
          </div>
          <div>
            <Label htmlFor="material">Material</Label>
            <Input id="material" value={newRow.material} onChange={(e) => setNewRow({...newRow, material: e.target.value})} required />
          </div>
          <div>
            <Label htmlFor="local">Local</Label>
            <Input id="local" value={newRow.local} onChange={(e) => setNewRow({...newRow, local: e.target.value})} required />
          </div>
          <div>
            <Label htmlFor="proprietario">Proprietário</Label>
            <Input id="proprietario" value={newRow.proprietario} onChange={(e) => setNewRow({...newRow, proprietario: e.target.value})} required />
          </div>
          <div>
            <Label htmlFor="idade">Idade</Label>
            <Input id="idade" value={newRow.idade} onChange={(e) => setNewRow({...newRow, idade: e.target.value})} />
          </div>
          <div>
            <Label htmlFor="data">Data</Label>
            <Input id="data" value={newRow.data} onChange={(e) => setNewRow({...newRow, data: e.target.value})} required />
          </div>
          <div>
            <Label htmlFor="coletor">Coletor</Label>
            <Input id="coletor" value={newRow.coletor} onChange={(e) => setNewRow({...newRow, coletor: e.target.value})} required />
          </div>
          <Button type="submit">Adicionar</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function AddInfoCardDialog({ onAdd }: { onAdd: (newCard: { title: string; description: string; image: string }) => void }) {
  const [newCard, setNewCard] = useState({ title: '', description: '', image: '' })

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onAdd(newCard)
    setNewCard({ title: '', description: '', image: '' })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button id="addInfoCardDialog" className="hidden">Adicionar Novo Card de Informação</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Novo Card de Informação</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Título</Label>
            <Input id="title" value={newCard.title} onChange={(e) => setNewCard({...newCard, title: e.target.value})} required />
          </div>
          <div>
            <Label htmlFor="description">Descrição</Label>
            <Input id="description" value={newCard.description} onChange={(e) => setNewCard({...newCard, description: e.target.value})} required />
          </div>
          <div>
            <Label htmlFor="image">URL da Imagem</Label>
            <Input id="image" value={newCard.image} onChange={(e) => setNewCard({...newCard, image: e.target.value})} required />
          </div>
          <Button type="submit">Adicionar</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
