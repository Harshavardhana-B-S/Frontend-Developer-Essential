
let toggle_bar= document.querySelector(".navBar");
let sidebar = document.querySelector(".sideMenu2");
let noteLogo=document.getElementById("noteLogo");
let trashLogo =document.getElementById("trashLogo");
let showData= document.getElementById("showData");

let inputBox=document.getElementById("inputBox");
let trashBox=document.getElementById("trashBox");

toggle_bar.addEventListener("click",()=>{
    if(toggle_bar.firstElementChild.classList.contains("fa-bars"))
    {
        toggle_bar.firstElementChild.classList.replace("fa-bars","fa-times");
    }
    else
    {
        toggle_bar.firstElementChild.classList.replace("fa-times","fa-bars");
    }

    sidebar.classList.toggle("show_Bars")
})


/*----- click on side Logo----*/

noteLogo.addEventListener("click",()=>{
  trashBox.style.display="none";
  inputBox.style.display="block";
})
 
trashLogo.addEventListener("click",()=>{
  trashBox.style.display="flex";
  inputBox.style.display="none";
})


/*---- Todo Section-----*/
const input = document.getElementById("title");
const des = document.getElementById("textArea");
const addBtn = document.getElementById("adddBtn");
const container = document.querySelector("#showData");

const note = localStorage.getItem("notes")? JSON.parse(localStorage.getItem("notes")):[];

const trash=localStorage.getItem("note2")? JSON.parse(localStorage.getItem("note2")):[];



displayItem();

function displayItem() { 
    
    // to avoid duplicate values
  container.innerHTML='';

  note.map((x,index) => {
    let outerDiv = document.createElement("div");
    outerDiv.setAttribute("class", "displayConatiner");

    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "displayBox");
    outerDiv.append(innerDiv);

    let p = document.createElement("p");
    p.innerHTML = x.title;
    innerDiv.append(p);

    let span = document.createElement("span");
    span.innerText = x.des;
    innerDiv.append(span);

    let btn = document.createElement("button");
    btn.setAttribute("class", "deleteNote");
    btn.innerText = "-";

    //to delete a particular note 
    btn.addEventListener("click",()=>{
       trash.unshift(note[index]);
       localStorage.setItem("note2", JSON.stringify(trash));
       trashDisplay();
      //  console.log(trash);
        note.splice(index,1);
        // console.log(note);
        localStorage.setItem("notes", JSON.stringify(note));
        displayItem();
    })
    outerDiv.append(btn);
    container.append(outerDiv);
  });

//   to clear the value in input tag and text area
  input.value='';
  des.value='';
}

/*--- Add  Note---*/
addBtn.addEventListener("click",()=>{
    note.push({
    title: input.value,
    des: des.value,
  });
  // console.log(note);
  localStorage.setItem("notes",JSON.stringify(note));
  displayItem();
})


/*--- Trash Feature---*/
const cc= document.querySelector("#trashBox");
trashDisplay();

function trashDisplay() {
 cc.innerHTML='';

  trash.map((x,index)=>{
    let outerDiv2 = document.createElement("div");
    outerDiv2.setAttribute("class", "displayConatiner");

    let innerDiv2 = document.createElement("div");
    innerDiv2.setAttribute("class", "displayBox");
   

    let p = document.createElement("p");
    p.innerHTML = x.title;
    innerDiv2.append(p);

    let span = document.createElement("span");
    span.innerText = x.des;
    innerDiv2.append(span);

    let btn2 = document.createElement("button");
    btn2.setAttribute("class", "deleteNote");
    btn2.innerText = "-";

    btn2.addEventListener("click",()=>{
      trash.splice(index,1);
      localStorage.setItem("note2",JSON.stringify(trash));
      trashDisplay()
    })

    outerDiv2.append(innerDiv2);
    outerDiv2.append(btn2);
    cc.append(outerDiv2);

  })    
}



