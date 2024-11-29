let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#resetbtn")
let newgamebtn=document.querySelector("#newbtn")
let msgcontainer=document.querySelector(".msgcontainer")
let msg=document.querySelector("#msg")

let turnO = true //playerX,playerO
let count=0

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]


const resetgame=() => {
    turnO=true
    count=0
    enableboxes()
    msgcontainer.classList.add("hide")
  
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked")
        if (turnO) { //playerO
            box.innerText = "O"
            box.style.color="red"
        
            turnO = false;
        }
        else { //playerX
            box.innerText = "X"
            box.style.color="green"
            turnO = true;
        }
        
        box.disabled = true;
        count++
        let iswinner=checkwinner()
        if(count==9 && !iswinner){
            gamedraw()
        }
        ;
    }
)
})
const gamedraw=() => {msg.innerText="Game was a draw."
    msgcontainer.classList.remove("hide")
  disableboxes()
}


const disableboxes=() => {
    for (let box of boxes){
        box.disabled=true;
    }
  
}

const enableboxes=() => {
    for (let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
  
}

const showwinner=(pos1val) => 
    {msg.innerText='Congratulations, Winner is '+pos1val;
  msgcontainer.classList.remove("hide")
  disableboxes()
}

const checkwinner = () => {
    for (let pattern of winpatterns) {
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText,
        // )
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText
        if (pos1val != "" && pos2val != "" && pos3val != "") {

            if (pos1val == pos2val && pos2val == pos3val) {
                // console.log("Winner",pos1val)
                showwinner(pos1val)
            }
        }

    }
}

newgamebtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)
 