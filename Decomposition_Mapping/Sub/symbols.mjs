import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEy3HMQ6CQABE0bv8CuMUKIJQeJLN3gVXwAXRwiPuSYzJdO+FQEkjoibq7zviZCfE2X4gGntCXOwZ0doLorOfiKudEb29IgZ7QxztF6Lkr7cjbvYbUdkfxIEYf1L58VO3AAAA', 'base64'))));
