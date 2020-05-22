// make the grid based on user input
var x = document.getElementById('gridInput').value;
var divOri = document.getElementById("container")

document.getElementById('button').addEventListener('click', 

function (){

    var x = document.getElementById('gridInput').value;
    x=Number(x)

    if (x==null|| typeof (x)==='string'){

        alert(`please enter a valid number in the field`)

        x = 10;

        makeGrid(10)
}

    else if (typeof (x) === 'number') {

        makeGrid(x);
}})

function createDiv(text){

    var div = document.createElement(div)

    div.className = 'grid'

    var ivOri = document.getElementById("container")

    divOri.appendChild(div)    
    
}


function makeGrid(x){
    i=0
    while (i<x) {
        createDiv(" ")
        i++
    }
        
}

// function makeGrid(){

//     for (var rows = 0; rows < x; rows++){
        

//         for (var columns = 0; columns < x; columns++){
            
//             var div = document.createElement(div)

//             div.className = 'grid'

//             var divOri = document.getElementById("container")

//             divOri.appendChild(div)            

//         };
        
//     };
// };






