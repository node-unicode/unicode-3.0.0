import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H6wAIBSh0q3NjesNDsvzL4iDiIi4Jll93w/BN//07baD1GJvSQso0A+CPyodUCQof18QGyAHXSw2m5cdpC/iL8iyffjZKtWnZEl9U3Etsnd1mrRWVG+KDvgWyAE=', 'base64')).toString());
