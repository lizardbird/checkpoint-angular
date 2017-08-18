angular.module('musingsApp')
.controller('musingsController', [
  'musings',
  musingsController])

function musingsController (musings) {
  this.musings = musings.all()
  this.newMusing = {
    title: '',
    content: '',
    author: ''
  }
  this.createMusing = function () {
    musings.create(this.newMusing)
  }
  this.removeMusing = function (index) {
    musings.remove(index)
  }
}
