document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;

const form = document.querySelector("#contact-form");
const confirmation = document.querySelector("#confirmation");

form.addEventListener("submit", (event) =>
{
    event.preventDefault();

    const fullName = document.querySelector("#fullname").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;

    if (message.length < 10)
    {
        confirmation.textContent =
            "Message must contain at least 10 characters.";
        return;
    }

    const contactData =
    {
        fullName,
        email,
        subject,
        message
    };

    localStorage.setItem(
        "toolshopContact",
        JSON.stringify(contactData)
    );

    confirmation.innerHTML = `
        <p>
            Thank you, ${fullName}! Your message has been saved.
        </p>
    `;

    form.reset();
});

