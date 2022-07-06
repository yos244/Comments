
var comment= document.getElementById ("input").innerHTML;
var commentval = "shoo";
var name1 = "boo";
var textoutput = "goo";
function print() {
  commentval = document.getElementById ("input").value; 
  console.log (commentval);
 name1 = document.getElementById ("input0").value;
textoutput = name1 + ": " + commentval; 

let element_list = document.getElementById('list');
let new_li = document.createElement('li');
new_li.innerText = textoutput;
element_list.appendChild(new_li);



}
