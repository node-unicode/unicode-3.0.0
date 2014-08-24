# Unicode v3.0.0 data

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v3.0.0’s categories, scripts, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](http://mths.be/node-unicode-data) project. Please report any bugs or requests [in the appropriate issue tracker](https://github.com/mathiasbynens/node-unicode-data/issues).

## Installation

```bash
npm install unicode-3.0.0 --save
```

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](http://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
var regenerate = require('regenerate');
var set = regenerate()
  .add(require('unicode-6.3.0/scripts/Arabic/code-points')) // or `…/symbols`, doesn’t matter
  .add(require('unicode-6.3.0/scripts/Greek/code-points')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// var regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
var codePoints = require('unicode-3.0.0/categories/Lu/code-points');
// Get an array of symbols (strings) in a given Unicode category:
var symbols = require('unicode-3.0.0/categories/Lu/symbols');
// Get a regular expression that matches any symbol in a given Unicode category:
var regex = require('unicode-3.0.0/categories/Lu/regex');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
var category = require('unicode-3.0.0/categories')[ 0x41 ];
// Get an array of all code points with the `Bidi_ON` bidi property:
var on = require('unicode-3.0.0/bidi/ON/code-points');
// Get the directionality of a given code point:
var directionality = require('unicode-3.0.0/bidi')[ 0x41 ];

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, and scripts is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v3.0.0:

```js
// properties:

require('unicode-3.0.0/properties/Any/code-points');
require('unicode-3.0.0/properties/Any/symbols');
require('unicode-3.0.0/properties/Any/regex');

require('unicode-3.0.0/properties/Assigned/code-points');
require('unicode-3.0.0/properties/Assigned/symbols');
require('unicode-3.0.0/properties/Assigned/regex');

require('unicode-3.0.0/properties/ASCII/code-points');
require('unicode-3.0.0/properties/ASCII/symbols');
require('unicode-3.0.0/properties/ASCII/regex');

// categories:

require('unicode-3.0.0/categories')[ codePoint ]; // lookup array

require('unicode-3.0.0/categories/Cc/code-points');
require('unicode-3.0.0/categories/Cc/symbols');
require('unicode-3.0.0/categories/Cc/regex');

require('unicode-3.0.0/categories/C/code-points');
require('unicode-3.0.0/categories/C/symbols');
require('unicode-3.0.0/categories/C/regex');

require('unicode-3.0.0/categories/Zs/code-points');
require('unicode-3.0.0/categories/Zs/symbols');
require('unicode-3.0.0/categories/Zs/regex');

require('unicode-3.0.0/categories/Z/code-points');
require('unicode-3.0.0/categories/Z/symbols');
require('unicode-3.0.0/categories/Z/regex');

require('unicode-3.0.0/categories/Po/code-points');
require('unicode-3.0.0/categories/Po/symbols');
require('unicode-3.0.0/categories/Po/regex');

require('unicode-3.0.0/categories/P/code-points');
require('unicode-3.0.0/categories/P/symbols');
require('unicode-3.0.0/categories/P/regex');

require('unicode-3.0.0/categories/Sc/code-points');
require('unicode-3.0.0/categories/Sc/symbols');
require('unicode-3.0.0/categories/Sc/regex');

require('unicode-3.0.0/categories/S/code-points');
require('unicode-3.0.0/categories/S/symbols');
require('unicode-3.0.0/categories/S/regex');

require('unicode-3.0.0/categories/Ps/code-points');
require('unicode-3.0.0/categories/Ps/symbols');
require('unicode-3.0.0/categories/Ps/regex');

require('unicode-3.0.0/categories/Pe/code-points');
require('unicode-3.0.0/categories/Pe/symbols');
require('unicode-3.0.0/categories/Pe/regex');

require('unicode-3.0.0/categories/Sm/code-points');
require('unicode-3.0.0/categories/Sm/symbols');
require('unicode-3.0.0/categories/Sm/regex');

require('unicode-3.0.0/categories/Pd/code-points');
require('unicode-3.0.0/categories/Pd/symbols');
require('unicode-3.0.0/categories/Pd/regex');

require('unicode-3.0.0/categories/Nd/code-points');
require('unicode-3.0.0/categories/Nd/symbols');
require('unicode-3.0.0/categories/Nd/regex');

require('unicode-3.0.0/categories/N/code-points');
require('unicode-3.0.0/categories/N/symbols');
require('unicode-3.0.0/categories/N/regex');

require('unicode-3.0.0/categories/Lu/code-points');
require('unicode-3.0.0/categories/Lu/symbols');
require('unicode-3.0.0/categories/Lu/regex');

require('unicode-3.0.0/categories/L/code-points');
require('unicode-3.0.0/categories/L/symbols');
require('unicode-3.0.0/categories/L/regex');

require('unicode-3.0.0/categories/LC/code-points');
require('unicode-3.0.0/categories/LC/symbols');
require('unicode-3.0.0/categories/LC/regex');

require('unicode-3.0.0/categories/Sk/code-points');
require('unicode-3.0.0/categories/Sk/symbols');
require('unicode-3.0.0/categories/Sk/regex');

require('unicode-3.0.0/categories/Pc/code-points');
require('unicode-3.0.0/categories/Pc/symbols');
require('unicode-3.0.0/categories/Pc/regex');

require('unicode-3.0.0/categories/Ll/code-points');
require('unicode-3.0.0/categories/Ll/symbols');
require('unicode-3.0.0/categories/Ll/regex');

require('unicode-3.0.0/categories/So/code-points');
require('unicode-3.0.0/categories/So/symbols');
require('unicode-3.0.0/categories/So/regex');

require('unicode-3.0.0/categories/Pi/code-points');
require('unicode-3.0.0/categories/Pi/symbols');
require('unicode-3.0.0/categories/Pi/regex');

require('unicode-3.0.0/categories/No/code-points');
require('unicode-3.0.0/categories/No/symbols');
require('unicode-3.0.0/categories/No/regex');

require('unicode-3.0.0/categories/Pf/code-points');
require('unicode-3.0.0/categories/Pf/symbols');
require('unicode-3.0.0/categories/Pf/regex');

require('unicode-3.0.0/categories/Lo/code-points');
require('unicode-3.0.0/categories/Lo/symbols');
require('unicode-3.0.0/categories/Lo/regex');

require('unicode-3.0.0/categories/Lt/code-points');
require('unicode-3.0.0/categories/Lt/symbols');
require('unicode-3.0.0/categories/Lt/regex');

require('unicode-3.0.0/categories/Cn/code-points');
require('unicode-3.0.0/categories/Cn/symbols');
require('unicode-3.0.0/categories/Cn/regex');

require('unicode-3.0.0/categories/Lm/code-points');
require('unicode-3.0.0/categories/Lm/symbols');
require('unicode-3.0.0/categories/Lm/regex');

require('unicode-3.0.0/categories/Mn/code-points');
require('unicode-3.0.0/categories/Mn/symbols');
require('unicode-3.0.0/categories/Mn/regex');

require('unicode-3.0.0/categories/M/code-points');
require('unicode-3.0.0/categories/M/symbols');
require('unicode-3.0.0/categories/M/regex');

require('unicode-3.0.0/categories/Me/code-points');
require('unicode-3.0.0/categories/Me/symbols');
require('unicode-3.0.0/categories/Me/regex');

require('unicode-3.0.0/categories/Cf/code-points');
require('unicode-3.0.0/categories/Cf/symbols');
require('unicode-3.0.0/categories/Cf/regex');

require('unicode-3.0.0/categories/Mc/code-points');
require('unicode-3.0.0/categories/Mc/symbols');
require('unicode-3.0.0/categories/Mc/regex');

require('unicode-3.0.0/categories/Zl/code-points');
require('unicode-3.0.0/categories/Zl/symbols');
require('unicode-3.0.0/categories/Zl/regex');

require('unicode-3.0.0/categories/Zp/code-points');
require('unicode-3.0.0/categories/Zp/symbols');
require('unicode-3.0.0/categories/Zp/regex');

require('unicode-3.0.0/categories/Nl/code-points');
require('unicode-3.0.0/categories/Nl/symbols');
require('unicode-3.0.0/categories/Nl/regex');

require('unicode-3.0.0/categories/Cs/code-points');
require('unicode-3.0.0/categories/Cs/symbols');
require('unicode-3.0.0/categories/Cs/regex');

require('unicode-3.0.0/categories/Co/code-points');
require('unicode-3.0.0/categories/Co/symbols');
require('unicode-3.0.0/categories/Co/regex');

// bidi:

require('unicode-3.0.0/bidi')[ codePoint ]; // lookup array

require('unicode-3.0.0/bidi/BN/code-points');
require('unicode-3.0.0/bidi/BN/symbols');
require('unicode-3.0.0/bidi/BN/regex');

require('unicode-3.0.0/bidi/S/code-points');
require('unicode-3.0.0/bidi/S/symbols');
require('unicode-3.0.0/bidi/S/regex');

require('unicode-3.0.0/bidi/B/code-points');
require('unicode-3.0.0/bidi/B/symbols');
require('unicode-3.0.0/bidi/B/regex');

require('unicode-3.0.0/bidi/WS/code-points');
require('unicode-3.0.0/bidi/WS/symbols');
require('unicode-3.0.0/bidi/WS/regex');

require('unicode-3.0.0/bidi/ON/code-points');
require('unicode-3.0.0/bidi/ON/symbols');
require('unicode-3.0.0/bidi/ON/regex');

require('unicode-3.0.0/bidi/ET/code-points');
require('unicode-3.0.0/bidi/ET/symbols');
require('unicode-3.0.0/bidi/ET/regex');

require('unicode-3.0.0/bidi/CS/code-points');
require('unicode-3.0.0/bidi/CS/symbols');
require('unicode-3.0.0/bidi/CS/regex');

require('unicode-3.0.0/bidi/ES/code-points');
require('unicode-3.0.0/bidi/ES/symbols');
require('unicode-3.0.0/bidi/ES/regex');

require('unicode-3.0.0/bidi/EN/code-points');
require('unicode-3.0.0/bidi/EN/symbols');
require('unicode-3.0.0/bidi/EN/regex');

require('unicode-3.0.0/bidi/L/code-points');
require('unicode-3.0.0/bidi/L/symbols');
require('unicode-3.0.0/bidi/L/regex');

require('unicode-3.0.0/bidi/NSM/code-points');
require('unicode-3.0.0/bidi/NSM/symbols');
require('unicode-3.0.0/bidi/NSM/regex');

require('unicode-3.0.0/bidi/R/code-points');
require('unicode-3.0.0/bidi/R/symbols');
require('unicode-3.0.0/bidi/R/regex');

require('unicode-3.0.0/bidi/AL/code-points');
require('unicode-3.0.0/bidi/AL/symbols');
require('unicode-3.0.0/bidi/AL/regex');

require('unicode-3.0.0/bidi/AN/code-points');
require('unicode-3.0.0/bidi/AN/symbols');
require('unicode-3.0.0/bidi/AN/regex');

require('unicode-3.0.0/bidi/LRE/code-points');
require('unicode-3.0.0/bidi/LRE/symbols');
require('unicode-3.0.0/bidi/LRE/regex');

require('unicode-3.0.0/bidi/RLE/code-points');
require('unicode-3.0.0/bidi/RLE/symbols');
require('unicode-3.0.0/bidi/RLE/regex');

require('unicode-3.0.0/bidi/PDF/code-points');
require('unicode-3.0.0/bidi/PDF/symbols');
require('unicode-3.0.0/bidi/PDF/regex');

require('unicode-3.0.0/bidi/LRO/code-points');
require('unicode-3.0.0/bidi/LRO/symbols');
require('unicode-3.0.0/bidi/LRO/regex');

require('unicode-3.0.0/bidi/RLO/code-points');
require('unicode-3.0.0/bidi/RLO/symbols');
require('unicode-3.0.0/bidi/RLO/regex');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](http://mths.be/mit) license.
