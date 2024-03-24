const evaluatePasswordStrength = (password: string): string {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasNonAlphanumeric = /\W/.test(password);
    const length = password.length;

    if (length >= 10 && hasLowercase && hasUppercase && hasNumber && hasNonAlphanumeric) {
        return 'strong';
    } else if (length >= 8 && hasLowercase && hasUppercase && hasNumber) {
        return 'medium';
    } else if (length >= 6 && (hasLowercase || hasUppercase) && hasNumber) {
        return 'weak';
    } else {
        return 'too weak';
    }
};

export default evaluatePasswordStrength;