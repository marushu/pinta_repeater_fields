( function( $ ) {

	var counter = 0;
	$( '#acf-image_ba .acf-button' ).on( 'click', function( event ) {

		var target = $( 'td:nth-child(4)' ).find( 'input[type="text"]' );
		var addValue = '[ba_image num="' + counter + '"]';
		$( target ).eq( counter ).attr({
			'readonly': true,
			'value':  addValue,
			'onclick': 'this.select()',
			'title': '選択部分をコピー( ctrl + c )して貼り付けたい部分へペーストします。'
		});

		counter++;

	});

})( jQuery );