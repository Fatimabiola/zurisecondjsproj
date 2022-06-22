//function that display value
function display(val)
{
    document.getElementById("numd").value+=val;
}
  
//function that evaluates the digit and return result in another div
function calculate()
{
    let x = document.getElementById("numd").value
    let y = eval(x)
    document.getElementById("value").value = y
}
  
//function that clear the number displayed and result
function clr()
{
    document.getElementById("numd").value = "";
    document.getElementById("value").value = "";
}
//function clear the value