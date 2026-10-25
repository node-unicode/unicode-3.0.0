import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H04BQESBdcV0zXE7O0FvmO307ybDKYxt2+7SsHlACSUciGUp5U5cpcPtEBdOAiGumU7UEJe71rtHu5E1Hp988pjYgnh2xP8YpubxQZha9iA2G+IT2VlnzZxYDvZ3Qpci+fkCbuXMYvrWvCvKJCbEFpDaZuO+IQA=', 'base64')).toString());
