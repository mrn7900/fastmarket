import Aboutus from './Aboutus';
import Products from './Products';
import Header from './Header';
import Categories from './Categories';
import Footer from './Footer';

function Home(){
    return <div>
        <Header/>
        <Aboutus/>
        <Products/>
        <Categories/>
        <Footer/>
    </div>
}
export default Home;