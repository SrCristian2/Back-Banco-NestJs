"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstadisticaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_estadistica_dto_1 = require("./create-estadistica.dto");
class UpdateEstadisticaDto extends (0, mapped_types_1.PartialType)(create_estadistica_dto_1.CreateEstadisticaDto) {
}
exports.UpdateEstadisticaDto = UpdateEstadisticaDto;
//# sourceMappingURL=update-estadistica.dto.js.map