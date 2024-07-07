import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertAmountToMilliunits(amount: number) {
  return Math.round(amount * 1000);
}

export function convertAmountFromMilliunits(amount: number) {
  return Math.round(amount / 1000);
}

export function formatCurrency(value: number) {
  const finalValue = convertAmountFromMilliunits(value);

  return Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
  }).format(finalValue);
}
