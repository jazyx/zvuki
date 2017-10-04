;(function (){
  var getUserMedia = ( navigator.getUserMedia ||
              navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia ||
              navigator.msGetUserMedia);

  var constraints = { audio: true }
  var record = document.querySelector('.record');
  var stop = document.querySelector('.stop');
  var soundClips = document.querySelector('.sound-clips');

  var audioContext = new (window.AudioContext || webkitAudioContext)()
  var mediaRecorder
    , chunks

  if (!audioContext || !getUserMedia) {
    // TODO: Indicate that recording is not possible
    console.log("Recording not supported")
    return
  }

  getUserMedia(constraints, startUsingAudio, treatError)
  record.addEventListener("click", startRecording, false)
  stop.addEventListener("click", stopRecording, false)

  function startUsingAudio(stream) {
    mediaRecorder = new MediaRecorder(stream);
  }

  function treatError(error) {
    console.log("Error", error)
  }

  function startRecording(event) {
    var chunks = [];

    mediaRecorder.addEventListener("stop", treatRecording, false)
    mediaRecorder.start()
    console.log("Recorder started. State:", mediaRecorder.state);
    record.classList.add("recording")

    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    }
  }

  function stopRecording(event) {
    var chunks = [];

    mediaRecorder.stop();
    console.log("Recorder stopped. State:", mediaRecorder.state);
    record.classList.remove("recording")
  }

  function treatRecording(event) {

  }
})()