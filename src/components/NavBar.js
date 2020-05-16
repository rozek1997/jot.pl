import "./NavBar.scss"

let NavBar = {
    render: () => {
        return `
            <nav class="main-navbar">
             <div class="sidebar">
              <div class="sidebar__toggle-btn">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="sidebar__items">
                <ul>
                    <li class="sidebar__item"><a class="sidebar__item-link">Fryzjer</a></li>
                    <li class="sidebar__item"><a class="sidebar__item-link">Medycyna estetyczna</a></li>
                    <li class="sidebar__item"><a class="sidebar__item-link">Kontakt</a></li>
                    <li class="sidebar__item"><a class="sidebar__item-link">O nas</a></li>
                 </ul>
              </div>
             </div>
            <div class="main-navbar__logo">
                <a class="main-navbar__logo-link">Jot.pl</a>
            </div>
            </nav>
        `
    }
}


export default NavBar;