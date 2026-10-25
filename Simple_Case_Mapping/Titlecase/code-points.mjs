import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H20JAERFnec9oFPR3PIA0MkQ7PtLdf/VfVfGz/SDZDygEaraCkgmoLVQyIONPcrB0wDGgqXqNt3okLykNIqwbt4R+7n8Vc3iM6hrf5vFJYfuFwfjCudG1/jdsfEy76NNXAfhNEKkkQ/HyWZ+Pk6ZkMF2/cSgwFAH0lQSdiMwGUJMOAYMvr5DgZOjcSUyIkR12Is58rmJqZRjCl9dee/L31cxRL5EfWfmeIK9uDo0oThRDKTcVlBhWmlUICyR35AbbnSPr6pF2DvU7vFutIz9nJIwuxt1qbjDM3lLmdCtK67ep8Y1oTvay+VfzcIImyk0g0s3gqR1NIm2hkv3swePYZgVDryyars0zSNwYXBA6PZGeQ3+CQeJHRW0+/hrFKO9bOb2lIWor9G+F7Gju++fpcX+T38N+VX785kC', 'base64')).toString());
