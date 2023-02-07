export const handlePhotoUploads = async photos => {
    if (!photos || photos.length === 0) {
        return [];
    }

    // Freshly dropped photos are File objects and must be converted to base64 strings
    const newPhotos = photos.filter(
        p => p.rawFile instanceof File
    );
    // Former photos
    const formerPhotos = photos.filter(
        p => !(p.rawFile instanceof File)
    );

    for (const photo of newPhotos) {
        photo.base64String = await convertFileToBase64(photo.rawFile);
    }

    return [
        ...newPhotos,
        ...formerPhotos,
    ];
}

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file);
    });
