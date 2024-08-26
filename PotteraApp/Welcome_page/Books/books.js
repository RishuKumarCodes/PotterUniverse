const book1 = document.querySelector(".card_1");
const book1api = "https://api.potterdb.com/v1/books/harry-potter-and-the-philosopher-s-stone";


const book2 = document.querySelector(".card_2");
const book2api = "https://api.potterdb.com/v1/books/harry-potter-and-the-chamber-of-secrets";

const book3 = document.querySelector(".card_3");
const book3api = "https://api.potterdb.com/v1/books/harry-potter-and-the-prisoner-of-azkaban";

async function fetchBookData(currApi) {
    const response = await fetch(currApi);
    const data = await response.json();
    const attr = data.data.attributes;
    return attr;
}

async function handleBookClick(api) {
    const bookData = await fetchBookData(api);
    localStorage.setItem("selectedBook", JSON.stringify(bookData));
    window.location.href = "book_template.html";
}

book1.addEventListener("click", () => handleBookClick(book1api));
book2.addEventListener("click", () => handleBookClick(book2api));
book3.addEventListener("click", () => handleBookClick(book3api));
