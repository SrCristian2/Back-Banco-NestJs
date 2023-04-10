"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleProtected = void 0;
const common_1 = require("@nestjs/common");
const RoleProtected = (...args) => {
    return (0, common_1.SetMetadata)('roles', args);
};
exports.RoleProtected = RoleProtected;
//# sourceMappingURL=role-protected.decorator.js.map