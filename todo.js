

let ul = document.getElementById("ul")
let task = document.getElementsByTagName("LI")
var close = document.getElementsByClassName("close")
for(var i = 0; i< task.length; i++){
    var span = document.createElement("SPAN")
    var txt = document.createTextNode("close")
   span.appendChild(txt)
    task[i].appendChild(span)
    span.className ="close"
}
for(var i = 0; i<close.length; i++){
    close[i].onclick = function(){
        var parent = this.parentElement
        parent.style.display = "none"
    }
}
function addtask(){
    
    var todo = document.createElement("li")
    var input = document.getElementById("inputs").value
    var text = document.createTextNode(input)
    todo.appendChild(text)
  
    
    if(input === "" ){
        alert("please enter a task")
    }else{
        ul.appendChild(todo) 
          
    }
    document.getElementById("inputs").value =" "

    for(var i = 0; i< task.length; i++){
        var span = document.createElement("SPAN")
        var txt = document.createTextNode("close")
       span.appendChild(txt)
        task[i].appendChild(span)
        span.className ="close"
    }

    for(var i = 0; i<close.length; i++){
        close[i].onclick = function(){
            var parent = this.parentElement
            parent.style.display = "none"
        }
    }
}