let eventList=document.getElementById("eventlst");

document.getElementById('1').addEventListener("click",function(){
  let newContentElement = document.createElement("li");
  newContentElement.classList.add("event");
  let newEventElement = document.createElement("ul");
  newEventElement.innerHTML="1/6 Started prep for GRE";
  newContentElement.appendChild(newEventElement);
  newEventElement.innerHTML="1/7 HSBC Interview";
  newContentElement.appendChild(newEventElement);
})
