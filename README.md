# Unicode v3.0.0 data [![@unicode/unicode-3.0.0 on npm](https://img.shields.io/npm/v/@unicode/unicode-3.0.0)](https://www.npmjs.com/package/@unicode/unicode-3.0.0)

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v3.0.0’s categories, scripts, script extensions, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](https://mths.be/node-unicode-data) project. **Please report any bugs or requests [in the appropriate issue tracker](https://github.com/node-unicode/node-unicode-data/issues).**

## Installation

```bash
npm install @unicode/unicode-3.0.0 --save-dev
```

**Note:** _@unicode/unicode-3.0.0_ is supposed to be used in build scripts (i.e. as a `devDependency`), and not at runtime (i.e. as a regular `dependency`).

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, script extensions, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](https://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
const regenerate = require('regenerate');
const set = regenerate()
  .add(require('@unicode/unicode-6.3.0/Script_Extensions/Arabic/code-points.js')) // or `…/symbols`, doesn’t matter
  .add(require('@unicode/unicode-6.3.0/Script_Extensions/Greek/code-points.js')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
const codePoints = require('@unicode/unicode-3.0.0/General_Category/Uppercase_Letter/code-points.js');
// Get an array of symbols (strings) in a given Unicode category:
const symbols = require('@unicode/unicode-3.0.0/General_Category/Uppercase_Letter/symbols.js');
// Get a regular expression that matches any symbol in a given Unicode category:
const regex = require('@unicode/unicode-3.0.0/General_Category/Uppercase_Letter/regex.js');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
const category = require('@unicode/unicode-3.0.0/General_Category').get(0x41);
// Get an array of all code points with a given bidi class:
const on = require('@unicode/unicode-3.0.0/Bidi_Class/Other_Neutral/code-points.js');
// Get a map from code points to bidi classes:
const bidiClassMap = require('@unicode/unicode-3.0.0/Bidi_Class');
// Get the directionality of a given code point:
const directionality = require('@unicode/unicode-3.0.0/Bidi_Class').get(0x41);

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v3.0.0:

```js
// `Names`:

require('@unicode/unicode-3.0.0/Names/index.js'); // array of canonical names


// `Binary_Property`:

require('@unicode/unicode-3.0.0/Binary_Property/ASCII/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/ASCII/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/ASCII/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Alphabetic/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Alphabetic/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Alphabetic/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Any/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Any/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Any/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Assigned/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Assigned/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Assigned/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Bidi_Control/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Bidi_Control/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Bidi_Control/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Bidi_Mirrored/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Bidi_Mirrored/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Bidi_Mirrored/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Combining/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Combining/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Combining/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Composite/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Composite/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Composite/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Currency_Symbol/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Currency_Symbol/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Currency_Symbol/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Dash/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Dash/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Dash/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Decimal_Digit/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Decimal_Digit/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Decimal_Digit/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Delimiter/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Delimiter/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Delimiter/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Diacritic/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Diacritic/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Diacritic/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Extender/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Extender/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Extender/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Format_Control/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Format_Control/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Format_Control/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Hex_Digit/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Hex_Digit/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Hex_Digit/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/High_Surrogate/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/High_Surrogate/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/High_Surrogate/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Hyphen/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Hyphen/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Hyphen/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/ISO_Control/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/ISO_Control/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/ISO_Control/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Identifier_Part/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Identifier_Part/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Identifier_Part/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Ideographic/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Ideographic/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Ideographic/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Ignorable_Control/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Ignorable_Control/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Ignorable_Control/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Join_Control/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Join_Control/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Join_Control/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Left_of_Pair/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Left_of_Pair/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Left_of_Pair/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Line_Separator/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Line_Separator/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Line_Separator/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Low_Surrogate/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Low_Surrogate/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Low_Surrogate/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Lowercase/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Lowercase/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Lowercase/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Math/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Math/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Math/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Non-break/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Non-break/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Non-break/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Non-spacing/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Non-spacing/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Non-spacing/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Numeric/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Numeric/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Numeric/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Paired_Punctuation/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Paired_Punctuation/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Paired_Punctuation/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Paragraph_Separator/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Paragraph_Separator/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Paragraph_Separator/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Private_Use/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Private_Use/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Private_Use/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Private_Use_High_Surrogate/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Private_Use_High_Surrogate/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Private_Use_High_Surrogate/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Punctuation/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Punctuation/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Punctuation/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Quotation_Mark/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Quotation_Mark/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Quotation_Mark/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Space/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Space/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Space/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Terminal_Punctuation/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Terminal_Punctuation/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Terminal_Punctuation/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Titlecase/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Titlecase/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Titlecase/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Uppercase/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Uppercase/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Uppercase/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/White_space/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/White_space/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/White_space/regex.js');

require('@unicode/unicode-3.0.0/Binary_Property/Zero-width/code-points.js');
require('@unicode/unicode-3.0.0/Binary_Property/Zero-width/symbols.js');
require('@unicode/unicode-3.0.0/Binary_Property/Zero-width/regex.js');

// `General_Category`:

require('@unicode/unicode-3.0.0/General_Category').get(codePoint); // lookup map

require('@unicode/unicode-3.0.0/General_Category/Cased_Letter/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Cased_Letter/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Cased_Letter/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Close_Punctuation/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Close_Punctuation/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Close_Punctuation/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Connector_Punctuation/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Connector_Punctuation/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Connector_Punctuation/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Control/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Control/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Control/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Currency_Symbol/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Currency_Symbol/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Currency_Symbol/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Dash_Punctuation/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Dash_Punctuation/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Dash_Punctuation/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Decimal_Number/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Decimal_Number/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Decimal_Number/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Enclosing_Mark/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Enclosing_Mark/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Enclosing_Mark/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Final_Punctuation/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Final_Punctuation/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Final_Punctuation/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Format/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Format/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Format/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Initial_Punctuation/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Initial_Punctuation/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Initial_Punctuation/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Letter/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Letter/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Letter/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Letter_Number/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Letter_Number/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Letter_Number/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Line_Separator/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Line_Separator/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Line_Separator/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Lowercase_Letter/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Lowercase_Letter/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Lowercase_Letter/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Mark/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Mark/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Mark/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Math_Symbol/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Math_Symbol/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Math_Symbol/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Modifier_Letter/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Modifier_Letter/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Modifier_Letter/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Modifier_Symbol/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Modifier_Symbol/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Modifier_Symbol/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Nonspacing_Mark/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Nonspacing_Mark/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Nonspacing_Mark/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Number/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Number/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Number/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Open_Punctuation/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Open_Punctuation/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Open_Punctuation/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Other/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Other/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Other/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Other_Letter/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Other_Letter/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Other_Letter/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Other_Number/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Other_Number/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Other_Number/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Other_Punctuation/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Other_Punctuation/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Other_Punctuation/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Other_Symbol/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Other_Symbol/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Other_Symbol/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Paragraph_Separator/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Paragraph_Separator/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Paragraph_Separator/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Private_Use/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Private_Use/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Private_Use/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Punctuation/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Punctuation/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Punctuation/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Separator/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Separator/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Separator/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Space_Separator/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Space_Separator/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Space_Separator/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Spacing_Mark/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Spacing_Mark/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Spacing_Mark/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Surrogate/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Surrogate/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Surrogate/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Symbol/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Symbol/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Symbol/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Titlecase_Letter/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Titlecase_Letter/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Titlecase_Letter/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Unassigned/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Unassigned/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Unassigned/regex.js');

require('@unicode/unicode-3.0.0/General_Category/Uppercase_Letter/code-points.js');
require('@unicode/unicode-3.0.0/General_Category/Uppercase_Letter/symbols.js');
require('@unicode/unicode-3.0.0/General_Category/Uppercase_Letter/regex.js');

// `Bidi_Class`:

require('@unicode/unicode-3.0.0/Bidi_Class').get(codePoint); // lookup map

require('@unicode/unicode-3.0.0/Bidi_Class/Arabic_Letter/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Arabic_Letter/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Arabic_Letter/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Arabic_Number/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Arabic_Number/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Arabic_Number/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Boundary_Neutral/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Boundary_Neutral/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Boundary_Neutral/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Common_Separator/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Common_Separator/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Common_Separator/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/European_Number/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/European_Number/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/European_Number/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/European_Separator/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/European_Separator/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/European_Separator/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/European_Terminator/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/European_Terminator/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/European_Terminator/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right_Embedding/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right_Embedding/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right_Embedding/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right_Override/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right_Override/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right_Override/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Nonspacing_Mark/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Nonspacing_Mark/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Nonspacing_Mark/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Other_Neutral/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Other_Neutral/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Other_Neutral/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Paragraph_Separator/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Paragraph_Separator/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Paragraph_Separator/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Pop_Directional_Format/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Pop_Directional_Format/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Pop_Directional_Format/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left_Embedding/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left_Embedding/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left_Embedding/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left_Override/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left_Override/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left_Override/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/Segment_Separator/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Segment_Separator/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/Segment_Separator/regex.js');

require('@unicode/unicode-3.0.0/Bidi_Class/White_Space/code-points.js');
require('@unicode/unicode-3.0.0/Bidi_Class/White_Space/symbols.js');
require('@unicode/unicode-3.0.0/Bidi_Class/White_Space/regex.js');

// `Block`:

require('@unicode/unicode-3.0.0/Block/Alphabetic_Presentation_Forms/code-points.js');
require('@unicode/unicode-3.0.0/Block/Alphabetic_Presentation_Forms/symbols.js');
require('@unicode/unicode-3.0.0/Block/Alphabetic_Presentation_Forms/regex.js');

require('@unicode/unicode-3.0.0/Block/Arabic/code-points.js');
require('@unicode/unicode-3.0.0/Block/Arabic/symbols.js');
require('@unicode/unicode-3.0.0/Block/Arabic/regex.js');

require('@unicode/unicode-3.0.0/Block/Arabic_Presentation_Forms_A/code-points.js');
require('@unicode/unicode-3.0.0/Block/Arabic_Presentation_Forms_A/symbols.js');
require('@unicode/unicode-3.0.0/Block/Arabic_Presentation_Forms_A/regex.js');

require('@unicode/unicode-3.0.0/Block/Arabic_Presentation_Forms_B/code-points.js');
require('@unicode/unicode-3.0.0/Block/Arabic_Presentation_Forms_B/symbols.js');
require('@unicode/unicode-3.0.0/Block/Arabic_Presentation_Forms_B/regex.js');

require('@unicode/unicode-3.0.0/Block/Armenian/code-points.js');
require('@unicode/unicode-3.0.0/Block/Armenian/symbols.js');
require('@unicode/unicode-3.0.0/Block/Armenian/regex.js');

require('@unicode/unicode-3.0.0/Block/Arrows/code-points.js');
require('@unicode/unicode-3.0.0/Block/Arrows/symbols.js');
require('@unicode/unicode-3.0.0/Block/Arrows/regex.js');

require('@unicode/unicode-3.0.0/Block/Basic_Latin/code-points.js');
require('@unicode/unicode-3.0.0/Block/Basic_Latin/symbols.js');
require('@unicode/unicode-3.0.0/Block/Basic_Latin/regex.js');

require('@unicode/unicode-3.0.0/Block/Bengali/code-points.js');
require('@unicode/unicode-3.0.0/Block/Bengali/symbols.js');
require('@unicode/unicode-3.0.0/Block/Bengali/regex.js');

require('@unicode/unicode-3.0.0/Block/Block_Elements/code-points.js');
require('@unicode/unicode-3.0.0/Block/Block_Elements/symbols.js');
require('@unicode/unicode-3.0.0/Block/Block_Elements/regex.js');

require('@unicode/unicode-3.0.0/Block/Bopomofo/code-points.js');
require('@unicode/unicode-3.0.0/Block/Bopomofo/symbols.js');
require('@unicode/unicode-3.0.0/Block/Bopomofo/regex.js');

require('@unicode/unicode-3.0.0/Block/Bopomofo_Extended/code-points.js');
require('@unicode/unicode-3.0.0/Block/Bopomofo_Extended/symbols.js');
require('@unicode/unicode-3.0.0/Block/Bopomofo_Extended/regex.js');

require('@unicode/unicode-3.0.0/Block/Box_Drawing/code-points.js');
require('@unicode/unicode-3.0.0/Block/Box_Drawing/symbols.js');
require('@unicode/unicode-3.0.0/Block/Box_Drawing/regex.js');

require('@unicode/unicode-3.0.0/Block/Braille_Patterns/code-points.js');
require('@unicode/unicode-3.0.0/Block/Braille_Patterns/symbols.js');
require('@unicode/unicode-3.0.0/Block/Braille_Patterns/regex.js');

require('@unicode/unicode-3.0.0/Block/CJK_Compatibility/code-points.js');
require('@unicode/unicode-3.0.0/Block/CJK_Compatibility/symbols.js');
require('@unicode/unicode-3.0.0/Block/CJK_Compatibility/regex.js');

require('@unicode/unicode-3.0.0/Block/CJK_Compatibility_Forms/code-points.js');
require('@unicode/unicode-3.0.0/Block/CJK_Compatibility_Forms/symbols.js');
require('@unicode/unicode-3.0.0/Block/CJK_Compatibility_Forms/regex.js');

require('@unicode/unicode-3.0.0/Block/CJK_Compatibility_Ideographs/code-points.js');
require('@unicode/unicode-3.0.0/Block/CJK_Compatibility_Ideographs/symbols.js');
require('@unicode/unicode-3.0.0/Block/CJK_Compatibility_Ideographs/regex.js');

require('@unicode/unicode-3.0.0/Block/CJK_Radicals_Supplement/code-points.js');
require('@unicode/unicode-3.0.0/Block/CJK_Radicals_Supplement/symbols.js');
require('@unicode/unicode-3.0.0/Block/CJK_Radicals_Supplement/regex.js');

require('@unicode/unicode-3.0.0/Block/CJK_Symbols_And_Punctuation/code-points.js');
require('@unicode/unicode-3.0.0/Block/CJK_Symbols_And_Punctuation/symbols.js');
require('@unicode/unicode-3.0.0/Block/CJK_Symbols_And_Punctuation/regex.js');

require('@unicode/unicode-3.0.0/Block/CJK_Unified_Ideographs/code-points.js');
require('@unicode/unicode-3.0.0/Block/CJK_Unified_Ideographs/symbols.js');
require('@unicode/unicode-3.0.0/Block/CJK_Unified_Ideographs/regex.js');

require('@unicode/unicode-3.0.0/Block/CJK_Unified_Ideographs_Extension_A/code-points.js');
require('@unicode/unicode-3.0.0/Block/CJK_Unified_Ideographs_Extension_A/symbols.js');
require('@unicode/unicode-3.0.0/Block/CJK_Unified_Ideographs_Extension_A/regex.js');

require('@unicode/unicode-3.0.0/Block/Cherokee/code-points.js');
require('@unicode/unicode-3.0.0/Block/Cherokee/symbols.js');
require('@unicode/unicode-3.0.0/Block/Cherokee/regex.js');

require('@unicode/unicode-3.0.0/Block/Combining_Diacritical_Marks/code-points.js');
require('@unicode/unicode-3.0.0/Block/Combining_Diacritical_Marks/symbols.js');
require('@unicode/unicode-3.0.0/Block/Combining_Diacritical_Marks/regex.js');

require('@unicode/unicode-3.0.0/Block/Combining_Diacritical_Marks_For_Symbols/code-points.js');
require('@unicode/unicode-3.0.0/Block/Combining_Diacritical_Marks_For_Symbols/symbols.js');
require('@unicode/unicode-3.0.0/Block/Combining_Diacritical_Marks_For_Symbols/regex.js');

require('@unicode/unicode-3.0.0/Block/Combining_Half_Marks/code-points.js');
require('@unicode/unicode-3.0.0/Block/Combining_Half_Marks/symbols.js');
require('@unicode/unicode-3.0.0/Block/Combining_Half_Marks/regex.js');

require('@unicode/unicode-3.0.0/Block/Control_Pictures/code-points.js');
require('@unicode/unicode-3.0.0/Block/Control_Pictures/symbols.js');
require('@unicode/unicode-3.0.0/Block/Control_Pictures/regex.js');

require('@unicode/unicode-3.0.0/Block/Currency_Symbols/code-points.js');
require('@unicode/unicode-3.0.0/Block/Currency_Symbols/symbols.js');
require('@unicode/unicode-3.0.0/Block/Currency_Symbols/regex.js');

require('@unicode/unicode-3.0.0/Block/Cyrillic/code-points.js');
require('@unicode/unicode-3.0.0/Block/Cyrillic/symbols.js');
require('@unicode/unicode-3.0.0/Block/Cyrillic/regex.js');

require('@unicode/unicode-3.0.0/Block/Devanagari/code-points.js');
require('@unicode/unicode-3.0.0/Block/Devanagari/symbols.js');
require('@unicode/unicode-3.0.0/Block/Devanagari/regex.js');

require('@unicode/unicode-3.0.0/Block/Dingbats/code-points.js');
require('@unicode/unicode-3.0.0/Block/Dingbats/symbols.js');
require('@unicode/unicode-3.0.0/Block/Dingbats/regex.js');

require('@unicode/unicode-3.0.0/Block/Enclosed_Alphanumerics/code-points.js');
require('@unicode/unicode-3.0.0/Block/Enclosed_Alphanumerics/symbols.js');
require('@unicode/unicode-3.0.0/Block/Enclosed_Alphanumerics/regex.js');

require('@unicode/unicode-3.0.0/Block/Enclosed_CJK_Letters_And_Months/code-points.js');
require('@unicode/unicode-3.0.0/Block/Enclosed_CJK_Letters_And_Months/symbols.js');
require('@unicode/unicode-3.0.0/Block/Enclosed_CJK_Letters_And_Months/regex.js');

require('@unicode/unicode-3.0.0/Block/Ethiopic/code-points.js');
require('@unicode/unicode-3.0.0/Block/Ethiopic/symbols.js');
require('@unicode/unicode-3.0.0/Block/Ethiopic/regex.js');

require('@unicode/unicode-3.0.0/Block/General_Punctuation/code-points.js');
require('@unicode/unicode-3.0.0/Block/General_Punctuation/symbols.js');
require('@unicode/unicode-3.0.0/Block/General_Punctuation/regex.js');

require('@unicode/unicode-3.0.0/Block/Geometric_Shapes/code-points.js');
require('@unicode/unicode-3.0.0/Block/Geometric_Shapes/symbols.js');
require('@unicode/unicode-3.0.0/Block/Geometric_Shapes/regex.js');

require('@unicode/unicode-3.0.0/Block/Georgian/code-points.js');
require('@unicode/unicode-3.0.0/Block/Georgian/symbols.js');
require('@unicode/unicode-3.0.0/Block/Georgian/regex.js');

require('@unicode/unicode-3.0.0/Block/Greek_And_Coptic/code-points.js');
require('@unicode/unicode-3.0.0/Block/Greek_And_Coptic/symbols.js');
require('@unicode/unicode-3.0.0/Block/Greek_And_Coptic/regex.js');

require('@unicode/unicode-3.0.0/Block/Greek_Extended/code-points.js');
require('@unicode/unicode-3.0.0/Block/Greek_Extended/symbols.js');
require('@unicode/unicode-3.0.0/Block/Greek_Extended/regex.js');

require('@unicode/unicode-3.0.0/Block/Gujarati/code-points.js');
require('@unicode/unicode-3.0.0/Block/Gujarati/symbols.js');
require('@unicode/unicode-3.0.0/Block/Gujarati/regex.js');

require('@unicode/unicode-3.0.0/Block/Gurmukhi/code-points.js');
require('@unicode/unicode-3.0.0/Block/Gurmukhi/symbols.js');
require('@unicode/unicode-3.0.0/Block/Gurmukhi/regex.js');

require('@unicode/unicode-3.0.0/Block/Halfwidth_And_Fullwidth_Forms/code-points.js');
require('@unicode/unicode-3.0.0/Block/Halfwidth_And_Fullwidth_Forms/symbols.js');
require('@unicode/unicode-3.0.0/Block/Halfwidth_And_Fullwidth_Forms/regex.js');

require('@unicode/unicode-3.0.0/Block/Hangul_Compatibility_Jamo/code-points.js');
require('@unicode/unicode-3.0.0/Block/Hangul_Compatibility_Jamo/symbols.js');
require('@unicode/unicode-3.0.0/Block/Hangul_Compatibility_Jamo/regex.js');

require('@unicode/unicode-3.0.0/Block/Hangul_Jamo/code-points.js');
require('@unicode/unicode-3.0.0/Block/Hangul_Jamo/symbols.js');
require('@unicode/unicode-3.0.0/Block/Hangul_Jamo/regex.js');

require('@unicode/unicode-3.0.0/Block/Hangul_Syllables/code-points.js');
require('@unicode/unicode-3.0.0/Block/Hangul_Syllables/symbols.js');
require('@unicode/unicode-3.0.0/Block/Hangul_Syllables/regex.js');

require('@unicode/unicode-3.0.0/Block/Hebrew/code-points.js');
require('@unicode/unicode-3.0.0/Block/Hebrew/symbols.js');
require('@unicode/unicode-3.0.0/Block/Hebrew/regex.js');

require('@unicode/unicode-3.0.0/Block/High_Private_Use_Surrogates/code-points.js');
require('@unicode/unicode-3.0.0/Block/High_Private_Use_Surrogates/symbols.js');
require('@unicode/unicode-3.0.0/Block/High_Private_Use_Surrogates/regex.js');

require('@unicode/unicode-3.0.0/Block/High_Surrogates/code-points.js');
require('@unicode/unicode-3.0.0/Block/High_Surrogates/symbols.js');
require('@unicode/unicode-3.0.0/Block/High_Surrogates/regex.js');

require('@unicode/unicode-3.0.0/Block/Hiragana/code-points.js');
require('@unicode/unicode-3.0.0/Block/Hiragana/symbols.js');
require('@unicode/unicode-3.0.0/Block/Hiragana/regex.js');

require('@unicode/unicode-3.0.0/Block/IPA_Extensions/code-points.js');
require('@unicode/unicode-3.0.0/Block/IPA_Extensions/symbols.js');
require('@unicode/unicode-3.0.0/Block/IPA_Extensions/regex.js');

require('@unicode/unicode-3.0.0/Block/Ideographic_Description_Characters/code-points.js');
require('@unicode/unicode-3.0.0/Block/Ideographic_Description_Characters/symbols.js');
require('@unicode/unicode-3.0.0/Block/Ideographic_Description_Characters/regex.js');

require('@unicode/unicode-3.0.0/Block/Kanbun/code-points.js');
require('@unicode/unicode-3.0.0/Block/Kanbun/symbols.js');
require('@unicode/unicode-3.0.0/Block/Kanbun/regex.js');

require('@unicode/unicode-3.0.0/Block/Kangxi_Radicals/code-points.js');
require('@unicode/unicode-3.0.0/Block/Kangxi_Radicals/symbols.js');
require('@unicode/unicode-3.0.0/Block/Kangxi_Radicals/regex.js');

require('@unicode/unicode-3.0.0/Block/Kannada/code-points.js');
require('@unicode/unicode-3.0.0/Block/Kannada/symbols.js');
require('@unicode/unicode-3.0.0/Block/Kannada/regex.js');

require('@unicode/unicode-3.0.0/Block/Katakana/code-points.js');
require('@unicode/unicode-3.0.0/Block/Katakana/symbols.js');
require('@unicode/unicode-3.0.0/Block/Katakana/regex.js');

require('@unicode/unicode-3.0.0/Block/Khmer/code-points.js');
require('@unicode/unicode-3.0.0/Block/Khmer/symbols.js');
require('@unicode/unicode-3.0.0/Block/Khmer/regex.js');

require('@unicode/unicode-3.0.0/Block/Lao/code-points.js');
require('@unicode/unicode-3.0.0/Block/Lao/symbols.js');
require('@unicode/unicode-3.0.0/Block/Lao/regex.js');

require('@unicode/unicode-3.0.0/Block/Latin_1_Supplement/code-points.js');
require('@unicode/unicode-3.0.0/Block/Latin_1_Supplement/symbols.js');
require('@unicode/unicode-3.0.0/Block/Latin_1_Supplement/regex.js');

require('@unicode/unicode-3.0.0/Block/Latin_Extended_A/code-points.js');
require('@unicode/unicode-3.0.0/Block/Latin_Extended_A/symbols.js');
require('@unicode/unicode-3.0.0/Block/Latin_Extended_A/regex.js');

require('@unicode/unicode-3.0.0/Block/Latin_Extended_Additional/code-points.js');
require('@unicode/unicode-3.0.0/Block/Latin_Extended_Additional/symbols.js');
require('@unicode/unicode-3.0.0/Block/Latin_Extended_Additional/regex.js');

require('@unicode/unicode-3.0.0/Block/Latin_Extended_B/code-points.js');
require('@unicode/unicode-3.0.0/Block/Latin_Extended_B/symbols.js');
require('@unicode/unicode-3.0.0/Block/Latin_Extended_B/regex.js');

require('@unicode/unicode-3.0.0/Block/Letterlike_Symbols/code-points.js');
require('@unicode/unicode-3.0.0/Block/Letterlike_Symbols/symbols.js');
require('@unicode/unicode-3.0.0/Block/Letterlike_Symbols/regex.js');

require('@unicode/unicode-3.0.0/Block/Low_Surrogates/code-points.js');
require('@unicode/unicode-3.0.0/Block/Low_Surrogates/symbols.js');
require('@unicode/unicode-3.0.0/Block/Low_Surrogates/regex.js');

require('@unicode/unicode-3.0.0/Block/Malayalam/code-points.js');
require('@unicode/unicode-3.0.0/Block/Malayalam/symbols.js');
require('@unicode/unicode-3.0.0/Block/Malayalam/regex.js');

require('@unicode/unicode-3.0.0/Block/Mathematical_Operators/code-points.js');
require('@unicode/unicode-3.0.0/Block/Mathematical_Operators/symbols.js');
require('@unicode/unicode-3.0.0/Block/Mathematical_Operators/regex.js');

require('@unicode/unicode-3.0.0/Block/Miscellaneous_Symbols/code-points.js');
require('@unicode/unicode-3.0.0/Block/Miscellaneous_Symbols/symbols.js');
require('@unicode/unicode-3.0.0/Block/Miscellaneous_Symbols/regex.js');

require('@unicode/unicode-3.0.0/Block/Miscellaneous_Technical/code-points.js');
require('@unicode/unicode-3.0.0/Block/Miscellaneous_Technical/symbols.js');
require('@unicode/unicode-3.0.0/Block/Miscellaneous_Technical/regex.js');

require('@unicode/unicode-3.0.0/Block/Mongolian/code-points.js');
require('@unicode/unicode-3.0.0/Block/Mongolian/symbols.js');
require('@unicode/unicode-3.0.0/Block/Mongolian/regex.js');

require('@unicode/unicode-3.0.0/Block/Myanmar/code-points.js');
require('@unicode/unicode-3.0.0/Block/Myanmar/symbols.js');
require('@unicode/unicode-3.0.0/Block/Myanmar/regex.js');

require('@unicode/unicode-3.0.0/Block/Number_Forms/code-points.js');
require('@unicode/unicode-3.0.0/Block/Number_Forms/symbols.js');
require('@unicode/unicode-3.0.0/Block/Number_Forms/regex.js');

require('@unicode/unicode-3.0.0/Block/Ogham/code-points.js');
require('@unicode/unicode-3.0.0/Block/Ogham/symbols.js');
require('@unicode/unicode-3.0.0/Block/Ogham/regex.js');

require('@unicode/unicode-3.0.0/Block/Optical_Character_Recognition/code-points.js');
require('@unicode/unicode-3.0.0/Block/Optical_Character_Recognition/symbols.js');
require('@unicode/unicode-3.0.0/Block/Optical_Character_Recognition/regex.js');

require('@unicode/unicode-3.0.0/Block/Oriya/code-points.js');
require('@unicode/unicode-3.0.0/Block/Oriya/symbols.js');
require('@unicode/unicode-3.0.0/Block/Oriya/regex.js');

require('@unicode/unicode-3.0.0/Block/Private_Use_Area/code-points.js');
require('@unicode/unicode-3.0.0/Block/Private_Use_Area/symbols.js');
require('@unicode/unicode-3.0.0/Block/Private_Use_Area/regex.js');

require('@unicode/unicode-3.0.0/Block/Runic/code-points.js');
require('@unicode/unicode-3.0.0/Block/Runic/symbols.js');
require('@unicode/unicode-3.0.0/Block/Runic/regex.js');

require('@unicode/unicode-3.0.0/Block/Sinhala/code-points.js');
require('@unicode/unicode-3.0.0/Block/Sinhala/symbols.js');
require('@unicode/unicode-3.0.0/Block/Sinhala/regex.js');

require('@unicode/unicode-3.0.0/Block/Small_Form_Variants/code-points.js');
require('@unicode/unicode-3.0.0/Block/Small_Form_Variants/symbols.js');
require('@unicode/unicode-3.0.0/Block/Small_Form_Variants/regex.js');

require('@unicode/unicode-3.0.0/Block/Spacing_Modifier_Letters/code-points.js');
require('@unicode/unicode-3.0.0/Block/Spacing_Modifier_Letters/symbols.js');
require('@unicode/unicode-3.0.0/Block/Spacing_Modifier_Letters/regex.js');

require('@unicode/unicode-3.0.0/Block/Specials/code-points.js');
require('@unicode/unicode-3.0.0/Block/Specials/symbols.js');
require('@unicode/unicode-3.0.0/Block/Specials/regex.js');

require('@unicode/unicode-3.0.0/Block/Superscripts_And_Subscripts/code-points.js');
require('@unicode/unicode-3.0.0/Block/Superscripts_And_Subscripts/symbols.js');
require('@unicode/unicode-3.0.0/Block/Superscripts_And_Subscripts/regex.js');

require('@unicode/unicode-3.0.0/Block/Syriac/code-points.js');
require('@unicode/unicode-3.0.0/Block/Syriac/symbols.js');
require('@unicode/unicode-3.0.0/Block/Syriac/regex.js');

require('@unicode/unicode-3.0.0/Block/Tamil/code-points.js');
require('@unicode/unicode-3.0.0/Block/Tamil/symbols.js');
require('@unicode/unicode-3.0.0/Block/Tamil/regex.js');

require('@unicode/unicode-3.0.0/Block/Telugu/code-points.js');
require('@unicode/unicode-3.0.0/Block/Telugu/symbols.js');
require('@unicode/unicode-3.0.0/Block/Telugu/regex.js');

require('@unicode/unicode-3.0.0/Block/Thaana/code-points.js');
require('@unicode/unicode-3.0.0/Block/Thaana/symbols.js');
require('@unicode/unicode-3.0.0/Block/Thaana/regex.js');

require('@unicode/unicode-3.0.0/Block/Thai/code-points.js');
require('@unicode/unicode-3.0.0/Block/Thai/symbols.js');
require('@unicode/unicode-3.0.0/Block/Thai/regex.js');

require('@unicode/unicode-3.0.0/Block/Tibetan/code-points.js');
require('@unicode/unicode-3.0.0/Block/Tibetan/symbols.js');
require('@unicode/unicode-3.0.0/Block/Tibetan/regex.js');

require('@unicode/unicode-3.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/code-points.js');
require('@unicode/unicode-3.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/symbols.js');
require('@unicode/unicode-3.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/regex.js');

require('@unicode/unicode-3.0.0/Block/Yi_Radicals/code-points.js');
require('@unicode/unicode-3.0.0/Block/Yi_Radicals/symbols.js');
require('@unicode/unicode-3.0.0/Block/Yi_Radicals/regex.js');

require('@unicode/unicode-3.0.0/Block/Yi_Syllables/code-points.js');
require('@unicode/unicode-3.0.0/Block/Yi_Syllables/symbols.js');
require('@unicode/unicode-3.0.0/Block/Yi_Syllables/regex.js');

// `Simple_Case_Mapping`:

require('@unicode/unicode-3.0.0/Simple_Case_Mapping/Lowercase/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-3.0.0/Simple_Case_Mapping/Lowercase/code-points.js').get(codePoint);
require('@unicode/unicode-3.0.0/Simple_Case_Mapping/Lowercase/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-3.0.0/Simple_Case_Mapping/Lowercase/symbols.js').get(symbol);

require('@unicode/unicode-3.0.0/Simple_Case_Mapping/Titlecase/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-3.0.0/Simple_Case_Mapping/Titlecase/code-points.js').get(codePoint);
require('@unicode/unicode-3.0.0/Simple_Case_Mapping/Titlecase/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-3.0.0/Simple_Case_Mapping/Titlecase/symbols.js').get(symbol);

require('@unicode/unicode-3.0.0/Simple_Case_Mapping/Uppercase/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-3.0.0/Simple_Case_Mapping/Uppercase/code-points.js').get(codePoint);
require('@unicode/unicode-3.0.0/Simple_Case_Mapping/Uppercase/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-3.0.0/Simple_Case_Mapping/Uppercase/symbols.js').get(symbol);

// `Special_Casing`:

require('@unicode/unicode-3.0.0/Special_Casing/Lowercase/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-3.0.0/Special_Casing/Lowercase/code-points.js').get(codePoint);
require('@unicode/unicode-3.0.0/Special_Casing/Lowercase/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-3.0.0/Special_Casing/Lowercase/symbols.js').get(symbol);

require('@unicode/unicode-3.0.0/Special_Casing/Lowercase--FINAL/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-3.0.0/Special_Casing/Lowercase--FINAL/code-points.js').get(codePoint);
require('@unicode/unicode-3.0.0/Special_Casing/Lowercase--FINAL/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-3.0.0/Special_Casing/Lowercase--FINAL/symbols.js').get(symbol);

require('@unicode/unicode-3.0.0/Special_Casing/Lowercase--TR/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-3.0.0/Special_Casing/Lowercase--TR/code-points.js').get(codePoint);
require('@unicode/unicode-3.0.0/Special_Casing/Lowercase--TR/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-3.0.0/Special_Casing/Lowercase--TR/symbols.js').get(symbol);

require('@unicode/unicode-3.0.0/Special_Casing/Titlecase/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-3.0.0/Special_Casing/Titlecase/code-points.js').get(codePoint);
require('@unicode/unicode-3.0.0/Special_Casing/Titlecase/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-3.0.0/Special_Casing/Titlecase/symbols.js').get(symbol);

require('@unicode/unicode-3.0.0/Special_Casing/Titlecase--FINAL/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-3.0.0/Special_Casing/Titlecase--FINAL/code-points.js').get(codePoint);
require('@unicode/unicode-3.0.0/Special_Casing/Titlecase--FINAL/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-3.0.0/Special_Casing/Titlecase--FINAL/symbols.js').get(symbol);

require('@unicode/unicode-3.0.0/Special_Casing/Titlecase--TR/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-3.0.0/Special_Casing/Titlecase--TR/code-points.js').get(codePoint);
require('@unicode/unicode-3.0.0/Special_Casing/Titlecase--TR/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-3.0.0/Special_Casing/Titlecase--TR/symbols.js').get(symbol);

require('@unicode/unicode-3.0.0/Special_Casing/Uppercase/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-3.0.0/Special_Casing/Uppercase/code-points.js').get(codePoint);
require('@unicode/unicode-3.0.0/Special_Casing/Uppercase/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-3.0.0/Special_Casing/Uppercase/symbols.js').get(symbol);

require('@unicode/unicode-3.0.0/Special_Casing/Uppercase--FINAL/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-3.0.0/Special_Casing/Uppercase--FINAL/code-points.js').get(codePoint);
require('@unicode/unicode-3.0.0/Special_Casing/Uppercase--FINAL/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-3.0.0/Special_Casing/Uppercase--FINAL/symbols.js').get(symbol);

require('@unicode/unicode-3.0.0/Special_Casing/Uppercase--TR/code-points.js'); // lookup map from code point to code point or array of code points
require('@unicode/unicode-3.0.0/Special_Casing/Uppercase--TR/code-points.js').get(codePoint);
require('@unicode/unicode-3.0.0/Special_Casing/Uppercase--TR/symbols.js'); // lookup map from symbol to symbol(s)
require('@unicode/unicode-3.0.0/Special_Casing/Uppercase--TR/symbols.js').get(symbol);
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.
