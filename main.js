const { fromEvent } = rxjs
const { debounceTime, map } = rxjs.operators

const search = document.getElementById("search")
const newElement = document.getElementById("newElement")
const addElement = document.getElementById("addElement")
const listElements = document.getElementById("listElements")
const listElementsSearch = document.getElementById("listElementsSearch")

let data = []
let list = []
let cache

fromEvent(newElement, "input")
  .pipe(map(event => event.target.value))
  .subscribe(value => (cache = value))

fromEvent(addElement, "click").subscribe(function() {
  data = []
  data.push(cache)
  list.push(cache)
  data.forEach(element => {
    listElements.innerHTML += "<li>" + element + "</li>"
  })
})

fromEvent(search, "input")
  .pipe(
    debounceTime(1000),
    map(event => event.target.value)
  )
  .subscribe(function(value) {
    list.forEach(element => {
      if (element === value) {
        listElementsSearch.innerHTML = value
      }
    })
  })
