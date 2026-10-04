
// მობილური მენიუს ელემენტები
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// მენიუს გახსნა და დახურვა
menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "მენიუს დახურვა" : "მენიუს გახსნა"
    );

    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// მენიუს დახურვა ბმულზე დაჭერისას
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "მენიუს გახსნა");
        menuBtn.textContent = "☰";
    });
});

// ყველა ღილაკზე დაჭერის ანიმაცია
document.querySelectorAll(".btn").forEach(function (button) {
    button.addEventListener("click", function () {
        button.classList.remove("clicked");

        // ანიმაციის ხელახლა გასაშვებად
        void button.offsetWidth;

        button.classList.add("clicked");
    });
});

// საკონტაქტო ფორმა
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    // გვერდის თავიდან ჩატვირთვის შეჩერება
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (name.length === 0) {
        formMessage.textContent = "გთხოვ, შეიყვანე შენი სახელი.";
        return;
    }

    // დემო შეტყობინება — მონაცემები სერვერზე არ იგზავნება
    formMessage.textContent =
        "მადლობა, " + name + "! ფორმა წარმატებით შეივსო.";

    contactForm.reset();
});

// მიმდინარე წლის ავტომატურად ჩვენება
document.getElementById("year").textContent =
    new Date().getFullYear();