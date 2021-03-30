let x;
let b;
let timeDiv = document.getElementById("time"); 
let whole = document.getElementById("whole"); 
let scoreTxt = document.getElementById("score"); 
let txt = document.getElementById("text"); 
let game = document.getElementById("game"); 
let allBoxes = document.getElementsByClassName("box");

let colorsArr = ["black", "green", "yellow", "pink", "cyan", "blue", "grey", "red"];
let randArr;
let randFromArr;
let score = 0;
let clicked;

whole.style.left = (window.innerWidth/2 - whole.offsetWidth) + "px";
whole.style.top = (window.innerHeight/2 - whole.offsetHeight) + "px";

for(let i = 0; i < allBoxes.length; i++)
{
  allBoxes[i].addEventListener("click", userClicked);
  allBoxes[i].addEventListener("click", test);
  
}

function userClicked()
{
  clicked = true;
  
}

function test()
{      
  if(clicked)
  {
    if(this.style.backgroundColor == randFromArr)
    {       
    score+=50;
         
    } else {
       
    score-=50;
       
    }
  } else {
       
    score-=50;
       
  }  
     
  if(score < 0)
  {
    score = 0;
       
  }
  
  clicked = false;
  begin();

}

function begin()
{
  let copyOfColorsArr = [...colorsArr];
  randArr = [];
  
  for(let j = 0; j < allBoxes.length; j++)
  {
    let randColor = copyOfColorsArr[Math.floor(Math.random() * copyOfColorsArr.length)];
    
    allBoxes[j].style.background = randColor;
    
    randArr.push(randColor);
    
   copyOfColorsArr.splice(copyOfColorsArr.indexOf(randColor), 1);
  
  }
  
  randFromArr = randArr[Math.floor(Math.random() * randArr.length)];
  txt.innerHTML = randFromArr; 
  txt.style.color = colorsArr[Math.floor(Math.random() * colorsArr.length)];
  
  scoreTxt.innerHTML = "Score: " + score;
  
  timer();

}

function timer()
{
  let whole = 3;
  let s = whole;
  let percentage;
  
  percentage = (s/whole) * 100;
  timeDiv.style.width = percentage + "%";
  timeDiv.style.background = "green";
   
  cancelAnimationFrame(b);
  x = function() { 
   cancelAnimationFrame(b);
    if(s > 0.0)
    {
      s-=1/100;
      percentage = (s/whole) * 100;
      
      timeDiv.style.width = percentage + "%";
      
      if(s < 1.5)
      {
        timeDiv.style.background = "red";
      
      }
      
    } else {
     
      clearInterval(x);
      test();
       
    } 
 b = requestAnimationFrame(x); 
 
 }
 x();
}


function reset()
{
  score = 0;
  begin();

}

begin(); 