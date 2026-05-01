import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
import SkdevasthanaPage from "./pages/Skdevasthana/SkdevasthanaPage";
import AllVachanagaluPage from "./pages/Skdevasthana/AllVachanagaluPage";

const normalizePath = (pathname) => {
  const baseUrl = import.meta.env.BASE_URL || "/";
  const trimmedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const withoutBase =
    trimmedBase && pathname.startsWith(trimmedBase)
      ? pathname.slice(trimmedBase.length)
      : pathname;

  if (!withoutBase || withoutBase === "/") {
    return "/";
  }

  return withoutBase.replace(/\/+$/, "") || "/";
};

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [currentPath, setCurrentPath] = useState(() =>
    normalizePath(window.location.pathname)
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  const navigateTo = (path) => {
    const nextPath = path.startsWith("/") ? path : `/${path}`;
    const baseUrl = import.meta.env.BASE_URL || "/";
    const resolvedPath =
      baseUrl === "/"
        ? nextPath
        : `${baseUrl.replace(/\/$/, "")}${nextPath}`;

    window.history.pushState({}, "", resolvedPath);
    setCurrentPath(normalizePath(window.location.pathname));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPath === "/skdevasthana/vachanagalu") {
    return (
      <AllVachanagaluPage
        theme={theme}
        onToggleTheme={toggleTheme}
        onBackToTemple={() => navigateTo("/skdevasthana")}
      />
    );
  }

  if (currentPath === "/skdevasthana") {
    return (
      <SkdevasthanaPage
        theme={theme}
        onToggleTheme={toggleTheme}
        onBackToPortfolio={() => navigateTo("/")}
        onViewAllVachanagalu={() => navigateTo("/skdevasthana/vachanagalu")}
      />
    );
  }

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Skills />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
