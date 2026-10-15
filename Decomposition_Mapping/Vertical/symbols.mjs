import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE03NSw7BYBiF4b2cUSXfjpo/FiJNWgyUXjRYgjla9EK7FxZgC+I4EbP3Gb2+j1d9gOER7uHsoyO1lU7URiphGKurvz7D4KkvMIzUVxgm6hqGQN3A8Pw9WmonddRaulGFdKeWUk+tpIFafNWEVCxFVCJNqVSaUZk0p3I49wZ3EiBWGwEAAA==', 'base64'))));
