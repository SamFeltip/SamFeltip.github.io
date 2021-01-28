var canvasProperties = {
    w:500,
    h:500,

}

var table = new scoreTable()

var names = [
    "Cathi","Sam","Owen","Louis","Milly","Jerome","Cow","Harrison","Harry","Sophie","Sophia","Brick",
]

var gameProperties = {
    maxPlayers: 5
}

var inputs = [
    {
        up:"w",
        left:"a",
        down:"s",
        right:"d"
    },
    {
        up:"t",
        left:"f",
        down:"g",
        right:"h"
    },
    {
        up:"i",
        left:"j",
        down:"k",
        right:"l"
    },
    {
        up:"ArrowUp",
        left:"ArrowLeft",
        down:"ArrowDown",
        right:"ArrowRight"
    },
    {
        up:"8",
        left:"4",
        down:"5",
        right:"6"
    },
]

var snakes = []

function setup(){
    createCanvas(canvasProperties.w, canvasProperties.h)
}

function draw(){
    background(200)
    for(s of snakes){
        if(s.playing == true){
            s.draw()
        }
        s.update()
        
    }

    table.draw()


    if(keyIsPressed === true){
        for(option in snakes){
            snakes[option].move(key)
        } 
    }
}

function keyPressed(){
    if(key == 'Enter' && snakes.length < gameProperties.maxPlayers){
        snakes.push(new snakeObj(100,100, snakes.length))
    }
}