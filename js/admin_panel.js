( function( $ ) {

	$( '#acf-image_ba td:nth-child(4) input[type="text"]' ).attr( 'readonly', true );
	$( '#acf-image_ba .acf-button' ).on( 'click', function( event ) {

		var target = $( 'td:nth-child(4)' ).find( 'input[type="text"]' );
		var targetCount = $(target).length - 1;

		var addValue = '[ba_image num="' + targetCount + '"]';
		$( target ).eq( targetCount ).attr({
			'readonly': true,
			'value':  addValue,
			'onclick': 'this.select()',
			'title': '選択部分をコピー( ctrl + c )して貼り付けたい部分へペーストします。'
		});

	});

})( jQuery );