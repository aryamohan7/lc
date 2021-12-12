function validateBookName(book_name) {
    return book_name in localStorage?true:false
    
}
function addToLibrary(){
    let book_name = b_name.value;
    let author_name = a_name.value;
    let amount = price.value;

    let book ={
        book_name,author_name,amount // In object key & value pair can be exist,the key & value two field is not need..........
    }


   if(validateBookName(book_name))
   {
    swal("Already exist!", "failed","error");
   }
 else
 {
      //console.log(book);
    localStorage.setItem(book_name,JSON.stringify(book))
    swal("created!", "Book add!", "success");
 }
    
}

function findBook() {
    let html_data=``
    let book_name = bk_src.value
    if(validateBookName(book_name))
    {
        let data =JSON.parse(localStorage.getItem(book_name))
        html_data=`
        <p>Book name:-${data.book_name}</p>
        <p>Author name:-${data.author_name}</P>
        <p>Price:-${data.amount}</P>
        `
        document.querySelector("#result_section").innerHTML=html_data
    }
    else{
        console.log("no data");
    }
    
}

function getAllBooks() {
    
    let books = []
    for(let i=0;i<localStorage.length;i++)
    {
        let key = localStorage.key(i)
        let book = JSON.parse(localStorage.getItem(key))
        books.push(book)
    }
//console.log(books);
displayValues(books)
}
window.onload=getAllBooks

function displayValues(books) {
    let html_data =``
    for(let book of books){
        html_data+=` 
        <tr>
        <td>${book.book_name}</td>
        <td>${book.author_name}</td>
        <td>${book.amount}</td>
        </tr>
        `
        
    }
    document.querySelector("#result").innerHTML=html_data
    
}