
/* Create a simple sprite example using p5.play */
let startGroup, mainMenuGroup, foodGroup, drinksGroup, pieGroup, hcGroup;
let startButton, menuButton, foodMenuB, drinkMenuB, optionPie, optionHotChoc;
let bowlImg, milkImg, sugarImg, flourImg, eggsImg, spicesImg, fillingImg;
let bowl, mug, flour, sugar, eggs, milk, filling, spices, heavyCream, cocoa;
let countertop;
let font, bamPie, bamHC;

function preload(){
  //startButtonImg = loadImage();
  milkImg = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAADu7u7c3NxhYWGGhoa/v7+BgYEwMDCrq6vy8vLp6enh4eFERETm5ub8/PxMTExWVlabm5utra2KioqkpKQbGxu0tLQ2NjbR0dFZWVmcnJx1dXU9PT1RUVEMDAwnJydqamoDky1BAAADbUlEQVR4nO3b4VbaQBCG4UQNVgRBJYKK2t7/TRbnVDIVRZ1+s0vb9/0ncJY8uGwSCE3z5x11N21GN91YsHWCJik862lSG2fN84TtvDbuueNEYNse1+ZtWqYKl7V5m85ShWe1eQ1ChH+XcDlStTxQ4Uw25uxAhbpjrDHCoiGMhLBsCCMhLBvCSAjLhjASwrIhjHSown//DPibrgMVZnQIwutU4XVt3qarVOFVbV7THKUC2/aoNrB5TBY+1gbmrjPPVV5rztOBbXteVZj5/e9LVb8HdnN0teg0LbqnV8SK89TPUd01Bbu7n3rz9HLYCN1+63Z3nl7KBv9ibo7q3iuzXWC1eernqO6SiZM3V5s689Sto7o52jvWacYc+UJ+HZUN6i/OuW5WVefphdsW3Tr6fRj0x+/Xk13InuOz3Q1Pfi8bdD0MevP8icH98Ped7Ek+mTsrnMoG9ZdX3dotUz9pi5ayr/cT/9fa5edp2fU0ZR11g2738e4Ap+h66tbRB9mgizf/Xw/DjQXX05R9vT9aGw03+/1HuXnqzutl6+jYSU79HW49LXa+7+aobh11R2uvDiDcelponvrPnmTraP/+oH49LfO5lJujsnXUv9t2/lFuPS0yT92rrTtvc0dr69173XloL3vKd/O75emJKPdWax/3351/fOpezyqln+/nfz76UdnraW3fplzg+OMNSC/3x1DZ38N8ptx9IsISIVQJ16equu11CdPu/UetiwuFv33cnlYs9jxoUlwo/GHgVtjtedAxQlEIQyG0EKpCGAqhhVAVwlAILYSqEIZCaCFUhTAUQguhKoShEFoIVSEMhdBCqAphKIQWQlUIQyG0EKpCGAqhhVAVwlAILYSqEIZCaCFUhTAUQguhKoShEFoIVSEMhdBCqAphKIQWQlUIQyG0EKpCGAqhhVAVwlAILYSqEIZCaCFUhTAUQguhKoShEFoIVSEMhdBCqAphKIQWQlUIQyG0EKpCGAqhhVAVwlAILYSqEIZCaCFUhTAUQguhKoShEFoIVSEMhdBCqAphKIQWQlUIQyG0EKpCGAqhhVAVwlAILYSqEIZCaCFU9T8JJ7pBt8LFngdNigv7kaz5y5gnex7UFxfWCyFChPXLFTa1eZtygc2itm/vTlPRbP7xNqQ2nyULm1m/quhb9V8G/gRUb0dXDSu8aQAAAABJRU5ErkJggg==");
  sugarImg = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZnZRh2Z3mnBNhbqs8Z-JmZFkcM83Vj8Y2pQ&s");
  flourImg = loadImage("https://cdn-icons-png.flaticon.com/512/1182/1182154.png");
  //flourImg.scale();
  eggsImg = loadImage("https://cdn-icons-png.freepik.com/512/3142/3142726.png");
//   spicesImg = loadImage("");
  fillingImg = loadImage("https://media.istockphoto.com/id/1429257385/vector/pumpkin-squash-autumn-vegetable-for-halloween-or-thanksgiving-isolated-on-white-vector-icon.jpg?s=612x612&w=0&k=20&c=63XeYhofaWd_bSRfWrPB9x_Hni0KIkicbPeAobIDt7I=");


}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //Make groups for each screen
  flourImg.scale = 0.1;
  startGroup = new Group();
  mainMenuGroup = new Group();
  foodGroup = new Group();
  drinksGroup = new Group();
  pieGroup = new Group();
  hcGroup = new Group();


  //Make start button
  startButton = createSprite(width/2, height/2, 100, 50);
  //startButton.image = startButtonImg;
  startButton.text = "PLAY";
  startButton.collider = 'STATIC';
  startGroup.add(startButton);


  
  //make menu buttons + add text + position them out of screen
  menuButton = createSprite(width/2, height/3, 160, 70);
  menuButton.text = "Choose an Items\nMenu below";
  menuButton.textSize = 20;
  menuButton.collider = 'STATIC';
  mainMenuGroup.add(menuButton);
  
  foodMenuB = createSprite(width/2, height/2, 100, 50);
  foodMenuB.text = "Food";
  foodMenuB.textSize = 30;
  foodMenuB.collider = 'STATIC';
  mainMenuGroup.add(foodMenuB);
  
  drinkMenuB = createSprite(width/2, height*3/4, 100, 50);
  drinkMenuB.text = "Drinks";
  drinkMenuB.textSize = 30;
  drinkMenuB.collider = 'STATIC';
  mainMenuGroup.add(drinkMenuB);
  
  

  
  //Food menu buttons
  optionPie = createSprite(width/2, height*2/5,100, 50);
  optionPie.text = "Pie";
  optionPie.textSize = 25;
  optionPie.collider = 'STATIC';
  foodGroup.add(optionPie);

  //Food -> pie -> (create sprite and add to pieGroup)
  bowl = new Sprite(width/2, 370, 50);
  pieGroup.add(bowl);
  bowl.text = "bowl";
  bowl.collider = 'STATIC';
  


  flour = createSprite(width/6, 300, 30, 70);
  flour.text = "FL";
  pieGroup.add(flour);
  
  //flour.image = flourImg;
  //flour.img.scale(10, 10);
  sugar = createSprite(width*1/3, 200, 30, 70);
  sugar.text = "SG";
  pieGroup.add(sugar);
  //sugar.image = sugarImg;

  eggs = createSprite(width/2, 250, 60, 30);
  eggs.text = "EG";
  pieGroup.add(eggs);
  //eggs.image = eggsImg;

  milk = createSprite(width*2/3, 200, 30, 70);
  milk.text = "MiLk"; 
  //milk.image = milkImg;
  pieGroup.add(milk);

  filling = createSprite(width/2, 100, 40, 40);
  filling.text = "FLNG";
  //filling.image = fillingImg;
  pieGroup.add(filling);


  spices = createSprite(width*5/6, 300, 30, 70);
  spices.text = "SP";;
  pieGroup.add(spices);
  
  bamPie = createSprite(width/2, 60, 190, 40);
  bamPie.text = "BAM! PIE!";
  bamPie.textSize = 40;
  bamPie.collider = "STATIC";
  pieGroup.add(bamPie);
  
  
  //Drink menu buttons
  optionHotChoc = createSprite(width/2, height*2/5,100, 50);
  optionHotChoc.text = "Hot Chocolate";
  optionHotChoc.textSize = 14;
  optionHotChoc.collider = 'STATIC';
  drinksGroup.add(optionHotChoc);
 
  mug = new Sprite(width/2, 370, 50);
  hcGroup.add(mug);
  mug.text = "Mug";
  mug.collider = 'STATIC';
  
  
  heavyCream = createSprite(width/3, height/3, 50, 100);
 heavyCream.text = "Heavy\n Cream";
  hcGroup.add(heavyCream);

  cocoa = createSprite(width*2/3, height/2, 50,50);
  cocoa.text = "Cocoa";
  hcGroup.add(cocoa);
  
  bamHC = createSprite(width/2, 60, 190, 40);
  bamHC.text = "BAM! HOT CHOCOLATE!";
  bamHC.textSize = 15;
  bamHC.collider = "STATIC";
  hcGroup.add(bamHC);
  //Begin on start screen
  showOnly(mainMenuGroup);



}

