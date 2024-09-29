import { create } from 'zustand';
import { User, PlanInternet } from '../../types';

interface SolicitudState {
    newSolicitud: boolean;
    id: number;
    user: User | undefined;
    plan: PlanInternet | undefined;
    direccion_principal: string;
    position: [number, number];
    createdAt: Date;
    status: string;
    selectedPlan: PlanInternet | undefined;
    setDireccion_principal: (direccion_principal: string) => void;
    setPosition: (position: [number, number]) => void;
    setCreatedAt: (createdAt: Date) => void;
    setStatus: (status: string) => void;
    setPlan: (plan: PlanInternet) => void;
    setId: (id: number) => void;
    setNewSolicitud: (newSolicitud: boolean) => void;
    setUser: (user: User) => void;
    setSelectedPlan: (selectedPlan: PlanInternet) => void;
}

export const useSolicitudState = create<SolicitudState>((set) => ({
    newSolicitud: false,
    id: 0,
    user: undefined,
    plan: undefined,
    direccion_principal: '',
    position: [0, 0],
    createdAt: new Date(),
    status: '',
    selectedPlan: undefined,
    setDireccion_principal: (direccion_principal) => set({ direccion_principal }),
    setPosition: (position) => set({ position }),
    setCreatedAt: (createdAt) => set({ createdAt }),
    setStatus: (status) => set({ status }),
    setPlan: (plan) => set({ plan }),
    setId: (id) => set({ id }),
    setNewSolicitud: (newSolicitud) => set({ newSolicitud }),
    setUser: (user) => set({ user }),
    setSelectedPlan: (selectedPlan) => set({ selectedPlan }),
}));