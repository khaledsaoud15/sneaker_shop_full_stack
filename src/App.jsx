import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Header from "./components/Header";

// Smooth Scroll Component
const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div>{children}</div>;
};

// Breadcrumbs Component
const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on the home page
  if (location.pathname === "/") return null;

  return (
    <nav className="py-3 px-8 w-fit my-8 mx-8">
      <ol className="flex space-x-2">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-500">
                  {decodeURIComponent(value)}
                </span>
              ) : (
                <Link to={to} className="hover:underline">
                  {decodeURIComponent(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

// App Component
const App = () => {
  return (
    <SmoothScroll>
      <BrowserRouter>
        <Header />

        <Breadcrumbs />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </SmoothScroll>
  );
};

export default App;
