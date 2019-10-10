interface IPerson {
  name: string;
  city: string;
  age: number;
  printDetails(): void;
  anotherFunc?(a: number,b: string): void;
}
const tom: IPerson = {
  name: "Tom",
  city: "Munich",
  age: 33,
  printDetails: function() {
    console.log(`${this.name} - ${this.city}`);
  }
}