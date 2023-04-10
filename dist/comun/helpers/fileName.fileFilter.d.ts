/// <reference types="express-serve-static-core" />
/// <reference types="passport" />
/// <reference types="multer" />
type callBackFunctionVariadic = (...args: any[]) => void;
export declare const fileName: (req: any, file: Express.Multer.File, callback: callBackFunctionVariadic) => void;
export {};
