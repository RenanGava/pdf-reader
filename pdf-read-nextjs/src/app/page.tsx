'use client'

import { ControlBar } from "@/components/ControlBar"
import { Dashboard } from "@/components/Dashboard"
import { Header } from "@/components/Header"
import { UsePdf2Audio } from "@/context/usePdf2Audio"

export default function Home() {

  const { speaking } = UsePdf2Audio()
  return (
    <main>
      <Header />
      { speaking && <ControlBar/>}
      <Dashboard />
    </main>
  )
}
