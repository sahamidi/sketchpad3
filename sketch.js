
document.getElementById('button').addEventListener('click',   //Initialize sketch program by click of button after
                                                              //aftervalue is put in input box  
function() {
var divOri = document.getElementById("container");             //Define commonly used container ID which holds cells and rows  
let cellMath = Number((960*960)/Number(document.getElementById('gridInput').value)); //Take container to find out how big each cell will be
                                                                                     
const cellSize = Math.sqrt(cellMath)                                                 //Conitue math function to determine size of cells

const numberOfRows = Math.floor(960/cellSize); //create variable defining row numbers

const numberOfColumns = Math.floor(960/cellSize); //create variable defining column numbers


function changeStyle(e) {                         //Event target calling on activating mouseover functino color change
    e.currentTarget.style.backgroundColor='yellow'
}

if (Number(document.getElementById('gridInput').value)>0) {  //Sketch game reset when user clicks in the input box

    document.getElementById('gridInput').addEventListener('click',function(){location.reload()})

}



            for(i=0;i < numberOfRows; i++) {  //create lopp to make new div element to place in container for row
                var rowDiv=document.createElement('div')
                divOri.appendChild(rowDiv)
                rowDiv.className = "gridRow" 
                rowDiv.style.height=cellSize+'px';
                for(let j = 0; j < numberOfColumns; j++) {  //Create cell boxes to place in each row with specified size
                    var cell = document.createElement('div') 
                    rowDiv.appendChild(cell)
                    cell.className = "cell"
                    const cellID =  `cell-${i}-${j}`
                    cell.id = cellID
                    document.getElementById(cellID).style.height=cellSize+'px'
                    document.getElementById(cellID).style.width=cellSize+'px'
                    document.getElementById(cellID)
                    .addEventListener('mouseover', changeStyle)


                }        
            }
            
        })   



