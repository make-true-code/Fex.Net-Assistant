jQuery( document ).ready(function($){

  setInterval(function(){
	  $('.table-filter-menu .size').remove();
	  $('.table-filter-menu').append('<li class="size"></li>');
	 
	 if ($('.fs-table__files-count:contains("КБ")').length > 0) {
		 var sumkb = 0.0;
		 $('.fs-table__files-count:contains("КБ")').each(function() {
		  sumkb += parseFloat($(this).text());
			});
}

if ($('.fs-table__files-count:contains("МБ")').length > 0) {
    var summb = 0.0;
		 $('.fs-table__files-count:contains("МБ")').each(function() {
		  summb += parseFloat($(this).text());
			});
			var mbinkb = summb * 1024;
}

if ($('.fs-table__files-count:contains("ГБ")').length > 0) {
    var sumgb = 0.0;
		 $('.fs-table__files-count:contains("ГБ")').each(function() {
		  sumgb += parseFloat($(this).text());
			});
			var gbinkb = (sumgb * 1024)*1024;
}


if (gbinkb && mbinkb && sumkb) {
	var sum =  ((gbinkb + mbinkb + sumkb) / 1024) / 1024;
	$('.table-filter-menu .size').text('Всего: ' + sum.toFixed(2) + ' ГБ  ');
	
} else if ((gbinkb && sumkb) && (gbinkb != mbinkb)) {
	
	var sum =  ((gbinkb + sumkb) / 1024) / 1024;
	$('.table-filter-menu .size').text('Всего: ' + sum.toFixed(2) + ' ГБ  ');
	
} else if ((mbinkb && sumkb) && (mbinkb != gbinkb)) {
	
	var sum =  (mbinkb + sumkb) / 1024;
	if (sum > 1024) {
	var sum =  ((mbinkb + sumkb) / 1024) / 1024;
	$('.table-filter-menu .size').text('Всего: ' + sum.toFixed(2) + ' ГБ  ');
	} else {
		$('.table-filter-menu .size').text('Всего: ' + sum.toFixed(2) + ' МБ  ');
	}

} else if ((gbinkb && mbinkb) && (gbinkb != sumkb)) {
	
	var sum =  ((gbinkb + mbinkb) / 1024) / 1024;
	$('.table-filter-menu .size').text('Всего: ' + sum.toFixed(2) + ' ГБ  ');
	
} else if (sumkb) {
	
	var sum = sumkb;	
	if (sum < 1024) {
		$('.table-filter-menu .size').text('Всего: ' + sum.toFixed(2) + ' КБ  ');
	} 
	if (sum > 1024 && sum < 1048576){
		var sum = sumkb / 1024;
		$('.table-filter-menu .size').text('Всего: ' + sum.toFixed(2) + ' МБ  ');
	}
	if (sum > 1048576) {
		var sum = (sumkb / 1024) / 1024;
		$('.table-filter-menu .size').text('Всего: ' + sum.toFixed(2) + ' ГБ  ');
		}
		
} else if (mbinkb) {
	
	var sum = (mbinkb) / 1024;
	if (sum < 1024) {
	$('.table-filter-menu .size').text('Всего: ' + sum.toFixed(2) + ' МБ  ');
	}
	if (sum > 1024) {
		var sum = ((mbinkb) / 1024) / 1024;
		$('.table-filter-menu .size').text('Всего: ' + sum.toFixed(2) + ' ГБ  ');
	}

} else if (gbinkb) {
	
	var sum = sumgb;
	$('.table-filter-menu .size').text('Всего: ' + sum.toFixed(2) + ' ГБ  ');
	
} 
	

}, 5000);
	
	 	 });
	