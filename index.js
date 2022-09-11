var randomNum1=Math.floor(Math.random()*6)+1;
var randomNum2=Math.floor(Math.random()*6)+1;
var title=document.querySelector("h1");
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNum1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNum2+".png");
if(randomNum1>randomNum2){
  title.innerHTML="Player 1 Wins!"
}
else if (randomNum1<randomNum2){
  title.innerHTML="Player 2 Wins!"
}
else{
  title.innerHTML="Draw!"
}
