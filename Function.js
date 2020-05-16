var chance = 10;
var count = 0;
var check = 0;
var numbers = [0,0,0,0,0];
var number = 0;
var answers = [0,0,0,0,0];
var answs = [0,0,0,0,0];
var answa = [0,0,0,0,0];
var answer = 0;
var countA = 0;
var countB = 0;
var num = 0;
var tcount = 1;
var color;

function colors() {
	if( tcount == 1 ) {
	 color = "lightgreen";
	} else if ( tcount == 2 ) {
	 color = "pink";
	} else if ( tcount == 3 ) {
	 color = "lightblue";
	 tcount = 0;
	}
}

function answ() {
	var i, j, k;
	k = 10000;
	for ( i=0; i<5; i++ ) {
	    answers[i] = 1 + Math.floor(Math.random() * 6);
	    answer = answer + answers[i]*k;
	    k = k / 10;
	}
	
	for ( i=0; i<5; i++ )
	    for ( j=0; j<5; j++ )
		 if ( answers[i] == answers[j] ) 
		  answs[i] = answs[i] + 1;
}

function answc() {
	var i;
	for ( i=0; i<5; i++ )
	 answa[i] = answs[i];
}

function final() {
	var i, j;
	
	countA = 0;
	countB = 0;
	for ( i=0; i<5; i++ ) 
	    for ( j=0; j<5; j++ ) 
		 if ( numbers[i] == answers[j] ) {
		  if ( answa[j] > 0 ) {
		   countA = countA + 1;
		   answa[j] = answa[j] - 1;
		  }
             
		  if ( numbers[i] == answers[i] ) {
		   if( countB < 5 ) 
		    countB = countB + 1;
		   
		   if ( countA > 0 )
		    countA = countA - 1;
		  }
	       
		  break;
		 }
}

function func(y,z) {
	var x, numb, img, image;
	if ( count==0 ) {
	 x="a";
	 numb=y*10000;
	 img="z";
	 document.getElementById("result").innerHTML = "";
	 document.getElementById("trial").innerHTML = "";
	} else if ( count==1 ) {
	 x="b";
	 numb=y*1000;
	 img="y";
	} else if ( count==2 ) {
	 x="c";
	 numb=y*100;
	 img="x";
	} else if ( count==3 ) {
	 x="d";
	 numb=y*10;
	 img="w";
	} else if ( count==4 ) {
	 x="e";
	 numb=y;
	 img="v";
	}

	if ( answer == 0 ) 
	 answ();
	
	if ( count<5 ) {
	 numbers[count] = y;
	 document.getElementById(x).innerHTML = "<b>" + y;
	 image=document.getElementById(img).src = z;
	 count=count+1;
	 number=number+numb;
	}
}

function f1() {
	var y = 1;
	z="Img1.gif";
	if ( check == 1 )
	 clear();
 
	func(y,z);
}

function f2() {
	var y = 2;
	z="Img2.gif";
	if ( check == 1 ) 
	 clear();
	
	func(y,z);
}

function f3() {
	var y = 3;
	z="Img3.gif";
	if ( check == 1 ) 
	 clear();
	
	func(y,z);
}

function f4() {
	var y = 4;
	z="Img4.gif";
	if ( check == 1 ) 
	 clear();
	
	func(y,z);
}

function f5() {
	var y = 5;
	z="Img5.gif";
	if ( check == 1 ) 
	 clear();
	
	func(y,z);
}

function f6() {
	var y = 6;
	z="Img6.gif";
	if ( check == 1 ) 
	 clear();
	
	func(y,z);
}

function imgs(i) {
	document.getElementById("z").src = i;
	document.getElementById("y").src = i;
	document.getElementById("x").src = i;
	document.getElementById("w").src = i;
	document.getElementById("v").src = i;
}

function marin() {
	var i = "Marin.gif";
	imgs(i);
}

function devil() {
	var i = "Devil.gif";
	imgs(i);
}

function angel() {
	var i = "Angel.gif";
	imgs(i);
}

function bomb() {
	var i = "Bomb.gif";
	imgs(i);
}

function ghost() {
	var i = "Ghost.gif";
	imgs(i);
}

