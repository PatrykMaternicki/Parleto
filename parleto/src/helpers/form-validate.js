export const isEmpty = value => !!value.replace(/\s/g, '') || 'Uzupełnj pole';
export const isMoreThanZero = value => Number.parseFloat(value) < 0 && 'Liczba powinna być dodatnia';