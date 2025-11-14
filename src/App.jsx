import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Grid_card from "./components/grid_card/Grid_card";
import Marqu from "./components/marque/Marqu";
import ScrollRevealedText from "./components/scroll_revealed_text/ScrollRevealedText";

function App() {
  return (
    <>
      <div>
        {/* landing page */}
        <Banner />
        <ScrollRevealedText />
        <Grid_card />
        <Marqu />
        <Footer />
      </div>
    </>
  );
}

export default App;
