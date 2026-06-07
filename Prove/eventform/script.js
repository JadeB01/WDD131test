const form = document.getElementById("eventForm");

const typeSelect = document.getElementById("type");

const extraField = document.getElementById("extraField");
const extraLabel = document.getElementById("extraLabel");
const extraInput = document.getElementById("extraInput");

const errorMessages = document.getElementById("errorMessages");
const ticketInfo = document.getElementById("ticketInfo");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const eventDate = document.getElementById("eventDate");


// Show hidden field based on selection
typeSelect.addEventListener("change", function () {

    if (typeSelect.value === "") {
        extraField.style.display = "none";
        return;
    }

    extraField.style.display = "block";

    if (typeSelect.value === "student") {
        extraLabel.textContent = "Student I#";
        extraInput.value = "";
        extraInput.placeholder = "123456789";
    }

    if (typeSelect.value === "guest") {
        extraLabel.textContent = "Access Code";
        extraInput.value = "";
        extraInput.placeholder = "EVENT131";
    }
});


// Submit form
form.addEventListener("submit", function (event) {

    event.preventDefault();

    errorMessages.innerHTML = "";
    ticketInfo.innerHTML = "";

    let errors = [];

    // Date validation
    const selectedDate = new Date(eventDate.value);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
        errors.push("Event date must be after today's date.");
    }

    // Student validation
    if (typeSelect.value === "student") {

        if (!/^\d{9}$/.test(extraInput.value)) {
            errors.push("Student I# must be 9 digits.");
        }
    }

    // Guest validation
    if (typeSelect.value === "guest") {

        if (extraInput.value !== "EVENT131") {
            errors.push("Access Code must be EVENT131.");
        }
    }

    // Display errors
    if (errors.length > 0) {

        errors.forEach(error => {

            const p = document.createElement("p");
            p.textContent = error;

            errorMessages.appendChild(p);
        });

        return;
    }

    // Success message
    ticketInfo.innerHTML = `
        <h2>Ticket Created</h2>

        <p>${firstName.value} ${lastName.value}</p>

        <p>${typeSelect.value}</p>

        <p>${eventDate.value}</p>
    `;
});