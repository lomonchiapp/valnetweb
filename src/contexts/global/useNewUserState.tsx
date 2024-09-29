import { create } from 'zustand';
import { User, PlanInternet } from '../../types';

interface NewUserState {
    id: number;
    nombre: string;
    correo: string;
    password: string;
    direccion_principal: string;
    movil: string;
    position: [number, number];
    telefono: string;
    cedula: string;
    role: string;
    setNombre: (nombre: string) => void;
    setCorreo: (correo: string) => void;
    setPassword: (password: string) => void;
    setDireccion_principal: (direccion: string) => void;
    setMovil: (movil: string) => void;
    setPosition: (position: [number, number]) => void;
    setTelefono: (telefono: string) => void;
    setCedula: (cedula: string) => void;
    setRole: (role: string) => void;
}

export const useNewUserState = create<NewUserState>((set) => ({
    id: 0,
    nombre: "",
    correo: "",
    password: "",
    direccion_principal: "",
    movil: "",
    position: [0, 0],
    telefono: "",
    cedula: "",
    role: 'cliente',
    setNombre: (nombre) => set({ nombre }),
    setCorreo: (correo) => set({ correo }),
    setPassword: (password) => set({ password }),
    setDireccion_principal: (direccion_principal) => set({ direccion_principal }),
    setMovil: (movil) => set({ movil }),
    setPosition: (position) => set({ position }),
    setTelefono: (telefono) => set({ telefono }),
    setCedula: (cedula) => set({ cedula }),
    setRole: (role) => set({ role }),
}));