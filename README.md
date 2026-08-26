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
import regenerate from 'regenerate';
import arabic from '@unicode/unicode-6.3.0/Script_Extensions/Arabic/code-points.mjs'; // Or `…/symbols`, doesn’t matter.
import greek from '@unicode/unicode-6.3.0/Script_Extensions/Greek/code-points.mjs'; // Or `…/symbols`, doesn’t matter.
const set = regenerate()
  .add(arabic)
  .add(greek);
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
import uppercaseLetterCodePoints from '@unicode/unicode-3.0.0/General_Category/Uppercase_Letter/code-points.mjs';
// Get an array of symbols (strings) in a given Unicode category:
import uppercaseLetterSymbols from '@unicode/unicode-3.0.0/General_Category/Uppercase_Letter/symbols.mjs';
// Get a regular expression that matches any symbol in a given Unicode category:
import uppercaseLetterRegex from '@unicode/unicode-3.0.0/General_Category/Uppercase_Letter/regex.mjs';
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
import generalCategory from '@unicode/unicode-3.0.0/General_Category/index.mjs';
const category = generalCategory.get(0x41);
// Get an array of all code points with a given bidi class:
import otherNeutralCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Other_Neutral/code-points.mjs';
// Get a map from code points to bidi classes:
import bidiClassMap from '@unicode/unicode-3.0.0/Bidi_Class/index.mjs';
// Get the directionality of a given code point:
const directionality = bidiClassMap.get(0x41);

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v3.0.0:

