 let boxes= document.querySelectorAll(".box");   // access all the boxes in js
 

 let msgContainer= document.querySelector(".msg-container");  // acces msgContainer in js
 let msg = document.querySelector("#msg"); // acces msg in js
 

let newBtn = document.querySelector(".newBtn"); // new Game button access in js
let resetBtn = document.querySelector(".resetBtn"); // reset button acces in js






 //----------------------------------------------------------------------------------------------------->


  // there are two players 1st is playerX and 2nd is player0
 // they are chance to turn in alternate 

let playerturn;

const winLogic=[   // this is a winning patter means this is all are only winning probability 


[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],

];

const resetGame =()=>
{
    playerturn =true;         // in reset button player turn are also reset
    enableboxes();
    msgContainer.classList.add("hide");


}
//----------------------------------------------------------------------------------------------------->
//------------------------------------------------------------------------------------------------------------->


 // we can add event for each boxes

boxes.forEach((box)=>{
box.addEventListener("click", ()=>{
if(playerturn==true){

    box.innerText="O"; // insert ture for X
    playerturn=false; //turn change

}
else{  // playerturn true means "O";
       // playerturn false MEANS "X";

    box.innerText="X"; // for false X
    playerturn=true; // turn change 

}
box.disabled=true;
checkWinner();      //call back checkWinner function

});
});


//------------------------------------------------------------------------------------------------->


const disableboxes= ()=> {

    for(let box of boxes){
        box.disabled= true;

            //disable boxes becoz after the win all the boxes are disable .....
    }
};




//---------------------------------------------------------------------------------->
const enableboxes= ()=> {

    for(let box of boxes){
        box.disabled= false;
        box.innerText="";     // its used for rst and new game btn beacause after the reset inner text is empty            // and its neccesry to enable so also enable it

        
    }
};

//------------------------------------------------------------------------------------------------------->




const showWinner= (winner )=> {
msg.innerText = `Congratulations!!, winner is ${winner}`;
 msgContainer.classList.remove("hide");
 disableboxes();


}




    
//--------------------------------------------------------------------------------------(-1-)------------------------->
const checkWinner = () => {

    for( let pattern of winLogic){

let pos1Val=  boxes[pattern[0]].innerText;// position1 value ka o index ki value
let pos2Val=boxes[pattern[1]].innerText; //position2 value ka 1 index ki value
let pos3Val=boxes[pattern[2]].innerText; //position3  value ka 2 index ki value
 
if(pos1Val!="" && pos2Val!="" && pos3Val!=""){         //logic if pos1,pos2 and pos3 ki value empty na ho to go ahead...
    
    

    if(pos1Val===pos2Val && pos2Val ===pos3Val){  // if 2nd condition pos1,pos2 and pos3 ki vaue equal aa jaye to pos1,pos2 and pos3 hi winner hoga 
        console.log("winner  " ,pos1Val); 
        showWinner(pos1Val);   // call back function for showing


    
    }
}
  }
};

//--------------------------------------------------------------------------------------------------->

resetBtn.addEventListener("click",resetGame);    // triggered 
newBtn.addEventListener("click",resetGame);     // triggered 

