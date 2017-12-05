async function* reverse(it) {
  it = it[Symbol.iterator]();
  yield* (async function* f(i) {
    if (!i.done) yield* f(await it.next());
    if (!i.done) yield i.value;
  })(await it.next());
}

// Example:
reverse([20,10,0,1,2,3,4,5]);
// returns [5, 4, 3, 2, 1, 0, 10, 20]
