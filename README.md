jQuery Helpers

Simple library to extend jQuery with various helpful methods.

Includes:

===============================================

Type Checking
 - isBoolean: returns true if object is a boolean
 - isNull: returns true if object is a null value
 - isNumber: returns true if object is a whole number
 - isObject: returns true if object is an object or function
 - isString: returns true if object is a string
 - isUndefined: returns true if object is undefined
 - isDefined: returns true if object is defined

 - examples:
   
   if ($.isDefined(obj)) { ... }

Array/Object Length
 - sizeOf: returns the length of items in an array or simple object (example: $.sizeOf([array]))

Preloading of Images
 - preload: given a list of paths, will preload images for each path (example: $(['path', 'path']).preload())

Attribute Checking
 - hasAttr: returns true if element has the provided attribute (example: $('.class').hasAttr('attribute'))
