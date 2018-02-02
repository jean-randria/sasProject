$(window).load(function()
{
	var folders = $('#home .folder');

	for (var i = 0; i < folders.length; i++)
	{
		$(folders[i]).css('animation-delay', 0.125 * i + 's');
		$(folders[i]).addClass('uk-invisible');
	}

	var files = $('#home .file');

	for (var i = 0; i < files.length; i++)
	{
		$(files[i]).css('animation-delay', 0.125 * i + 's');
		$(files[i]).addClass('uk-invisible');
	}
});

$(window).ready(function()
{
	var btn_block = new RevealFx(document.querySelector('#veille .btn-block'),
	{
		revealSettings :
		{
			bgcolor: '#878787',
			direction: 'lr',
			duration: 500,
			onCover: function(contentEl, revealerEl)
			{
				contentEl.style.opacity = 1;
			}
		}
	});

	btn_block.reveal();

	var home = document.querySelector('#home'),
		revealer = new RevealFx(home),
		closeCtrl = home.querySelector('.logo-block');

	var logo_block = new RevealFx(document.querySelector('#home .logo-block'),
	{
		revealSettings :
		{
			bgcolor: '#cb3a1a',
			direction: 'lr',
			duration: 500,
			onCover: function(contentEl, revealerEl)
			{
				contentEl.style.opacity = 1;
			}
		}
	});

	var folder_block = new RevealFx(document.querySelector('#home .folder-block'),
	{
		revealSettings :
		{
			bgcolor: '#878787',
			direction: 'lr',
			duration: 500,
			onCover: function(contentEl, revealerEl)
			{
				contentEl.style.opacity = 1;
			}
		}
	});

	$('#veille').click(function()
	{
		revealer.reveal(
		{
			bgcolor: '#cb3a1a',
			direction: 'rl',
			duration: 750,
			onCover: function(contentEl, revealerEl)
			{
				home.classList.add('home-open');
				contentEl.style.opacity = 1;

				btn_block.reveal(
				{
					onCover: function(contentEl, revealerEl)
					{
						contentEl.style.opacity = 0;
					}
				});
			},
			onComplete: function()
			{
				closeCtrl.addEventListener('click', closeForm);
				logo_block.reveal();
				folder_block.reveal();

				setTimeout(function()
				{
					$('#home .folder').removeClass('uk-invisible');
					$('#home .folder').addClass('uk-animation-slide-top-small');
				}, 1000);
			}
		});
	});

	function closeForm()
	{
		closeCtrl.removeEventListener('click', closeForm);
		home.classList.remove('home-open');
		revealer.reveal(
		{
			bgcolor: '#cb3a1a',
			direction: 'lr',
			duration: 750, 
			onCover: function(contentEl, revealerEl)
			{
				home.classList.remove('home-open');
				contentEl.style.opacity = 0;
				btn_block.reveal(
				{
					onCover: function(contentEl, revealerEl)
					{
						contentEl.style.opacity = 1;
					}
				});
			}
		});

		logo_block.reveal(
		{
			onCover: function(contentEl, revealerEl)
			{
				contentEl.style.opacity = 0;
			}
		});

		folder_block.reveal(
		{
			onCover: function(contentEl, revealerEl)
			{
				contentEl.style.opacity = 0;
			}
		});

		file_block.reveal(
		{
			onCover: function(contentEl, revealerEl)
			{
				contentEl.style.opacity = 0;
			}
		});

		iframe_block.reveal(
		{
			onCover: function(contentEl, revealerEl)
			{
				contentEl.style.opacity = 0;
			}
		});
	}

	var file_block = new RevealFx(document.querySelector('#home .file-block')),
	folders = $('#home .folder');
	for (var i = 0; i < folders.length; i++)
	{
		$(folders[i]).click(function()
		{
			file_block.reveal(
			{
				bgcolor: '#878787',
				duration: 500,
				onStart: function(contentEl, revealerEl) { contentEl.style.opacity = 0; },
				onCover: function(contentEl, revealerEl) { contentEl.style.opacity = 1; },
				onComplete: function()
				{					
					setTimeout(function()
					{
						$('#home .file').removeClass('uk-invisible');
						$('#home .file').addClass('uk-animation-slide-top-small');
					}, 250);
				}
			});
		});
	}

	var iframe_block = new RevealFx(document.querySelector('#home .iframe-block')),
	files = $('#home .file');
	for (var i = 0; i < files.length; i++)
	{
		$(files[i]).click(function()
		{
			iframe_block.reveal(
			{
				bgcolor: '#cb3a1a',
				duration: 500,
				onStart: function(contentEl, revealerEl) { contentEl.style.opacity = 0; },
				onCover: function(contentEl, revealerEl) { contentEl.style.opacity = 1; }
			});
		});
	}
});