import HeroSection from "../../components/heroSection/HeroSection"
import Category from "../../components/category/Category"
import Layout from "../../components/layout/Layout"
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard"
import Track from "../../components/track/Track"
// import Testimonial from "../../components/testimonial/Testimonial"
// import Loader from "../../components/loader/Loader"
import TrendingBanner from "../../components/trendingBanner/TrendingBanner"
import OnsaleProducts from "../../components/onSaleProducts/OnsaleProducts"
import TopSellingShoes from "../../components/topSellingShoes/TopSellingShoes"

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <TrendingBanner/>
      <Category />
      <HomePageProductCard />
      <TopSellingShoes />
      <Track />
      {/* <Testimonial /> */}
      <OnsaleProducts />
    </Layout>
  )
}

export default Home
