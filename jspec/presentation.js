function addToSpecList(description, klassName) {
  var listItem = document.createElement('li')
  listItem.innerText = description
  listItem.className = klassName

  var specList = document.getElementById('spec-list')
  specList.appendChild(listItem)
}

function styleExample() {
  examples = document.getElementsByClassName('example')
  thisExample = examples[examples.length - 1]
  thisExample.className += ` ${outcome}`
}
