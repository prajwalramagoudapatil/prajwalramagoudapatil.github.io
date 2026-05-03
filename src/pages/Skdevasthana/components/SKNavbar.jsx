import "./Components.css";
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";



function SKNavbar({ theme, onToggleTheme }) {
    return (
        <>
        <header className="temple-header">
        <div className="temple-shell temple-header-row">
          <div className="temple-header-copy">
            <h1>
               <a href="/skdevasthana"> <span className="temple-title-desktop"> Shri Kadasiddheshwar Devasthana</span> </a>
              <span className="temple-title-mobile"> <a href="/skdevasthana">SK Devasthana</a></span>
            </h1>
          </div>

          <button
            type="button"
            className="temple-theme-button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true">{theme === "dark" ? <FiSun /> : <MdOutlineDarkMode />}</span>
          </button>
        </div>
      </header>

        </>
    );
}

export default SKNavbar;