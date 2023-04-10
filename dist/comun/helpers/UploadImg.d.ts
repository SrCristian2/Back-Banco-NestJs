export declare const subirImagenACloudinary: (file: any) => Promise<{
    secure_url: string;
    public_id: string;
}>;
export declare const eliminarImagenCloudinary: (public_id: string) => Promise<void>;
