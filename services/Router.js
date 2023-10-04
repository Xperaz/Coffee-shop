const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(link => {
            link.addEventListener("click", event => {
                event.preventDefault();
                const url = link.getAttribute("href");
                Router.go(url);
            })
        });
        // Evnet Handler for URL changes => change content according to url (forward and backward)
        window.addEventListener("popstate", event  => {
            Router.go(event.state.route, false);
        });

        // check the initial URL
        Router.go(location.pathname);
    },
    go: (route, addToHistory=true) => {
        console.log(`Goint to ${route}`);

        if (addToHistory){
            history.pushState({ route }, null, route)
        }
        let pageElement = null;
        switch(route) {
            case "/":
                pageElement = document.createElement("menu-page");
                break;
            case "/order":
                pageElement = document.createElement("order-page");;
                break;
            default:
                if (route.startsWith("/product-")){
                    pageElement = document.createElement("details-page");
                    // extract product id from route
                    const paramId = route.substring(route.lastIndexOf("-") + 1);
                    pageElement.dataset.id = paramId;
                }
                break;
        }
        const cach = document.querySelector("main");
        // remove previous content from the dom
        if (cach.children[0]){
            cach.children[0].remove();
        }
        cach.appendChild(pageElement);
        window.scrollX = 0;
        window.scrollY = 0;
    }
}

export default Router;