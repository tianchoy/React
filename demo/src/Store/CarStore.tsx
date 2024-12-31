import {create} from 'zustand';

// 定义商品类型
interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number; // 新增数量字段
}

// 定义购物车状态类型
interface CartState {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  increaseQuantity: (itemId: string) => void; // 增加商品数量
  decreaseQuantity: (itemId: string) => void; // 减少商品数量
  totalPrice: number; // 总价格
}

// 创建 Zustand Store
const useCartStore = create<CartState>((set, get) => ({
  items: [],
  totalPrice: 0,

  // 添加商品
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, { ...item, quantity: 1 }], // 默认数量为 1
      totalPrice: state.totalPrice + item.price,
    })),

  // 移除商品
  removeItem: (itemId) => {
    const itemToRemove = get().items.find((item) => item.id === itemId);
    if (itemToRemove) {
      set((state) => ({
        items: state.items.filter((item) => item.id !== itemId),
        totalPrice: state.totalPrice - itemToRemove.price * itemToRemove.quantity,
      }));
    }
  },

  // 清空购物车
  clearCart: () => set({ items: [], totalPrice: 0 }),

  // 增加商品数量
  increaseQuantity: (itemId) => {
    const itemToUpdate = get().items.find((item) => item.id === itemId);
    if (itemToUpdate) {
      set((state) => ({
        items: state.items.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        ),
        totalPrice: state.totalPrice + itemToUpdate.price,
      }));
    }
  },

  // 减少商品数量
  decreaseQuantity: (itemId) => {
    const itemToUpdate = get().items.find((item) => item.id === itemId);
    if (itemToUpdate && itemToUpdate.quantity > 1) {
      set((state) => ({
        items: state.items.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        ),
        totalPrice: state.totalPrice - itemToUpdate.price,
      }));
    }
  },
}));

export default useCartStore;