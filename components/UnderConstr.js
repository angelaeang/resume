class UnderConstr extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div id="under-constr">
            <h2><i class="bi bi-hammer"></i> UNDER CONSTRUCTION <i class="bi bi-hammer"></i></h2>
            <p>This new website is currently still in progress...<br>
                but check out what I have so far!</p>
        </div>
        `;
    }
}

customElements.define("under-constr", UnderConstr);