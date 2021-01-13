var images=["SAN pp size photo.jpg","baby.jpg"];
var name1=["mother","myself"];
var i=0;
function ni(){
    document.getElementById("album").src=images[i];
    document.getElementById("name").value=name1[i]; 
    i++;
}