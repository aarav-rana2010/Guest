name_of_guest_array=[];
function submit() {
var name_1=document.getElementById("name_of_guest_1").value;

name_of_guest_array.push(name_1);

console.log(name_of_guest_array);

document.getElementById("display_names").innerHTML=name_of_guest_array;

document.getElementById("submit_button").style.display= "none";
document.getElementById("sort_button").style.display= "inline_block";
}
document.getElementById("display_names").innerHTML=name_of_guest_array;