interface IKun {
  url: string;
  description?: string;
  id?: number;
}
interface ILu extends IKun{
  strength: number;
  [index: string]: any;
}
type KunType = Array<IKun>;
function filterByTerm(input: Array<IKun>, searchTerm: string): KunType {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("input cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return input.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}
// filterByTerm([{ url:'string1'}, {url:'string2'}, {url:'stringjava'}], "java");
const obj1: IKun = { url: 'string1' };
const obj2: IKun = { url: 'string2' };
const obj3: IKun = { url: 'hen you too beautiful'};
const arrOffLinks: Array<IKun> = [obj1,obj2,obj3];
const term: string = 'java'
filterByTerm(arrOffLinks,term);

const ILu: ILu = {
  url: 'ikun gay with luhan.com',
  strength: 1000
}