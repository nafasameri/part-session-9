class User {
    #_id;
    name;
    family;
    gender;
    age;
    bookListCount;
    bookList = [];
    static BOOKLISTMAXCOUNT = 5;

    constructor(name, family, gender, age) {
        this.#_id = Math.round(Math.random() * 100);
        this.name = name;
        this.family = family;
        this.gender = gender;
        this.age = age;
        this.bookListCount = 0;
        // this.books = new BookList(this);
    }

    createBookList(...books) {
        const bookList = new BookList(this);
        for (let book of books) {
            bookList.add(book);
        }

        if (this.bookListCount < User.BOOKLISTMAXCOUNT) {
            this.bookList.push(bookList);
            this.bookListCount++;
        }
        else
            // throw new Error('You can have a maximum of 5 books.');
            console.log('You can have a maximum of 5 books.');
        // this.booksCount = this.books.length;
    }

    removeBooklist(booklistId) {
        var index = -1;
        this.bookList.forEach((value, Index) => {            
            if (value.getId() == booklistId)
                index = Index;
        });
        console.log(index);
        if (index != -1) {
            delete this.bookList[index];
            this.bookListCount--;
            console.log('The book has been successfully removed from the book list.');
        }
        else
            console.log("The book does not exist in the book list.");
        // this.booksCount = this.books.length;
    }
}

class Book {
    #_id;
    title;
    ganer;
    writer;
    isRead;
    readDate;

    constructor(title, ganer, writer) {
        this.#_id = Math.round(Math.random() * 1000);
        this.title = title;
        this.ganer = ganer;
        this.writer = writer;
        this.isRead = false;
        this.readDate = '-';
    }

    read() {
        this.isRead = true;
        this.readDate = Date.now().toString();
    }
}

class BookList {
    #_id;
    user;
    numberRead;
    numberUnRead;
    nextBook;
    currentBook;
    lastBook;
    books = [];

    constructor(user) {
        this.#_id = Math.round(Math.random() * 1000);
        this.user = user;
        this.numberRead = 0;
        this.numberUnRead = 0;
    }

    getId() {
        return this.#_id;
    }

    add(book) {
        this.books.push(book);
    }

    startReadBook() {
        this.currentBook = this.books[0];
        this.nextBook = this.books[1];
    }

    finishCurrentBook() {
        this.currentBook.read();
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.nextBook = this.books.forEach((value, index, obj) => {
            if (value.isRead == false)
                return value;
        });
    }
}


const user = new User('reza', 'rezaii', 'male', 20);

const csharp = new Book('c#', 'programming', 'writer 1');
const python = new Book('python', 'programming', 'writer 2');
const js = new Book('js', 'programming', 'writer 4');
const php = new Book('php', 'programming', 'writer 3');
const asp = new Book('asp.net', 'programming', 'writer 1');
const sql = new Book('sql', 'programming', 'writer 1');
const java = new Book('java', 'programming', 'writer 1');
const c = new Book('c', 'programming', 'writer 1');

console.log(user);

user.createBookList(c, csharp);
user.createBookList(js, php, asp);
user.createBookList(python);
user.createBookList(java, sql);
user.createBookList(csharp, asp);
user.createBookList(python, java, asp, sql);

console.log(user);

user.removeBooklist(user.bookList[2].getId());
console.log(user);

user.bookList[3].startReadBook();
user.bookList[3].finishCurrentBook();
console.log(user);
console.log(user.bookList[3].books);
