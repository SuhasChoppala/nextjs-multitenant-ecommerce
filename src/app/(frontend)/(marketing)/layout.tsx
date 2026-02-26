import Footer from '@/components/marketing/footer'
import { Navbar } from '@/components/marketing/navbar'
import { SearchFilters } from './search-filters/page'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
interface Props {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'categories',
  })

  const formattedData = data.docs

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
