import Store from './services/Strore.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';
// Link my Web Component (we link component just by importing them.)
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';


//make module global using object so we can add any module we want in the future without using too many golobal variables
window.app = {}
app.store = Store; // The Store module now is in global object
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    loadData();
    Router.init();
});