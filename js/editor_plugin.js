(function($){

		tinymce.create(
			'tinymce.plugins.AddPinterest',
			{
				init: function(ed, url)
				{
					ed.addButton(
						'add_ba_image',
						{
							title: 'Set Before & After image content.',
							image: url + '/images/cl.gif',
							cmd: 'add_ba_image_cmd'
						}
					);

					ed.addCommand( 'add_ba_image_cmd', function()
					{
						ed.windowManager.open(
							{
								url: path + 'add_ba.html',
								width: 500,
								height: 450,
								title: 'Before & After image settings'
							},
							{
								custom_param: 1
							});
					});


					ed.addButton(
						'input_text',
						{
							title: 'Set Pinterest Pins and Boards.',
							image: url + '/images/Pinterest-badge-20px.png',
							cmd: 'input_text_cmd'
						}
					);

					ed.addCommand( 'input_text_cmd', function()
					{
						ed.windowManager.open(
							{
								url: url + '/view.html',
								width: 500,
								height: 450,
								title: 'Pins and Boards settings'
							},
							{
								custom_param: 1
							});
					});
				},
				createControl: function(n,cm)
				{
					return null;
				}
			}
		);
		tinymce.PluginManager.add(
			'custom_button_script',
			tinymce.plugins.AddPinterest
		);

})(jQuery);