function draw() {
  background("white");
  //drawSprites();

  if(startButton.mouse.presses()){
    mainMenu();
  }
  if(foodMenuB.mouse.presses()){
    foodMenu();
  }
  if(optionPie.mouse.presses()){
	makePie();
	
  }
  
  if(drinkMenuB.mouse.presses()){
    drinkMenu();
  }
  if(optionHotChoc.mouse.presses()){
	makeHC();
	
  }
  

}

function showOnly(groupToShow){
  const groups = [startGroup, mainMenuGroup, foodGroup, drinksGroup, pieGroup, hcGroup];
  for (let g of groups){
    for (let s of g) {
      s.visible = (g === groupToShow);
      s.mouseActive = (g === groupToShow);
    }
  }
}


function mainMenu(){
  //bring buttons into view
  showOnly(mainMenuGroup);
  if(foodMenuB.mouse.presses()){
    foodMenu();
  }
  
}

function foodMenu(){
  //move away "choose...", "food", "drinks" + bring out food items
  showOnly(foodGroup);
    
  //If player choses to make pie
  if(optionPie.mouse.presses()){
    makePie();
  }
  
  
}

function drinkMenu(){
  //move away "choose...", "food", "drinks"
  showOnly(drinksGroup);
}

function makePie(){
  showOnly(pieGroup);
    if (mouse.presses()) {
  	//           (x, y, speed)
  	//           (position, speed)
      flour.moveTo(bowl.x, bowl.y, 8);
      sugar.moveTo(bowl.x, bowl.y, 8);
      eggs.position.y = bowl.position.x;
      spices.moveTo(bowl.x, bowl.y, 8); 
      milk.moveTo(bowl.x, bowl.y, 8); 
      filling.moveTo(bowl.x, bowl.y, 8); 
      
      
    }


}

function makeHC(){
  showOnly(hcGroup);
  if (mouse.presses()) {
  	//           (x, y, speed)
  	//           (position, speed)
      heavyCream.moveTo(mug.x, mug.y, 8);
      cocoa.moveTo(mug.x, mug.y, 8);
       
      
      
    }
}

