var listw = [
    ['1','Bow'],
    ['2','Hull'],
    ['3', 'Mast'],
    ['4', 'Sail']
    ];
var listd = [
  ['Bow', 'front of boat'],
  ['Hull', 'back of boat'],
  ['Mast', 'top of boat'],
  ['top', 'nottom long'],
  ['top', 'nottom long'],
  ['top', 'nottom long'],
  ['top', 'nottom long']
];
 
var hello = document.getElementById("hell");

for (var i=0;i<listd.length;i++)
{
   var item = listd[i];
   var butt = document.createElement("button");
   butt.className = "classy";
   hello.appendChild(butt);
   var butt2 = document.createElement("a")
   butt2.className = "classified"
   butt2.id = "butt2id"
   butt2.value = item[0];
   butt2.innerHTML= item[0];
   butt.appendChild(butt2);
   var elem = document.createElement("div");
   elem.className = "panel";
   butt.appendChild(elem);
   var butts = document.createElement("p");
   butts.value = item[0];
   butts.innerHTML = item[1];
   elem.appendChild(butts);  
};

var acc = document.getElementsByClassName("classy");
var a;

for (a=0; a<acc.length; a++) {
  acc[a].addEventListener("click", 
  function(){
   this.classList.toggle("active");
   var panel = 
  this.lastElementChild;
   if (panel.style.maxHeight) {
     panel.style.maxHeight = null;
   } else {
     panel.style.maxHeight = 
  panel.scrollHeight + "px"}
   })};

   function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("hell");
    li = ul.getElementsByTagName("button");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
         li[i].style.display = "";
        } else {
         li[i].style.display = "none";
        }
      }
  };
