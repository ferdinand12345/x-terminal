'use strict';

const execSync = require( 'child_process' ).execSync;

/**
 * Writes the full pathname of the current working directory to the 
 * standard output.
 *
 * @return	string
 */
exports.current_path = function() {
	return exports.exec( "pwd" ).replace( "\n", "" );
}
// --------------------------------------------------------------------

/**
 * Exec
 *
 * @param	string
 * @return	string
 */
exports.exec = function( command ) {
	var options = {
		encoding: 'utf8'
	};
	
	return execSync( command, options );
}
// --------------------------------------------------------------------

/**
 * Exec To Array
 *
 * @param	string
 * @return	string
 */
exports.exec_to_array = function( command ) {
	return exports.exec( command ).split( "\n" );
}
// --------------------------------------------------------------------


/**
 * The software utility cron is a time-based job scheduler in Unix-like 
 * computer operating systems.
 *
 * @return	string
 */
exports.list_cronjob = function() {
	var results = [];
	var data = exports.exec( "crontab -l" ).split( "\n" );
	data.forEach( function( result ) {
		if ( result.length > 0 ) {
			results.push( result );
		}
	} );

	return results;
}
// --------------------------------------------------------------------

/**
 * Command to list computer files in Unix and Unix-like operating systems
 *
 * @param	string
 * @return	string
 */
exports.list_files = function( path = '' ) {
	if ( path == '' ) {
		path = exports.current_path();
	}
	var results = {
		files: [],
		folder: []
	};
	var data = exports.exec( " cd " + path + "; ls -F" ).split( "\n" );
	
	data.forEach( function( result ) {
		if ( result.length > 0 ) {
			var type = 'files';
			if ( result.substr( ( result.length - 1 ), result.length ) == '/' ) {
				type = 'folder';
			}

			if ( type == 'files' ) {
				results.files.push( result );
			}
			else if ( type == 'folder' ) {
				results.folder.push( result );
			}
		}
	} );

	return results;
}
// --------------------------------------------------------------------