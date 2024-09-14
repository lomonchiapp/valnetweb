export interface User {
    id: number;
    nombre: string;
    correo: string;
    password: string;
    direccion_principal: string;
    movil: string;
    telefono: string;
    lat?: number;
    lng?: number;
    plan?: PlanInternet;
    cedula: string;
    role: string;
    }

export interface FibraLocation {
    id: number;
    name: string;
    lat: number;
    lng: number;
}

export interface Solicitud {
    id: number;
    user: User;
    plan?: PlanInternet;
    service?: Service;
    createdAt: Date;
    status: string;
}
export interface PlanInternet {
    id: number;
    type: string;
    name: string;
    price: number;
    download: number;
    downloadColor?: string;
    upload: number;
    uploadColor?: string;
    description: string;
    isActive: boolean;
    isPromoted: boolean;
    }

export interface Service {
    id: number;
    name: string;
    price: number;
    description: string;
    }

