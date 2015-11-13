//this is all variables

var pic1 = document.getElementById("pic1");
var pic2 = document.getElementById("pic2");
var pic3 = document.getElementById("pic3");
var pic4 = document.getElementById("pic4");
var pic1info1 = document.getElementById("pic1info1");
var pic1info2 = document.getElementById("pic1info2");
var pic1info3 = document.getElementById("pic1info3");
var pic2info1 = document.getElementById("pic2info1");
var pic2info2 = document.getElementById("pic2info2");
var pic2info3 = document.getElementById("pic2info3");
var pic3info1 = document.getElementById("pic3info1")
var pic3info2 = document.getElementById("pic3info2");
var pic3info3 = document.getElementById("pic3info3");
var pic4info1 = document.getElementById("pic4info1");
var pic4info2 = document.getElementById("pic4info2");
var pic4info3 = document.getElementById("picinfo3");

//this is first picture and my info

pic1.addEventListener("click", function(){
    pic1info1.innerHTML = "This require a lot of patients";
    pic1info2.innerHTML = "You have to very quiet when it comes to fishing. If you speak to loud you will scare away the fish.";
    pic1info3.innerHTML = "This sport is you,your rod, and nature.";
});
                       
//this is second picture and my info

pic2.addEventListener("click", function(){
    pic2info1.innerHTML = "Your rod and tackle are the most important things you need to be a successful fisherman.";
    pic2info2.innerHTML = "Your rod is your friend. It will fight will you when you get hooked with a fish.";
    pic2info3.innerHTML = "Your tackle is the hardest thing to choose because not all fish like the same things. You have to choose your tackle depending what type of fish you are going after for.";
    
});

  //this is third picture and my info
  
  pic3.addEventListener("click", function(){
    pic3info1.innerHTML = "When it comes to fishing it is 90% luck and 10% skills.";
    pic3info2.innerHTML = "Luck in fishing is your best friend. If you do not have luck you will not catch any fish.";
    pic3info3.innerHTML = "Skills is much needed becauase you never know how the fish is going to fight and you have to know how to react to it.";
    
});
//this is fourth and info 

pic4.addEventListener("click", function(){
    pic4info1.innerHTML = "Knowledge is the key to everything even in fishing.";
    pic4info2.innerHTML = "If you have knowledge about fishing there is not any fish that can get away from you. ";
    pic4info3.innerHTML ="By having this you will know diffent techiques,tackles,and fishing spots.";
    });