import backgroundImage from '../assets/images/heroImg.png'
import Africa from '../component/Africa';
import Discount from '../component/Discount';
import Footer from '../component/Footer';
import HeadingTitle from '../component/HeadingTitle';
import HeroContent from '../component/HeroContent';
import HomeCard from '../component/HomeCard';
import HomeNavBar from '../component/Navabar/HomeNavBar';
import Subscribe from '../component/Subscribe';

const Home = () => {
  return (
    <div className='relative'>
    <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
       <HomeNavBar />
          <HeroContent heroTex='Order food from the best restaurants, local  favorites, and online vendors using the app or web.' Find_Your='Find Your' Fav='Favorite' Fod='Food'/>
    </div>
      <div>
        <HeadingTitle headingTitle='Want to become a member?'/>
            <HomeCard/>
        <HeadingTitle headingTitle='Enjoy our best seller of the week'/>
        <Africa />
        <Discount />
        <Subscribe />
        <Footer />
      </div>
    </div>
  )
}

export default Home

