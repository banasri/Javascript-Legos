export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    console.log("setCounter called with count", count);
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

