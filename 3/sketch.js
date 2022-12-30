var song
var songIsplay=false //設定此變數為"false"，收到按下滑鼠把變數改為"true"
var amp
var vol=0
var music_btn,mouse_btn,Speech_btn
var musicIsplay=true
var mouseIsplay=true
var myRec = new p5.SpeechRec();
var result
function preload(){
  song = loadSound("NEFFEX.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);//將方位度數改為角度模式

  music_btn = createButton("播音樂")
  music_btn.position(10,10)
  music_btn.size(350, 100);
  music_btn.style('background-color', 'black');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)

  mouse_btn = createButton("音樂暫停")
  mouse_btn.position(370,10)
  mouse_btn.size(350, 100);
  mouse_btn.style('background-color', 'black');
  mouse_btn.style('font-size', '44px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)

  Speech_btn = createButton("語音辨識(播音樂/暫停)")
  Speech_btn.position(740,10)
  Speech_btn.size(350, 100);
  Speech_btn.style('background-color', 'black');
  Speech_btn.style('font-size', '32px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePressed(Speech_btn_pressed)
  
}
function music_btn_pressed(){  
  song.stop()
  song.play()
  songIsplay = true
  musicIsplay = false
  amp=new p5.Amplitude()
  music_btn.style('background-color', '#00b4d8');
  mouse_btn.style('background-color', 'black');
}

function mouse_btn_pressed(){  
  song.pause()
  musicIsplay = true
  songIsplay = false
  music_btn.style('background-color', 'black');
  mouse_btn.style('background-color', '#00b4d8');
}
function Speech_btn_pressed(){ 
  music_btn.style('background-color', 'black');
  mouse_btn.style('background-color', 'black');
  Speech_btn.style('background-color', '#00b4d8');
  myRec.onResult = showResult;
  myRec.start();
}

function showResult()
  {
      if(myRec.resultValue==true) {
			
      push()
        translate(0,0)
        background(192, 255, 192);
        fill(255,0,0)
        textStyle("italic")
        text(myRec.resultString,1200,10);
        text(myRec.resultString,0, height/2);
      pop()
      result = myRec.resultString
      if(myRec.resultString==="播音樂")
      {
        music_btn_pressed()
      }
      if(myRec.resultString==="暫停")
      {
        song.pause()
        mosueIsplay = true
        songIsplay = false
        }
		}
	}

function draw() {
  background(220);
  textSize(40)
  text("X:"+mouseX+"Y:"+mouseY,50,50)
  for(var j=0;j<5;j++){
  push()
     translate(face_x[j],face_y[j]) 


     if(songIsplay){
      vol = amp.getLevel()
      m_x =map(vol,0,1,0,width) 
      m_y= map(vol,0,1,0,height)
      
    }
    else
    if(mouseIsplay)
    {
      m_x = mouseX
      m_y= mouseY
    }
 

     fill("#cd853f")
     ellipse(-face_size[j]/4,-face_size[j]/2,face_size[j]/5,face_size[j]/2) //左耳朵
     ellipse(face_size[j]/4,-face_size[j]/2,face_size[j]/5,face_size[j]/2) //右耳朵
 
     fill("#000000")
     ellipse(-face_size[j]/4,-face_size[j]/2,face_size[j]/8,face_size[j]/4) //左耳朵變黑色
     ellipse(face_size[j]/4,-face_size[j]/2,face_size[j]/8,face_size[j]/4) //右耳朵變黑色
 
     fill("#cd853f")
     ellipse(0,0,face_size[j]) //臉
 
     fill("#000000")
     ellipse(-face_size[j]/5,-face_size[j]/5,face_size[j]/6.6) //左眼睛
     ellipse(face_size[j]/5,-face_size[j]/5,face_size[j]/6.6) //右眼睛
   
     fill("#ffffff")
     ellipse(-face_size[j]/4.5+mouseX/80,-face_size[j]/4.5+mouseY/60,face_size[j]/20)//左眼珠
     ellipse(face_size[j]/5.7+mouseX/80,-face_size[j]/4.5+mouseY/60,face_size[j]/20)//右眼珠
 
     fill("#ffb6c1")
     ellipse(-face_size[j]/3.3,face_size[j]/13.3,face_size[j]/5,face_size[j]/13.3) //左腮紅
     ellipse(face_size[j]/3.3,face_size[j]/13.3,face_size[j]/5,face_size[j]/13.3) //右腮紅
 
     fill("#ffb6c1")
     arc(0,face_size[j]/5.3,face_size[j]/4,face_size[j]/5.3,0,face_size[j]/2.2)//嘴巴
     
   pop()
 
 }
}