```js
// `Names`:

import names from '@unicode/unicode-3.0.0/Names/index.mjs'; // Array of canonical names.


// `Binary_Property`:

import ASCIICodePoints from '@unicode/unicode-3.0.0/Binary_Property/ASCII/code-points.mjs';
import ASCIISymbols from '@unicode/unicode-3.0.0/Binary_Property/ASCII/symbols.mjs';
import ASCIIRegex from '@unicode/unicode-3.0.0/Binary_Property/ASCII/regex.mjs';

import AlphabeticCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Alphabetic/code-points.mjs';
import AlphabeticSymbols from '@unicode/unicode-3.0.0/Binary_Property/Alphabetic/symbols.mjs';
import AlphabeticRegex from '@unicode/unicode-3.0.0/Binary_Property/Alphabetic/regex.mjs';

import AnyCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Any/code-points.mjs';
import AnySymbols from '@unicode/unicode-3.0.0/Binary_Property/Any/symbols.mjs';
import AnyRegex from '@unicode/unicode-3.0.0/Binary_Property/Any/regex.mjs';

import AssignedCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Assigned/code-points.mjs';
import AssignedSymbols from '@unicode/unicode-3.0.0/Binary_Property/Assigned/symbols.mjs';
import AssignedRegex from '@unicode/unicode-3.0.0/Binary_Property/Assigned/regex.mjs';

import Bidi_ControlCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Bidi_Control/code-points.mjs';
import Bidi_ControlSymbols from '@unicode/unicode-3.0.0/Binary_Property/Bidi_Control/symbols.mjs';
import Bidi_ControlRegex from '@unicode/unicode-3.0.0/Binary_Property/Bidi_Control/regex.mjs';

import Bidi_MirroredCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Bidi_Mirrored/code-points.mjs';
import Bidi_MirroredSymbols from '@unicode/unicode-3.0.0/Binary_Property/Bidi_Mirrored/symbols.mjs';
import Bidi_MirroredRegex from '@unicode/unicode-3.0.0/Binary_Property/Bidi_Mirrored/regex.mjs';

import CombiningCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Combining/code-points.mjs';
import CombiningSymbols from '@unicode/unicode-3.0.0/Binary_Property/Combining/symbols.mjs';
import CombiningRegex from '@unicode/unicode-3.0.0/Binary_Property/Combining/regex.mjs';

import CompositeCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Composite/code-points.mjs';
import CompositeSymbols from '@unicode/unicode-3.0.0/Binary_Property/Composite/symbols.mjs';
import CompositeRegex from '@unicode/unicode-3.0.0/Binary_Property/Composite/regex.mjs';

import Currency_SymbolCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Currency_Symbol/code-points.mjs';
import Currency_SymbolSymbols from '@unicode/unicode-3.0.0/Binary_Property/Currency_Symbol/symbols.mjs';
import Currency_SymbolRegex from '@unicode/unicode-3.0.0/Binary_Property/Currency_Symbol/regex.mjs';

import DashCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Dash/code-points.mjs';
import DashSymbols from '@unicode/unicode-3.0.0/Binary_Property/Dash/symbols.mjs';
import DashRegex from '@unicode/unicode-3.0.0/Binary_Property/Dash/regex.mjs';

import Decimal_DigitCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Decimal_Digit/code-points.mjs';
import Decimal_DigitSymbols from '@unicode/unicode-3.0.0/Binary_Property/Decimal_Digit/symbols.mjs';
import Decimal_DigitRegex from '@unicode/unicode-3.0.0/Binary_Property/Decimal_Digit/regex.mjs';

import DelimiterCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Delimiter/code-points.mjs';
import DelimiterSymbols from '@unicode/unicode-3.0.0/Binary_Property/Delimiter/symbols.mjs';
import DelimiterRegex from '@unicode/unicode-3.0.0/Binary_Property/Delimiter/regex.mjs';

import DiacriticCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Diacritic/code-points.mjs';
import DiacriticSymbols from '@unicode/unicode-3.0.0/Binary_Property/Diacritic/symbols.mjs';
import DiacriticRegex from '@unicode/unicode-3.0.0/Binary_Property/Diacritic/regex.mjs';

import ExtenderCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Extender/code-points.mjs';
import ExtenderSymbols from '@unicode/unicode-3.0.0/Binary_Property/Extender/symbols.mjs';
import ExtenderRegex from '@unicode/unicode-3.0.0/Binary_Property/Extender/regex.mjs';

import Format_ControlCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Format_Control/code-points.mjs';
import Format_ControlSymbols from '@unicode/unicode-3.0.0/Binary_Property/Format_Control/symbols.mjs';
import Format_ControlRegex from '@unicode/unicode-3.0.0/Binary_Property/Format_Control/regex.mjs';

import Hex_DigitCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Hex_Digit/code-points.mjs';
import Hex_DigitSymbols from '@unicode/unicode-3.0.0/Binary_Property/Hex_Digit/symbols.mjs';
import Hex_DigitRegex from '@unicode/unicode-3.0.0/Binary_Property/Hex_Digit/regex.mjs';

import High_SurrogateCodePoints from '@unicode/unicode-3.0.0/Binary_Property/High_Surrogate/code-points.mjs';
import High_SurrogateSymbols from '@unicode/unicode-3.0.0/Binary_Property/High_Surrogate/symbols.mjs';
import High_SurrogateRegex from '@unicode/unicode-3.0.0/Binary_Property/High_Surrogate/regex.mjs';

import HyphenCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Hyphen/code-points.mjs';
import HyphenSymbols from '@unicode/unicode-3.0.0/Binary_Property/Hyphen/symbols.mjs';
import HyphenRegex from '@unicode/unicode-3.0.0/Binary_Property/Hyphen/regex.mjs';

import ISO_ControlCodePoints from '@unicode/unicode-3.0.0/Binary_Property/ISO_Control/code-points.mjs';
import ISO_ControlSymbols from '@unicode/unicode-3.0.0/Binary_Property/ISO_Control/symbols.mjs';
import ISO_ControlRegex from '@unicode/unicode-3.0.0/Binary_Property/ISO_Control/regex.mjs';

import Identifier_PartCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Identifier_Part/code-points.mjs';
import Identifier_PartSymbols from '@unicode/unicode-3.0.0/Binary_Property/Identifier_Part/symbols.mjs';
import Identifier_PartRegex from '@unicode/unicode-3.0.0/Binary_Property/Identifier_Part/regex.mjs';

import IdeographicCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Ideographic/code-points.mjs';
import IdeographicSymbols from '@unicode/unicode-3.0.0/Binary_Property/Ideographic/symbols.mjs';
import IdeographicRegex from '@unicode/unicode-3.0.0/Binary_Property/Ideographic/regex.mjs';

import Ignorable_ControlCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Ignorable_Control/code-points.mjs';
import Ignorable_ControlSymbols from '@unicode/unicode-3.0.0/Binary_Property/Ignorable_Control/symbols.mjs';
import Ignorable_ControlRegex from '@unicode/unicode-3.0.0/Binary_Property/Ignorable_Control/regex.mjs';

import Join_ControlCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Join_Control/code-points.mjs';
import Join_ControlSymbols from '@unicode/unicode-3.0.0/Binary_Property/Join_Control/symbols.mjs';
import Join_ControlRegex from '@unicode/unicode-3.0.0/Binary_Property/Join_Control/regex.mjs';

import Left_of_PairCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Left_of_Pair/code-points.mjs';
import Left_of_PairSymbols from '@unicode/unicode-3.0.0/Binary_Property/Left_of_Pair/symbols.mjs';
import Left_of_PairRegex from '@unicode/unicode-3.0.0/Binary_Property/Left_of_Pair/regex.mjs';

import Line_SeparatorCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Line_Separator/code-points.mjs';
import Line_SeparatorSymbols from '@unicode/unicode-3.0.0/Binary_Property/Line_Separator/symbols.mjs';
import Line_SeparatorRegex from '@unicode/unicode-3.0.0/Binary_Property/Line_Separator/regex.mjs';

import Low_SurrogateCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Low_Surrogate/code-points.mjs';
import Low_SurrogateSymbols from '@unicode/unicode-3.0.0/Binary_Property/Low_Surrogate/symbols.mjs';
import Low_SurrogateRegex from '@unicode/unicode-3.0.0/Binary_Property/Low_Surrogate/regex.mjs';

import LowercaseCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Lowercase/code-points.mjs';
import LowercaseSymbols from '@unicode/unicode-3.0.0/Binary_Property/Lowercase/symbols.mjs';
import LowercaseRegex from '@unicode/unicode-3.0.0/Binary_Property/Lowercase/regex.mjs';

import MathCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Math/code-points.mjs';
import MathSymbols from '@unicode/unicode-3.0.0/Binary_Property/Math/symbols.mjs';
import MathRegex from '@unicode/unicode-3.0.0/Binary_Property/Math/regex.mjs';

import Non_breakCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Non-break/code-points.mjs';
import Non_breakSymbols from '@unicode/unicode-3.0.0/Binary_Property/Non-break/symbols.mjs';
import Non_breakRegex from '@unicode/unicode-3.0.0/Binary_Property/Non-break/regex.mjs';

import Non_spacingCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Non-spacing/code-points.mjs';
import Non_spacingSymbols from '@unicode/unicode-3.0.0/Binary_Property/Non-spacing/symbols.mjs';
import Non_spacingRegex from '@unicode/unicode-3.0.0/Binary_Property/Non-spacing/regex.mjs';

import NumericCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Numeric/code-points.mjs';
import NumericSymbols from '@unicode/unicode-3.0.0/Binary_Property/Numeric/symbols.mjs';
import NumericRegex from '@unicode/unicode-3.0.0/Binary_Property/Numeric/regex.mjs';

import Paired_PunctuationCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Paired_Punctuation/code-points.mjs';
import Paired_PunctuationSymbols from '@unicode/unicode-3.0.0/Binary_Property/Paired_Punctuation/symbols.mjs';
import Paired_PunctuationRegex from '@unicode/unicode-3.0.0/Binary_Property/Paired_Punctuation/regex.mjs';

import Paragraph_SeparatorCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Paragraph_Separator/code-points.mjs';
import Paragraph_SeparatorSymbols from '@unicode/unicode-3.0.0/Binary_Property/Paragraph_Separator/symbols.mjs';
import Paragraph_SeparatorRegex from '@unicode/unicode-3.0.0/Binary_Property/Paragraph_Separator/regex.mjs';

import Private_UseCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Private_Use/code-points.mjs';
import Private_UseSymbols from '@unicode/unicode-3.0.0/Binary_Property/Private_Use/symbols.mjs';
import Private_UseRegex from '@unicode/unicode-3.0.0/Binary_Property/Private_Use/regex.mjs';

import Private_Use_High_SurrogateCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Private_Use_High_Surrogate/code-points.mjs';
import Private_Use_High_SurrogateSymbols from '@unicode/unicode-3.0.0/Binary_Property/Private_Use_High_Surrogate/symbols.mjs';
import Private_Use_High_SurrogateRegex from '@unicode/unicode-3.0.0/Binary_Property/Private_Use_High_Surrogate/regex.mjs';

import PunctuationCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Punctuation/code-points.mjs';
import PunctuationSymbols from '@unicode/unicode-3.0.0/Binary_Property/Punctuation/symbols.mjs';
import PunctuationRegex from '@unicode/unicode-3.0.0/Binary_Property/Punctuation/regex.mjs';

import Quotation_MarkCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Quotation_Mark/code-points.mjs';
import Quotation_MarkSymbols from '@unicode/unicode-3.0.0/Binary_Property/Quotation_Mark/symbols.mjs';
import Quotation_MarkRegex from '@unicode/unicode-3.0.0/Binary_Property/Quotation_Mark/regex.mjs';

import SpaceCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Space/code-points.mjs';
import SpaceSymbols from '@unicode/unicode-3.0.0/Binary_Property/Space/symbols.mjs';
import SpaceRegex from '@unicode/unicode-3.0.0/Binary_Property/Space/regex.mjs';

import Terminal_PunctuationCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Terminal_Punctuation/code-points.mjs';
import Terminal_PunctuationSymbols from '@unicode/unicode-3.0.0/Binary_Property/Terminal_Punctuation/symbols.mjs';
import Terminal_PunctuationRegex from '@unicode/unicode-3.0.0/Binary_Property/Terminal_Punctuation/regex.mjs';

import TitlecaseCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Titlecase/code-points.mjs';
import TitlecaseSymbols from '@unicode/unicode-3.0.0/Binary_Property/Titlecase/symbols.mjs';
import TitlecaseRegex from '@unicode/unicode-3.0.0/Binary_Property/Titlecase/regex.mjs';

import UppercaseCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Uppercase/code-points.mjs';
import UppercaseSymbols from '@unicode/unicode-3.0.0/Binary_Property/Uppercase/symbols.mjs';
import UppercaseRegex from '@unicode/unicode-3.0.0/Binary_Property/Uppercase/regex.mjs';

import White_spaceCodePoints from '@unicode/unicode-3.0.0/Binary_Property/White_space/code-points.mjs';
import White_spaceSymbols from '@unicode/unicode-3.0.0/Binary_Property/White_space/symbols.mjs';
import White_spaceRegex from '@unicode/unicode-3.0.0/Binary_Property/White_space/regex.mjs';

import Zero_widthCodePoints from '@unicode/unicode-3.0.0/Binary_Property/Zero-width/code-points.mjs';
import Zero_widthSymbols from '@unicode/unicode-3.0.0/Binary_Property/Zero-width/symbols.mjs';
import Zero_widthRegex from '@unicode/unicode-3.0.0/Binary_Property/Zero-width/regex.mjs';

// `General_Category`:

import General_Category from '@unicode/unicode-3.0.0/General_Category/index.mjs'; // Lookup map.

import Cased_LetterCodePoints from '@unicode/unicode-3.0.0/General_Category/Cased_Letter/code-points.mjs';
import Cased_LetterSymbols from '@unicode/unicode-3.0.0/General_Category/Cased_Letter/symbols.mjs';
import Cased_LetterRegex from '@unicode/unicode-3.0.0/General_Category/Cased_Letter/regex.mjs';

import Close_PunctuationCodePoints from '@unicode/unicode-3.0.0/General_Category/Close_Punctuation/code-points.mjs';
import Close_PunctuationSymbols from '@unicode/unicode-3.0.0/General_Category/Close_Punctuation/symbols.mjs';
import Close_PunctuationRegex from '@unicode/unicode-3.0.0/General_Category/Close_Punctuation/regex.mjs';

import Connector_PunctuationCodePoints from '@unicode/unicode-3.0.0/General_Category/Connector_Punctuation/code-points.mjs';
import Connector_PunctuationSymbols from '@unicode/unicode-3.0.0/General_Category/Connector_Punctuation/symbols.mjs';
import Connector_PunctuationRegex from '@unicode/unicode-3.0.0/General_Category/Connector_Punctuation/regex.mjs';

import ControlCodePoints from '@unicode/unicode-3.0.0/General_Category/Control/code-points.mjs';
import ControlSymbols from '@unicode/unicode-3.0.0/General_Category/Control/symbols.mjs';
import ControlRegex from '@unicode/unicode-3.0.0/General_Category/Control/regex.mjs';

import Currency_SymbolCodePoints from '@unicode/unicode-3.0.0/General_Category/Currency_Symbol/code-points.mjs';
import Currency_SymbolSymbols from '@unicode/unicode-3.0.0/General_Category/Currency_Symbol/symbols.mjs';
import Currency_SymbolRegex from '@unicode/unicode-3.0.0/General_Category/Currency_Symbol/regex.mjs';

import Dash_PunctuationCodePoints from '@unicode/unicode-3.0.0/General_Category/Dash_Punctuation/code-points.mjs';
import Dash_PunctuationSymbols from '@unicode/unicode-3.0.0/General_Category/Dash_Punctuation/symbols.mjs';
import Dash_PunctuationRegex from '@unicode/unicode-3.0.0/General_Category/Dash_Punctuation/regex.mjs';

import Decimal_NumberCodePoints from '@unicode/unicode-3.0.0/General_Category/Decimal_Number/code-points.mjs';
import Decimal_NumberSymbols from '@unicode/unicode-3.0.0/General_Category/Decimal_Number/symbols.mjs';
import Decimal_NumberRegex from '@unicode/unicode-3.0.0/General_Category/Decimal_Number/regex.mjs';

import Enclosing_MarkCodePoints from '@unicode/unicode-3.0.0/General_Category/Enclosing_Mark/code-points.mjs';
import Enclosing_MarkSymbols from '@unicode/unicode-3.0.0/General_Category/Enclosing_Mark/symbols.mjs';
import Enclosing_MarkRegex from '@unicode/unicode-3.0.0/General_Category/Enclosing_Mark/regex.mjs';

import Final_PunctuationCodePoints from '@unicode/unicode-3.0.0/General_Category/Final_Punctuation/code-points.mjs';
import Final_PunctuationSymbols from '@unicode/unicode-3.0.0/General_Category/Final_Punctuation/symbols.mjs';
import Final_PunctuationRegex from '@unicode/unicode-3.0.0/General_Category/Final_Punctuation/regex.mjs';

import FormatCodePoints from '@unicode/unicode-3.0.0/General_Category/Format/code-points.mjs';
import FormatSymbols from '@unicode/unicode-3.0.0/General_Category/Format/symbols.mjs';
import FormatRegex from '@unicode/unicode-3.0.0/General_Category/Format/regex.mjs';

import Initial_PunctuationCodePoints from '@unicode/unicode-3.0.0/General_Category/Initial_Punctuation/code-points.mjs';
import Initial_PunctuationSymbols from '@unicode/unicode-3.0.0/General_Category/Initial_Punctuation/symbols.mjs';
import Initial_PunctuationRegex from '@unicode/unicode-3.0.0/General_Category/Initial_Punctuation/regex.mjs';

import LetterCodePoints from '@unicode/unicode-3.0.0/General_Category/Letter/code-points.mjs';
import LetterSymbols from '@unicode/unicode-3.0.0/General_Category/Letter/symbols.mjs';
import LetterRegex from '@unicode/unicode-3.0.0/General_Category/Letter/regex.mjs';

import Letter_NumberCodePoints from '@unicode/unicode-3.0.0/General_Category/Letter_Number/code-points.mjs';
import Letter_NumberSymbols from '@unicode/unicode-3.0.0/General_Category/Letter_Number/symbols.mjs';
import Letter_NumberRegex from '@unicode/unicode-3.0.0/General_Category/Letter_Number/regex.mjs';

import Line_SeparatorCodePoints from '@unicode/unicode-3.0.0/General_Category/Line_Separator/code-points.mjs';
import Line_SeparatorSymbols from '@unicode/unicode-3.0.0/General_Category/Line_Separator/symbols.mjs';
import Line_SeparatorRegex from '@unicode/unicode-3.0.0/General_Category/Line_Separator/regex.mjs';

import Lowercase_LetterCodePoints from '@unicode/unicode-3.0.0/General_Category/Lowercase_Letter/code-points.mjs';
import Lowercase_LetterSymbols from '@unicode/unicode-3.0.0/General_Category/Lowercase_Letter/symbols.mjs';
import Lowercase_LetterRegex from '@unicode/unicode-3.0.0/General_Category/Lowercase_Letter/regex.mjs';

import MarkCodePoints from '@unicode/unicode-3.0.0/General_Category/Mark/code-points.mjs';
import MarkSymbols from '@unicode/unicode-3.0.0/General_Category/Mark/symbols.mjs';
import MarkRegex from '@unicode/unicode-3.0.0/General_Category/Mark/regex.mjs';

import Math_SymbolCodePoints from '@unicode/unicode-3.0.0/General_Category/Math_Symbol/code-points.mjs';
import Math_SymbolSymbols from '@unicode/unicode-3.0.0/General_Category/Math_Symbol/symbols.mjs';
import Math_SymbolRegex from '@unicode/unicode-3.0.0/General_Category/Math_Symbol/regex.mjs';

import Modifier_LetterCodePoints from '@unicode/unicode-3.0.0/General_Category/Modifier_Letter/code-points.mjs';
import Modifier_LetterSymbols from '@unicode/unicode-3.0.0/General_Category/Modifier_Letter/symbols.mjs';
import Modifier_LetterRegex from '@unicode/unicode-3.0.0/General_Category/Modifier_Letter/regex.mjs';

import Modifier_SymbolCodePoints from '@unicode/unicode-3.0.0/General_Category/Modifier_Symbol/code-points.mjs';
import Modifier_SymbolSymbols from '@unicode/unicode-3.0.0/General_Category/Modifier_Symbol/symbols.mjs';
import Modifier_SymbolRegex from '@unicode/unicode-3.0.0/General_Category/Modifier_Symbol/regex.mjs';

import Nonspacing_MarkCodePoints from '@unicode/unicode-3.0.0/General_Category/Nonspacing_Mark/code-points.mjs';
import Nonspacing_MarkSymbols from '@unicode/unicode-3.0.0/General_Category/Nonspacing_Mark/symbols.mjs';
import Nonspacing_MarkRegex from '@unicode/unicode-3.0.0/General_Category/Nonspacing_Mark/regex.mjs';

import NumberCodePoints from '@unicode/unicode-3.0.0/General_Category/Number/code-points.mjs';
import NumberSymbols from '@unicode/unicode-3.0.0/General_Category/Number/symbols.mjs';
import NumberRegex from '@unicode/unicode-3.0.0/General_Category/Number/regex.mjs';

import Open_PunctuationCodePoints from '@unicode/unicode-3.0.0/General_Category/Open_Punctuation/code-points.mjs';
import Open_PunctuationSymbols from '@unicode/unicode-3.0.0/General_Category/Open_Punctuation/symbols.mjs';
import Open_PunctuationRegex from '@unicode/unicode-3.0.0/General_Category/Open_Punctuation/regex.mjs';

import OtherCodePoints from '@unicode/unicode-3.0.0/General_Category/Other/code-points.mjs';
import OtherSymbols from '@unicode/unicode-3.0.0/General_Category/Other/symbols.mjs';
import OtherRegex from '@unicode/unicode-3.0.0/General_Category/Other/regex.mjs';

import Other_LetterCodePoints from '@unicode/unicode-3.0.0/General_Category/Other_Letter/code-points.mjs';
import Other_LetterSymbols from '@unicode/unicode-3.0.0/General_Category/Other_Letter/symbols.mjs';
import Other_LetterRegex from '@unicode/unicode-3.0.0/General_Category/Other_Letter/regex.mjs';

import Other_NumberCodePoints from '@unicode/unicode-3.0.0/General_Category/Other_Number/code-points.mjs';
import Other_NumberSymbols from '@unicode/unicode-3.0.0/General_Category/Other_Number/symbols.mjs';
import Other_NumberRegex from '@unicode/unicode-3.0.0/General_Category/Other_Number/regex.mjs';

import Other_PunctuationCodePoints from '@unicode/unicode-3.0.0/General_Category/Other_Punctuation/code-points.mjs';
import Other_PunctuationSymbols from '@unicode/unicode-3.0.0/General_Category/Other_Punctuation/symbols.mjs';
import Other_PunctuationRegex from '@unicode/unicode-3.0.0/General_Category/Other_Punctuation/regex.mjs';

import Other_SymbolCodePoints from '@unicode/unicode-3.0.0/General_Category/Other_Symbol/code-points.mjs';
import Other_SymbolSymbols from '@unicode/unicode-3.0.0/General_Category/Other_Symbol/symbols.mjs';
import Other_SymbolRegex from '@unicode/unicode-3.0.0/General_Category/Other_Symbol/regex.mjs';

import Paragraph_SeparatorCodePoints from '@unicode/unicode-3.0.0/General_Category/Paragraph_Separator/code-points.mjs';
import Paragraph_SeparatorSymbols from '@unicode/unicode-3.0.0/General_Category/Paragraph_Separator/symbols.mjs';
import Paragraph_SeparatorRegex from '@unicode/unicode-3.0.0/General_Category/Paragraph_Separator/regex.mjs';

import Private_UseCodePoints from '@unicode/unicode-3.0.0/General_Category/Private_Use/code-points.mjs';
import Private_UseSymbols from '@unicode/unicode-3.0.0/General_Category/Private_Use/symbols.mjs';
import Private_UseRegex from '@unicode/unicode-3.0.0/General_Category/Private_Use/regex.mjs';

import PunctuationCodePoints from '@unicode/unicode-3.0.0/General_Category/Punctuation/code-points.mjs';
import PunctuationSymbols from '@unicode/unicode-3.0.0/General_Category/Punctuation/symbols.mjs';
import PunctuationRegex from '@unicode/unicode-3.0.0/General_Category/Punctuation/regex.mjs';

import SeparatorCodePoints from '@unicode/unicode-3.0.0/General_Category/Separator/code-points.mjs';
import SeparatorSymbols from '@unicode/unicode-3.0.0/General_Category/Separator/symbols.mjs';
import SeparatorRegex from '@unicode/unicode-3.0.0/General_Category/Separator/regex.mjs';

import Space_SeparatorCodePoints from '@unicode/unicode-3.0.0/General_Category/Space_Separator/code-points.mjs';
import Space_SeparatorSymbols from '@unicode/unicode-3.0.0/General_Category/Space_Separator/symbols.mjs';
import Space_SeparatorRegex from '@unicode/unicode-3.0.0/General_Category/Space_Separator/regex.mjs';

import Spacing_MarkCodePoints from '@unicode/unicode-3.0.0/General_Category/Spacing_Mark/code-points.mjs';
import Spacing_MarkSymbols from '@unicode/unicode-3.0.0/General_Category/Spacing_Mark/symbols.mjs';
import Spacing_MarkRegex from '@unicode/unicode-3.0.0/General_Category/Spacing_Mark/regex.mjs';

import SurrogateCodePoints from '@unicode/unicode-3.0.0/General_Category/Surrogate/code-points.mjs';
import SurrogateSymbols from '@unicode/unicode-3.0.0/General_Category/Surrogate/symbols.mjs';
import SurrogateRegex from '@unicode/unicode-3.0.0/General_Category/Surrogate/regex.mjs';

import SymbolCodePoints from '@unicode/unicode-3.0.0/General_Category/Symbol/code-points.mjs';
import SymbolSymbols from '@unicode/unicode-3.0.0/General_Category/Symbol/symbols.mjs';
import SymbolRegex from '@unicode/unicode-3.0.0/General_Category/Symbol/regex.mjs';

import Titlecase_LetterCodePoints from '@unicode/unicode-3.0.0/General_Category/Titlecase_Letter/code-points.mjs';
import Titlecase_LetterSymbols from '@unicode/unicode-3.0.0/General_Category/Titlecase_Letter/symbols.mjs';
import Titlecase_LetterRegex from '@unicode/unicode-3.0.0/General_Category/Titlecase_Letter/regex.mjs';

import UnassignedCodePoints from '@unicode/unicode-3.0.0/General_Category/Unassigned/code-points.mjs';
import UnassignedSymbols from '@unicode/unicode-3.0.0/General_Category/Unassigned/symbols.mjs';
import UnassignedRegex from '@unicode/unicode-3.0.0/General_Category/Unassigned/regex.mjs';

import Uppercase_LetterCodePoints from '@unicode/unicode-3.0.0/General_Category/Uppercase_Letter/code-points.mjs';
import Uppercase_LetterSymbols from '@unicode/unicode-3.0.0/General_Category/Uppercase_Letter/symbols.mjs';
import Uppercase_LetterRegex from '@unicode/unicode-3.0.0/General_Category/Uppercase_Letter/regex.mjs';

// `Bidi_Class`:

import Bidi_Class from '@unicode/unicode-3.0.0/Bidi_Class/index.mjs'; // Lookup map.

import Arabic_LetterCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Arabic_Letter/code-points.mjs';
import Arabic_LetterSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Arabic_Letter/symbols.mjs';
import Arabic_LetterRegex from '@unicode/unicode-3.0.0/Bidi_Class/Arabic_Letter/regex.mjs';

import Arabic_NumberCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Arabic_Number/code-points.mjs';
import Arabic_NumberSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Arabic_Number/symbols.mjs';
import Arabic_NumberRegex from '@unicode/unicode-3.0.0/Bidi_Class/Arabic_Number/regex.mjs';

import Boundary_NeutralCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Boundary_Neutral/code-points.mjs';
import Boundary_NeutralSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Boundary_Neutral/symbols.mjs';
import Boundary_NeutralRegex from '@unicode/unicode-3.0.0/Bidi_Class/Boundary_Neutral/regex.mjs';

import Common_SeparatorCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Common_Separator/code-points.mjs';
import Common_SeparatorSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Common_Separator/symbols.mjs';
import Common_SeparatorRegex from '@unicode/unicode-3.0.0/Bidi_Class/Common_Separator/regex.mjs';

import European_NumberCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/European_Number/code-points.mjs';
import European_NumberSymbols from '@unicode/unicode-3.0.0/Bidi_Class/European_Number/symbols.mjs';
import European_NumberRegex from '@unicode/unicode-3.0.0/Bidi_Class/European_Number/regex.mjs';

import European_SeparatorCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/European_Separator/code-points.mjs';
import European_SeparatorSymbols from '@unicode/unicode-3.0.0/Bidi_Class/European_Separator/symbols.mjs';
import European_SeparatorRegex from '@unicode/unicode-3.0.0/Bidi_Class/European_Separator/regex.mjs';

import European_TerminatorCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/European_Terminator/code-points.mjs';
import European_TerminatorSymbols from '@unicode/unicode-3.0.0/Bidi_Class/European_Terminator/symbols.mjs';
import European_TerminatorRegex from '@unicode/unicode-3.0.0/Bidi_Class/European_Terminator/regex.mjs';

import Left_To_RightCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right/code-points.mjs';
import Left_To_RightSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right/symbols.mjs';
import Left_To_RightRegex from '@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right/regex.mjs';

import Left_To_Right_EmbeddingCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right_Embedding/code-points.mjs';
import Left_To_Right_EmbeddingSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right_Embedding/symbols.mjs';
import Left_To_Right_EmbeddingRegex from '@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right_Embedding/regex.mjs';

import Left_To_Right_OverrideCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right_Override/code-points.mjs';
import Left_To_Right_OverrideSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right_Override/symbols.mjs';
import Left_To_Right_OverrideRegex from '@unicode/unicode-3.0.0/Bidi_Class/Left_To_Right_Override/regex.mjs';

import Nonspacing_MarkCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Nonspacing_Mark/code-points.mjs';
import Nonspacing_MarkSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Nonspacing_Mark/symbols.mjs';
import Nonspacing_MarkRegex from '@unicode/unicode-3.0.0/Bidi_Class/Nonspacing_Mark/regex.mjs';

import Other_NeutralCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Other_Neutral/code-points.mjs';
import Other_NeutralSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Other_Neutral/symbols.mjs';
import Other_NeutralRegex from '@unicode/unicode-3.0.0/Bidi_Class/Other_Neutral/regex.mjs';

import Paragraph_SeparatorCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Paragraph_Separator/code-points.mjs';
import Paragraph_SeparatorSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Paragraph_Separator/symbols.mjs';
import Paragraph_SeparatorRegex from '@unicode/unicode-3.0.0/Bidi_Class/Paragraph_Separator/regex.mjs';

import Pop_Directional_FormatCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Pop_Directional_Format/code-points.mjs';
import Pop_Directional_FormatSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Pop_Directional_Format/symbols.mjs';
import Pop_Directional_FormatRegex from '@unicode/unicode-3.0.0/Bidi_Class/Pop_Directional_Format/regex.mjs';

import Right_To_LeftCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left/code-points.mjs';
import Right_To_LeftSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left/symbols.mjs';
import Right_To_LeftRegex from '@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left/regex.mjs';

import Right_To_Left_EmbeddingCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left_Embedding/code-points.mjs';
import Right_To_Left_EmbeddingSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left_Embedding/symbols.mjs';
import Right_To_Left_EmbeddingRegex from '@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left_Embedding/regex.mjs';

import Right_To_Left_OverrideCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left_Override/code-points.mjs';
import Right_To_Left_OverrideSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left_Override/symbols.mjs';
import Right_To_Left_OverrideRegex from '@unicode/unicode-3.0.0/Bidi_Class/Right_To_Left_Override/regex.mjs';

import Segment_SeparatorCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/Segment_Separator/code-points.mjs';
import Segment_SeparatorSymbols from '@unicode/unicode-3.0.0/Bidi_Class/Segment_Separator/symbols.mjs';
import Segment_SeparatorRegex from '@unicode/unicode-3.0.0/Bidi_Class/Segment_Separator/regex.mjs';

import White_SpaceCodePoints from '@unicode/unicode-3.0.0/Bidi_Class/White_Space/code-points.mjs';
import White_SpaceSymbols from '@unicode/unicode-3.0.0/Bidi_Class/White_Space/symbols.mjs';
import White_SpaceRegex from '@unicode/unicode-3.0.0/Bidi_Class/White_Space/regex.mjs';

// `Block`:

import Alphabetic_Presentation_FormsCodePoints from '@unicode/unicode-3.0.0/Block/Alphabetic_Presentation_Forms/code-points.mjs';
import Alphabetic_Presentation_FormsSymbols from '@unicode/unicode-3.0.0/Block/Alphabetic_Presentation_Forms/symbols.mjs';
import Alphabetic_Presentation_FormsRegex from '@unicode/unicode-3.0.0/Block/Alphabetic_Presentation_Forms/regex.mjs';

import ArabicCodePoints from '@unicode/unicode-3.0.0/Block/Arabic/code-points.mjs';
import ArabicSymbols from '@unicode/unicode-3.0.0/Block/Arabic/symbols.mjs';
import ArabicRegex from '@unicode/unicode-3.0.0/Block/Arabic/regex.mjs';

import Arabic_Presentation_Forms_ACodePoints from '@unicode/unicode-3.0.0/Block/Arabic_Presentation_Forms_A/code-points.mjs';
import Arabic_Presentation_Forms_ASymbols from '@unicode/unicode-3.0.0/Block/Arabic_Presentation_Forms_A/symbols.mjs';
import Arabic_Presentation_Forms_ARegex from '@unicode/unicode-3.0.0/Block/Arabic_Presentation_Forms_A/regex.mjs';

import Arabic_Presentation_Forms_BCodePoints from '@unicode/unicode-3.0.0/Block/Arabic_Presentation_Forms_B/code-points.mjs';
import Arabic_Presentation_Forms_BSymbols from '@unicode/unicode-3.0.0/Block/Arabic_Presentation_Forms_B/symbols.mjs';
import Arabic_Presentation_Forms_BRegex from '@unicode/unicode-3.0.0/Block/Arabic_Presentation_Forms_B/regex.mjs';

import ArmenianCodePoints from '@unicode/unicode-3.0.0/Block/Armenian/code-points.mjs';
import ArmenianSymbols from '@unicode/unicode-3.0.0/Block/Armenian/symbols.mjs';
import ArmenianRegex from '@unicode/unicode-3.0.0/Block/Armenian/regex.mjs';

import ArrowsCodePoints from '@unicode/unicode-3.0.0/Block/Arrows/code-points.mjs';
import ArrowsSymbols from '@unicode/unicode-3.0.0/Block/Arrows/symbols.mjs';
import ArrowsRegex from '@unicode/unicode-3.0.0/Block/Arrows/regex.mjs';

import Basic_LatinCodePoints from '@unicode/unicode-3.0.0/Block/Basic_Latin/code-points.mjs';
import Basic_LatinSymbols from '@unicode/unicode-3.0.0/Block/Basic_Latin/symbols.mjs';
import Basic_LatinRegex from '@unicode/unicode-3.0.0/Block/Basic_Latin/regex.mjs';

import BengaliCodePoints from '@unicode/unicode-3.0.0/Block/Bengali/code-points.mjs';
import BengaliSymbols from '@unicode/unicode-3.0.0/Block/Bengali/symbols.mjs';
import BengaliRegex from '@unicode/unicode-3.0.0/Block/Bengali/regex.mjs';

import Block_ElementsCodePoints from '@unicode/unicode-3.0.0/Block/Block_Elements/code-points.mjs';
import Block_ElementsSymbols from '@unicode/unicode-3.0.0/Block/Block_Elements/symbols.mjs';
import Block_ElementsRegex from '@unicode/unicode-3.0.0/Block/Block_Elements/regex.mjs';

import BopomofoCodePoints from '@unicode/unicode-3.0.0/Block/Bopomofo/code-points.mjs';
import BopomofoSymbols from '@unicode/unicode-3.0.0/Block/Bopomofo/symbols.mjs';
import BopomofoRegex from '@unicode/unicode-3.0.0/Block/Bopomofo/regex.mjs';

import Bopomofo_ExtendedCodePoints from '@unicode/unicode-3.0.0/Block/Bopomofo_Extended/code-points.mjs';
import Bopomofo_ExtendedSymbols from '@unicode/unicode-3.0.0/Block/Bopomofo_Extended/symbols.mjs';
import Bopomofo_ExtendedRegex from '@unicode/unicode-3.0.0/Block/Bopomofo_Extended/regex.mjs';

import Box_DrawingCodePoints from '@unicode/unicode-3.0.0/Block/Box_Drawing/code-points.mjs';
import Box_DrawingSymbols from '@unicode/unicode-3.0.0/Block/Box_Drawing/symbols.mjs';
import Box_DrawingRegex from '@unicode/unicode-3.0.0/Block/Box_Drawing/regex.mjs';

import Braille_PatternsCodePoints from '@unicode/unicode-3.0.0/Block/Braille_Patterns/code-points.mjs';
import Braille_PatternsSymbols from '@unicode/unicode-3.0.0/Block/Braille_Patterns/symbols.mjs';
import Braille_PatternsRegex from '@unicode/unicode-3.0.0/Block/Braille_Patterns/regex.mjs';

import CJK_CompatibilityCodePoints from '@unicode/unicode-3.0.0/Block/CJK_Compatibility/code-points.mjs';
import CJK_CompatibilitySymbols from '@unicode/unicode-3.0.0/Block/CJK_Compatibility/symbols.mjs';
import CJK_CompatibilityRegex from '@unicode/unicode-3.0.0/Block/CJK_Compatibility/regex.mjs';

import CJK_Compatibility_FormsCodePoints from '@unicode/unicode-3.0.0/Block/CJK_Compatibility_Forms/code-points.mjs';
import CJK_Compatibility_FormsSymbols from '@unicode/unicode-3.0.0/Block/CJK_Compatibility_Forms/symbols.mjs';
import CJK_Compatibility_FormsRegex from '@unicode/unicode-3.0.0/Block/CJK_Compatibility_Forms/regex.mjs';

import CJK_Compatibility_IdeographsCodePoints from '@unicode/unicode-3.0.0/Block/CJK_Compatibility_Ideographs/code-points.mjs';
import CJK_Compatibility_IdeographsSymbols from '@unicode/unicode-3.0.0/Block/CJK_Compatibility_Ideographs/symbols.mjs';
import CJK_Compatibility_IdeographsRegex from '@unicode/unicode-3.0.0/Block/CJK_Compatibility_Ideographs/regex.mjs';

import CJK_Radicals_SupplementCodePoints from '@unicode/unicode-3.0.0/Block/CJK_Radicals_Supplement/code-points.mjs';
import CJK_Radicals_SupplementSymbols from '@unicode/unicode-3.0.0/Block/CJK_Radicals_Supplement/symbols.mjs';
import CJK_Radicals_SupplementRegex from '@unicode/unicode-3.0.0/Block/CJK_Radicals_Supplement/regex.mjs';

import CJK_Symbols_And_PunctuationCodePoints from '@unicode/unicode-3.0.0/Block/CJK_Symbols_And_Punctuation/code-points.mjs';
import CJK_Symbols_And_PunctuationSymbols from '@unicode/unicode-3.0.0/Block/CJK_Symbols_And_Punctuation/symbols.mjs';
import CJK_Symbols_And_PunctuationRegex from '@unicode/unicode-3.0.0/Block/CJK_Symbols_And_Punctuation/regex.mjs';

import CJK_Unified_IdeographsCodePoints from '@unicode/unicode-3.0.0/Block/CJK_Unified_Ideographs/code-points.mjs';
import CJK_Unified_IdeographsSymbols from '@unicode/unicode-3.0.0/Block/CJK_Unified_Ideographs/symbols.mjs';
import CJK_Unified_IdeographsRegex from '@unicode/unicode-3.0.0/Block/CJK_Unified_Ideographs/regex.mjs';

import CJK_Unified_Ideographs_Extension_ACodePoints from '@unicode/unicode-3.0.0/Block/CJK_Unified_Ideographs_Extension_A/code-points.mjs';
import CJK_Unified_Ideographs_Extension_ASymbols from '@unicode/unicode-3.0.0/Block/CJK_Unified_Ideographs_Extension_A/symbols.mjs';
import CJK_Unified_Ideographs_Extension_ARegex from '@unicode/unicode-3.0.0/Block/CJK_Unified_Ideographs_Extension_A/regex.mjs';

import CherokeeCodePoints from '@unicode/unicode-3.0.0/Block/Cherokee/code-points.mjs';
import CherokeeSymbols from '@unicode/unicode-3.0.0/Block/Cherokee/symbols.mjs';
import CherokeeRegex from '@unicode/unicode-3.0.0/Block/Cherokee/regex.mjs';

import Combining_Diacritical_MarksCodePoints from '@unicode/unicode-3.0.0/Block/Combining_Diacritical_Marks/code-points.mjs';
import Combining_Diacritical_MarksSymbols from '@unicode/unicode-3.0.0/Block/Combining_Diacritical_Marks/symbols.mjs';
import Combining_Diacritical_MarksRegex from '@unicode/unicode-3.0.0/Block/Combining_Diacritical_Marks/regex.mjs';

import Combining_Diacritical_Marks_For_SymbolsCodePoints from '@unicode/unicode-3.0.0/Block/Combining_Diacritical_Marks_For_Symbols/code-points.mjs';
import Combining_Diacritical_Marks_For_SymbolsSymbols from '@unicode/unicode-3.0.0/Block/Combining_Diacritical_Marks_For_Symbols/symbols.mjs';
import Combining_Diacritical_Marks_For_SymbolsRegex from '@unicode/unicode-3.0.0/Block/Combining_Diacritical_Marks_For_Symbols/regex.mjs';

import Combining_Half_MarksCodePoints from '@unicode/unicode-3.0.0/Block/Combining_Half_Marks/code-points.mjs';
import Combining_Half_MarksSymbols from '@unicode/unicode-3.0.0/Block/Combining_Half_Marks/symbols.mjs';
import Combining_Half_MarksRegex from '@unicode/unicode-3.0.0/Block/Combining_Half_Marks/regex.mjs';

import Control_PicturesCodePoints from '@unicode/unicode-3.0.0/Block/Control_Pictures/code-points.mjs';
import Control_PicturesSymbols from '@unicode/unicode-3.0.0/Block/Control_Pictures/symbols.mjs';
import Control_PicturesRegex from '@unicode/unicode-3.0.0/Block/Control_Pictures/regex.mjs';

import Currency_SymbolsCodePoints from '@unicode/unicode-3.0.0/Block/Currency_Symbols/code-points.mjs';
import Currency_SymbolsSymbols from '@unicode/unicode-3.0.0/Block/Currency_Symbols/symbols.mjs';
import Currency_SymbolsRegex from '@unicode/unicode-3.0.0/Block/Currency_Symbols/regex.mjs';

import CyrillicCodePoints from '@unicode/unicode-3.0.0/Block/Cyrillic/code-points.mjs';
import CyrillicSymbols from '@unicode/unicode-3.0.0/Block/Cyrillic/symbols.mjs';
import CyrillicRegex from '@unicode/unicode-3.0.0/Block/Cyrillic/regex.mjs';

import DevanagariCodePoints from '@unicode/unicode-3.0.0/Block/Devanagari/code-points.mjs';
import DevanagariSymbols from '@unicode/unicode-3.0.0/Block/Devanagari/symbols.mjs';
import DevanagariRegex from '@unicode/unicode-3.0.0/Block/Devanagari/regex.mjs';

import DingbatsCodePoints from '@unicode/unicode-3.0.0/Block/Dingbats/code-points.mjs';
import DingbatsSymbols from '@unicode/unicode-3.0.0/Block/Dingbats/symbols.mjs';
import DingbatsRegex from '@unicode/unicode-3.0.0/Block/Dingbats/regex.mjs';

import Enclosed_AlphanumericsCodePoints from '@unicode/unicode-3.0.0/Block/Enclosed_Alphanumerics/code-points.mjs';
import Enclosed_AlphanumericsSymbols from '@unicode/unicode-3.0.0/Block/Enclosed_Alphanumerics/symbols.mjs';
import Enclosed_AlphanumericsRegex from '@unicode/unicode-3.0.0/Block/Enclosed_Alphanumerics/regex.mjs';

import Enclosed_CJK_Letters_And_MonthsCodePoints from '@unicode/unicode-3.0.0/Block/Enclosed_CJK_Letters_And_Months/code-points.mjs';
import Enclosed_CJK_Letters_And_MonthsSymbols from '@unicode/unicode-3.0.0/Block/Enclosed_CJK_Letters_And_Months/symbols.mjs';
import Enclosed_CJK_Letters_And_MonthsRegex from '@unicode/unicode-3.0.0/Block/Enclosed_CJK_Letters_And_Months/regex.mjs';

import EthiopicCodePoints from '@unicode/unicode-3.0.0/Block/Ethiopic/code-points.mjs';
import EthiopicSymbols from '@unicode/unicode-3.0.0/Block/Ethiopic/symbols.mjs';
import EthiopicRegex from '@unicode/unicode-3.0.0/Block/Ethiopic/regex.mjs';

import General_PunctuationCodePoints from '@unicode/unicode-3.0.0/Block/General_Punctuation/code-points.mjs';
import General_PunctuationSymbols from '@unicode/unicode-3.0.0/Block/General_Punctuation/symbols.mjs';
import General_PunctuationRegex from '@unicode/unicode-3.0.0/Block/General_Punctuation/regex.mjs';

import Geometric_ShapesCodePoints from '@unicode/unicode-3.0.0/Block/Geometric_Shapes/code-points.mjs';
import Geometric_ShapesSymbols from '@unicode/unicode-3.0.0/Block/Geometric_Shapes/symbols.mjs';
import Geometric_ShapesRegex from '@unicode/unicode-3.0.0/Block/Geometric_Shapes/regex.mjs';

import GeorgianCodePoints from '@unicode/unicode-3.0.0/Block/Georgian/code-points.mjs';
import GeorgianSymbols from '@unicode/unicode-3.0.0/Block/Georgian/symbols.mjs';
import GeorgianRegex from '@unicode/unicode-3.0.0/Block/Georgian/regex.mjs';

import Greek_And_CopticCodePoints from '@unicode/unicode-3.0.0/Block/Greek_And_Coptic/code-points.mjs';
import Greek_And_CopticSymbols from '@unicode/unicode-3.0.0/Block/Greek_And_Coptic/symbols.mjs';
import Greek_And_CopticRegex from '@unicode/unicode-3.0.0/Block/Greek_And_Coptic/regex.mjs';

import Greek_ExtendedCodePoints from '@unicode/unicode-3.0.0/Block/Greek_Extended/code-points.mjs';
import Greek_ExtendedSymbols from '@unicode/unicode-3.0.0/Block/Greek_Extended/symbols.mjs';
import Greek_ExtendedRegex from '@unicode/unicode-3.0.0/Block/Greek_Extended/regex.mjs';

import GujaratiCodePoints from '@unicode/unicode-3.0.0/Block/Gujarati/code-points.mjs';
import GujaratiSymbols from '@unicode/unicode-3.0.0/Block/Gujarati/symbols.mjs';
import GujaratiRegex from '@unicode/unicode-3.0.0/Block/Gujarati/regex.mjs';

import GurmukhiCodePoints from '@unicode/unicode-3.0.0/Block/Gurmukhi/code-points.mjs';
import GurmukhiSymbols from '@unicode/unicode-3.0.0/Block/Gurmukhi/symbols.mjs';
import GurmukhiRegex from '@unicode/unicode-3.0.0/Block/Gurmukhi/regex.mjs';

import Halfwidth_And_Fullwidth_FormsCodePoints from '@unicode/unicode-3.0.0/Block/Halfwidth_And_Fullwidth_Forms/code-points.mjs';
import Halfwidth_And_Fullwidth_FormsSymbols from '@unicode/unicode-3.0.0/Block/Halfwidth_And_Fullwidth_Forms/symbols.mjs';
import Halfwidth_And_Fullwidth_FormsRegex from '@unicode/unicode-3.0.0/Block/Halfwidth_And_Fullwidth_Forms/regex.mjs';

import Hangul_Compatibility_JamoCodePoints from '@unicode/unicode-3.0.0/Block/Hangul_Compatibility_Jamo/code-points.mjs';
import Hangul_Compatibility_JamoSymbols from '@unicode/unicode-3.0.0/Block/Hangul_Compatibility_Jamo/symbols.mjs';
import Hangul_Compatibility_JamoRegex from '@unicode/unicode-3.0.0/Block/Hangul_Compatibility_Jamo/regex.mjs';

import Hangul_JamoCodePoints from '@unicode/unicode-3.0.0/Block/Hangul_Jamo/code-points.mjs';
import Hangul_JamoSymbols from '@unicode/unicode-3.0.0/Block/Hangul_Jamo/symbols.mjs';
import Hangul_JamoRegex from '@unicode/unicode-3.0.0/Block/Hangul_Jamo/regex.mjs';

import Hangul_SyllablesCodePoints from '@unicode/unicode-3.0.0/Block/Hangul_Syllables/code-points.mjs';
import Hangul_SyllablesSymbols from '@unicode/unicode-3.0.0/Block/Hangul_Syllables/symbols.mjs';
import Hangul_SyllablesRegex from '@unicode/unicode-3.0.0/Block/Hangul_Syllables/regex.mjs';

import HebrewCodePoints from '@unicode/unicode-3.0.0/Block/Hebrew/code-points.mjs';
import HebrewSymbols from '@unicode/unicode-3.0.0/Block/Hebrew/symbols.mjs';
import HebrewRegex from '@unicode/unicode-3.0.0/Block/Hebrew/regex.mjs';

import High_Private_Use_SurrogatesCodePoints from '@unicode/unicode-3.0.0/Block/High_Private_Use_Surrogates/code-points.mjs';
import High_Private_Use_SurrogatesSymbols from '@unicode/unicode-3.0.0/Block/High_Private_Use_Surrogates/symbols.mjs';
import High_Private_Use_SurrogatesRegex from '@unicode/unicode-3.0.0/Block/High_Private_Use_Surrogates/regex.mjs';

import High_SurrogatesCodePoints from '@unicode/unicode-3.0.0/Block/High_Surrogates/code-points.mjs';
import High_SurrogatesSymbols from '@unicode/unicode-3.0.0/Block/High_Surrogates/symbols.mjs';
import High_SurrogatesRegex from '@unicode/unicode-3.0.0/Block/High_Surrogates/regex.mjs';

import HiraganaCodePoints from '@unicode/unicode-3.0.0/Block/Hiragana/code-points.mjs';
import HiraganaSymbols from '@unicode/unicode-3.0.0/Block/Hiragana/symbols.mjs';
import HiraganaRegex from '@unicode/unicode-3.0.0/Block/Hiragana/regex.mjs';

import IPA_ExtensionsCodePoints from '@unicode/unicode-3.0.0/Block/IPA_Extensions/code-points.mjs';
import IPA_ExtensionsSymbols from '@unicode/unicode-3.0.0/Block/IPA_Extensions/symbols.mjs';
import IPA_ExtensionsRegex from '@unicode/unicode-3.0.0/Block/IPA_Extensions/regex.mjs';

import Ideographic_Description_CharactersCodePoints from '@unicode/unicode-3.0.0/Block/Ideographic_Description_Characters/code-points.mjs';
import Ideographic_Description_CharactersSymbols from '@unicode/unicode-3.0.0/Block/Ideographic_Description_Characters/symbols.mjs';
import Ideographic_Description_CharactersRegex from '@unicode/unicode-3.0.0/Block/Ideographic_Description_Characters/regex.mjs';

import KanbunCodePoints from '@unicode/unicode-3.0.0/Block/Kanbun/code-points.mjs';
import KanbunSymbols from '@unicode/unicode-3.0.0/Block/Kanbun/symbols.mjs';
import KanbunRegex from '@unicode/unicode-3.0.0/Block/Kanbun/regex.mjs';

import Kangxi_RadicalsCodePoints from '@unicode/unicode-3.0.0/Block/Kangxi_Radicals/code-points.mjs';
import Kangxi_RadicalsSymbols from '@unicode/unicode-3.0.0/Block/Kangxi_Radicals/symbols.mjs';
import Kangxi_RadicalsRegex from '@unicode/unicode-3.0.0/Block/Kangxi_Radicals/regex.mjs';

import KannadaCodePoints from '@unicode/unicode-3.0.0/Block/Kannada/code-points.mjs';
import KannadaSymbols from '@unicode/unicode-3.0.0/Block/Kannada/symbols.mjs';
import KannadaRegex from '@unicode/unicode-3.0.0/Block/Kannada/regex.mjs';

import KatakanaCodePoints from '@unicode/unicode-3.0.0/Block/Katakana/code-points.mjs';
import KatakanaSymbols from '@unicode/unicode-3.0.0/Block/Katakana/symbols.mjs';
import KatakanaRegex from '@unicode/unicode-3.0.0/Block/Katakana/regex.mjs';

import KhmerCodePoints from '@unicode/unicode-3.0.0/Block/Khmer/code-points.mjs';
import KhmerSymbols from '@unicode/unicode-3.0.0/Block/Khmer/symbols.mjs';
import KhmerRegex from '@unicode/unicode-3.0.0/Block/Khmer/regex.mjs';

import LaoCodePoints from '@unicode/unicode-3.0.0/Block/Lao/code-points.mjs';
import LaoSymbols from '@unicode/unicode-3.0.0/Block/Lao/symbols.mjs';
import LaoRegex from '@unicode/unicode-3.0.0/Block/Lao/regex.mjs';

import Latin_1_SupplementCodePoints from '@unicode/unicode-3.0.0/Block/Latin_1_Supplement/code-points.mjs';
import Latin_1_SupplementSymbols from '@unicode/unicode-3.0.0/Block/Latin_1_Supplement/symbols.mjs';
import Latin_1_SupplementRegex from '@unicode/unicode-3.0.0/Block/Latin_1_Supplement/regex.mjs';

import Latin_Extended_ACodePoints from '@unicode/unicode-3.0.0/Block/Latin_Extended_A/code-points.mjs';
import Latin_Extended_ASymbols from '@unicode/unicode-3.0.0/Block/Latin_Extended_A/symbols.mjs';
import Latin_Extended_ARegex from '@unicode/unicode-3.0.0/Block/Latin_Extended_A/regex.mjs';

import Latin_Extended_AdditionalCodePoints from '@unicode/unicode-3.0.0/Block/Latin_Extended_Additional/code-points.mjs';
import Latin_Extended_AdditionalSymbols from '@unicode/unicode-3.0.0/Block/Latin_Extended_Additional/symbols.mjs';
import Latin_Extended_AdditionalRegex from '@unicode/unicode-3.0.0/Block/Latin_Extended_Additional/regex.mjs';

import Latin_Extended_BCodePoints from '@unicode/unicode-3.0.0/Block/Latin_Extended_B/code-points.mjs';
import Latin_Extended_BSymbols from '@unicode/unicode-3.0.0/Block/Latin_Extended_B/symbols.mjs';
import Latin_Extended_BRegex from '@unicode/unicode-3.0.0/Block/Latin_Extended_B/regex.mjs';

import Letterlike_SymbolsCodePoints from '@unicode/unicode-3.0.0/Block/Letterlike_Symbols/code-points.mjs';
import Letterlike_SymbolsSymbols from '@unicode/unicode-3.0.0/Block/Letterlike_Symbols/symbols.mjs';
import Letterlike_SymbolsRegex from '@unicode/unicode-3.0.0/Block/Letterlike_Symbols/regex.mjs';

import Low_SurrogatesCodePoints from '@unicode/unicode-3.0.0/Block/Low_Surrogates/code-points.mjs';
import Low_SurrogatesSymbols from '@unicode/unicode-3.0.0/Block/Low_Surrogates/symbols.mjs';
import Low_SurrogatesRegex from '@unicode/unicode-3.0.0/Block/Low_Surrogates/regex.mjs';

import MalayalamCodePoints from '@unicode/unicode-3.0.0/Block/Malayalam/code-points.mjs';
import MalayalamSymbols from '@unicode/unicode-3.0.0/Block/Malayalam/symbols.mjs';
import MalayalamRegex from '@unicode/unicode-3.0.0/Block/Malayalam/regex.mjs';

import Mathematical_OperatorsCodePoints from '@unicode/unicode-3.0.0/Block/Mathematical_Operators/code-points.mjs';
import Mathematical_OperatorsSymbols from '@unicode/unicode-3.0.0/Block/Mathematical_Operators/symbols.mjs';
import Mathematical_OperatorsRegex from '@unicode/unicode-3.0.0/Block/Mathematical_Operators/regex.mjs';

import Miscellaneous_SymbolsCodePoints from '@unicode/unicode-3.0.0/Block/Miscellaneous_Symbols/code-points.mjs';
import Miscellaneous_SymbolsSymbols from '@unicode/unicode-3.0.0/Block/Miscellaneous_Symbols/symbols.mjs';
import Miscellaneous_SymbolsRegex from '@unicode/unicode-3.0.0/Block/Miscellaneous_Symbols/regex.mjs';

import Miscellaneous_TechnicalCodePoints from '@unicode/unicode-3.0.0/Block/Miscellaneous_Technical/code-points.mjs';
import Miscellaneous_TechnicalSymbols from '@unicode/unicode-3.0.0/Block/Miscellaneous_Technical/symbols.mjs';
import Miscellaneous_TechnicalRegex from '@unicode/unicode-3.0.0/Block/Miscellaneous_Technical/regex.mjs';

import MongolianCodePoints from '@unicode/unicode-3.0.0/Block/Mongolian/code-points.mjs';
import MongolianSymbols from '@unicode/unicode-3.0.0/Block/Mongolian/symbols.mjs';
import MongolianRegex from '@unicode/unicode-3.0.0/Block/Mongolian/regex.mjs';

import MyanmarCodePoints from '@unicode/unicode-3.0.0/Block/Myanmar/code-points.mjs';
import MyanmarSymbols from '@unicode/unicode-3.0.0/Block/Myanmar/symbols.mjs';
import MyanmarRegex from '@unicode/unicode-3.0.0/Block/Myanmar/regex.mjs';

import Number_FormsCodePoints from '@unicode/unicode-3.0.0/Block/Number_Forms/code-points.mjs';
import Number_FormsSymbols from '@unicode/unicode-3.0.0/Block/Number_Forms/symbols.mjs';
import Number_FormsRegex from '@unicode/unicode-3.0.0/Block/Number_Forms/regex.mjs';

import OghamCodePoints from '@unicode/unicode-3.0.0/Block/Ogham/code-points.mjs';
import OghamSymbols from '@unicode/unicode-3.0.0/Block/Ogham/symbols.mjs';
import OghamRegex from '@unicode/unicode-3.0.0/Block/Ogham/regex.mjs';

import Optical_Character_RecognitionCodePoints from '@unicode/unicode-3.0.0/Block/Optical_Character_Recognition/code-points.mjs';
import Optical_Character_RecognitionSymbols from '@unicode/unicode-3.0.0/Block/Optical_Character_Recognition/symbols.mjs';
import Optical_Character_RecognitionRegex from '@unicode/unicode-3.0.0/Block/Optical_Character_Recognition/regex.mjs';

import OriyaCodePoints from '@unicode/unicode-3.0.0/Block/Oriya/code-points.mjs';
import OriyaSymbols from '@unicode/unicode-3.0.0/Block/Oriya/symbols.mjs';
import OriyaRegex from '@unicode/unicode-3.0.0/Block/Oriya/regex.mjs';

import Private_Use_AreaCodePoints from '@unicode/unicode-3.0.0/Block/Private_Use_Area/code-points.mjs';
import Private_Use_AreaSymbols from '@unicode/unicode-3.0.0/Block/Private_Use_Area/symbols.mjs';
import Private_Use_AreaRegex from '@unicode/unicode-3.0.0/Block/Private_Use_Area/regex.mjs';

import RunicCodePoints from '@unicode/unicode-3.0.0/Block/Runic/code-points.mjs';
import RunicSymbols from '@unicode/unicode-3.0.0/Block/Runic/symbols.mjs';
import RunicRegex from '@unicode/unicode-3.0.0/Block/Runic/regex.mjs';

import SinhalaCodePoints from '@unicode/unicode-3.0.0/Block/Sinhala/code-points.mjs';
import SinhalaSymbols from '@unicode/unicode-3.0.0/Block/Sinhala/symbols.mjs';
import SinhalaRegex from '@unicode/unicode-3.0.0/Block/Sinhala/regex.mjs';

import Small_Form_VariantsCodePoints from '@unicode/unicode-3.0.0/Block/Small_Form_Variants/code-points.mjs';
import Small_Form_VariantsSymbols from '@unicode/unicode-3.0.0/Block/Small_Form_Variants/symbols.mjs';
import Small_Form_VariantsRegex from '@unicode/unicode-3.0.0/Block/Small_Form_Variants/regex.mjs';

import Spacing_Modifier_LettersCodePoints from '@unicode/unicode-3.0.0/Block/Spacing_Modifier_Letters/code-points.mjs';
import Spacing_Modifier_LettersSymbols from '@unicode/unicode-3.0.0/Block/Spacing_Modifier_Letters/symbols.mjs';
import Spacing_Modifier_LettersRegex from '@unicode/unicode-3.0.0/Block/Spacing_Modifier_Letters/regex.mjs';

import SpecialsCodePoints from '@unicode/unicode-3.0.0/Block/Specials/code-points.mjs';
import SpecialsSymbols from '@unicode/unicode-3.0.0/Block/Specials/symbols.mjs';
import SpecialsRegex from '@unicode/unicode-3.0.0/Block/Specials/regex.mjs';

import Superscripts_And_SubscriptsCodePoints from '@unicode/unicode-3.0.0/Block/Superscripts_And_Subscripts/code-points.mjs';
import Superscripts_And_SubscriptsSymbols from '@unicode/unicode-3.0.0/Block/Superscripts_And_Subscripts/symbols.mjs';
import Superscripts_And_SubscriptsRegex from '@unicode/unicode-3.0.0/Block/Superscripts_And_Subscripts/regex.mjs';

import SyriacCodePoints from '@unicode/unicode-3.0.0/Block/Syriac/code-points.mjs';
import SyriacSymbols from '@unicode/unicode-3.0.0/Block/Syriac/symbols.mjs';
import SyriacRegex from '@unicode/unicode-3.0.0/Block/Syriac/regex.mjs';

import TamilCodePoints from '@unicode/unicode-3.0.0/Block/Tamil/code-points.mjs';
import TamilSymbols from '@unicode/unicode-3.0.0/Block/Tamil/symbols.mjs';
import TamilRegex from '@unicode/unicode-3.0.0/Block/Tamil/regex.mjs';

import TeluguCodePoints from '@unicode/unicode-3.0.0/Block/Telugu/code-points.mjs';
import TeluguSymbols from '@unicode/unicode-3.0.0/Block/Telugu/symbols.mjs';
import TeluguRegex from '@unicode/unicode-3.0.0/Block/Telugu/regex.mjs';

import ThaanaCodePoints from '@unicode/unicode-3.0.0/Block/Thaana/code-points.mjs';
import ThaanaSymbols from '@unicode/unicode-3.0.0/Block/Thaana/symbols.mjs';
import ThaanaRegex from '@unicode/unicode-3.0.0/Block/Thaana/regex.mjs';

import ThaiCodePoints from '@unicode/unicode-3.0.0/Block/Thai/code-points.mjs';
import ThaiSymbols from '@unicode/unicode-3.0.0/Block/Thai/symbols.mjs';
import ThaiRegex from '@unicode/unicode-3.0.0/Block/Thai/regex.mjs';

import TibetanCodePoints from '@unicode/unicode-3.0.0/Block/Tibetan/code-points.mjs';
import TibetanSymbols from '@unicode/unicode-3.0.0/Block/Tibetan/symbols.mjs';
import TibetanRegex from '@unicode/unicode-3.0.0/Block/Tibetan/regex.mjs';

import Unified_Canadian_Aboriginal_SyllabicsCodePoints from '@unicode/unicode-3.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/code-points.mjs';
import Unified_Canadian_Aboriginal_SyllabicsSymbols from '@unicode/unicode-3.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/symbols.mjs';
import Unified_Canadian_Aboriginal_SyllabicsRegex from '@unicode/unicode-3.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/regex.mjs';

import Yi_RadicalsCodePoints from '@unicode/unicode-3.0.0/Block/Yi_Radicals/code-points.mjs';
import Yi_RadicalsSymbols from '@unicode/unicode-3.0.0/Block/Yi_Radicals/symbols.mjs';
import Yi_RadicalsRegex from '@unicode/unicode-3.0.0/Block/Yi_Radicals/regex.mjs';

import Yi_SyllablesCodePoints from '@unicode/unicode-3.0.0/Block/Yi_Syllables/code-points.mjs';
import Yi_SyllablesSymbols from '@unicode/unicode-3.0.0/Block/Yi_Syllables/symbols.mjs';
import Yi_SyllablesRegex from '@unicode/unicode-3.0.0/Block/Yi_Syllables/regex.mjs';

// `Simple_Case_Mapping`:

import LowercaseCodePoints from '@unicode/unicode-3.0.0/Simple_Case_Mapping/Lowercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import LowercaseSymbols from '@unicode/unicode-3.0.0/Simple_Case_Mapping/Lowercase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import TitlecaseCodePoints from '@unicode/unicode-3.0.0/Simple_Case_Mapping/Titlecase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import TitlecaseSymbols from '@unicode/unicode-3.0.0/Simple_Case_Mapping/Titlecase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import UppercaseCodePoints from '@unicode/unicode-3.0.0/Simple_Case_Mapping/Uppercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import UppercaseSymbols from '@unicode/unicode-3.0.0/Simple_Case_Mapping/Uppercase/symbols.mjs'; // Lookup map from symbol to symbol(s).

// `Special_Casing`:

import LowercaseCodePoints from '@unicode/unicode-3.0.0/Special_Casing/Lowercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import LowercaseSymbols from '@unicode/unicode-3.0.0/Special_Casing/Lowercase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__FINALCodePoints from '@unicode/unicode-3.0.0/Special_Casing/Lowercase--FINAL/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__FINALSymbols from '@unicode/unicode-3.0.0/Special_Casing/Lowercase--FINAL/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__TRCodePoints from '@unicode/unicode-3.0.0/Special_Casing/Lowercase--TR/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__TRSymbols from '@unicode/unicode-3.0.0/Special_Casing/Lowercase--TR/symbols.mjs'; // Lookup map from symbol to symbol(s).

import TitlecaseCodePoints from '@unicode/unicode-3.0.0/Special_Casing/Titlecase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import TitlecaseSymbols from '@unicode/unicode-3.0.0/Special_Casing/Titlecase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__FINALCodePoints from '@unicode/unicode-3.0.0/Special_Casing/Titlecase--FINAL/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__FINALSymbols from '@unicode/unicode-3.0.0/Special_Casing/Titlecase--FINAL/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__TRCodePoints from '@unicode/unicode-3.0.0/Special_Casing/Titlecase--TR/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__TRSymbols from '@unicode/unicode-3.0.0/Special_Casing/Titlecase--TR/symbols.mjs'; // Lookup map from symbol to symbol(s).

import UppercaseCodePoints from '@unicode/unicode-3.0.0/Special_Casing/Uppercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import UppercaseSymbols from '@unicode/unicode-3.0.0/Special_Casing/Uppercase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__FINALCodePoints from '@unicode/unicode-3.0.0/Special_Casing/Uppercase--FINAL/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__FINALSymbols from '@unicode/unicode-3.0.0/Special_Casing/Uppercase--FINAL/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__TRCodePoints from '@unicode/unicode-3.0.0/Special_Casing/Uppercase--TR/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__TRSymbols from '@unicode/unicode-3.0.0/Special_Casing/Uppercase--TR/symbols.mjs'; // Lookup map from symbol to symbol(s).
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.
