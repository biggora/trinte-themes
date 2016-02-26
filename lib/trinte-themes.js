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
var fs = require('fs');
var pkg = require('../package.json');

exports.version = pkg.version;

/**
 * Get themes directory
 **/
exports.getThemesDir = function () {
    return __dirname + '/../themes';
};

/**
 * Get public directory
 **/
exports.getPiblicDir = function () {
    return __dirname + '/../public';
};

/**
 * Get themes directory
 *
 * @param {String} theme
 **/
exports.getCurThemeDir = function (theme) {
    theme = (theme || 'default');
    if (fs.existsSync(exports.getThemesDir() + '/' + theme)) {
        return exports.getThemesDir() + '/' + theme;
    }
    else {
        return exports.getThemesDir() + '/default';
    }
};

/**
 * Get theme style files
 *
 * @param {String} theme
 * @param {String} engine
 * @return {Array} files
 **/
exports.getThemeCSSFiles = function (theme, engine) {
    var engine = engine ? engine : 'css';
    var cThemeDir = exports.getThemesDir() + '/' + theme;
    return fs.readdirSync(cThemeDir);
};