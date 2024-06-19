import "../styles/globals.css";
import { Navbar } from "../components/componentIndex";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
  </div>
);

export default MyApp;