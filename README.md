# Unicode v3.0.0 data

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v3.0.0’s categories, scripts, script extensions, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](https://mths.be/node-unicode-data) project. **Please report any bugs or requests [in the appropriate issue tracker](https://github.com/mathiasbynens/node-unicode-data/issues).**

## Installation

```bash
npm install unicode-3.0.0 --save-dev
```

**Note:** _unicode-3.0.0_ is supposed to be used in build scripts (i.e. as a `devDependency`), and not at runtime (i.e. as a regular `dependency`).

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, script extensions, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](https://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
const regenerate = require('regenerate');
const set = regenerate()
  .add(require('unicode-6.3.0/scripts/Arabic/code-points')) // or `…/symbols`, doesn’t matter
  .add(require('unicode-6.3.0/scripts/Greek/code-points')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
const codePoints = require('unicode-3.0.0/categories/Lu/code-points');
// Get an array of symbols (strings) in a given Unicode category:
const symbols = require('unicode-3.0.0/categories/Lu/symbols');
// Get a regular expression that matches any symbol in a given Unicode category:
const regex = require('unicode-3.0.0/categories/Lu/regex');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
const category = require('unicode-3.0.0/categories')[ 0x41 ];
// Get an array of all code points with `Bidi_Class=Other_Neutral`:
const on = require('unicode-3.0.0/bidi-classes/Other_Neutral/code-points');
// Get a map from code points to bidi classes:
const bidiClassMap = require('unicode-3.0.0/bidi-classes');
// Get the directionality of a given code point:
const directionality = require('unicode-3.0.0/bidi-classes').get(0x41);

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v3.0.0:

```js
// properties:

require('unicode-3.0.0/properties/ASCII/code-points');
require('unicode-3.0.0/properties/ASCII/symbols');
require('unicode-3.0.0/properties/ASCII/regex');

require('unicode-3.0.0/properties/Any/code-points');
require('unicode-3.0.0/properties/Any/symbols');
require('unicode-3.0.0/properties/Any/regex');

require('unicode-3.0.0/properties/Assigned/code-points');
require('unicode-3.0.0/properties/Assigned/symbols');
require('unicode-3.0.0/properties/Assigned/regex');

// categories:

require('unicode-3.0.0/categories').get(codePoint); // lookup map

require('unicode-3.0.0/categories/C/code-points');
require('unicode-3.0.0/categories/C/symbols');
require('unicode-3.0.0/categories/C/regex');

require('unicode-3.0.0/categories/Cc/code-points');
require('unicode-3.0.0/categories/Cc/symbols');
require('unicode-3.0.0/categories/Cc/regex');

require('unicode-3.0.0/categories/Cf/code-points');
require('unicode-3.0.0/categories/Cf/symbols');
require('unicode-3.0.0/categories/Cf/regex');

require('unicode-3.0.0/categories/Cn/code-points');
require('unicode-3.0.0/categories/Cn/symbols');
require('unicode-3.0.0/categories/Cn/regex');

require('unicode-3.0.0/categories/Co/code-points');
require('unicode-3.0.0/categories/Co/symbols');
require('unicode-3.0.0/categories/Co/regex');

require('unicode-3.0.0/categories/Cs/code-points');
require('unicode-3.0.0/categories/Cs/symbols');
require('unicode-3.0.0/categories/Cs/regex');

require('unicode-3.0.0/categories/L/code-points');
require('unicode-3.0.0/categories/L/symbols');
require('unicode-3.0.0/categories/L/regex');

require('unicode-3.0.0/categories/LC/code-points');
require('unicode-3.0.0/categories/LC/symbols');
require('unicode-3.0.0/categories/LC/regex');

require('unicode-3.0.0/categories/Ll/code-points');
require('unicode-3.0.0/categories/Ll/symbols');
require('unicode-3.0.0/categories/Ll/regex');

require('unicode-3.0.0/categories/Lm/code-points');
require('unicode-3.0.0/categories/Lm/symbols');
require('unicode-3.0.0/categories/Lm/regex');

require('unicode-3.0.0/categories/Lo/code-points');
require('unicode-3.0.0/categories/Lo/symbols');
require('unicode-3.0.0/categories/Lo/regex');

require('unicode-3.0.0/categories/Lt/code-points');
require('unicode-3.0.0/categories/Lt/symbols');
require('unicode-3.0.0/categories/Lt/regex');

require('unicode-3.0.0/categories/Lu/code-points');
require('unicode-3.0.0/categories/Lu/symbols');
require('unicode-3.0.0/categories/Lu/regex');

require('unicode-3.0.0/categories/M/code-points');
require('unicode-3.0.0/categories/M/symbols');
require('unicode-3.0.0/categories/M/regex');

require('unicode-3.0.0/categories/Mc/code-points');
require('unicode-3.0.0/categories/Mc/symbols');
require('unicode-3.0.0/categories/Mc/regex');

require('unicode-3.0.0/categories/Me/code-points');
require('unicode-3.0.0/categories/Me/symbols');
require('unicode-3.0.0/categories/Me/regex');

require('unicode-3.0.0/categories/Mn/code-points');
require('unicode-3.0.0/categories/Mn/symbols');
require('unicode-3.0.0/categories/Mn/regex');

require('unicode-3.0.0/categories/N/code-points');
require('unicode-3.0.0/categories/N/symbols');
require('unicode-3.0.0/categories/N/regex');

require('unicode-3.0.0/categories/Nd/code-points');
require('unicode-3.0.0/categories/Nd/symbols');
require('unicode-3.0.0/categories/Nd/regex');

require('unicode-3.0.0/categories/Nl/code-points');
require('unicode-3.0.0/categories/Nl/symbols');
require('unicode-3.0.0/categories/Nl/regex');

require('unicode-3.0.0/categories/No/code-points');
require('unicode-3.0.0/categories/No/symbols');
require('unicode-3.0.0/categories/No/regex');

require('unicode-3.0.0/categories/P/code-points');
require('unicode-3.0.0/categories/P/symbols');
require('unicode-3.0.0/categories/P/regex');

require('unicode-3.0.0/categories/Pc/code-points');
require('unicode-3.0.0/categories/Pc/symbols');
require('unicode-3.0.0/categories/Pc/regex');

require('unicode-3.0.0/categories/Pd/code-points');
require('unicode-3.0.0/categories/Pd/symbols');
require('unicode-3.0.0/categories/Pd/regex');

require('unicode-3.0.0/categories/Pe/code-points');
require('unicode-3.0.0/categories/Pe/symbols');
require('unicode-3.0.0/categories/Pe/regex');

require('unicode-3.0.0/categories/Pf/code-points');
require('unicode-3.0.0/categories/Pf/symbols');
require('unicode-3.0.0/categories/Pf/regex');

require('unicode-3.0.0/categories/Pi/code-points');
require('unicode-3.0.0/categories/Pi/symbols');
require('unicode-3.0.0/categories/Pi/regex');

require('unicode-3.0.0/categories/Po/code-points');
require('unicode-3.0.0/categories/Po/symbols');
require('unicode-3.0.0/categories/Po/regex');

require('unicode-3.0.0/categories/Ps/code-points');
require('unicode-3.0.0/categories/Ps/symbols');
require('unicode-3.0.0/categories/Ps/regex');

require('unicode-3.0.0/categories/S/code-points');
require('unicode-3.0.0/categories/S/symbols');
require('unicode-3.0.0/categories/S/regex');

require('unicode-3.0.0/categories/Sc/code-points');
require('unicode-3.0.0/categories/Sc/symbols');
require('unicode-3.0.0/categories/Sc/regex');

require('unicode-3.0.0/categories/Sk/code-points');
require('unicode-3.0.0/categories/Sk/symbols');
require('unicode-3.0.0/categories/Sk/regex');

require('unicode-3.0.0/categories/Sm/code-points');
require('unicode-3.0.0/categories/Sm/symbols');
require('unicode-3.0.0/categories/Sm/regex');

require('unicode-3.0.0/categories/So/code-points');
require('unicode-3.0.0/categories/So/symbols');
require('unicode-3.0.0/categories/So/regex');

require('unicode-3.0.0/categories/Z/code-points');
require('unicode-3.0.0/categories/Z/symbols');
require('unicode-3.0.0/categories/Z/regex');

require('unicode-3.0.0/categories/Zl/code-points');
require('unicode-3.0.0/categories/Zl/symbols');
require('unicode-3.0.0/categories/Zl/regex');

require('unicode-3.0.0/categories/Zp/code-points');
require('unicode-3.0.0/categories/Zp/symbols');
require('unicode-3.0.0/categories/Zp/regex');

require('unicode-3.0.0/categories/Zs/code-points');
require('unicode-3.0.0/categories/Zs/symbols');
require('unicode-3.0.0/categories/Zs/regex');

// bidi classes:

require('unicode-3.0.0/bidi-classes').get(codePoint); // lookup map

require('unicode-3.0.0/bidi-classes/Arabic_Letter/code-points');
require('unicode-3.0.0/bidi-classes/Arabic_Letter/symbols');
require('unicode-3.0.0/bidi-classes/Arabic_Letter/regex');

require('unicode-3.0.0/bidi-classes/Arabic_Number/code-points');
require('unicode-3.0.0/bidi-classes/Arabic_Number/symbols');
require('unicode-3.0.0/bidi-classes/Arabic_Number/regex');

require('unicode-3.0.0/bidi-classes/Boundary_Neutral/code-points');
require('unicode-3.0.0/bidi-classes/Boundary_Neutral/symbols');
require('unicode-3.0.0/bidi-classes/Boundary_Neutral/regex');

require('unicode-3.0.0/bidi-classes/Common_Separator/code-points');
require('unicode-3.0.0/bidi-classes/Common_Separator/symbols');
require('unicode-3.0.0/bidi-classes/Common_Separator/regex');

require('unicode-3.0.0/bidi-classes/European_Number/code-points');
require('unicode-3.0.0/bidi-classes/European_Number/symbols');
require('unicode-3.0.0/bidi-classes/European_Number/regex');

require('unicode-3.0.0/bidi-classes/European_Separator/code-points');
require('unicode-3.0.0/bidi-classes/European_Separator/symbols');
require('unicode-3.0.0/bidi-classes/European_Separator/regex');

require('unicode-3.0.0/bidi-classes/European_Terminator/code-points');
require('unicode-3.0.0/bidi-classes/European_Terminator/symbols');
require('unicode-3.0.0/bidi-classes/European_Terminator/regex');

require('unicode-3.0.0/bidi-classes/Left_To_Right/code-points');
require('unicode-3.0.0/bidi-classes/Left_To_Right/symbols');
require('unicode-3.0.0/bidi-classes/Left_To_Right/regex');

require('unicode-3.0.0/bidi-classes/Left_To_Right_Embedding/code-points');
require('unicode-3.0.0/bidi-classes/Left_To_Right_Embedding/symbols');
require('unicode-3.0.0/bidi-classes/Left_To_Right_Embedding/regex');

require('unicode-3.0.0/bidi-classes/Left_To_Right_Override/code-points');
require('unicode-3.0.0/bidi-classes/Left_To_Right_Override/symbols');
require('unicode-3.0.0/bidi-classes/Left_To_Right_Override/regex');

require('unicode-3.0.0/bidi-classes/Nonspacing_Mark/code-points');
require('unicode-3.0.0/bidi-classes/Nonspacing_Mark/symbols');
require('unicode-3.0.0/bidi-classes/Nonspacing_Mark/regex');

require('unicode-3.0.0/bidi-classes/Other_Neutral/code-points');
require('unicode-3.0.0/bidi-classes/Other_Neutral/symbols');
require('unicode-3.0.0/bidi-classes/Other_Neutral/regex');

require('unicode-3.0.0/bidi-classes/Paragraph_Separator/code-points');
require('unicode-3.0.0/bidi-classes/Paragraph_Separator/symbols');
require('unicode-3.0.0/bidi-classes/Paragraph_Separator/regex');

require('unicode-3.0.0/bidi-classes/Pop_Directional_Format/code-points');
require('unicode-3.0.0/bidi-classes/Pop_Directional_Format/symbols');
require('unicode-3.0.0/bidi-classes/Pop_Directional_Format/regex');

require('unicode-3.0.0/bidi-classes/Right_To_Left/code-points');
require('unicode-3.0.0/bidi-classes/Right_To_Left/symbols');
require('unicode-3.0.0/bidi-classes/Right_To_Left/regex');

require('unicode-3.0.0/bidi-classes/Right_To_Left_Embedding/code-points');
require('unicode-3.0.0/bidi-classes/Right_To_Left_Embedding/symbols');
require('unicode-3.0.0/bidi-classes/Right_To_Left_Embedding/regex');

require('unicode-3.0.0/bidi-classes/Right_To_Left_Override/code-points');
require('unicode-3.0.0/bidi-classes/Right_To_Left_Override/symbols');
require('unicode-3.0.0/bidi-classes/Right_To_Left_Override/regex');

require('unicode-3.0.0/bidi-classes/Segment_Separator/code-points');
require('unicode-3.0.0/bidi-classes/Segment_Separator/symbols');
require('unicode-3.0.0/bidi-classes/Segment_Separator/regex');

require('unicode-3.0.0/bidi-classes/White_Space/code-points');
require('unicode-3.0.0/bidi-classes/White_Space/symbols');
require('unicode-3.0.0/bidi-classes/White_Space/regex');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.
