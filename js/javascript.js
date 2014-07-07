$(document).ready(function(){

	$('html').magnificPopup({

		delegate: '.popup', 
		//removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				// var pathToFile = this.st.el.attr('id');
				// createPopup(pathToFile);
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true // allow opening popup on middle mouse click.
	});

	$(".block-title").hover(
		function(){
			$(this).css("transition", "all 1.0s ease-in-out");
			$(this).css("-webkit-transition", "all 1.0s ease-in-out");

			$(this).css("width", "93%");
			$(this).css("background", "#000333");
			$(this).data('initialText', $(this).text());
			$(this).text("You should be.");
		}, function(){
			$(this).css("transition", "all 1.0s ease-in-out");
			$(this).css("-webkit-transition", "all 1.0s ease-in-out");

			$(this).css("width", "50%");
			$(this).css("background", "#f75232");
			$(this).text($(this).data('initialText'));
		}
	);

	$("#launch-btn").hover(
		function(){
			$(this).css("transition", "all 0.2s ease-in-out");
			$(this).css("-webkit-transition", "all 0.2s ease-in-out");

			$('#in-production-caption span').css("color", "#E5F7FF");
			$('#in-production-caption span').text(inproduction);
		}, function(){
			$(this).css("transition", "all 0.2s ease-in-out");
			$(this).css("-webkit-transition", "all 0.2s ease-in-out");
			
			$('#in-production-caption span').css("color", "transparent");
		}
	);

	$(".about-preview h3").hover(
		function(){
			$("#jack_kasbeer").css("color","#DA9286");
			$(this).css("transition","all 0.2s ease-in-out");
			$(this).css("-webkit-transition","all 0.2s ease-in-out");
		},function(){
			$("#jack_kasbeer").css("color","#65B0A9");
			$(this).css("transition","all 0.2s ease-in-out");
			$(this).css("-webkit-transition","all 0.2s ease-in-out");
		}
	);
	$(".expand-article-icon").hover(
		function(){
			$(this).css("color","#DA9286");
			$(this).css("transition","all 0.2s ease-in-out");
			$(this).css("-webkit-transition","all 0.2s ease-in-out");
		},function(){
			$(this).css("color", "#624335");
			$(this).css("transition","all 0.2s ease-in-out");
			$(this).css("-webkit-transition","all 0.2s ease-in-out");
		}
	)
	$(".preview-contact").hover(
		function(){
			$(this).css("color", "#DA9286");
			$(this).css("transition","all 0.2s ease-in-out");
			$(this).css("-webkit-transition","all 0.2s ease-in-out");
		},function(){
			$(this).css("color", "#8F9595");
			$(this).css("transition","all 0.2s ease-in-out");
			$(this).css("-webkit-transition","all 0.2s ease-in-out");
		}
	)
});

/* In progress code.  NOT READY! */

// function writeHtmlByPara(arrayOfPara){
// 	document.getElementById('white-popup').innerHTML = '<h2 class="article-popup-title">' + arrayOfPara[1] + '</h2>';
// 	for (var i = 2; i < arrayOfPara.length; i++){
// 		if (arrayOfPara[i].split(" ").length <= 10){
// 			document.getElementById('white-popup').innerHTML += '<h4>' + arrayOfPara[i] + '</h4>';
// 		}
// 		else{
// 			document.getElementById('white-popup').innerHTML += '<p>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + arrayOfPara[i] + '</p>';
// 		}
// 	}
// };

// function createPopup(path){
// 	var txtFile = new XMLHttpRequest();
// 	var fileParsedByParagraph = false;
// 	var lines = [];
// 	txtFile.open("GET", path, false);
// 	txtFile.onreadystatechange = function(){
// 		if (txtFile.status == 200 && txtFile.readyState == 4){
// 			fileParsedByParagraph = true;
// 		}
// 	}
// 	txtFile.send();
// 	if (fileParsedByParagraph){
// 		lines = txtFile.responseText.split('#');
// 		writeHtmlByPara(lines);
// 	}
// 	else if (fileParsedByLine){
// 	}
// 	else{
// 		alert("Something went wrong! :(");
// 	}
// };
















// Need javascript to coordinate expand-article-icon color with border color of the article-box