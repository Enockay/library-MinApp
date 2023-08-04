//form that we are using
const form = document.getElementById("form");

//empty array to store the books
libraryBooks = [
    {title : "kigogo",author : "enock",  describe : "ukoloni mambo leo",pages:"100", read : "no"},
    {title : "cosc",  author : "kinywa", describe : "data science",     pages:"190", read : "yes"},
    {title : "maths", author : "olee",   describe : "statics maths",          pages:"90",  read : "yes"},
    {title : "cosc",  author : "giriki", describe : "fundamentals",     pages:"210",  read : "no"}
];

//object constructor to be stored in the library
 function addBooks(title,author,describe,pages,read){
    this.title = title
    this.author = author
    this.describe = describe
    this.read = read
    this.pages = pages
   
   
 }

//lets take the user inputs
   function Submit(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const  describe = document.getElementById("describe").value;
    const  pages = document.getElementById("pages").value;
    const read = document. getElementById("read").value;

    //add information to the object and set it
    const book = new addBooks(title,author,describe,pages,read);
    
    //push the new book to be stored in the arrary
    libraryBooks.push(book);
    designCard(title,author,describe,pages,read)
   }
    


//submit button of the new book
   document.getElementById("submit").addEventListener("click",(event)=>{
    event.preventDefault();//this prevent page reload
    Submit();
   });

   //set a red flag
   

   function designCard(title,author,describe,pages,read){
     //loop through each and every item in array
    
   
   const cardContainer = document.querySelector(".card-container");

   //create a new div to append the children

   const div = document.createElement("div")
   div.classList.add("card");

   const h2 = document.createElement("h2");
   h2.textContent = `book ${title}`
   
   //append the children
   div.appendChild(h2);
   const h3 = document.createElement("h3");
   h3.textContent = `Author : ${author}`;
   div.appendChild(h3);

   const label1 = document.createElement("p")
   label1.className = "p"
   label1.textContent = `describe the book: ${describe}`;
   div.appendChild(label1)

   const label2 = document.createElement("p");
   label2.className ="p"
   label2.textContent =`No of pages: ${pages}`
   div.appendChild(label2);

   const label3 = document.createElement("p");
   label3.className = "p"
   label3.textContent = `Have you read the book : ${read}`
   div.appendChild(label3);

  //delete label 
   const del = document.createElement("button");
   del.classList.add("button");
   del.textContent = "delete book"
   div.appendChild(del);
   del.addEventListener("click",()=>{
      cardContainer.removeChild(div)
   })

   //append the card to the mainContainer
   cardContainer.appendChild(div);
     
   }
   
   //displays library books already in there
   function displayLibrary(){
      libraryBooks.forEach((item)=>{
         const cardContainer = document.querySelector(".card-container");

   //create a new div to append the children

   const div = document.createElement("div")
   div.classList.add("card");

   const h2 = document.createElement("h2");
   h2.textContent = `book ${item.title}`
   
   //append the children
   div.appendChild(h2);
   const h3 = document.createElement("h3");
   h3.textContent = `Author : ${item.author}`;
   div.appendChild(h3);

   const label1 = document.createElement("p")
   label1.className = "p"
   label1.textContent = `describe the book: ${item.describe}`;
   div.appendChild(label1)

   const label2 = document.createElement("p");
   label2.className ="p"
   label2.textContent =`No of pages: ${item.pages}`
   div.appendChild(label2);

   const label3 = document.createElement("p");
   label3.className = "p"
   label3.textContent = `Have you read the book : ${item.read}`
   div.appendChild(label3);
   
   //delete label 
   const del = document.createElement("button");
   del.classList.add("button");
   del.textContent = "delete book"
   div.appendChild(del);
   del.addEventListener("click",()=>{
      cardContainer.removeChild(div)
   })
   //append the card to the mainContainer
   cardContainer.appendChild(div);
     
      });
   }

   displayLibrary();
//show library book
  document.querySelector(".display-book").addEventListener("click",()=>{
   const card = document.querySelector(".card-container");
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