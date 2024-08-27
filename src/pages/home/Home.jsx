import HeroSection from "../../components/heroSection/HeroSection"
import Category from "../../components/category/Category"
import Layout from "../../components/layout/Layout"
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard"
import Track from "../../components/track/Track"
import Testimonial from "../../components/testimonial/Testimonial"
import Loader from "../../components/loader/Loader"
import SearchBar from "../../components/searchBar/SearchBar"

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <SearchBar />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default Home
