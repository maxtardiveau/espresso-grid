#Espresso Grid

A ready to edit grid for tables and resources created by an Espresso Logic API, using a modern approach to iframes. For the complete documentation, view our [docs](http://docs.espressologic.com/espresso-grid), or to see it in action, download our [Espresso Grid Demo](https://github.com/EspressoLogicCafe/grid-demo).

### Getting Started
Outputting an extensible grid starts with loading the library, creating an iframe, and initializing the espressoGrid, which can be done with five lines of code:
```	
<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script src="https://eval.espressologic.com/grid/espresso-grid.min.js"></script>
<script>var frame = espressoGrid.init({id: 'uniqueID'});</script>
<iframe id="uniqueID" style="width:100%; height:600px" src="https://eval.espressologic.com/grid/?gridID=uniqueID"></iframe>
```
The default grid without an auth config object attribute is a readonly instance of our Espresso Demo API. The configuration object allows for a lot more container control, of course, and includes parameters for manipulating everything from grid styles to grid controls.
```javascript
var grid = espressoGrid.init({
	id: 'uniqueID',
	auth: {
		username: 'demo',
		password: 'Password1',
		apiBase: 'https://eval.espressologic.com/rest/livedemo/demo/v1',
		endpoint: 'customer'
	},
	columns: [{field:'name', displayName:'Name'}],
	controls: {
		undo: true,
		search:true,
		fetch: true,
		insert: true,
		save: true,
		del: true
	},
	controlBox: 'bottom',
	parentControls: { search:true, fetch: true },
	//css: { cssFileHandle: '//yourFileHref.css' },
	//js: { jsFileHandle: '//yourFileSrc.js' }
});
```