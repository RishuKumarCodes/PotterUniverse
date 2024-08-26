const book1 = document.querySelector(".card_1");
const book1api = "https://api.potterdb.com/v1/books/harry-potter-and-the-chamber-of-secrets";

const book2 = document.querySelector(".card_2");
const book2api = "https://api.potterdb.com/v1/books/harry-potter-and-the-philosopher-s-stone"

const book3 = document.querySelector(".card_3");
const book3api ="https://api.potterdb.com/v1/books/harry-potter-and-the-prisoner-of-azkaban";

async function showBookDetail(currApi) {
    const response = await fetch(currApi);
    var data = await response.json();
    const attr= data.data.attributes;
    console.log(data);

    document.querySelector("#title").innerHTML =attr.slug;
    document.querySelector("#author").innerHTML =attr.author;
    document.querySelector("#release-date").innerHTML =attr.release_date;
    document.querySelector("#pages").innerHTML =attr.pages;
    document.querySelector("#dedication").innerHTML =attr.dedication;
    document.querySelector("#summary").innerHTML =attr.summary;

    const bookCover = document.querySelector(".book-cover");
    bookCover.style.backgroundImage = `url("${attr.cover}")`;

    // attr.
}

showBookDetail(book1api);
book1.addEventListener("click",()=>{
    window.location.href = "book_template.html"
} )
book2.addEventListener("click",()=>{
    window.location.href = "book_template.html"
    showBookDetail(book2api);
} )
book3.addEventListener("click",()=>{
    window.location.href = "book_template.html"
    showBookDetail(book3api);
} )