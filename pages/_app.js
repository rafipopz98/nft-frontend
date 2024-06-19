import "../styles/globals.css";
import { Navbar } from "../components/componentIndex";
import { Footer } from '../components/componentIndex'
const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;