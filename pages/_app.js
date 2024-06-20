import "../styles/globals.css";
import { Navbar, BigNftSlider, Footer, Title, Category } from "../components/componentIndex";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <BigNftSlider />
    <Title title={"Browse by category"} desc={"Explore nfts by their category"} />
    <Category />
    <Footer />
  </div>
);

export default MyApp;