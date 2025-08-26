export const formatPhoneNumber = (phone: string): string => {
    const digits = phone.replace(/\D/g, '');

    if (digits.startsWith('380') && digits.length === 12) {
        return digits.replace(
            /^380(\d{2})(\d{3})(\d{2})(\d{2})$/,
            '+380 $1 $2 $3 $4'
        );
    }

    if (digits.startsWith('0') && digits.length === 10) {
        return digits.replace(
            /^0(\d{2})(\d{3})(\d{2})(\d{2})$/,
            '+380 $1 $2 $3 $4'
        );
    }

    return phone;
};
