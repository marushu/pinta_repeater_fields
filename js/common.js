( function( $, window, document, _ ) {

	$( document ).on( 'click', '#submit', function () {

		$( '#errText' ).empty();
		var pinUrl = _.escape( $( '#p_url' ).val() );
		var pinAlign = _.escape( $( 'input[name="p_align"]:checked' ).val() );
		var pinSize = _.escape( $( 'input[name="p_size"]:checked' ).val() );

		var pinType = pinUrl.indexOf( 'https:\/\/www\.pinterest\.com\/pin\/' ) == -1 ? 'p_board' : 'p_pin';
		var pin_align, pin_size, pinWidth, dataPinBoardWidth, dataPinScaleHeight, dataPinScaleWidth, shortcodeElm;

		//console.log(pinAlign);
		console.log(pinSize);
		//console.log(pinType);

		if( ! ( pinUrl ) ) {

			$( '#errText' ).empty().text( 'PinterestのURLは必須です。' );
			return false;

		}

		if( pinUrl.indexOf('https:\/\/www\.pinterest\.com') == -1 ) {

			$( '#errText' ).empty().text( 'PinterestのBoardまたはPinのURLを入力してください。' );
			return false;

		}

		var inputTag = '[pin align="' + pinAlign + '" url="' + pinUrl + '" data_type="' + pinType + '" size="' + pinSize + '"]';

		top.tinymce.activeEditor.selection.setContent( inputTag );
		top.tinymce.activeEditor.windowManager.close();
		return false;

	});

	$( document ).on( 'click', '#cancel', function() {

		$('#p_url').val('');
		//$('#LavelName').val('');
		$('#errText').empty();
		top.tinymce.activeEditor.windowManager.close();

		return false;

	});

})( jQuery, window, document, _ );
