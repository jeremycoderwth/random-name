import { loadHeader } from './scripts/loadComponents.js';
import { loadMenuList, loadBeverages } from './scripts/loadMenu.js';

window.addEventListener('DOMContentLoaded', () => {
    loadHeader('page-header');

    const menu = document.querySelector('.menu-container');
    loadMenuList(menu);

    const beverages = document.querySelector('.beverages-container');
    loadBeverages(beverages);
});
