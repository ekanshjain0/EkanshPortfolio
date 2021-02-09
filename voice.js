const Btn=document.querySelector('.talk');
const content=document.querySelector('.content');
const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;

const reconginition = new SpeechRecognition();
reconginition.onstart = function(){
    console.log("voice is activated");

};
reconginition.onresult = function(event){
const current=event.resultIndex;
const transcript=event.results[current][0].transcript;
content.textContent=transcript;
};


Btn.addEventListener('click',()=>{
reconginition.start();
});