import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE0WRyZHFMAhEE+LAIrZYKOefxhQC/bm4XkMLtXAVOUKlfx8UeUApDiaU0sVQqJODBkV0yxYBRXiGE8poOLHrNkzt3zpDmciwNOvwgbIzM1Pbn8N9F9+6i/X8Ze/5MdwZSIez/Te9H4Qyu/4QPFAnlvuFvNxPlGFCKD3LBKW6zFBqywKlvtwz31mFCuedSjfqskMdXA6o8+odlaZxArsE7iu5vyuJZ52ZFk8TFOMuoDXf/r9foJh5ltv6TP/n1z6PJE/b9PNphxJE5Kfj+vU3P68/97zj5sunOx8H69PcWubHtJabv5f9/QGW3uhQfgIAAA==', 'base64'))));
