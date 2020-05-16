import "./index.css"
import NavBar from "./components/NavBar"


document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = NavBar.render();
})