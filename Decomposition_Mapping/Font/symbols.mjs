import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE03Pv0qCcRyF8Xt51s5VFIWBSjUm7xgZCN2DNGma+WcoFco0TYyMXNy9h3fvBrqF+MoZftvn2c6pVPi9qyOOyBRuIK7tJqJg3yduJW4jqvYDYjd3dBCn9mPiLqJo9xA1e4Ao20+IM/sZcW4PERf2KPE48RRxaS8SrxCH9mdy+AtxZa8Rx/Y34sT+QZTsDeLW3iJu9v5bvSDyieM1ouOYRPQcbxF9R2zNh45ZxMjxHjF2zCMWjviULx0fiAOy7B8TvhzAxwEAAA==', 'base64'))));
