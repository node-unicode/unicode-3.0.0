import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE02PyxEEIQgFE+IAinxieWX+aWzh4M7cug/NUyB0McF8byoOgvBsSYKPh40/LB8eFWjLJIxcLUrwvmTrw0Zwa/aqo6Xmmn0SgpuVENK8CNHTbh/2l0MJ2W3EyzkI1sM53z/nqkf0QBrBstkJfuN63BMsZoKItJz6/Nl01J4stqtJEI1ozQo15aocHVfH0bw6zym+qkf/bc0u+bd2VK86Qefe+wffjlsJ4AEAAA==', 'base64'))));
