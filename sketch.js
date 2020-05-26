// make the grid based on user input
var x = 960 //document.getElementById('gridInput').value;
var divOri = document.getElementById("container")

const numberOfRows = 96; //create variable defining row numbers
const numberOfColumns = 96; //create variable defining column numbers

document.getElementById('container').addEventListener('click', 
function(){
for(let i = 0; i < numberOfRows; i++) {  //create lopp to make new div element to place in container for row
    var rowDiv=document.createElement('div')
    divOri.appendChild(rowDiv)
    rowDiv.className = "gridRow" //create loop to maak new div element to place cells in each row

   }
   for(let j = 0; j < numberOfColumns; j++) {
    var cell = document.createElement('div') 
    rowDiv.appendChild(cell)
    cell.className = "cell"
    addEventListener('mouseover', function() {
        cell.style.backgroundColor = "red"
   }
   )
   

}
})





// function (){

//     var x = document.getElementById('gridInput').value;
//     x=Number(x)

//     if (x==null|| typeof (x)==='string'){

//         alert(`please enter a valid number in the field`)

//         x = 10;

//         makeGrid(10)
// }

//     else if (typeof (x) === 'number') {

//         makeGrid(x);
// }})

// function createDiv(text){

//     var div = document.createElement(div)

//     div.className = 'grid'

//     var divOri = document.getElementById("container")

//     divOri.appendChild(div)    
    
// }


// // function makeGrid(x){
// //     i=0
// //     while (i<x) {
// //         createDiv(" ")
// //         i++
// //     }












// // make the grid based on user input
// var x = document.getElementById('gridInput').value;
// var divOri = document.getElementById("container")

// document.getElementById('button').addEventListener('click', 

// function (){

//     var x = document.getElementById('gridInput').value;
//     x=Number(x)

//     if (x==null|| typeof (x)==='string'){

//         alert(`please enter a valid number in the field`)

//         x = 10;

//         makeGrid(10)
// }

//     else if (typeof (x) === 'number') {

//         makeGrid(x);
// }})

// function createDiv(text){

//     var div = document.createElement(div)

//     div.className = 'grid'

//     var ivOri = document.getElementById("container")

//     divOri.appendChild(div)    
    
// }


// function makeGrid(x){
//     i=0
//     while (i<x) {
//         createDiv(" ")
//         i++
//     }
        
// }
