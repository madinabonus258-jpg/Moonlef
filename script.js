function openBook(button){

    const row = button.closest(".book-row");

    const book = row.querySelector(".book");

    const panel = row.querySelector(".lesson-panel");

    book.classList.toggle("active");

    panel.classList.toggle("show");
}

