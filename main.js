const allist = document.getElementById("allist");
allist.addEventListener("click" , deleteItem);

if(localStorage.storedLists){
    loadList();
}

function addItem(){
    const data = document.getElementById("data");
    const datamsg = document.getElementById("datamsg");


    //creating div elements
    const elements = document.createElement("div");
   elements.classList.add("msgContainer");

    //

    elements.innerHTML= `
    
    <div class="area">
    <h2 class="mainheads">${data.value}</h2>
    <div class="para">
        <p class="par"> ${datamsg.value}.</p>
    </div>
    <div class="butt">
        <button class="btn btn-primary"><i class="fa fa-book" aria-hidden="true"></i></button>
    <button class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
    <button class="btn btn-danger"  ><i class="fa fa-trash-o" aria-hidden="true"></i></button>
    </div>
</div>
           
            
     `;

        allist.appendChild(elements);
        saveList();
        data.value = " ";
        datamsg.value = " ";
        document.getElementById("myModal").style.display="none";
}


function saveList(){
 
    localStorage.storedLists = document.getElementById("allist").innerHTML;
}
function loadList(){
    document.getElementById("allist").innerHTML = localStorage.storedLists;
}

function deleteItem(event){
    
 
    const eventTar = event.target;
   
    if(eventTar.classList[1] === "btn-danger"){
    const menubar = eventTar.parentElement;
    const dear = menubar.parentElement;
    const dear1 = dear.parentElement;
    dear1.remove();
    saveList();

   

}
 else if(eventTar.classList[1] === "btn-primary"){

     document.querySelector(".articles").style.display = "none";
            document.querySelector(".mainhead").style.display = "none";
     
        console.log("editig");
        const targetValue = event.target;
        const menuArea = targetValue.parentElement.parentElement;

        const val1 = menuArea.children[0];
        console.log(val1.textContent);
         const val2 = menuArea.children[1].children[0];
        console.log(val2.textContent);

        /*const input = document.createElement("input");
        input.type = 'text';
        const input1 = document.createElement("input");
        input1.type = 'text';

        input.value = val1.textContent;
        input1.value = val2.textContent;
*/
        const datashow = document.getElementById("showme");
        datashow.innerHTML="";
datashow.style.display = "block";
        const boom  =document.createElement("div");
        boom.classList.add("boomi");

        boom.innerHTML = `
        <div class="fullshow  container">
        <div class="cross" style="float: right;" onclick ="exit();"><i class="fa fa-times" aria-hidden="true"></i></div>
                   <hr class="uper">
                   <h3>${val1.textContent}</h3>
                   <hr>
                   <p>${val2.textContent} </p>
                   
                </div>
        `
        datashow.appendChild(boom);
        console.log("hari");
   }
   else if(eventTar.classList[1] === "btn-warning"){
        
 console.log("editig");
        const targetValue = event.target;
        const menuArea = targetValue.parentElement.parentElement;

        const val1 = menuArea.children[0];
        console.log(val1.textContent);
         const val2 = menuArea.children[1].children[0];
        console.log(val2.textContent);
/*
        const input = document.createElement("input");
        input.type = 'text';
        const input1 = document.createElement("input");
        input1.type = 'text';*/

        document.getElementById("myModal").style.display="block";

        data.value = val1.textContent;
        datamsg.value = val2.textContent;
        const loom  =menuArea.parentElement;
        loom.remove();
        saveList();
       
         /*document.querySelector(".articles").style.display = "block";
            document.querySelector(".mainhead").style.display = "block";*/
   }
}


       function exit(){
           document.querySelector(".articles").style.display = "block";
            document.querySelector(".mainhead").style.display = "block";
            const datashow = document.getElementById("showme");
            datashow.style.display= "none";
            datashow.innerHTML="";
       } 