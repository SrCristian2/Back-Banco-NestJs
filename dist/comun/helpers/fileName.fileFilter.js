"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileName = void 0;
const uuid_1 = require("uuid");
const fileName = (req, file, callback) => {
    if (!file)
        return callback(new Error('no file selected'));
    const fileExtension = file.mimetype.split('/')[1].toLowerCase();
    const fileName = (0, uuid_1.v4)() + '.' + fileExtension;
    callback(null, fileName);
};
exports.fileName = fileName;
//# sourceMappingURL=fileName.fileFilter.js.map