window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});



// INSTANCES //

var controller = new Controller()
var database = new Database()
var activity = new Activity()
var phraseData = new PhraseData()
var index = new Index()



/* 
 * OBJECTS
 */

// <CONTROLLER

  function Controller() {
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

  Controller.prototype.goSection = function goSection(sectionId) {
    if (this.activeSection.id === sectionId) {
      return
    }

    this.activeSection.classList.remove("active")
    this.activeSection = this.sectionMap[sectionId]
    this.activeSection.classList.add("active")
  }
// CONTROLLER>


// <DATABASE
  function Database() {

  }

  /**
   * Stub for an asynchronous call to a database
   *
   * @param   {string}  token  A single letter, such as "б" or a more 
   *                           complex string which will be translated
   *                           to a query for words with accented "о́"
   *                           or an embedded syllable or some other
   *                           nice thing.
   * param  {function} callback
   *                    
   * @return  {Object}         A map of arrays of URLs and phrases
   */
  Database.prototype.getData = function getData(token,target,callback) {
    var delay = Math.floor(Math.random() * 31.63)
    delay *= delay // up to 1s, half the time less than 250 ms
    setTimeout(returnData, delay)

    function returnData() {
      var error = null
      var data = {
        video: [
          "img/Б/image (11).jpg"
        , "img/Б/image (10).jpg"
        , "img/Б/image (9).jpg"
        , "img/Б/image (8).jpg"
        , "img/Б/image (7).jpg"
        , "img/Б/image (6).jpg"
        , "img/Б/image (5).jpg"
        , "img/Б/image (4).jpg"
        , "img/Б/image (3).jpg"
        , "img/Б/image (2).jpg"
        , "img/Б/image (1).jpg"
        , "img/Б/image.jpg"
        , "img/Б/hippo.jpg"
        , "img/Б/girl.jpg"
        , "img/Б/fencing.jpg"
        , "img/Б/barrels.jpg"
        , "img/Б/bacon.jpg"
        , "img/Б/320-Four_loaves.jpg"
        , "img/Б/320-finger-man-451205_640.jpg"
        , "img/Б/320-drums-322726_640.jpg"
        , "img/Б/320-childrens-shoes-486016_640.jpg"
        , "img/Б/320-children-433165_640.jpg"
        , "img/Б/320-butterfly-142506_640.jpg"
        , "img/Б/320-beads-363644_640.jpg"
        , "img/Б/320-back-yard-183298_640.jpg"
        , "img/Б/320-anniversary-2436_640.jpg"
        , "img/Б/320-alphabet-150764_640.jpg"
        , "img/Б/320-alarm-clock-292125_640.jpg"
        , "img/Б/320-5507697956_260999cd36_z.jpg"
        , "img/Б/320-3676558953_efe4af56bb_b.jpg"
        , "img/Б/320-2540686862_22d4ac26f3_z.jpg"
        , "img/Б/320-1024px-Sao_Paulo_Stock_Exchange.jpg"
        , "img/Б/320-450px-Snezhnoe_091.jpg"
        , "img/Б/320-351px-Детский_билет.jpg"
        ]

      , image: [
          "img/Б/320-351px-Детский_билет.jpg"
        , "img/Б/320-450px-Snezhnoe_091.jpg"
        , "img/Б/320-1024px-Sao_Paulo_Stock_Exchange.jpg"
        , "img/Б/320-2540686862_22d4ac26f3_z.jpg"
        , "img/Б/320-3676558953_efe4af56bb_b.jpg"
        , "img/Б/320-5507697956_260999cd36_z.jpg"
        , "img/Б/320-alarm-clock-292125_640.jpg"
        , "img/Б/320-alphabet-150764_640.jpg"
        , "img/Б/320-anniversary-2436_640.jpg"
        , "img/Б/320-back-yard-183298_640.jpg"
        , "img/Б/320-beads-363644_640.jpg"
        , "img/Б/320-butterfly-142506_640.jpg"
        , "img/Б/320-children-433165_640.jpg"
        , "img/Б/320-childrens-shoes-486016_640.jpg"
        , "img/Б/320-drums-322726_640.jpg"
        , "img/Б/320-finger-man-451205_640.jpg"
        , "img/Б/320-Four_loaves.jpg"
        , "img/Б/bacon.jpg"
        , "img/Б/barrels.jpg"
        , "img/Б/fencing.jpg"
        , "img/Б/girl.jpg"
        , "img/Б/hippo.jpg"
        , "img/Б/image.jpg"
        , "img/Б/image (1).jpg"
        , "img/Б/image (2).jpg"
        , "img/Б/image (3).jpg"
        , "img/Б/image (4).jpg"
        , "img/Б/image (5).jpg"
        , "img/Б/image (6).jpg"
        , "img/Б/image (7).jpg"
        , "img/Б/image (8).jpg"
        , "img/Б/image (9).jpg"
        , "img/Б/image (10).jpg"
        , "img/Б/image (11).jpg"
        ]

      , phrase: [
          "Костюм фехтовальщика |белый."
        , "Русский народный инструмент |балалайка."
        , "Хорошо прожаренный |бекон."
        , "На лугу пасётся |бык."
        , "Мне нужна |булавка."
        , "Олимпийский вид спорта |- бокс."
        , "В кафе предлагают нежный |бисквит."
        , "Что можно сделать из этого |бисера?"
        , "Купи в аптеке |бинт."
        , "Полевой |бинокль."
        , "На ферме много |баранов."
        , "В зоопарке живёт милашка-|бегемот."
        , "Возле дома растёт |берёза."
        , "Бусы из |бирюзы."
        , "Сегодня идём на |балет."
        , "Какая красивая |бабочка!"
        , "Мой папа работает на |бирже."
        , "Наша машина |белая."
        , "Давай подарим маме |бусы!"
        , "Какая это |буква?"
        , "Старая |башня."
        , "Каждое утро звонит |будильник."
        , "Дети любят прыгать и |бегать."
        , "Школьники играют в |баскетбол."
        , "У Саши |барабан."
        , "Красивый |букет."
        , "Сколько литров в этих |бочках?"
        , "Пожалуйста, покажите Ваш |билет."
        , "Не может |быть!"
        , "В зоопарке живёт |белка."
        , "Завтра к нам приедет |бабушка."
        , "Пожалуйста, не говорите |быстро."
        , "Сколько стоит эта |булка?"
        , "У меня новые |ботинки"
        ]

      , audio: []

      , token: token
      }

      callback.call(target, error, data)
    }
  }
// DATABASE>


// <PHRASE DATA

  function PhraseData() {
    this.cache = {}
    this.data = { phrase: []
                , image: []
                , audio: []
                , video: []
                }
    this.index = 0
    this.last = 0
  }


  /**
   * { function_description }
   *
   * @param      {<type>}  error   { phrase: [<string>, ...]
   *                               , image:  [<url>, ...]
   *                               , audio:  [<url>, ...]
   *                               , video:  [<url>, ...]
   *                               , token:  <string>
   *                               }
   * @param      {<type>}  data    The data
   */
  PhraseData.prototype.incoming = function incoming (error, data) {
    if (error) {
      return console.log(error)
    }

    this.cache[data.token] = data
    this.setDataFor(data.token)
    index.enable(data.token)
  }


  PhraseData.prototype.setDataFor = function setDataFor(token) {
    var cached = this.cache[token]

    if (cached) {
      this.data = cached
      this.index = 0
      this.last = this.data.phrase.length - 1

    } else {
      database.getData(token, this, this.incoming)
    }
  }

  /**
   * Gets the media for the given phrase
   *
   * @param {number|string}  ref  index (0 - n) | "next" | "back"
   */
  PhraseData.prototype.getMedia = function getMedia(ref) {
    var media = {}

    // ref = isNaN(ref)
    //     ? ref === "next"
    //       ? this.index < this.last
    //         ? this.index + 1   // next
    //         : 0                // loop back to beginning
    //       : ref === "back"
    //         ? this.index > 0
    //           ? this.index - 1 // previous
    //           : this.last      // loop round to end
    //         : this.index       // invalid word, no change
    //     : (ref < 0 || ref > this.last)
    //       ? this.index         // invalid index, no change
    //       : ref
    if (ref === "next") {
      if (this.index < this.last) {
        ref = this.index + 1
      } else {
        ref = 0 // loop back to the beginning
      }
    } else if (ref === "back") {
      if (this.index > 0) {
        ref = this.index - 1
      } else {
        ref = this.last
      }
    } else if (ref < 0 || ref > this.last) {
      ref = this.index
    }

    this.index = ref

    media.phrase = this.data.phrase[ref]
    media.image = this.data.image[ref]
    media.audio = this.data.audio[ref]
    media.video = this.data.video[ref]
    media.ref = ref
    media.disabled = ref === 0
                   ? "back"
                   : ref === this.last
                     ? "next"
                     : 0
    media.total = this.last

    return media
  }
// PHRASE DATA>


// <ACTIVITY (stub)

  function Activity() {
    that = this


    this.image = document.querySelector("#activity .image")
    this.video = document.querySelector("#activity .video")
    this.audio = {} // TODO
    this.phrase = document.querySelector("#activity .phrase")
    // TODO: add target span
    
    this.back = document.querySelector("#activity button.back")
    this.next = document.querySelector("#activity button.next")

    this.done = document.querySelector("#activity .progress p")

    toggleEventListeners("on", this.back, "mouseup touchend", go)
    toggleEventListeners("on", this.next, "mouseup touchend", go)

    function go(event) {
      var ref = event.target.textContent.toLowerCase()
      that.goPhrase(ref)
    }
  }

  Activity.prototype.select = function select(token) {
    phraseData.setDataFor(token)
    this.goPhrase(0)
  }

  Activity.prototype.goPhrase = function goPhrase(ref) {
    var regex = /(.*?)\|([а-яёА-ЯЁ]+)([.!?"']*)/

    var phrase = this.phrase
    var media = phraseData.getMedia(ref)
    ref = media.ref // "back" and "next" changed to an index number
                      
    this.image.style.backgroundImage = "url('"+media.image+"')"
    this.video.style.backgroundImage = "url('"+media.video+"')"
    this.audio.src = media.audio
    setPhrase(media.phrase)

    this.back.disabled = (media.disabled === "back")
    this.next.disabled = (media.disabled === "next")

    this.done.textContent = (ref + 1) + "/" + (media.total + 1)

    function setPhrase(text) {
      var result = regex.exec(text)
      var cue = result[1]
      var target = result[2]
      var end = result[3]
      var content

      if (cue.slice(-1) === " "){
        cue = cue.replace(" $", "&nbsp;")
      }

      content = "<p>"+cue+"<span>"+target+"</span>"+end+"</>"

      phrase.innerHTML = content
    }
  }
// ACTIVITY>


// <INDEX
  function Index() {
    this.buttonMap = (function createButtonMap() {
      var map = {}
      var buttons = document.querySelectorAll("#index div span")
      buttons = [].slice.call(buttons)

      buttons.forEach(addToMap)

      return map

      function addToMap(button) {
        map[button.textContent] = button
      }
    })()
  }

  Index.prototype.initialize = function initialize() {
    var section = document.getElementById("index")
    var selected = null
    var klass = {
      dimmed: "dimmed"
    , pressed: "pressed"
    , enabled: "enabled"
    , selected: "selected"
    , ignore: "ignore-rollover"
    }
    var startEvents = "mousedown touchstart"
    var moveEvents = "mousemove touchmove"
    var endEvents = "mouseup touchend touchCancel"
    /* TODO: Allow for multiple selections */
    var multipleSelection = false

    toggleEventListeners("on", section, startEvents, pressSound)

    function pressSound(event) {
      var target = event.target

      if ( target === selected
        || !target.classList.contains(klass.enabled) ) {
        return
      }

      section.classList.add(klass.ignore)
      treatDrag(event)

      toggleEventListeners("on", document, moveEvents, treatDrag)
      toggleEventListeners("on", document, endEvents, selectSound)
  
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
        toggleEventListeners("off", document, moveEvents, pressSound)
        toggleEventListeners("off", document, endEvents, pressSound)
 
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

    function startActivity(token) {
      activity.select(token)
      controller.goSection("activity")
    }
  }

  Index.prototype.enable = function enable(token) {
    this.buttonMap[token].classList.add("enabled")
  }
// INDEX



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

    controller.goSection("index")
  }
})()




// UTILITIES //

function toggleEventListeners(status, element, events, listener) {
  if (status === "on") {
    events.split(" ").forEach(addOneEventListener)
  } else if (status === "off") {
    events.split(" ").forEach(removeOneEventListener)
  }

  function addOneEventListener(event) {
    element.addEventListener(event, listener, false)
  }

  function removeOneEventListener(event) {
    element.removeEventListener(event, listener, false)
  }
}



// INITIALISATION //

phraseData.setDataFor("Б")
index.initialize()