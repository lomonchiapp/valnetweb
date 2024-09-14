import {create} from 'zustand';
import { User, PlanInternet } from '../../types';

interface SolicitudState {
    user: User;
    plan: PlanInternet;
    setUser: (user: User) => void;
    setPlan: (plan: PlanInternet) => void;
    }

export const useSolicitudState =  create<SolicitudState>((set) => ({
    user: {
        id: 0,
        nombre: "",
        correo: "",
        password: "",
        direccion_principal: "",
        movil: "",
        lat: 0,
        lng: 0,
        telefono: "",
        cedula: "",
        role: 'cliente',
        },
    plan: {
        id: 0,
        type: "",
        name: "",
        price: 0,
        download: 0,
        upload: 0,
        description: "",
        isActive: false,
        isPromoted: false,
        },
    setUser: (user) => set({user}),
    setPlan: (plan) => set({plan}),
    }));