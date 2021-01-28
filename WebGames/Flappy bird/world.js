function preload(){
    // images.bird = loadImage("Images/bird.jpg")
    // images.pipe = loadImage("Images/pipe.png")
    // images.background = loadImage("Images/background.jpg")
}

function setup(){

    createCanvas(canvasSize.w,canvasSize.h)
    birdObject = new bird()
    
}

function draw(){

    fill(255)
    rect(0,0,windowWidth, windowHeight)
    //image(images.background, -(birdObject.score*gameSpeed)%500, 0)
    // image(images.background, -(birdObject.score*gameSpeed)%500+500, 0)

    if(birdObject.score - lastupdated > 200){
        pipeArray.push(new pipes(canvasSize.w+pipeP.width,Math.random()*(canvasSize.h-300)+150))
        lastupdated = birdObject.score
    }



    birdObject.draw()

    for(p of pipeArray){
        p.draw()
    }

    if(gamePlaying){
        for(p of pipeArray){
            p.update()
        }
        birdObject.update()
        birdObject.score++
    }
    
    fill(0)

    if(!gamePlaying){
        textSize(50)
        text("press any key to start", canvasSize.w/2-240, 100)
    }else{
        textSize(100)
        if(highScore <= floor((birdObject.score+100)/200)){
            fill(255,255,0)
            highScore = floor((birdObject.score+100)/200)
        }else{
            fill(0)
        }
        
        text(floor((birdObject.score+100)/200), canvasSize.w/2-50, 130)
    }

    deathTest()

}

function deathTest(){
    if(birdObject.position.y > canvasSize.h - birdObject.size/2){
        gamePlaying = false
    }

    for(p of pipeArray){
        if(collideRectCircle(p.location.upper.x, p.location.upper.y, p.location.upper.w, p.location.upper.h, birdObject.position.x, birdObject.position.y, birdObject.size) || collideRectCircle(p.location.lower.x, p.location.lower.y, p.location.lower.w, p.location.lower.h, birdObject.position.x, birdObject.position.y, birdObject.size)){
            gamePlaying = false
        }
    }
}

function keyPressed(){

    if(!gamePlaying){
        gamePlaying = true
        birdObject = new bird()
        pipeArray = []
        lastupdated = -100
    }
    birdObject.velocity.y = -15
}