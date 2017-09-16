/* 
 * OBJECTS
 */

// SOUND NAVIGATOR //

function SoundNavigator() {
  this.sectionMap = (function () {
    var sections = document.querySelectorAll("section")
    var map = {}

    sections = [].slice.call(sections, 0);

    sections.forEach(function addToMap(section) {
      map[section.id] = section
    })

    return map
  })()

  this.activeSection = this.sectionMap.splash
}

SoundNavigator.prototype.go = function go(sectionId) {
  if (this.activeSection.id === sectionId) {
    return
  }

  this.activeSection.classList.remove("active")
  this.activeSection = this.sectionMap[sectionId]
  this.activeSection.classList.add("active")
}


// ACTIVITY //

function Activity() {

}

Activity.prototype.select = function select(letter) {
  console.log(letter)
}


// INSTANCES //

var soundNavigator = new SoundNavigator()
var activity = new Activity()



/**
 * SECTIONS
 */

;(function splash(){
  var section = document.getElementById("splash")
  var timeOut = window.setTimeout(hideSplash, 2000)

  section.addEventListener("mousedown", hideSplash)

  function hideSplash(event) {
    window.clearTimeout(timeOut)
    timeOut = 0

    soundNavigator.go("index")
  }
})()


;(function index(){
  var section = document.getElementById("index")
  var selected = null
  var klass = {
    dimmed: "dimmed"
  , pressed: "pressed"
  , disabled: "disabled"
  , selected: "selected"
  , ignore: "ignore-rollover"
  }
  /* TODO: Allow for multiple selections */
  var multipleSelection = false

  section.addEventListener("mousedown", pressSound)

  function pressSound(event) {
    var target = event.target

    if ( target === selected
      || target.classList.contains(klass.disabled)) {
      return
    }

    section.classList.add(klass.ignore)
    treatDrag(event)

    document.addEventListener("mousemove", treatDrag)
    document.addEventListener("mouseup", selectSound)

    function treatDrag(event) {
      if (event.target === target) {
        if (selected) {
          selected.classList.add(klass.dimmed)
        }

        target.classList.add(klass.pressed)
      } else {
        if (selected) {
          selected.classList.remove(klass.dimmed)
        }

        target.classList.remove(klass.pressed)
      }
    }

    function selectSound(event) {
      document.removeEventListener("mousemove", treatDrag)
      document.removeEventListener("mouseup", selectSound)

      section.classList.remove(klass.ignore)

      if (selected) {
        selected.classList.remove(klass.dimmed)
      }
      
      target.classList.remove(klass.pressed)

      if (event.target === target) {
        if (selected) {
          selected.classList.remove(klass.selected)
        }

        selected = target
        target.classList.add(klass.selected)
 
        if (!multipleSelection) {
          startActivity(target.innerText || target.textContent)
        }
      }
    }
  }

  function startActivity(letter) {
    activity.select(letter)
    soundNavigator.go("activity")
  }
})()