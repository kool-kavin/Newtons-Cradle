class Bob {
  constructor(x, y, width, height) {

    var options = {
      isStatic:false
    }
    
    this.body = Bodies.circle(x, y, width, height,options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER)
    strokeWeight(5)
    stroke(255,0,255)
    fill(rgb(255,0,255));
    ellipse(0, 0, this.width, this.height);
    pop();
  }
};
