import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import MarketingConsulting from "./pages/MarketingConsulting";
import MediaPlanning from "./pages/MediaPlanning";
import AtlBtl from "./pages/AtlBtl";
import DigitalMarketing from "./pages/DigitalMarketing";
import SimpleServicePage from "./pages/SimpleServicePage";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Thanks from "./pages/Thanks";
import NotFound from "./pages/NotFound";
import { simpleServicePages } from "./data/siteData";

export default function App() {
  const simpleSlugs = Object.keys(simpleServicePages);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="service" element={<Services />} />
          <Route path="marketing-consulting" element={<MarketingConsulting />} />
          <Route path="media-planning" element={<MediaPlanning />} />
          <Route path="atl-btl" element={<AtlBtl />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          {simpleSlugs.map((slug) => (
            <Route
              key={slug}
              path={slug}
              element={<SimpleServicePage slug={slug} />}
            />
          ))}
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="thanks" element={<Thanks />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
