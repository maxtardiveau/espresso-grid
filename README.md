Espresso Frames
==========
A ready to edit grid for tables and resources created by an Espresso Logic API, using jQuery and a modern approach to iframes.

### Getting Started
Outputting an extensible grid starts with loading the library, creating an iframe, and initializing the espressoFrames, which can be done with five lines of code:
```			
<script type="text/javascript" src="espresso-frames.js"></script>
<script type="text/javascript">});
    var frame = espressoFrames.init({id: 'iframeId'}); //<-- config object
</script>
<iframe id="iframeId" src="https://block.espressologic.com"></iframe>
```
The default grid without an auth config object attribute is a readonly instance of our Espresso Demo API. The configuration object allows for a lot more container control, of course, and includes parameters for manipulating everything from grid styles to grid controls.
```javascript
var frame = espressoFrames.init({
	id: 'demoFrame',
	auth: {
		username: 'demo',
		password: 'Password1',
		apiBase: 'https://eval.espressologic.com/rest/livedemo/demo/v1',
		endpoint: 'demo:customer'
	},
	//columns: [{field:'name', displayName:'Name'}],
	controls: {
		//undo: true,
		//search:true,
		//fetch: true,
		//insert: true,
		//save: true,
		//del: true
	},
	controlBox: 'bottom',
	//parentControls: { undo: true, search:true, fetch: true, insert: true, save: true, del: true },
	//css: { fileHandle: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css' },
	//js: { fileHandle: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js' }
});
```