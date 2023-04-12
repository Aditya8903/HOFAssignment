// Write a program that takes a list of books, including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.

// filter : 
// const arr2 = arr1.filter((element)=>{})

const books = [
    {title : "Harry potter chamber of secrets" , author : "jk rowling" ,year: 1998},
    {title : "5 point someone" , author : "chetan bhagat" ,year: 2002},
    {title : "rich dad poor dad" , author : "robert t kiyosaki" ,year: 2013}
];
console.log(books);

// Filter out all books that were published before 2010

const filteredBooks = books.filter(books=>books.year<2010);

// Create a new array with the remaining books, but with their author names capitalized
const capitalizedBooks = filteredBooks.map(book => ({
    title: book.title,
    author: book.author.toUpperCase(),
    year: book.year,
  }));
  
  // Output the results
  console.log(capitalizedBooks);