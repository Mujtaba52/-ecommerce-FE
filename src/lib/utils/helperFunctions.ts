import { AxiosError } from "axios";
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const handleApiError = (error: unknown) => {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return {
      statusCode: 500,
      message: 'Unexpected error occurred',
      data: {},
    };
};

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
}
