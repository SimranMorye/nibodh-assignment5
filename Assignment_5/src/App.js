import "./App.css";
import Header from "./components/header/index";
import Navbar from "./components/navbar/index";
import Hero from "./components/hero/index";
import Banner from "./components/banner/banner";
import DonateInfo from "./components/donate-info/index";
import MiscHd1 from "./components/misc_component/header1";
import Card1 from "./components/card/card1";
import InfoBanner from "./components/misc_component/graph";
import Latest from "./components/misc_component/latest";
import Card2 from "./components/card/card2";
import Form from "./components/contact_us/index";
import Teamslider from "./components/misc_component/teamslider";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <Banner />
      <DonateInfo />
      <MiscHd1 />
      <Card1 />
      <InfoBanner />
      <Latest/>
      <Card2 />
      <Form />
      <Teamslider />
      <Footer/>
      
    </div>
  );
}

export default App;
