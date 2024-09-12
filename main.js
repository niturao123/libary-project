let addbutton = document.querySelector(".addbook-buton")
let submitbuton = document.querySelector(".submit-button");
const form = document.querySelector(".form-divcontainer");
const titleBook = document.getElementById("title");
const titlevalue = titleBook.value
const author = document.getElementById("author")
const authorvalue = author.value
const page = document.getElementById("page")
const pagevalue = page.value
let cards = document.querySelector(".card-div")
let books = [];
let flag = false;

addbutton.addEventListener("click", () => {
    flag = !flag;
    form.style.visibility = flag ? "visible" : "hidden";
    form.style.display = "block";
    titleBook.value = ""
    author.value = ""
    page.value = ""
})

submitbuton.addEventListener("click", (e) => {
    e.preventDefault()
    form.style.display = "none"
    flag = !flag
    console.log("hii")
    const newbook = book(titleBook.value, author.value, page.value)
    books.push(newbook)
    cards.innerHTML = "";
    books.forEach((newbook) => {
        const titleP = document.createElement("p")
        const authorP = document.createElement("p")
        const pageP = document.createElement("p")
        const div = document.createElement("div")
        div.setAttribute("class", "cards")
        const newButton = document.createElement('button')
        const button = document.createElement('button')

        titleP.textContent = newbook.titleBook
        div.appendChild(titleP)
        cards.appendChild(div)

        authorP.textContent = newbook.author
        div.appendChild(authorP)
        cards.appendChild(div)

        pageP.textContent = newbook.page
        div.appendChild(pageP)
        cards.appendChild(div)

        button.textContent = 'read'
        div.appendChild(button)
        cards.appendChild(div)
        button.setAttribute("class", "notreadbtn")

        newButton.textContent = 'remove'
        div.appendChild(newButton)
        cards.appendChild(div)
        newButton.setAttribute("class", "removebtn")


        button.addEventListener("click", () => {
            //console.log("neetu")
            if (button.style.background === "green") {
                button.textContent = " not Read"
                button.style.background = "red"
            } else {
                button.style.background = "green"
                button.textContent = "read"
            }
        })
        newButton.addEventListener("click", () => {
            console.log("shabnam")
            cards.style.display = "none"
        })
        cards.style.visibility = "visible";
        // newButton.removeChild(newButton)
    }
    )
})

function book(titleBook, author, page) {
    return {
        titleBook,
        author,
        page,
        getBookDetail: () => { console.log(titleBook, author, page) }
    }
}

