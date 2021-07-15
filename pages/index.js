import AboutSection from '@/components/sections/AboutSection'
import HeaderSection from '@/components/sections/HeaderSection'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <HeaderSection />
      <AboutSection />
    </Layout>
  )
}
