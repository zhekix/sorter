class Sorter {
  constructor() {
    this.array = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array
  }

  sort(indices) {
    indices.sort();
    let arr = [];
    for (let i = 0; i < indices.length; i++) {
      arr.push(this.array[indices[i]]);
    }
    arr.sort(this.comparator);
    for (let i = 0; i < indices.length; i++) {
      this.array.splice(indices[i], 1, arr[i]);
    }
    return this.array;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
