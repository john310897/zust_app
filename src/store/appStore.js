import { create } from 'zustand'

const formStore = (set) => ({
    obj: {},
    updateFormState: (obj) => set((state) => ({ obj: { ...state.obj, ...obj } })),
    resetFormState: (obj) => set((state) => ({ obj }))
})

export const userFormStore = create(formStore)