function submit() {
	var text, image, tries, numb, tryy;
	answc();
	final();
	numb = number;
	if ( number % 10 == 0 ) {
	 clear();
	 text = "Your input is wrong!";
	 tries = "Please reinput your answer";
	} else if ( number != answer ) {
	 	 count = 5;
	 	 number = -1;

		 if ( check == 0 ) {
		  chance = chance - 1;
		  check = check + 1;
		 }
		 text = "Your answer is wrong!";
		 tries = "Please try again";
	 	 devil();
		 
		 if ( chance == 1 ) {
		  tries = "You have 1 last chance!";
		  bomb();
		 }

		 if ( chance == 0 ) {
		  check = 2;
		  text = "Game Over, You Lose!";
		  tries = "The answer is " + answer;
		  ghost();
		 }

		} else {
	 	 text = "Congratulation, You Win!";
	 	 tries = "Press restart to play again";
		 angel();
		}
	document.getElementById("f").innerHTML = "<b>" + countA;
	document.getElementById("g").innerHTML = "<b>" + countB;
	document.getElementById("result").innerHTML = text;
	document.getElementById("trial").innerHTML = tries;
	document.getElementById("chance").innerHTML = chance;

	if ( numb % 10 != 0 && numb > 0 && numb != answer ) {
	 if ( num == 0 ) {
	  tryy = document.getElementById("answer");
	  tryy.innerHTML = "<table id=tables border=1 style=background-color:black>" +
	  "<tr align=center style=background-color:lightgray>" +
	  "<td> <b>No. </td>" +
	  "<td width=200> <b>Answer </td>" +
	  "<td width=50 style=background-color:yellow> <b>A </td>" +
	  "<td width=50 style=background-color:green> <b>B </td>" +
	  "</tr>" +
	  "</table>";
	 }

	 num = num+1;

	 if ( num > 0 ) {
	  colors();
	  tryy = document.getElementById("tables");
	  tryy.innerHTML = tryy.innerHTML +
	  "<tr align=center style=background-color:"+color+">" +
	  "<td><b>"+num+"</td>" +
	  "<td width=200><b>"+numb+"</td>" +
	  "<td width=50 style=background-color:yellow><b>"+countA+"</td>" +
	  "<td width=50 style=background-color:green><b>"+countB+"</td>" +
	  "</tr>";
	  tcount = tcount + 1;
	 }
	}
}

function clear() {
	count=0;
	countA=0;
	countB=0;
	number=0;
	check=0;

	document.getElementById("a").innerHTML = "<b>" + 0;
	document.getElementById("b").innerHTML = "<b>" + 0;
	document.getElementById("c").innerHTML = "<b>" + 0;
	document.getElementById("d").innerHTML = "<b>" + 0;
	document.getElementById("e").innerHTML = "<b>" + 0;

	marin();
	document.getElementById("result").innerHTML = "";
	document.getElementById("trial").innerHTML = "";
	document.getElementById("f").innerHTML = "<b>" + countA;
	document.getElementById("g").innerHTML = "<b>" + countB;	
}

function restart() {
	clear();
	answer = 0;
	answs = [0,0,0,0,0];
	chance = 10;
	num = 0;
	tcount = 1;
	document.getElementById("answer").innerHTML = "";
	document.getElementById("chance").innerHTML = 10;
}

function erase() {
	var temp, image, img, text;
	text=document.getElementById("result");
	if ( text.innerHTML=="" ) {
	 if ( count > 0 )
	  count=count-1;
	 
	 if ( count==0 ) {
	  x="a";
	  img="z";
	  temp=0;
	 } else if ( count==1 ) {
	  x="b";
	  temp = Math.floor(number/10000)*10000;
	  img="y";
	 } else if ( count==2 ) {
	  x="c";
	  temp = Math.floor(number/1000)*1000;
	  img="x";
	 } else if ( count==3 ) {
	  x="d";
	  temp = Math.floor(number/100)*100;
	  img="w";
	 } else if ( count==4 ) {
	  x="e";
	  temp = Math.floor(number/10)*10;
	  img="v";
	 }
	
	 number=temp;
	 image=document.getElementById(img).src="Marin.gif"
	 document.getElementById(x).innerHTML = 0;
	}
}