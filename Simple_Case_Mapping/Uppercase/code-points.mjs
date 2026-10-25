import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H20JAERFnec9oFNVXaABkJMhWP296t6v+1LGY/pAMh7SUGnUCkgmoLVQQJp4Yw/z1wDGgqWau7bLy0pdbJDGzVtiP5e/qnl8BnXtbzO7xND+vOBQ7tyoGr/dN1ykfG0S10E4jBBpyIflaDM+FYeMSCerH6whXGndaQfCbE4UXUDCIaD32qLAydK4EjUiRDrsxRz53MRUqmMKX66899XflxiivkR9b+54grnYOjShOJEHJN0WUENMYdQgrJDfkBuudI+vqkGYu8ru8W60iv2cEjazG3SqaIbDf0vxkJYVZ+9TY5vQHe3l8nfzcAT1FJrTS3dEI9bRJNoazt2P7t2HYULQ88yy6dI0j4ANAwcE7d6oLtU/YbvvpKDdx1+jGO1lMbfnLER9jfa9jB3pvn+WBvs/+RqKq/bnMwU=', 'base64')).toString());
