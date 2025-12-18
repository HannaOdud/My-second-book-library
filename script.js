let library = [];

function setup(){
   const form = document.getElementById("form");
   const titleDom = document.getElementById("title");
   const authorDom = document.getElementById("author");
   const pagesDom = document.getElementById("pages");
   const readDom = document.getElementById("checkbox");
   form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const title = titleDom.value;
        const author = authorDom.value;
        const pages = pagesDom.value;
        const read = readDom.checked; 
        const book = {
            title: title,
            author: author,
            pages: pages,
            read: read
        }
        library.push(book);
        display();
   })
}
function display(){
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    library.forEach(book => {
        const row = tbody.insertRow(-1);
        const titleCell = row.insertCell(0);
        titleCell.textContent = book.title;
        const authorCell = row.insertCell(1);
        authorCell.textContent = book.author;
        const pagesCell = row.insertCell(2);
        pagesCell.textContent = book.pages;
        const readCell = row.insertCell(3);
        const readButton = document.createElement("button");
        if (book.read == true){
            readButton.textContent = "Yes";
        }
        else{readButton.textContent = "No"}

        readButton.addEventListener("click",()=>{
            if( readButton.textContent == "Yes"){
                readButton.textContent = "No"
            }
            else{
                readButton.textContent = "Yes"
            }
        } )

        readCell.appendChild(readButton);
        const deleteButtonCell = row.insertCell(4);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", ()=>{
            deleteButton.closest("tr").remove();

        })
        deleteButtonCell.appendChild(deleteButton);
    });


}

window.onload = setup;