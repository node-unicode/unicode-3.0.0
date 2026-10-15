import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE13PQQ7AIAhE0QuxEGUsnoVw/2s0bTWdsH35YiZC3SVsiffZBD1TQn0RtZdWk4By5RhKmW7rEmjFBnVjm1F3DPTHsSmBXuyie7bNJTCK8Yz5mfGOY0pvjz07UOzfkZk3qe45YDsBAAA=', 'base64'))));
