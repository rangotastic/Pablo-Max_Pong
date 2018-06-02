//Ball

 let bx;

 let by;

 let bd;


 let stepx = 5;

 let stepy = 7;


//speed

 let s = 0;


//Punkte

 let pu;

 let bp;

 let pn;


//Padel

 let px;

 let py;


//für den arc befehl

 let circle = 40;


//Variablen die sich verändern

 let degree = 10;

 let start = 0;

 n = 10


 //countdown

 let co = 0;

 let w = 0;


//background

 let gx;

 let gy;

 let gv;




function setup() {


  createCanvas(windowWidth, windowHeight);

//frameRate(60);

  bx = width / 2;

  by = height / 8;

  bd = 30;


  px = width/2;

  py = height-150;


  gx = width/2;

  gy = width/2;

  gv = (rotationY)/7;


  pu = 0;

  bp = 0;

  pn = 0;



//für den arc befehl

 angleMode(DEGREES);

}




function draw() {


gv = (rotationY)/4;


background(190);


fill(255);


 ellipse(gx+gv,gy,width-20,width-20);



 quad(10+gv,gy,gv+width-10,gy,gv+width-10,height-gy,10+gv,height-gy);


 ellipse(gx+gv,height-gy,width-20,width-20);






//Ball.....................................................................................................................

 fill(230,70,20);

 noStroke();

 ellipse(bx,by+10,bd);



//speed...................................................................................................................

s = s + 0.009;




//x Richtung..............................................................................................................

 bx = bx + stepx;


 if(bx>width-15){

  stepx = -5 - s;

 }


 if(bx<=15){

  stepx = 5 + s;

 }


//Y RICHTUNG..............................................................................................................

 by = by + stepy;



fullPadel(px,py);//--------------------------------------------------------------------------------------------



if(bp>0){

  fill(255);

  text(bp,px+80,py+15);

  text("B E S T",px-80,py+15);

  fill(200);

}


 if(by>=height){

  background(155,0,0);

  //........................................................................................................... .......... ,,, ,,,,,



  stepy = -7 - s;

  if(pu>bp){

  bp = pu;

  }

  pu = 0;

  s = 0;

  bx = width / 2;

  by = height / 8;

 }


  if(pu>9){

  pn = 4;

  }

   if(pu==0){

  pn = 0;

  }


 if(by<=0){

  stepy = 7 + s;

 }




//veränderungen der Variablen für den Kreis

 degree = degree + 1.5;

 start = degree - n;

 n = n + 0.5;



 //if(rotationY>0+15){

   px = (width/2)+(rotationY*4);



   //Aufprallenauf Padel...............................................................................................


collision();



}



function fullPadel(x,y){

//PADEL PADEL PADEL.........................................................................................................

strokeCap(SQUARE);

 fill(220);

 quad(x-100,y,x-100,y+20,x+100,y+20,x+100,y);

 stroke(255);

 strokeWeight(2);

 line(x-100,y,x+100,y);


 fill(190);

 ellipse(x,y+30,50,50);

 fill(200);


//Kreis.....................................................................................................................

strokeCap(ROUND);



 strokeWeight(1);

 noFill();

 arc(x,y+30,circle+10,circle+10,0,180);

 arc(x,y+30,circle,circle,start, degree);

 arc(x,y+30,circle-10,circle-10,-start,-degree);


//Punkte.....................................................................................................................

 fill(255);

 noStroke();

 textStyle(BOLD);

 text(pu,x-4-pn,y+30+3);

}


function collision(){


   if(by>=py-15){

    if(by<=py+30){

     if(bx>=px-100){

      if(bx<=px+100){

      stepy = -7 - s;

      pu = pu +1;

      }

     }

    }

   }


}
