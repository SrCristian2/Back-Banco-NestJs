"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCuentaAhorroDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cuenta_ahorro_dto_1 = require("./create-cuenta-ahorro.dto");
class UpdateCuentaAhorroDto extends (0, mapped_types_1.PartialType)(create_cuenta_ahorro_dto_1.CreateCuentaAhorroDto) {
}
exports.UpdateCuentaAhorroDto = UpdateCuentaAhorroDto;
//# sourceMappingURL=update-cuenta-ahorro.dto.js.map