const book1 = document.querySelector(".card_1");
const book1api = "https://api.potterdb.com/v1/books/harry-potter-and-the-philosopher-s-stone";


const book2 = document.querySelector(".card_2");
const book2api = "https://api.potterdb.com/v1/books/harry-potter-and-the-chamber-of-secrets";

const book3 = document.querySelector(".card_3");
const book3api = "https://api.potterdb.com/v1/books/harry-potter-and-the-prisoner-of-azkaban";

const book4 = document.querySelector(".card_4");
const book4api = "https://api.potterdb.com/v1/books/harry-potter-and-the-goblet-of-fire";

const book5 = document.querySelector(".card_5");
const book5api = "https://api.potterdb.com/v1/books/harry-potter-and-the-order-of-the-phoenix";

const book6 = document.querySelector(".card_6");
const book6api = "https://api.potterdb.com/v1/books/harry-potter-and-the-half-blood-prince";

const book7 = document.querySelector(".card_7");
const book7api = "https://api.potterdb.com/v1/books/harry-potter-and-the-deathly-hallows";

async function fetchBookData(currApi) {
    const response = await fetch(currApi);
    const data = await response.json();
    const attr = data.data.attributes;
    const chaptersData = data.data.relationships?.chapters?.data;
    attr.chapters = chaptersData || [];
    attr.selfLink = data.links?.self;
    // attr.alldata = data;
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
book4.addEventListener("click", () => handleBookClick(book4api));
book5.addEventListener("click", () => handleBookClick(book5api));
book6.addEventListener("click", () => handleBookClick(book6api));
book7.addEventListener("click", () => handleBookClick(book7api));
