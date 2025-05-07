import React from 'react'
import { PageLayout } from '../utils/PageLayout'
import MenuPage from '../components/MenuPage'

const Home = () => {
  return (
    <div>
      <PageLayout onBack={() => window.history.back()}>
        <MenuPage />
      </PageLayout>
    </div>
  )
}

export default Home
