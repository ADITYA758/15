class Block2 {
  constructor(x, y, width, height) {
    var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);


  }
  display() {
    push();
    //translate(1010,250);
    console.log(Math.round(this.body.speed));

    if (this.body.speed < 5) {
      var pos = this.body.position;
      rectMode(CENTER);
      fill(rgb(240, 128, 128));
      rect(pos.x, pos.y, this.width, this.height);

      pop();
    }
    else {
      World.remove(world, this.body);
    }
  }
}