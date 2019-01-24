window.onload = function (){
	let btnLeft = document.querySelector('.main input[name=left]');
	let btnRigth = document.querySelector('.main input[name=right]');
	let imgArr = document.querySelectorAll('.photos img');
	let i = 0;
	btnRigth.onclick = goRigth;									
	btnLeft.onclick = goLeft;						
	function goRigth() {
		imgArr[i].classList.remove('showed');
		i++
		if (i >= imgArr.length -1 ) {i = 0;}
		imgArr[i].classList.add('showed');
	}
	function goLeft() {
		imgArr[i].classList.remove('showed');
		i--;
		if (i < 0 ) {i = 	imgArr.length -1;}
		imgArr[i].classList.add('showed');
	}											

}