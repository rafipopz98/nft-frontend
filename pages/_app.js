import "../styles/globals.css";
import { Navbar, BigNftSlider, Footer } from "../components/componentIndex";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <BigNftSlider />
    <Footer />
  </div>
);

export default MyApp;