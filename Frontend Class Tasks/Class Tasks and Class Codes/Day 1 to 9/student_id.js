const students = [
    {
        name: "Sanjana M",
        course: "Computer Science",
        year: "3rd Year",
        image: "https://via.placeholder.com/120"
    },
    {
        name: "Rahul Kumar",
        course: "Information Technology",
        year: "2nd Year",
        image: "https://via.placeholder.com/120"
    },
    {
        name: "Ananya R",
        course: "Artificial Intelligence",
        year: "4th Year",
        image: "https://via.placeholder.com/120"
    }
];

const app = document.getElementById("app");

students.forEach(student => {
    const card = document.createElement("div");

    card.style.cssText = `
        width:260px;
        background:white;
        border-radius:12px;
        padding:16px;
        box-shadow:0 8px 18px rgba(0,0,0,0.12);
        text-align:center;
    `;

    card.innerHTML = `
        <img 
            src="${student.image}" 
            alt=""
            style="
                width:120px;
                height:120px;
                border-radius:50%;
                object-fit:cover;
                margin-bottom:12px;
            "
        />

        <h3 style="margin:8px 0 4px;">
            ${student.name}
        </h3>

        <p style="margin:4px 0; color:#555;">
            <strong>Course:</strong> ${student.course}
        </p>

        <p style="margin:4px 0; color:#555;">
            <strong>Year:</strong> ${student.year}
        </p>
    `;

    app.appendChild(card);
});