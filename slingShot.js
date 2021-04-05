class SlingShots
{
 constructor(bodyA,bodyB)
{
  var options = {
      bodyA: bodyA,
      pointB: pointB,
      syiffness: 0.03,
      length:15,

  }

  this.pointB = pointB
  this.sling = Constraint.create(options);  
  World.add(world,this.sling);

  fly()
  {
     this.sling.bodyA = null; 
  }

   

}

    display()
    {
        if(this.sling.bodyA)
        {
          var pointA = this.sling.bodyA.position;
          var pointB = this.pointB;
        }
      strokeWeight(4);
      fill("pink")
      line(pointA.x,pointA.y,pointB.x,pointB.y)
      

    }
}