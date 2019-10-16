
// old interface
class OldCalculator {
  constructor() {}
  operations(item1, item2, operator) {
    switch(operator) {
      case 'add':
        return item1 + item2;
      case 'sub':
        return item1 - item2;
      default:
        return NaN;
    }
  }
}

class NewCalculator {
  constructor() {}
  add(item1,item2) {
    return item1+item2;
  }
  sub(item1,item2) {
    return item1-item2;
  }
}

// new interface
class CalAdapter {
  constructor() {
    this.newCalc = new NewCalculator();
  }
  operations(item1, item2, operator) {
    switch(operator) {
      case 'add':
        return this.newCalc.add(item1,item2);
      case 'sub':
        return this.newCalc.sub(item1,item2);
      default:
        return NaN;
    }
  }
}

let adapter = new CalAdapter();
adapter.operations(4,3,'add') // 7