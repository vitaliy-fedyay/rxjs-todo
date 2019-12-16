const { fromEvent } = rxjs
const { debounceTime, map } = rxjs.operators

const search = document.getElementById("search")
const newElement = document.getElementById("newElement")
const addElement = document.getElementById("addElement")
const listElements = document.getElementById("listElements")

let data = []
let cache

fromEvent(newElement, 'input').pipe(
  debounceTime(1000),
  map(event => event.target.value)
)
  .subscribe(value => cache = value)

fromEvent(addElement, 'click')
  .subscribe(
    function () {
      data.push(cache)
      listElements.innerHTML = data
    }
  )




