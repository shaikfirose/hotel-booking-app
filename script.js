document.getElementById("bookingForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        roomType: document.getElementById("roomType").value,
    };

    try {
        const response = await fetch("http://localhost:3000/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            alert("Booking successful!");
        } else {
            alert("Error booking room.");
        }
    } catch (error) {
        console.error(error);
    }
});
