let boxes = document.querySelectorAll(".box");     // array of boxes
let resetBtn = document.querySelector("#reset-btn");

let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;


//Writing all the winning possibilities
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
  
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {       // box ko click kro tho response kre so use event
        // console.log("CLICK HUA H DIBBA")
        if (turn0) {
            //player O choose krne wla
            box.innerText = 'O';
            turn0 = false;
        }
        else {
            //player X choose krne wla
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;  // dubara ab us box pr click kre tho no change
        checkWinner();    // making a function to check winner
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
// Writing the function to show who wins O or X
const showWinner=(winner)=>{
    msg.innerText=`Congratulation , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


// GOOD LOGIC , Writing the function to check the winning order
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;   // box ke andr index jo pass ho rha h wo winpattern ke andr pade array ka element h jo ki as a index kamm kr rha h , aur jo box array mai value h usko hm access kr rhe h by index
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log(pos1Val);
                showWinner(pos1Val);      // making a function to show popup of winner
            }

        }
    }
}



const resetGame=()=>{

}