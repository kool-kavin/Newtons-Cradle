class Roof{
  constructor(x,y,width,height){
    var options = {
       isStatic: true
    }

    this.body = Bodies.rectangle(x,y,height,width,options)
    this.width = 500
    this.height = 70
    World.add(world,this.body)


  }

  display(){
      var pos = this.body.position;
      push();
      rectMode(CENTER);
      fill("gray")
      rect(pos.x,pos.y,this.width,this.height)
      pop();
  }
}