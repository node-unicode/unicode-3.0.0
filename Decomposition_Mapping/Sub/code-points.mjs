import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H0sA+AXqZLF+FTmKohQTikZgghj8EQVMVR7iwPpDiDUb', 'base64')).toString());
