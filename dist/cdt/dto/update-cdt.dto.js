"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCdtDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cdt_dto_1 = require("./create-cdt.dto");
class UpdateCdtDto extends (0, mapped_types_1.PartialType)(create_cdt_dto_1.CreateCdtDto) {
}
exports.UpdateCdtDto = UpdateCdtDto;
//# sourceMappingURL=update-cdt.dto.js.map