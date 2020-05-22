// make the grid based on user input
var x = document.getElementById('gridInput').value;
var div = document.createElement('div')
div.className = 'grid'

console.log(x)

if (x==null|| typeof x==='string')
    alert(`please enter a valid number in the field`)
else if (typeof x === 'number')
document.getElementById('button').addEventListener('click', makeGrid(x));;


function makeGrid(x){
    for (var rows = 0; rows < x; rows++){
        for (var columns = 0; columns < x; columns++){
            document.getElementById('container').appendChild(div)
            div.setAttribute('style', 'width: (960/x)');
            div.setAttribute('style', 'height: (960/x)');            

        };
        
    };
};


