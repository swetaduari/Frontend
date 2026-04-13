import React from 'react'
import NavbarApp from './components/NavbarApp'
import BannerApp from './components/BannerApp'
import CategoryApp from './components/CategoryApp'
import FeaturesProducts from './components/FeaturesProducts'
import CustomerReviewsApp from './components/CustomerReviewsApp'
import DownloadApp from './components/DownloadApp'
import FooterApp from './components/FooterApp'
export default function Layout() {
  return (
    <div>
    <NavbarApp />
    <BannerApp />
    <CategoryApp />
    <FeaturesProducts />
    <CustomerReviewsApp />
    <DownloadApp />
    <FooterApp />
    </div>
  )
}
