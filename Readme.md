# Node Terminal

Node Terminal is a useful UNIX Command. 

## Installation

```
$ npm install node-terminal
```

## Features

Now, let’s describe the features:

* Simple run execution terminal command

## Usages

### Include the Node Terminal to your code

First, you must include the Node Terminal to your code.

```
var terminal = require( 'node-terminal' );
```

### Run the command

Define your command and execute it, like this :

```
var terminal = require( 'node-terminal' );
var command = "pwd";
res.json( {
	results: terminal.exec( command )
} );
console.log( terminal.exec( command ) );
```

Result in JSON :

```
{
	results: "/Users/mac/Documents/NodeJS/Ferds/tester-package"
}
```

Result in Terminal :

```
/Users/mac/Documents/NodeJS/Ferds/tester-package
```

You can return it into array, try this :

```
var terminal = require( 'node-terminal' );
var command = "ls -F";
res.json( {
	results: terminal.exec_to_array( command )
} );
```

Result in JSON :

```
{
	results: [
		"AndroidStudioProjects",
        "ApkProjects",
        "Applications",
        "Desktop",
        "Documents",
        "Downloads",
        "Library",
        "Movies",
        "Music",
        "NetBeansProjects",
        "Pictures",
        "Public",
        "Sites",
        "lib",
        "oradiag_mac",
        "oradiag_root",
        "pear",
        "untitled file"
	]
}
```

## Author

Ferdinand [<ferdshinodas@gmail.com>]