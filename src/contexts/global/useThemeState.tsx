import {create} from 'zustand';

interface ThemeState {
    dark: boolean;
    needHelp: boolean;
    login: boolean;
    internetPlanSlider: boolean;
    valneTV: boolean;
    setDark: (dark: boolean) => void;
    setNeedHelp: (needHelp: boolean) => void;
    setLogin: (login: boolean) => void;
    setInternetPlanSlider: (internetPlanSlider: boolean) => void;
    setValneTV: (valneTV: boolean) => void;
}

export const useThemeState = create<ThemeState>((set) => ({
    dark: false,
    needHelp: false,
    login: false,
    internetPlanSlider: false,
    valneTV: false,
    setDark: (dark) => set({dark}),
    setNeedHelp: (needHelp) => set({needHelp}),
    setValneTV: (valneTV) => set({valneTV}),
    setLogin: (login) => set({login}),
    setInternetPlanSlider: (internetPlanSlider) => set({internetPlanSlider}),
}));