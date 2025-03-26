import path from 'path';
import { fileURLToPath } from 'url';

/**
 *
 * @param url - Just give it `import.meta.url`
 * @returns the Node's old CommonJS "__dirname"
 */
export const get__dirname = (url: string) => {
    const __filename = fileURLToPath(url);
    return path.dirname(__filename);
};

/**
 *
 * @param url - Just give it `import.meta.url`
 * @returns the Node's old CommonJS "__filename"
 */
export const get__filename = (url: string) => (__filename = fileURLToPath(url));
