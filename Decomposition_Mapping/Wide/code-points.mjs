import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H2gC+EXdFpPBs/H8HUuxHAwvgkFkyHE7oEQcIhcHXHSL0ByFjRTaqtwlND19j6d2SA==', 'base64')).toString());
