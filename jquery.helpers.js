/*! Copyright (c) 2013 Warren Wilson
 * Licensed under the MIT License.
 *
 * Version: 1
 * 
 * Requires: 1.2.2+
 */

// GLOBAL OBJECT TO CONTAIN VARIOUS COMMON FUNCTIONS
jQuery.extend({
	isBoolean: function(obj) {
		return typeof obj == 'boolean';
	},
	isNull: function(obj) {
		return obj === null;
	},
	isNumber: function(obj) {
		return typeof obj == 'number' && isFinite(obj);
	},
	isObject: function(obj) {
		return typeof obj == 'object' || this.isFunction(obj);
	},
	isString: function(obj) {
		return typeof obj == 'string';
	},
	isUndefined: function(obj) {
		return typeof obj == 'undefined';
	},
	isDefined: function(obj){
		return (!(!( obj||false )));
	},
	sizeOf: function(obj){
		var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
	}
});

;(function($) {
	$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
	};
	$.fn.hasAttr = function(w) {
		var has = false;
		this.each(function() {
      var attr = $(this).attr(w);
      // For some browsers, `attr` is undefined; for others,
			// `attr` is false.  Check for both.
			if (typeof attr !== 'undefined' && attr !== false) {
			    has = true;
			}
    });
    return has;
	};
})(jQuery);