import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEy3Ouw3EMAwD0IVYxKJoO7MQ2n+NQ3DsXsOPfVkP3HcGnxfcb1ywnpiwVtywKhYsxhtWxweW4gtrxy+s8ze/3WS54HsqrSx4Z42EOy/YcK+Z+QFCxmT7twAAAA==', 'base64'))));
