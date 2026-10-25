import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H+4AAERD28YJs5EEcb32TbV2uqJ90PWCiceYLHyxAKwSDdyGTvTpjvrQa/wXc8iVkOsYakb8N6GHaDmT2aMliF/BKYUd0eJaNX7vqES0sskvbB7/V+rtkce1r1GSr94LiDwalfal+dNkvnsYtXt4TJLWF6k8iZkJxWl5Z+ypWKY8ihHl/vNEOkOROoaer+/lqdWyig==', 'base64')).toString());
