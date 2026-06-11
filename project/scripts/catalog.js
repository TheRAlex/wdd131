document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;

const tools = [
{
    name: "Angle Grinder",
    category: "Power tools",
    price: 15.00,
    image: "images/anglegrinder.webp"
},
{
    name: "Circular Saw",
    category: "Power tools",
    price: 30.00,
    image:"images/circularsaw.webp"
},
{
    name: "Cordless Drill",
    category: "Power tools",
    price: 20.00,
    image:"images/cordlessdrill.webp"

},
{
    name: "Hand Saw",
    category: "Hand tools",
    price: 8.00,
    image:"images/handsaw.webp"
},
{
    name: "Hammer",
    category: "Hand tools",
    price: 6.00,
    image:"images/hammer.webp"
},
{
    name: "Gloves",
    category: "Safety equipment",
    price: 3.00,
    image:"images/gloves.webp"
},
{
    name: "Safety Glasses",
    category: "Safety equipment",
    price: 2.00,
    image:"images/safety.webp" 
}
];

const catalogContainer = document.querySelector("#catalog-container");

function displayTools(toolList)
{
    catalogContainer.innerHTML = "";

    toolList.forEach(tool =>
    {
        const card = `
            <article class="tool-card">
                <img
                    src="${tool.image}"
                    alt="${tool.name}"
                    loading="lazy"
                >

                <h3>${tool.name}</h3>

                <p><strong>Category:</strong> ${tool.category}</p>

                <p><strong>Price:</strong> $${tool.price.toFixed(2)}</p>
            </article>
        `;

        catalogContainer.innerHTML += card;
    });
}

displayTools(tools);

document.querySelector("#all").addEventListener("click", () =>
{
    displayTools(tools);
});

document.querySelector("#power").addEventListener("click", () =>
{
    const powerTools = tools.filter(tool =>
        tool.category === "Power tools"
    );

    displayTools(powerTools);
});

document.querySelector("#hand").addEventListener("click", () =>
{
    const handTools = tools.filter(tool =>
        tool.category === "Hand tools"
    );

    displayTools(handTools);
});

document.querySelector("#safety").addEventListener("click", () =>
{
    const safetyTools = tools.filter(tool =>
        tool.category === "Safety equipment"
    );

    displayTools(safetyTools);
});