class Nav extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <nav id="nav">
                <a href="index.html">
                    <div class="center-items logo" id="logo-nav">
                        <span>ANG</span>
                        <span>ANG</span>
                    </div>
                </a>
                <ul>
                    <li><a href="about_me.html">ABOUT ME</a></li>
                    <li><a href="resume.html">RESUME</a></li>
                    <li><a href="projects.html">PROJECTS</a></li>
                    <li><a href="art.html">ART</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define("nav-component", Nav);
