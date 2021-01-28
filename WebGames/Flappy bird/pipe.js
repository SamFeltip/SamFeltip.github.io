var pipes = function(x, y){
    this.location = {
        upper: {
            x:x,
            y:0,
            w:pipeP.width,
            h:canvasSize.h - (canvasSize.h - y - pipeP.gapSize) - pipeP.gapSize
        
        },
        lower: {
            x:x,
            y:canvasSize.h - (canvasSize.h - y - pipeP.gapSize),
            w:pipeP.width,
            h:canvasSize.h - (pipeP.gapSize + (canvasSize.h - (canvasSize.h - y - pipeP.gapSize) - pipeP.gapSize)) - 1
        }
    }
}

pipes.prototype.draw = function(){
    fill(50,255,50)
    // image(images.pipe, this.location.upper.x, this.location.upper.y)
    rect(this.location.upper.x,this.location.upper.y,this.location.upper.w,this.location.upper.h)
    rect(this.location.lower.x,this.location.lower.y,this.location.lower.w,this.location.lower.h)
}

pipes.prototype.update = function(){
    this.location.upper.x -= gameSpeed
    this.location.lower.x -= gameSpeed
}