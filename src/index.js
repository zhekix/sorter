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
    return this.array;
  }

  sort(indices) {
    let filterArr = this.array.filter((item, index) => {
      return indices.includes(index);
    });

    filterArr.sort(this.comparator).reverse();

    this.array = this.array.map((item, index) => {
      return indices.includes(index) ? filterArr.pop() : item;
    });

    return this.array;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
