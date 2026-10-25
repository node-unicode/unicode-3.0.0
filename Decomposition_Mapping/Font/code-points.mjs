import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H8cA+GVwXqwH68irwfGvh3/bae/TdpMaUhfrwKYWYlwHUEAGI/gmHIOEtB4khECQUMUQRtT8Z5cJNXKoJgYPvwNEnQ/WO86WrIMDF60GwKbgokK+rmJzFhTnW0Pje/bjGOJtqfuaag==', 'base64')).toString());
