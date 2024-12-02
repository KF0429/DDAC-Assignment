import { Sidebar } from './components/sellersidebar'
import { Banner } from './components/sellerbanner'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This is a placeholder user. In a real application, you'd fetch this from your auth system
  const user = { name: 'John Doe' }

  return (
    <div className="flex flex-col h-screen">
      <Banner user={user} currentPage="My Products" />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  )
}

