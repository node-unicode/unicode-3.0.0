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
  .add(require('unicode-6.3.0/Script_Extensions/Arabic/code-points')) // or `…/symbols`, doesn’t matter
  .add(require('unicode-6.3.0/Script_Extensions/Greek/code-points')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
const codePoints = require('unicode-3.0.0/General_Category/Uppercase_Letter/code-points');
// Get an array of symbols (strings) in a given Unicode category:
const symbols = require('unicode-3.0.0/General_Category/Uppercase_Letter/symbols');
// Get a regular expression that matches any symbol in a given Unicode category:
const regex = require('unicode-3.0.0/General_Category/Uppercase_Letter/regex');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
const category = require('unicode-3.0.0/General_Category').get(0x41);
// Get an array of all code points with a given bidi class:
const on = require('unicode-3.0.0/Bidi_Class/Other_Neutral/code-points');
// Get a map from code points to bidi classes:
const bidiClassMap = require('unicode-3.0.0/Bidi_Class');
// Get the directionality of a given code point:
const directionality = require('unicode-3.0.0/Bidi_Class').get(0x41);

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v3.0.0:

```js
// `Binary_Property`:

require('unicode-3.0.0/Binary_Property/ASCII/code-points');
require('unicode-3.0.0/Binary_Property/ASCII/symbols');
require('unicode-3.0.0/Binary_Property/ASCII/regex');

require('unicode-3.0.0/Binary_Property/Any/code-points');
require('unicode-3.0.0/Binary_Property/Any/symbols');
require('unicode-3.0.0/Binary_Property/Any/regex');

require('unicode-3.0.0/Binary_Property/Assigned/code-points');
require('unicode-3.0.0/Binary_Property/Assigned/symbols');
require('unicode-3.0.0/Binary_Property/Assigned/regex');

require('unicode-3.0.0/Binary_Property/Bidi_Mirrored/code-points');
require('unicode-3.0.0/Binary_Property/Bidi_Mirrored/symbols');
require('unicode-3.0.0/Binary_Property/Bidi_Mirrored/regex');

// `General_Category`:

require('unicode-3.0.0/General_Category').get(codePoint); // lookup map

require('unicode-3.0.0/General_Category/Cased_Letter/code-points');
require('unicode-3.0.0/General_Category/Cased_Letter/symbols');
require('unicode-3.0.0/General_Category/Cased_Letter/regex');

require('unicode-3.0.0/General_Category/Close_Punctuation/code-points');
require('unicode-3.0.0/General_Category/Close_Punctuation/symbols');
require('unicode-3.0.0/General_Category/Close_Punctuation/regex');

require('unicode-3.0.0/General_Category/Connector_Punctuation/code-points');
require('unicode-3.0.0/General_Category/Connector_Punctuation/symbols');
require('unicode-3.0.0/General_Category/Connector_Punctuation/regex');

require('unicode-3.0.0/General_Category/Control/code-points');
require('unicode-3.0.0/General_Category/Control/symbols');
require('unicode-3.0.0/General_Category/Control/regex');

require('unicode-3.0.0/General_Category/Currency_Symbol/code-points');
require('unicode-3.0.0/General_Category/Currency_Symbol/symbols');
require('unicode-3.0.0/General_Category/Currency_Symbol/regex');

require('unicode-3.0.0/General_Category/Dash_Punctuation/code-points');
require('unicode-3.0.0/General_Category/Dash_Punctuation/symbols');
require('unicode-3.0.0/General_Category/Dash_Punctuation/regex');

require('unicode-3.0.0/General_Category/Decimal_Number/code-points');
require('unicode-3.0.0/General_Category/Decimal_Number/symbols');
require('unicode-3.0.0/General_Category/Decimal_Number/regex');

require('unicode-3.0.0/General_Category/Enclosing_Mark/code-points');
require('unicode-3.0.0/General_Category/Enclosing_Mark/symbols');
require('unicode-3.0.0/General_Category/Enclosing_Mark/regex');

require('unicode-3.0.0/General_Category/Final_Punctuation/code-points');
require('unicode-3.0.0/General_Category/Final_Punctuation/symbols');
require('unicode-3.0.0/General_Category/Final_Punctuation/regex');

require('unicode-3.0.0/General_Category/Format/code-points');
require('unicode-3.0.0/General_Category/Format/symbols');
require('unicode-3.0.0/General_Category/Format/regex');

require('unicode-3.0.0/General_Category/Initial_Punctuation/code-points');
require('unicode-3.0.0/General_Category/Initial_Punctuation/symbols');
require('unicode-3.0.0/General_Category/Initial_Punctuation/regex');

require('unicode-3.0.0/General_Category/Letter/code-points');
require('unicode-3.0.0/General_Category/Letter/symbols');
require('unicode-3.0.0/General_Category/Letter/regex');

require('unicode-3.0.0/General_Category/Letter_Number/code-points');
require('unicode-3.0.0/General_Category/Letter_Number/symbols');
require('unicode-3.0.0/General_Category/Letter_Number/regex');

require('unicode-3.0.0/General_Category/Line_Separator/code-points');
require('unicode-3.0.0/General_Category/Line_Separator/symbols');
require('unicode-3.0.0/General_Category/Line_Separator/regex');

require('unicode-3.0.0/General_Category/Lowercase_Letter/code-points');
require('unicode-3.0.0/General_Category/Lowercase_Letter/symbols');
require('unicode-3.0.0/General_Category/Lowercase_Letter/regex');

require('unicode-3.0.0/General_Category/Mark/code-points');
require('unicode-3.0.0/General_Category/Mark/symbols');
require('unicode-3.0.0/General_Category/Mark/regex');

require('unicode-3.0.0/General_Category/Math_Symbol/code-points');
require('unicode-3.0.0/General_Category/Math_Symbol/symbols');
require('unicode-3.0.0/General_Category/Math_Symbol/regex');

require('unicode-3.0.0/General_Category/Modifier_Letter/code-points');
require('unicode-3.0.0/General_Category/Modifier_Letter/symbols');
require('unicode-3.0.0/General_Category/Modifier_Letter/regex');

require('unicode-3.0.0/General_Category/Modifier_Symbol/code-points');
require('unicode-3.0.0/General_Category/Modifier_Symbol/symbols');
require('unicode-3.0.0/General_Category/Modifier_Symbol/regex');

require('unicode-3.0.0/General_Category/Nonspacing_Mark/code-points');
require('unicode-3.0.0/General_Category/Nonspacing_Mark/symbols');
require('unicode-3.0.0/General_Category/Nonspacing_Mark/regex');

require('unicode-3.0.0/General_Category/Number/code-points');
require('unicode-3.0.0/General_Category/Number/symbols');
require('unicode-3.0.0/General_Category/Number/regex');

require('unicode-3.0.0/General_Category/Open_Punctuation/code-points');
require('unicode-3.0.0/General_Category/Open_Punctuation/symbols');
require('unicode-3.0.0/General_Category/Open_Punctuation/regex');

require('unicode-3.0.0/General_Category/Other/code-points');
require('unicode-3.0.0/General_Category/Other/symbols');
require('unicode-3.0.0/General_Category/Other/regex');

require('unicode-3.0.0/General_Category/Other_Letter/code-points');
require('unicode-3.0.0/General_Category/Other_Letter/symbols');
require('unicode-3.0.0/General_Category/Other_Letter/regex');

require('unicode-3.0.0/General_Category/Other_Number/code-points');
require('unicode-3.0.0/General_Category/Other_Number/symbols');
require('unicode-3.0.0/General_Category/Other_Number/regex');

require('unicode-3.0.0/General_Category/Other_Punctuation/code-points');
require('unicode-3.0.0/General_Category/Other_Punctuation/symbols');
require('unicode-3.0.0/General_Category/Other_Punctuation/regex');

require('unicode-3.0.0/General_Category/Other_Symbol/code-points');
require('unicode-3.0.0/General_Category/Other_Symbol/symbols');
require('unicode-3.0.0/General_Category/Other_Symbol/regex');

require('unicode-3.0.0/General_Category/Paragraph_Separator/code-points');
require('unicode-3.0.0/General_Category/Paragraph_Separator/symbols');
require('unicode-3.0.0/General_Category/Paragraph_Separator/regex');

require('unicode-3.0.0/General_Category/Private_Use/code-points');
require('unicode-3.0.0/General_Category/Private_Use/symbols');
require('unicode-3.0.0/General_Category/Private_Use/regex');

require('unicode-3.0.0/General_Category/Punctuation/code-points');
require('unicode-3.0.0/General_Category/Punctuation/symbols');
require('unicode-3.0.0/General_Category/Punctuation/regex');

require('unicode-3.0.0/General_Category/Separator/code-points');
require('unicode-3.0.0/General_Category/Separator/symbols');
require('unicode-3.0.0/General_Category/Separator/regex');

require('unicode-3.0.0/General_Category/Space_Separator/code-points');
require('unicode-3.0.0/General_Category/Space_Separator/symbols');
require('unicode-3.0.0/General_Category/Space_Separator/regex');

require('unicode-3.0.0/General_Category/Spacing_Mark/code-points');
require('unicode-3.0.0/General_Category/Spacing_Mark/symbols');
require('unicode-3.0.0/General_Category/Spacing_Mark/regex');

require('unicode-3.0.0/General_Category/Surrogate/code-points');
require('unicode-3.0.0/General_Category/Surrogate/symbols');
require('unicode-3.0.0/General_Category/Surrogate/regex');

require('unicode-3.0.0/General_Category/Symbol/code-points');
require('unicode-3.0.0/General_Category/Symbol/symbols');
require('unicode-3.0.0/General_Category/Symbol/regex');

require('unicode-3.0.0/General_Category/Titlecase_Letter/code-points');
require('unicode-3.0.0/General_Category/Titlecase_Letter/symbols');
require('unicode-3.0.0/General_Category/Titlecase_Letter/regex');

require('unicode-3.0.0/General_Category/Unassigned/code-points');
require('unicode-3.0.0/General_Category/Unassigned/symbols');
require('unicode-3.0.0/General_Category/Unassigned/regex');

require('unicode-3.0.0/General_Category/Uppercase_Letter/code-points');
require('unicode-3.0.0/General_Category/Uppercase_Letter/symbols');
require('unicode-3.0.0/General_Category/Uppercase_Letter/regex');

// `Bidi_Class`:

require('unicode-3.0.0/Bidi_Class').get(codePoint); // lookup map

require('unicode-3.0.0/Bidi_Class/Arabic_Letter/code-points');
require('unicode-3.0.0/Bidi_Class/Arabic_Letter/symbols');
require('unicode-3.0.0/Bidi_Class/Arabic_Letter/regex');

require('unicode-3.0.0/Bidi_Class/Arabic_Number/code-points');
require('unicode-3.0.0/Bidi_Class/Arabic_Number/symbols');
require('unicode-3.0.0/Bidi_Class/Arabic_Number/regex');

require('unicode-3.0.0/Bidi_Class/Boundary_Neutral/code-points');
require('unicode-3.0.0/Bidi_Class/Boundary_Neutral/symbols');
require('unicode-3.0.0/Bidi_Class/Boundary_Neutral/regex');

require('unicode-3.0.0/Bidi_Class/Common_Separator/code-points');
require('unicode-3.0.0/Bidi_Class/Common_Separator/symbols');
require('unicode-3.0.0/Bidi_Class/Common_Separator/regex');

require('unicode-3.0.0/Bidi_Class/European_Number/code-points');
require('unicode-3.0.0/Bidi_Class/European_Number/symbols');
require('unicode-3.0.0/Bidi_Class/European_Number/regex');

require('unicode-3.0.0/Bidi_Class/European_Separator/code-points');
require('unicode-3.0.0/Bidi_Class/European_Separator/symbols');
require('unicode-3.0.0/Bidi_Class/European_Separator/regex');

require('unicode-3.0.0/Bidi_Class/European_Terminator/code-points');
require('unicode-3.0.0/Bidi_Class/European_Terminator/symbols');
require('unicode-3.0.0/Bidi_Class/European_Terminator/regex');

require('unicode-3.0.0/Bidi_Class/Left_To_Right/code-points');
require('unicode-3.0.0/Bidi_Class/Left_To_Right/symbols');
require('unicode-3.0.0/Bidi_Class/Left_To_Right/regex');

require('unicode-3.0.0/Bidi_Class/Left_To_Right_Embedding/code-points');
require('unicode-3.0.0/Bidi_Class/Left_To_Right_Embedding/symbols');
require('unicode-3.0.0/Bidi_Class/Left_To_Right_Embedding/regex');

require('unicode-3.0.0/Bidi_Class/Left_To_Right_Override/code-points');
require('unicode-3.0.0/Bidi_Class/Left_To_Right_Override/symbols');
require('unicode-3.0.0/Bidi_Class/Left_To_Right_Override/regex');

require('unicode-3.0.0/Bidi_Class/Nonspacing_Mark/code-points');
require('unicode-3.0.0/Bidi_Class/Nonspacing_Mark/symbols');
require('unicode-3.0.0/Bidi_Class/Nonspacing_Mark/regex');

require('unicode-3.0.0/Bidi_Class/Other_Neutral/code-points');
require('unicode-3.0.0/Bidi_Class/Other_Neutral/symbols');
require('unicode-3.0.0/Bidi_Class/Other_Neutral/regex');

require('unicode-3.0.0/Bidi_Class/Paragraph_Separator/code-points');
require('unicode-3.0.0/Bidi_Class/Paragraph_Separator/symbols');
require('unicode-3.0.0/Bidi_Class/Paragraph_Separator/regex');

require('unicode-3.0.0/Bidi_Class/Pop_Directional_Format/code-points');
require('unicode-3.0.0/Bidi_Class/Pop_Directional_Format/symbols');
require('unicode-3.0.0/Bidi_Class/Pop_Directional_Format/regex');

require('unicode-3.0.0/Bidi_Class/Right_To_Left/code-points');
require('unicode-3.0.0/Bidi_Class/Right_To_Left/symbols');
require('unicode-3.0.0/Bidi_Class/Right_To_Left/regex');

require('unicode-3.0.0/Bidi_Class/Right_To_Left_Embedding/code-points');
require('unicode-3.0.0/Bidi_Class/Right_To_Left_Embedding/symbols');
require('unicode-3.0.0/Bidi_Class/Right_To_Left_Embedding/regex');

require('unicode-3.0.0/Bidi_Class/Right_To_Left_Override/code-points');
require('unicode-3.0.0/Bidi_Class/Right_To_Left_Override/symbols');
require('unicode-3.0.0/Bidi_Class/Right_To_Left_Override/regex');

require('unicode-3.0.0/Bidi_Class/Segment_Separator/code-points');
require('unicode-3.0.0/Bidi_Class/Segment_Separator/symbols');
require('unicode-3.0.0/Bidi_Class/Segment_Separator/regex');

require('unicode-3.0.0/Bidi_Class/White_Space/code-points');
require('unicode-3.0.0/Bidi_Class/White_Space/symbols');
require('unicode-3.0.0/Bidi_Class/White_Space/regex');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.
