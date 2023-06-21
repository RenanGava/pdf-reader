'use client'
import { Dashboard } from "@/components/Dashboard"
import { Header } from "@/components/Header"
import { config } from 'dotenv'

config()

export default function Home() {

  return (
    <main>
      <Header />
      <Dashboard />
    </main>
  )
}
