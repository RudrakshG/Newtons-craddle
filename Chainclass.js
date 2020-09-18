class Chain{
    constructor(bodyA,bodyB){
        //options for constraint bodies.
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(4);
        //Draws a line between two constrained bodies.
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}