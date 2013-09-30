/**
 *  TrinteJS CSS Themes Module
 *
 *  @project     TrinteJS
 *  @version     0.0.1
 *  @package     trinte-themes
 *  @author      Aleksejs Gordejevs
 *  @created     2013-09-24 03:12:02
 * 
 *  Created by init script
 *  App based on TrinteJS MVC framework
 *  TrinteJS homepage http://www.trintejs.com
 **/

/**
 * Library version.
 **/

exports.version = '0.0.1';

/**
 * Get themes directory
 **/
exports.getThemesDir = function() {
    return __dirname + '/../themes';
};

/**
 * Get public directory
 **/
exports.getPiblicDir = function() {
    return exports.getThemesDir() + '/public';
};

/**
 * Get themes directory
 * 
 * @param {String} theme
 **/
exports.getCurThemeDir = function(theme) {
    return exports.getThemesDir() + '/' + theme;
};

/**
 * Get theme style files
 * 
 * @param {String} theme
 * @param {String} engine
 **/
exports.getThemeCSSFiles = function(theme, engine) {
    var engine = engine ? engine : 'css';
    var cThemeDir = exports.getThemesDir() + '/' + theme + '/' + engine;
    return fs.readdirSync(cThemeDir);
};