var CATEGORIES = [ 'FRACTIONS TO DECIMALS', 
					'DECIMALS TO FRACTIONS', 
					'GCF', 
					'LCF', 
					'PROPORTIONS' ]; 

var OPTIONS = [ 
				// first row 
				'<sup>5</sup>&frasl;<sub>8</sub> to decimal', 
				'.2 to fraction', 
				'GFC of 21 and 49', 
				'LCF of 6 and 14', 
				'15/18', 

				// second row 
				'<sup>46</sup>&frasl;<sub>8</sub> to decimal', 
				'.58 to fraction', 
				'GCF of 13 and 7', 
				'LCM of 8 and 12', 
				'6/7', 

				// third row 
				'3 <sup>2</sup>&frasl;<sub>5</sub> to decimal', 
				'2.14 to fraction', 
				'GCF of 20, 16, and 36', 
				'LCM of 15 and 18', 
				'9/8', 

				// fourth row 
				'Name a technique that can be used to convert fractions to decimals', 
				'Name a technique that can be used to convert decimals to fractions', 
				'State the definition of GFC', 
				'State the definition of LCM', 
				'What does a proportion consist of?', 

				// fifth row 
				'In Mr. Brown\'s class, <sup>2</sup>&frasl;<sub>3</sub> of the students are wearing red shirts and <sup>1</sup>&frasl;<sub>4</sub> are wearing blue shirts. What fraction of the students does this make all together? ', 
				'Henry found 0.18 cents in his wallet and found another 0.78 cents in his car. What is the total amount that Henry found? Convert the total to a fraction.', 
				'Regan is preparing sales kits for her sales representatives to show to customers. She has 20 samples of tile and 12 samples of carpet, and she wants to create identical sales kits, with no samples left over. What is the greatest number of sales kits Regan can prepare?', 
				'Martin is buying AA batteries and D batteries. The store sells AA batteries in packs of 3 and D batteries in packs of 8. If Martin wishes to buy the same number of AA and D batteries, what is the smallest number of each battery type that he can buy?', 
				'Do these ratios form a proportion?<br><br>2 men to 20 women<br>3 men to 19 women'

				]; 

$(document).ready(function() {
	var w = window.innerWidth; 
	var h = window.innerHeight; 

	for(var i = 0; i<30; i++) {
		var c = ' class="option"'; 
		var l = Math.floor(i/5)*100; 
		var d = ' id="i'+i+'"'; 
		if(i<5) {
			c = ' class="category"'; 
			l = CATEGORIES[i]; 
		}

		$('body').append('<block'+c+''+d+'>'+l+'</block>'); 
	}

	$('body').append('<box></box>'); 

	$('block').css({ 
		'width':((w/5)-60)+'px', 
		'height':((h/6)-50)+'px', 
	}); 

	$('block.option').on('click',function() {
		$(this).attr('class','off'); 
		var id = $(this).attr('id'); 
		$('box').fadeIn().html('<table width="100%" height="100%" border="0"><tr><th>'+OPTIONS[parseInt(id.substring(1,id.length+1))-5]+'</th></tr></table>'); 
	}); 

	$('box').css({
		'width':(w-60)+'px', 
		'height':(h-60)+'px' 
	}).hide(); 
	$('box').on('click', function() {
		$(this).hide(); 
	}); 
}); 