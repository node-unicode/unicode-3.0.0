import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H4AA+OVtm1vU4a0X3+Fs2IlwGAq5ON6GYSh/l4SJcXHAQ95n0C6dYUn7f45VVomCa72ovMwhAA==', 'base64')).toString());
