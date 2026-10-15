import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE03QwQ0AIQhE0YY4IKJCLYT+29gojtnjC5nkh4g5eAmFiXgmHfbNJqAeNnBQ+ADmH4tCGTAKfRunaNKvjLewsnZubLCUUWO9rLCW335si7/9LL/9Kk/YyguuNka4cxntfvvwDr99PTM/eIVFFj4BAAA=', 'base64'))));
