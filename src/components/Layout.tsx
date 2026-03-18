import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'

export default function Layout() {
  return (
    <main className="flex flex-col min-h-screen bg-sb-bg text-sb-text font-sans">
      <Navbar />
      <div className="flex-1 pt-16">
        <Outlet />
      </div>
    </main>
  )
}
