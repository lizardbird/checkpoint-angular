angular.module('musingsApp')
.factory('musings', [
  musingsService
])
function musingsService() {
  const musings = [
    {
      title: "Title 0",
      content: "Content 0",
      author: "Author 0"
    },
    {
      title: "Title 1",
      content: "Content 1",
      author: "Author 1"
    },
    {
      title: "Title 2",
      content: "Content 2",
      author: "Author 2"
    },
    {
      title: "Title 3",
      content: "Content 3",
      author: "Author 3"
    },
    {
      title: "Title 4",
      content: "Content 4",
      author: "Author 4"
    }
  ]
  return {
    all: all,
    create: create,
    remove: remove
  }
  function all(){
    return musings
  }
  function create(musing) {
    musings.push(musing)
  }
  function remove(index) {
    musings.splice(index, 1)
  }
}
