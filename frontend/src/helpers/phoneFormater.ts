export const phoneFormatter = (phoneNumber: string) => {
    phoneNumber.replace(/\D/g, '');
    if (phoneNumber.startsWith('8')) {
        phoneNumber = '+7' + phoneNumber.slice(1);
        const formattedNumber: string = phoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '($1) $2-$3-$4-$5');
        return formattedNumber;
    }
}