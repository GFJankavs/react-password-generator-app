import { Options } from '../types';

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

const generatePassword = (options: Options, characterLength: number) => {
    const characters = `${options.lowercase ? lowercase : ''}${options.uppercase ? uppercase : ''}${options.numbers ? numbers : ''}${options.symbols ? symbols : ''}`;
    
    let password = '';

    for (let i = 0; i < characterLength; i++) {
        const character = characters[Math.floor(Math.random() * characters.length)];
        password += character;
    }

    return password;
};

export default generatePassword;