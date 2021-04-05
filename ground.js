class Ground
{
 constructor()
{
  var options = {
      isStatic: true
      
  }

    this.ground=Bodies.rectangle(460,400,900,10,options);
    
    World.add(world,this.ground);

}

    display()
    {
      strokeWeight(3);
      fill("brown")
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,900,10);
      

    }
}