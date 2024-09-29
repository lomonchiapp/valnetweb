import {create} from 'zustand';
import { User, PlanInternet } from '../../types';

interface SolicitudState {
    user: User;
    newSolicitud: boolean;
    selectedPlan: PlanInternet | undefined;
    setUser: (user: User) => void;
    setSelectedPlan: (selectedPlan: PlanInternet) => void;
    setNewSolicitud: (newSolicitud: boolean) => void;
}

export const useSolicitudState =  create<SolicitudState>((set) => ({
    newSolicitud: false,
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
    selectedPlan: undefined,
    setNewSolicitud: (newSolicitud) => set({newSolicitud}),
    setUser: (user) => set({user}),
    setSelectedPlan: (selectedPlan) => set({selectedPlan}),
    }));