export class MenuPage extends HTMLElement {
    constructor() {
        super();

        // Applying shadow DOM
        this.root = this.attachShadow({ mode: 'open' });
        
        // Create css style element
        const styles = document.createElement("style");
        this.root.appendChild(styles);

        async function loadCss() {
            const request = await fetch("/components/MenuPage.css");
            const css = await request.text();
            styles.textContent = css;
            console.log(css);
        }
        loadCss();
    }

    // When component is attached to the DOM
    connectedCallback() {
        const template = document.getElementById("menu-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }
}

customElements.define("menu-page", MenuPage); 