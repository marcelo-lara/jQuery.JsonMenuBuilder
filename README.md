# jQuery.JsonMenuBuilder
Easy creation of a navigation menu from Json data.


This jQuery plugin is intented to create a menu to use with MetisMenu (https://github.com/onokumus/metisMenu)

### Sample Usage
```javascript
$(function () {
	$('#side-menu').loadJsonMenu(jsonMenu).metisMenu();
});
```

### Sample json data
 ```javascript
var jsonMenu = {
	"sidemenu": [
		{ "name": "Dashboard", "link": "/", "icon": "fa-dashboard" },
		{
			"name": "Charts", "link": "#", "icon": "fa-bar-chart-o", "items": [
				   { "name": "Flot Chart", "link": "/" },
				   { "name": "Morris Chart", "link": "/" }]
		},
		{ "name": "Tables", "link": "/", icon: "fa-table" },
		{ "name": "Forms", "link": "/", icon: "fa-form" },
	]
};
```
