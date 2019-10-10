class BallFactory {
  constructor(type) {
    let ball = null
    if(type==='football' || type==='soccer') {
      ball = new Football()
    } else if(type==='basketball') {
      ball = new Basketball;
    } else {
      throw new Error('Unknown ball type!');
    }
    return ball;
  }
}

class Football {
  constructor() {
    this._type = 'football';
    this.kick = function() {
      console.log('You just kicked the football.');
    }
  }
}

class Basketball {
  constructor() {
    this._type = 'basketball';
    this.shoot = function() {
      console.log('You shoot the basketball from downtown!!!!');
    }
  }
}

let ball1 = new BallFactory('soccer');
ball1.kick();