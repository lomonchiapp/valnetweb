import {create} from 'zustand';

interface ThemeState {
    dark: boolean;
    needHelp: boolean;
    login: boolean;
    setDark: (dark: boolean) => void;
    setNeedHelp: (needHelp: boolean) => void;
    setLogin: (login: boolean) => void;
}

export const useThemeState = create<ThemeState>((set) => ({
    dark: false,
    needHelp: false,
    login: false,
    setDark: (dark) => set({dark}),
    setNeedHelp: (needHelp) => set({needHelp}),
    setLogin: (login) => set({login}),
}));