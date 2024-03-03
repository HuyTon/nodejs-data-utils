const HelperData = require("./src/helpers/dataHelper");
require("./src/utils/setUtils");

const a = new Set([1, 2, 3, 5, 6]);
const b = new Set([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

console.log("a.union(b)", a.union(b));
console.log("a.difference(b)", a.difference(b));
console.log("a.intersection(b)", a.intersection(b));
console.log("a.symmetricDifference(b)", a.symmetricDifference(b));
console.log("a.isSubsetOf(b)", a.isSubsetOf(b));
console.log("a.isSupersetOf(b)", a.isSupersetOf(b));
console.log("a.isDisjointFrom(b)", a.isDisjointFrom(b));
console.log("Array from set:", a.toArray());

const testData = [
  { id: 1, name: "Hotel A" },
  { Id: 2, name: "Hotel B" },
  { hotel_id: 3, name: "Hotel C" },
  { ID: 4, name: "Hotel D" },
];
const result = HelperData.createIdMap(testData);
console.log("Create Id Map", result);
