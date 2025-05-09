document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Modal logic
    const modal = document.getElementById("book-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const closeModal = modal.querySelector(".close");

    const bookDetails = {
        "L'Étranger - Albert Camus": "Un roman classique qui explore l'absurdité de la vie.",
        "Le Petit Prince - A. de Saint-Exupéry": "Une fable poétique sur l'enfance, l'amour et la perte.",
        "1984 - George Orwell": "Un chef-d'œuvre dystopique sur la surveillance et la liberté.",
        "Harry Potter à l'école des sorciers - J.K. Rowling": "Le début d'une aventure magique inoubliable.",
        "Les Misérables - Victor Hugo": "Une fresque puissante de la justice, de la misère et de la rédemption.",
        "La Peste - Albert Camus": "Une métaphore sur la résistance humaine face au mal.",
        "Madame Bovary - Gustave Flaubert": "L'histoire poignante d'une femme en quête de passion.",
        "Notre-Dame de Paris - Victor Hugo": "Un drame gothique autour de la cathédrale la plus célèbre."
    };

    document.querySelectorAll(".voir-plus-btn").forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();
            const title = btn.closest(".box").querySelector("h3").textContent;
            modalTitle.textContent = title;
            modalDesc.textContent = bookDetails[title] || "Aucune description disponible pour le moment.";
            modal.classList.remove("hidden");
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    modal.addEventListener("click", e => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });

    // Placeholder logic for footer links
    document.querySelectorAll('.footer .box a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Cette section est en cours de développement.");
        });
    });
});
