import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE03MuQ2AMBBE0V4m3gTM1YvlYpCgAu67ESBwKVRCwBht+PR31lr4E4LoKasETiz8RcYfbwjMX5+6YTZ0C0Gs3LGndM8ePPBf8AhBojxxn9EzBKnywl7QK/8Fb7wP3iHIlQ/u4dwLYJluPv0AAAA=', 'base64'))));
