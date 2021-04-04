import { useContext, createContext } from "react";

export const AppContext = createContext(null);

export function useAppContext() {
    return useContext(AppContext);
}

export function formatPrice(price) {
    const fomatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    });

    return fomatter.format(price);
}