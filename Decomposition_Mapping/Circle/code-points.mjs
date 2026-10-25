import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('Hw8EIOScrnFqcoXqCFT9VaFvCvTh9Wpu+ntZ2r2GoMDXsJVuSznBWl1+4FjE6g2HJPIRyYuAIBSOW6aF5Yeq/YhJZqpr2Dc9NDM2O62L/Mxp+acd7lMQN0Y/vcWXk/w9nhTiBcPJXjDRT/i6+sAgWQtmbcwVrDbk2h4Bc8e/reFP7q3i532/5/vD111M5YYwKg8D5iUP4F8dDiFxaWtjCrW7O3hfR8Ia+ENYWemoR5daYviMQn8ItLrX538V72GE6kDJf8OLcDnLwaCiNInWpa4Uao0N0HdJ79UqIRz8fuC6Tk8f8V2K38o7sE/qOr1tXi2xq2MlIB7I7YcarCQ9dF/H9yz5VeU/wIuf5ehI6LdaM2LMkO7UUFGQkRAR4OFM1MoFNjoYtV/y4cEF0bVny7p/vDQE', 'base64')).toString());
