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
  const trimmedBase = baseUrl.endsWith("/")
    ? baseUrl.slice(0, -1)
    : baseUrl;

  const withoutBase =
    trimmedBase &&
    trimmedBase !== "/" &&
    pathname.startsWith(trimmedBase)
      ? pathname.slice(trimmedBase.length)
      : pathname;

  if (!withoutBase || withoutBase === "/") {
    return "/";
  }

  return withoutBase.replace(/\/+$/, "") || "/";
};


const SEO_CONFIG = {
  "/": {
    title: "Prajwal Patil | Software Developer Portfolio",
    description:
      "Explore Prajwal Patil's software development portfolio, projects, skills, and experience in React, Flutter, Python, and AI.",
    canonical: "https://prajwalramagoudapatil.github.io/",
  },

  "/skdevasthana": {
    title: "SK Devasthana | Temple Information",
    description:
      "Explore Shri Kadasiddheshwara Devasthana in Bastawad, Hukkeri, including temple information, history, spiritual content, and Vachanagalu.",
    canonical: "https://prajwalramagoudapatil.github.io/skdevasthana/",
  },

  "/skdevasthana/vachanagalu": {
    title: "Vachanagalu | SK Devasthana",
    description:
      "Read Vachanagalu of Shri Kadasiddheshwar and explore spiritual teachings on the SK Devasthana website.",
    canonical:
      "https://prajwalramagoudapatil.github.io/skdevasthana/vachanagalu/",
  },
};

function updateSEO(path) {
  const seo = SEO_CONFIG[path] || SEO_CONFIG["/"];

  document.title = seo.title;

  const setMeta = (name, content, attribute = "name") => {
    let element = document.head.querySelector(
      `meta[${attribute}="${name}"]`
    );

    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }

    element.setAttribute("content", content);
  };

  setMeta("description", seo.description);
  setMeta("og:title", seo.title, "property");
  setMeta("og:description", seo.description, "property");
  setMeta("og:url", seo.canonical, "property");

  let canonical = document.head.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = seo.canonical;
}




function App() {

const [theme, setTheme] = useState("light");
const [themeInitialized, setThemeInitialized] = useState(false);
const [currentPath, setCurrentPath] = useState("/");

  
  useEffect(() => {
    updateSEO(currentPath);
  }, [currentPath]);

  
  useEffect(() => {
    setCurrentPath(normalizePath(window.location.pathname));
  }, []);




  useEffect(() => {
    let initialTheme = "light";

    try {
      const savedTheme = window.localStorage.getItem("theme");

      if (savedTheme === "light" || savedTheme === "dark") {
        initialTheme = savedTheme;
      } else if (
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        initialTheme = "dark";
      }
    } catch {
      // Use the default theme if browser storage is unavailable.
    }

    setTheme(initialTheme);
    setThemeInitialized(true);
  }, []);

  useEffect(() => {
    if (!themeInitialized) return;

    document.documentElement.setAttribute("data-theme", theme);

    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [theme, themeInitialized]);


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
