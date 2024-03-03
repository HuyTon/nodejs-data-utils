/**
 * Arrow functions in JavaScript do not have their own this context;
 * instead, they inherit the this value from the surrounding lexical scope.
 * **/

// Return a new Set object containing elements which are in either or both of this set and the other set.
Set.prototype.union = function (otherSet) {
  if (!otherSet) {
    return this;
  }
  return new Set([...this, ...otherSet]);
};

// Return a new Set object containing elements in this set but not in the other set.
Set.prototype.difference = function (otherSet) {
  return new Set([...this].filter((elem) => !otherSet.has(elem)));
};

// Return a new Set object containing elements in both this set and the other set.
Set.prototype.intersection = function (otherSet) {
  return new Set([...this].filter((elem) => otherSet.has(elem)));
};

// Return a new Set object containing elements which are in either this set or the other set, but not in both.
Set.prototype.symmetricDifference = function (otherSet) {
  const onlyInThis = new Set([...this].filter((elem) => !otherSet.has(elem)));
  const onlyInOther = new Set([...otherSet].filter((elem) => !this.has(elem)));
  return new Set([...onlyInThis, ...onlyInOther]);
};

// Returns true if all elements in the current set are also present in the otherSet, otherwise returns false.
Set.prototype.isSubsetOf = function (otherSet) {
  return [...this].every((elem) => otherSet.has(elem));
};

// Returns true if all elements in the otherSet are also present in the current set, otherwise returns false.
Set.prototype.isSupersetOf = function (otherSet) {
  return [...otherSet].every((elem) => this.has(elem));
};

// Returns true if the current set has no elements in common with the otherSet, otherwise returns false.
Set.prototype.isDisjointFrom = function (otherSet) {
  return ![...this].some((elem) => otherSet.has(elem));
};

Set.prototype.toArray = function () {
  return Array.from(this);
};
