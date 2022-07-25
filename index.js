setTimeout(function(){
    // document.getElementsByClassName('.prof').classList.remove('.prof');
    var p=document.querySelector(".prof");
    console.log(p);
    p.classList.remove("prof");
   
   }, 2000);
var i = 0;
var txt = "Hello World! I'm Mitali";
var speed = 50;
// var img=document.getElementsByTagName('img');
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function enlargeImg(img){
  img.style.transform="scale(1.5)";
  img.style.transition="transform 0.25s ease";
}
function reset(img){
  img.style.transform="scale(1)";
  img.style.transition="transform 0.25s ease";
}
function showme(){
  var list=document.getElementById('menu');
  if(list.style.display==="none")
  list.style.display="block";
  else{
    list.style.display="none";
  }

}
typeWriter();




