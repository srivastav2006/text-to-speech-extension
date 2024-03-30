document.addEventListener('DOMContentLoaded', function() {
  const inputText = document.getElementById('input-text');
  const convertBtn = document.getElementById('convert-btn');
  const audioPlayer = document.getElementById('audio-player');
  const speechSynthesis = window.speechSynthesis;
  let speed;
  convertBtn.addEventListener('click', function() {
      const text = inputText.value.trim();
      if (text !== '') {
          convertTextToSpeech(text);
      }
  });



  function convertTextToSpeech(text) {
      const speechUtterance = new SpeechSynthesisUtterance(text);
      
     
      speechSynthesis.speak(speechUtterance);

      
      audioPlayer.src = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
  }
});
