import CryptoJS from 'crypto-js';

const key = 'br44h2gdi8wWWnb292u73brfKxpoah33';

// Función para generar un hash determinista utilizando SHA-256
export function hashTextWithKey(text) {
    if (!text) {
        throw new Error('El texto no puede estar vacío.');
    }

    // Concatenar la clave con el texto y generar el hash
    const saltedText = text + key;
    const hash = CryptoJS.SHA256(saltedText).toString(CryptoJS.enc.Hex);
    return hash;
}