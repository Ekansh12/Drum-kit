window.addEventListener("keydown",(event)=>{
	let key=document.getElementsByClassName(`key-${event.key}`)[0];
	let audio=document.getElementsByClassName(`key-${event.key}`)[1];
	if(key){
		key.classList.add("boom");
		audio.currentTime=0;
		audio.play();
		setTimeout(()=>{
			key.classList.remove("boom");
		},100)
	}
})