"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = void 0;
const fileFilter = (req, file, callback) => {
    if (!file)
        return callback(new Error('no file selected'));
    const fileExtension = file.mimetype.split('/')[1].toLowerCase();
    const validExtension = ['jpg', 'jpeg', 'png', 'svg', 'gif'];
    if (validExtension.includes(fileExtension)) {
        return callback(null, true);
    }
    req.fileValidationError =
        "El archivo no es valido debe ser 'jpg', 'jpeg', 'png', 'svg', 'gif'";
    callback(null, false);
};
exports.fileFilter = fileFilter;
//# sourceMappingURL=fileFilter.helper.js.map