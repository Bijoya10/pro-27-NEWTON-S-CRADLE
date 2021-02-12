class Bob{
    constructor(x,y){
        var options={
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body=Bodies.circle(x,y,25,options)
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        push()
        fill("#2C5E1A")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,25,25)
        pop()
    }
}