const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()


    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){


    // write code to fetch time from API
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime()

    // write code slice the datetime
    hour=datetime.slice(11,13)


    // add conditions to change the background images from sunrise to sunset
    if (hour>=04&&hour<06){
        debugger
        bg="sunshine1.png"

    }else if (hour>=06&&hour<=08){
        debugger
        bg="sunshine2.png"
    }else if (hour>=08&&hour<=11){
        debugger
        bg="sunshine3.png"
    }else if (hour>=11&&hour<=13){
        debugger
        bg="sunshine4.png"
    }else if (hour>=13&&hour<=15){
        debugger
        bg="sunshine5.png"
    } else if (hour>=15&&hour<=17){
        debugger
        bg="sunshine6.png"
    } else if (hour>=17&&hour<=18){
        debugger
        bg="sunshine7.png"
    } else if (hour>=18&&hour<=20){
        debugger
        bg="sunshine8.png"
    } else if (hour>=20&&hour<=23){
        debugger
        bg="sunshine9.png"
    } else if (hour>=23&&hour<=00){
        debugger
        bg="sunshine10.png"
    } else if (hour>=00&&hour<=03){
        debugger
        bg="sunshine11.png"
    } else {
        debugger
        bg="sunshine12.png"
    }



    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg)

}
