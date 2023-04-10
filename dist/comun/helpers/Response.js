"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
function response(reply, statusCode, ok, data, message) {
    reply.code(statusCode).send({ ok, data, message });
}
exports.response = response;
//# sourceMappingURL=Response.js.map