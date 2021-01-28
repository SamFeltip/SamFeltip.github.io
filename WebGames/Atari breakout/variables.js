var bar = {
    x:null,
    y:400,
    w:50,
    h:5,
    colour:50,
}

var backCol = 200
var disco = false

var ball = {
    x: 20,
    y: 20,
    vx: 2,
    vy: 2,
    size: 10,
    colour:255
}

var gameStarted = false
var score = 0
var bricksBroken = 0
var brickS = {
    colour: 100,
    x: 5,
    y: 5,
    w: 50,
    h: 10
}

var test = [0,0,0]

var typeDistribution = [0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,1,1,1,1,1]
var removed
var blockTypes = [
    "points",
    "size",
    "speed",
]
class brick{
    constructor(x,y,v,t){
        this.col = brickS.colour
        this.x = x
        this.y = y
        this.value = v
        this.w = brickS.w
        this.h = brickS.h
        test[t]++
        this.type = blockTypes[t]
    }
    draw(){
        switch(this.type){
            case "points":
               fill(0,0, this.value*51)
            break
            case "size":
                fill(255,255,0)
            break
            case "speed":
                fill(Math.random()*255,Math.random()*255,Math.random()*255)
            break
        }   
        
        rect(this.x, this.y, this.w, this.h)
    }
    update(){

    }
}

var bricks = []