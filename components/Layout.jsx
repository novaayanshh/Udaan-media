import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatButtons from "./FloatButtons";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-body text-ink">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatButtons />
    </div>
  );
}
