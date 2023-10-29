// 1-	Create a simple photo gallery like the following, and use opacity property to make each image fades out
//  gradually (its opacity decreases to 0.3) when mouse is over it, and fades in gradually
//   (its opacity increases to 1 gradually) when mouse is a way.



function opacityOff(myImg){
    myImg.style.opacity="0.3";
    myImg.style.transition="all, 0.5s";

}


function opacityOn(myImg){
  myImg.style.opacity = "1" ;
}






// 2-	Make an array of colors and set of spans and a button with the text change Color and Background colors
//  and when click in this button change the color and the background color randomly


// var arrayONe=["red","blue","green","orange","yellow","gray","black"];
// function randomChange(){
//   var rand=Math.floor((Math.random()*arrayONe.length));
//   var randTwo=Math.floor((Math.random()*arrayONe.length));
//   var spans=document.getElementsByClassName("box");
//    document.span.style.backgroundColor=arrayONe[rand];
//   spans.style.color=arrayONe[randTwo];
// }







var arrayONe = ["red", "blue", "green", "orange", "gray", "black","magenta","cayan"];
function randomChange() {
  var spans = document.querySelectorAll("span.box");
  for (i = 0; i < spans.length; i++) {
    var rand = Math.floor((Math.random() * arrayONe.length));
    var randTwo = Math.floor((Math.random() * arrayONe.length));
    spans[i].style.color = arrayONe[rand];
    spans[i].style.backgroundColor = arrayONe[randTwo];
  }
}








// 3-	Make a password input and a button with the text switch beside it when click in the button 
// convert the password to be readable (change type for it)


var passInput = document.querySelector('#pass');
function change() {
  if (passInput.getAttribute("type") === "password") {
    passInput.setAttribute("type", 'text')
  } else {
    passInput.setAttribute("type", 'password');
  }
}









// 4-	Make a bank of questions say 10 question and two buttons next and previous
//  when click on the next navigate to the next question and when click on the previous
//   one go to the previous question.


var arr=[
"Who is your hero?",
"If you could live anywhere, where would it be?",
"What is your biggest fear?",
"What is your favorite family vacation?",
"What would you change about yourself if you could?",
"What really makes you angry?",
"What motivates you to work hard?",
"What is your favorite thing about your career?",
"What is your biggest complaint about your job?",
"What is your proudest accomplishment?"
];
var i=0;
var myBtn=document.getElementById("b2");
var myBtnTwo=document.getElementById("b1");
document.getElementById('question').innerHTML=arr[0];
myBtn.addEventListener("click",function(){
  if(i<arr.length-1){
    ++i;
    console.log(i);
    document.getElementById('question').innerHTML = arr [i] ;
  }else if(i>=arr.length-1){
  i=-1;
  ++i;
  document.getElementById('question').innerHTML = arr [i] ;
  console.log(i);
}
});
// before button
myBtnTwo.addEventListener("click",function(){
  if (i>0){
  --i;
  console.log(i);;
  document.getElementById('question').innerHTML=arr[i];
  }else if(i<=0){
  i=arr.length;
  --i;
  document.getElementById('question').innerHTML = arr [i] ;
  console.log(i);
  }
});





// 5-Make an array that contains collection of colors 
// and then in page load make a color of three paragraphs randomly from the array.



var arrayTwo = ["red", "blue", "green", "orange", "yellow", "gray", "black"];
function randomLoad() {
  var paraphs = document.querySelectorAll("p.colrs");
  for (i = 0; i < paraphs.length; i++) {
    var randl = Math.floor((Math.random() * arrayTwo.length));
    paraphs[i].style.color = arrayTwo[randl];
  }
}