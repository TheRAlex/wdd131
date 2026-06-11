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

    const randomIndex = Math.floor(Math.random() * tools.length);

    const randomTool = tools[randomIndex];

    const featuredTool = document.querySelector("#featured-tool");

    featuredTool.innerHTML = `
        <img
            src="${randomTool.image}"
            alt="${randomTool.name}"
            loading="lazy"
        >

        <h3>${randomTool.name}</h3>

        <p>Category: ${randomTool.category}</p>

        <p>$${randomTool.price.toFixed(2)}</p>
    `;