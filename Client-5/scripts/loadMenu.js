export function loadMenuList(container) {
    let foodHTML = '';

    menu.forEach((item) => {
        foodHTML += `
            <div class="menu-items">
                <div class="food">
                    <span class="name">${item.name}</span>
                    <span class="price">₱${formatCurrency(item.priceCent)}</span>
                </div>
                <p class="description">
                    ${item.description}
                </p>
            </div>
        `;
    });

    container.innerHTML = foodHTML;
}

export function loadBeverages(container) {
    let beveragesHTML = '';

    beverages.forEach((item) => {
        beveragesHTML += `
            <div class="beverage">
                <span class="name">${item.name}</span>
                <span class="price">₱${formatCurrency(item.priceCent)}</span>
            </div>
        `;
    });

    container.innerHTML = beveragesHTML;
}

function formatCurrency(price) {
    return (price / 100).toFixed(2);
}

const menu = [
    {
        name: 'Tonkotsu Ramen',
        priceCent: 19900,
        description: 'A rich, creamy pork broth simmered for hours until silky smooth. Paired with fresh noodles and tender toppings, this bowl is pure comfort.'
    },
    {
        name: 'Flame Shogu',
        priceCent: 29900,
        description: 'Our soy-based classic with a fiery twist. Bold, smoky, and spicy — made for ramen lovers who want an extra kick.'
    },
    {
        name: 'Chili Crave',
        priceCent: 22900,
        description: 'Packed with layers of chili heat, this ramen keeps your taste buds awake and craving more.'
    },
    {
        name: 'Soul Broth',
        priceCent: 22900,
        description: 'Warm, hearty, and soothing, this ramen feels like a hug on a rainy day.'
    },
    {
        name: 'Fire Slurp',
        priceCent: 24900,
        description: "A daring mix of spice and smoke, leaving behind a bold, fiery trail you won't forget."
    },
    {
        name: 'Midnight Ramen',
        priceCent: 24900,
        description: 'A dark, garlicky broth with deep roasted flavors. Perfect for those who like something rich and mysterious.'
    },
    {
        name: 'Sesamii Swirl',
        priceCent: 26900,
        description: 'A nutty, roasted sesame broth topped with crunch and creaminess. A unique twist for sesame lovers.'
    }
];

const beverages = [
    {
        name: 'Iced Tea',
        priceCent: 4900
    },
    {
        name: 'Coke in Can',
        priceCent: 6900
    },
    {
        name: 'Water',
        priceCent: 2500
    }
];