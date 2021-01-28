var bird = function(){

    this.position = {
        x: 150,
        y: 300
    }
    this.velocity = {
        x: 0,
        y: 0
    }
    this.size = 40
    this.score = 0
    
}

bird.prototype.draw = function(){
    fill(255,255,0)
    push()
    translate(this.position.x, this.position.y)
    if(this.velocity.y > 0){
        rotate(-100)
    }else{
        rotate(100)
    }
    
    rect(-this.size/2, -this.size/2, this.size, this.size)
    // image(images.bird, -this.size/2, -this.size/2, this.size, this.size)
    pop()
    // ellipse(this.position.x, this.position.y, this.size)
}

bird.prototype.update = function(){
    this.velocity.y += g
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
}