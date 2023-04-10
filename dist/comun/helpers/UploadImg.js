"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarImagenCloudinary = exports.subirImagenACloudinary = void 0;
const fs_1 = require("fs");
const cloudinary_1 = require("cloudinary");
const configCloudinary = () => {
    cloudinary_1.v2.config({
        cloud_name: process.env.CLOUD_NAME || '',
        api_key: process.env.API_KEY || '',
        api_secret: process.env.API_SECRET || '',
    });
    return cloudinary_1.v2;
};
const subirImagenACloudinary = async (file) => {
    try {
        const cloudinary = configCloudinary();
        const { secure_url, public_id } = await cloudinary.uploader.upload(file.path);
        (0, fs_1.unlinkSync)(file.path);
        return {
            secure_url,
            public_id,
        };
    }
    catch (error) {
        console.log('error en subirImagenACloudinary', error.message);
    }
};
exports.subirImagenACloudinary = subirImagenACloudinary;
const eliminarImagenCloudinary = async (public_id) => {
    try {
        const cloudinary = configCloudinary();
        await cloudinary.uploader.destroy(public_id);
    }
    catch (error) {
        console.log('error en eliminarImagenCloudinary', error.message);
    }
};
exports.eliminarImagenCloudinary = eliminarImagenCloudinary;
//# sourceMappingURL=UploadImg.js.map