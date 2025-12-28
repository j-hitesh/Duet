import Banner from '../components/Banner'
import Cta from '../components/Cta'
import Follow from '../components/Follow'
import IntroDuet from '../components/IntroDuet'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'


const Home = () => {
  return (
    <div>
      <Banner/>
      <IntroDuet/>
      <Portfolio/>
      <Testimonials/>
      <Follow/>
      <Cta/>
    </div>
  )
}

export default Home
