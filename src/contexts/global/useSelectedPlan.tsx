import {create} from 'zustand';
import { PlanInternet } from '../../types';

interface SelectedPlanState {
    selectedPlan: PlanInternet | undefined;
    setSelectedPlan: (plan: PlanInternet) => void;
    }

export const useSelectedPlan =  create<SelectedPlanState>((set) => ({
    selectedPlan: undefined,
    setSelectedPlan: (plan) => set({selectedPlan: plan}),
    }));