//form that we are using
const form = document.getElementById("form");
const card = document.querySelector(".card-container");

//empty array to store the books
libraryBooks = [
    {title : "kigogo",author : "enock",  describe : "ukoloni mambo leo",pages:"100", read : "no"},
    {title : "cosc",  author : "kinywa", describe : "data science",     pages:"190", read : "yes"},
    {title : "maths", author : "olee",   describe : "statics maths",     pages:"90",  read : "yes"},
    {title : "cosc",  author : "giriki", describe : "fundamentals",     pages:"210",  read : "no"}
];

//a class to store the books
class addBooks{
    constructor(title,author,describe,pages,read){
        this.title = title;
        this.author = author;
        this.describe = describe;
        this.pages = pages;
        this.read = read;
    }
    get title(){
        return this._title;
    }
    set title(value){
      if(value.length < 6){
         alert("title must be at least 6 characters");
         return value.focus();
      }
        this._title = value;
    }
    get author(){
        return this._author;
    }
    set author(value){
      if(value.length < 3){
         alert("author must be at least 3 characters");
         return value.focus();
      }
        this._author = value;
    }
    get describe(){
        return this._describe;
    }
    set describe(value){
      if(value.length < 10){
         alert("describe must be at least 10 characters");
         return value.focus();
      }
        this._describe = value;
    }
    get pages(){
        return this._pages;
    }
    set pages(value){
      if(value < 100){
         alert("pages must be at least 100");
         return value.focus();
      }
        this._pages = value;
    }
    get read(){
        return this._read;
    }
    set read(value){
      if(value != "yes" && value != "no"){
         alert("read must be yes or no");
         return value.focus();
      }
        this._read = value;
        alert("books successfully added check on the show Books displayed below");
        form.style.display = "none";
        card.style.display = "grid"

    }
   
}

//lets set the class to be able to call it anywhere
const newBook = new addBooks(title,author,describe,pages,read);
 
//lets take the user inputs
   function Submit(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const  describe = document.getElementById("describe").value;
    const  pages = document.getElementById("pages").value;
    const read = document. getElementById("read").value;

    //add information to the object and set it
   newBook.title = title;
   newBook.author = author;
   newBook.describe = describe;
   newBook.pages = pages;
   newBook.read = read;

    
    //push the new book to be stored in the arrary
    libraryBooks.push(newBook);
    designCard(newBook)
   }
    


//submit button of the new book
   document.getElementById("submit").addEventListener("click",(event)=>{
    event.preventDefault();//this prevent page reload
    Submit();
   });

   //set a red flag
   

   function designCard(newBook){
     //loop through each and every item in array
    
   
   const cardContainer = document.querySelector(".card-container");

   //create a new div to append the children

   const div = document.createElement("div")
   div.classList.add("card");

   const h2 = document.createElement("h2");
   h2.textContent = `book ${newBook.title}`
   
   //append the children
   div.appendChild(h2);
   const h3 = document.createElement("h3");
   h3.textContent = `Author : ${newBook.author}`;
   div.appendChild(h3);

   const label1 = document.createElement("p")
   label1.className = "p"
   label1.textContent = `describe the book: ${newBook.describe}`;
   div.appendChild(label1)

   const label2 = document.createElement("p");
   label2.className ="p"
   label2.textContent =`No of pages: ${newBook.pages}`
   div.appendChild(label2);

   const label3 = document.createElement("p");
   label3.className = "p"
   label3.textContent = `Have you read the book : ${newBook.read}`
   div.appendChild(label3);

  //delete label 
   const del = document.createElement("button");
   del.classList.add("button");
   del.textContent = "delete book"
   div.appendChild(del);
   del.addEventListener("click",()=>{
      if (confirm("are you sure you want to delete this book")){
         libraryBooks.pop(newBook)
      }
      cardContainer.removeChild(div)
      alert(`book ${newBook.title} has been successfully been deleted`)
   })

   //append the card to the mainContainer
   cardContainer.appendChild(div);
     
   }
   
   //displays library books already in there using IIFE;
   
   (display = () =>{
       const cardContainer = document.querySelector(".card-container");
       cardContainer.innerHTML = "";
       libraryBooks.forEach((book)=>{
           designCard(book)
       })
   })();

//show library book on click
  document.querySelector(".display-book").addEventListener("click",()=>{
   
   if(card.style.display === "none"){
      card.style.display = "grid"
   }else{
      card.style.display = "none"
   }
  })

//add an event listener to display form
document.getElementById("add-book").addEventListener("click",()=>{
   
   if(form.style.display === "none"){
    form.style.display = "block";
   }else {
    form.style.display = "none"
   }
});