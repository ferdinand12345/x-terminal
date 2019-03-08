'use strict';

const execSync = require( 'child_process' ).execSync;

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