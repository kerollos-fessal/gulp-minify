// var myDiv= document.getElementById("divOne");
// console.log(myDiv);

// var elements= document.getElementsByClassName("class1");
// console.log(elements);

// var elements= document.getElementsByTagName("p");
// console.log(elements)

// var elements= document.querySelectorAll("p.class1");
// console.log(elements)

var myDiv=document.getElementById("divOne");
function changeText()
{
  myDiv.innerText="<p>This is paragraph</p>"
}

function changeHTML()
{
  myDiv.innerHTML+="<p>This is paragraph</p>"
}

function changePageTitle()
{
    document.title="Session 5 JavaScript"
}

console.log(document.images);

function changeImageSrc()
{
    var myImage= document.getElementById("imgOne");
    console.log(myImage.getAttribute("src"));
    myImage.setAttribute("src","2.jpg");
    myImage.setAttribute("width","100");
    myImage.setAttribute("height","100");
}

function addClassToDiv()
{
    myDiv.classList.add("myClass");
}

function removeClassFromDiv()
{
    myDiv.classList.remove("myClass");
}

function toggleClass()
{
    myDiv.classList.toggle("myClass");
}

function changeDivStyle()
{
    myDiv.style.color="white";
    myDiv.style.backgroundColor="black";
    myDiv.style.fontSize="40px";
    myDiv.style.fontStyle="italic";
}

function changeImageSource(myImage)
{
  myImage.setAttribute("src","2.jpg");
}

var myBtn= document.getElementById("btnOne");

// myBtn.addEventListener("click",function(){
//     alert("Im Good Now");
// })

// myBtn.addEventListener("click",function(){
//     alert("Im Good Now Today");
// })

// var eventType=prompt("Please enter event type ?");

// if(eventType=="click")
// {
//     myBtn.addEventListener("click",function(){
//            alert("Im Good Now");
//     })
// }
// else
// {
//     myBtn.addEventListener("mouseover",function(){
//         alert("Im Good Now Too");
//  })
// }

var parent=document.getElementById("parent");
parent.addEventListener("click",function(){
    alert("Im parent")
},true)

var child= document.getElementById("child");
child.addEventListener("click",function(){
    alert("Im child")
},true)