function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);  // Merge obj1 and obj2 into a new object
  }
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 2, c: 4 };
  const merged = mergeObjects(obj1, obj2);
  
  console.log(merged);  // Output: { a: 1, b: 2, c: 4 }
  