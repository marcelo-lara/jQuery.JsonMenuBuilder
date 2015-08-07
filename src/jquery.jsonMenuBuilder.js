	(function($) {
		'use strict';

		$.fn.jsonMenuBuilder = function (jsonMenu) {

			// skip if no json data
			if (jsonMenu == undefined || jsonMenu.length == 0) return this;

			// iterate first level
			var $this = this;
			$.each(data.sidemenu, function() {
				$this.append(loadMenu(this));
			});
			return this;
		};


		var loadMenu = function (menuItem, level) {

			var $a = $("<a>", { href: menuItem.link, html: " " + menuItem.name });

			if (menuItem.icon != undefined) {
				var ic = $("<i>").addClass("fa "+menuItem.icon);
				$a.prepend(ic);
			}

			var $li = $("<li>").append($a);

			if (menuItem.sub) {
				var $ul = $("<ul>");

				if (level == undefined) level = 2;
				else level++;

				$.each(menuItem.sub, function () {
					$ul.append(loadMenu(this, level));
				});

				switch (level) {
					case 2: $ul.addClass("nav nav-second-level"); break;
					case 3: $ul.addClass("nav nav-third-level"); break;
				}
				$a.append($("<span>").addClass("fa arrow"));
				$li.append($ul);
			}

			return $li;
		};


	})(jQuery);