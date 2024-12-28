import { create } from 'zustand';

// 定义 Store 的类型
interface StoreState {
    count: number;
    increment: () => void;
    decrement: () => void;
}

// 创建 Zustand store 并指定类型
const useStore = create<StoreState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count == 0 ? 0 : state.count - 1 })),
}));

export default useStore;