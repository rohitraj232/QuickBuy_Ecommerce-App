import HeroSection from "../../components/heroSection/HeroSection"
import Category from "../../components/category/Category"
import Layout from "../../components/layout/Layout"
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard"
import Track from "../../components/track/Track"
// import Testimonial from "../../components/testimonial/Testimonial"
// import Loader from "../../components/loader/Loader"
// import SearchBar from "../../components/searchBar/SearchBar"
import TrendingBanner from "../../components/trendingBanner/TrendingBanner"

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      {/* <SearchBar /> */}
      <TrendingBanner/>
      <Category />
      <HomePageProductCard />
      <Track />
      {/* <Testimonial /> */}
    </Layout>
  )
}

export default Home
