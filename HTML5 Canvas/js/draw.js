window.onload = function() {
	var selectCanvas = document.getElementById("myCanvas");
	var brushPalette = document.getElementById("brushPalette");
	
	if(selectCanvas){
		selectCanvas.addEventListener('mousedown', start, false);
		selectCanvas.addEventListener('mouseup', stop, false);
		selectCanvas.addEventListener('mousemove', draw, false);
		brushPalette.addEventListener('click', function(e){changeStroke(e, this);}, false);
		
		var isDown  = false;
		var context = selectCanvas.getContext("2d");
		var canvasX, canvasY;
		context.lineWidth = 2;
	
		function start(e){
			isDown = true;
			context.beginPath();
			canvasX = e.pageX - selectCanvas.offsetLeft;
			canvasY = e.pageY - selectCanvas.offsetTop;
			context.moveTo(canvasX, canvasY);
		}
		
		function draw(e){
			if(isDown) {
				canvasX = e.pageX - selectCanvas.offsetLeft;
				canvasY = e.pageY - selectCanvas.offsetTop;
				context.lineTo(canvasX, canvasY);
				context.strokeStyle = selectedColor.value;
				context.stroke();
			}
		}
		
		function stop(e){
			isDown = false;
			context.closePath();
		}
		
		function changeStroke(e,obj){
			if(e.target.dataset.stroke){
				var parent = e.target.parentElement.children;
				for(var i in parent){
					if(parent.hasOwnProperty(i)){
						if(e.target.className === parent[i].className){
							e.target.style.border = "2px dotted";
						}else{
							parent[i].style.border = "none";
						}
					}
				}
				context.lineWidth = e.target.dataset.stroke;
			}
		}
	}
};

