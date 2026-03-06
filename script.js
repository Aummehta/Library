let books = [
    {
        id: "id-1",
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-help",
        rating: 4.8,
        isAvailable: true
    }
]

let bookRecord = [
    {
        user: "Jay",
        bookId: 1,
        borrowDate: "2026-02-01",
        returnDate: null
    }
]


function generateId() {
    let counter = 1;

    return function () {
        counter++;
        return "id-" + counter;
    }
}


let createId=generateId();

function addBook(book) {
    let newBook = {
        ...book,
        id: createId(),
    }
    books.push(newBook);
    console.log(books);
}

addBook(
    {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        genre: "Self-help",
        rating: 4.5,
        isAvailable: false
    }
);

function removeBook(id) {
    books = books.find(book => book.id === id)
        ? books.filter(book => book.id !== id)
        : books

    console.log(books);

}

removeBook("id-1");





