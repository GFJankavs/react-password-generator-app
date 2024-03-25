const evaluatePasswordStrength = (password: string): number => {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasNonAlphanumeric = /\W/.test(password);
    const length = password.length;

    // Check for common patterns
    const hasSequentialChars = /(012|123|234|345|456|567|678|789|987|876|765|654|543|432|321|210)/.test(password);
    const hasRepeatedChars = /(.)\1/.test(password);

    let strength = 0;

    if (hasLowercase) strength++;
    if (hasUppercase) strength++;
    if (hasNumber) strength++;
    if (hasNonAlphanumeric) strength++;
    if (length >= 8) strength++;
    if (length >= 12) strength++;
    if (!hasSequentialChars) strength++;
    if (!hasRepeatedChars) strength++;

    // Normalize the strength value to a scale of 1-5
    return Math.min(Math.floor(strength / 2), 5);
};

export default evaluatePasswordStrength;