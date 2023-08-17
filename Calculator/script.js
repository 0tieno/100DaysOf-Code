function clear(){

}

function display(val){
    document.getElementById('result').value+=val; //val=val+val
}

function equate (){
    let x = document.getElementById('redult').value;
    let y = eval(x);
    document.getElementById('result').value = y;
}