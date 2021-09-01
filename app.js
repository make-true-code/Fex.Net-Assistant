jQuery( document ).ready(function($){

  setInterval(function(){
	  $('.table-filter-menu .size').remove();
	  $('.table-filter-menu').append('<li class="size"></li>');
	 
	 if ($('.fs-table__files-count:contains("КБ")').length > 0) {
		 var sumkb = 0.0;
		 $('.fs-table__files-count:contains("КБ")').each(function() {
		  sumkb += parseFloat($(this).text());
			});
			//$('.table-manage-bar__wrapper').prepend(sumkb.toFixed(2) + ' КБ');
}

if ($('.fs-table__files-count:contains("МБ")').length > 0) {
    var summb = 0.0;
		 $('.fs-table__files-count:contains("МБ")').each(function() {
		  summb += parseFloat($(this).text());
			});
			var mbinkb = summb * 1024;
			//$('.table-manage-bar__wrapper').prepend(mbinkb.toFixed(2) + ' МБ  ');
}

if ($('.fs-table__files-count:contains("ГБ")').length > 0) {
    var sumgb = 0.0;
		 $('.fs-table__files-count:contains("ГБ")').each(function() {
		  sumgb += parseFloat($(this).text());
			});
			var gbinkb = (sumgb * 1024)*1024;
			//$('.table-manage-bar__wrapper').prepend(sumgb.toFixed(2) + ' ГБ  ');
}

var sum = (sumkb + mbinkb + gbinkb) / 1024;

var allsumGB = sum / 1024;

if (sum => 1000.00) {
	
	$('.table-filter-menu .size').text('Всего: ' + allsumGB.toFixed(2) + ' ГБ  ');
	
} else {
	
	$('.table-filter-menu .size').text(sum.toFixed(2) + ' МБ  ');
	
}


}, 5000);
	
	 	 });
	