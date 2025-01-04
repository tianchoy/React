import useCartStore from "../../Store/CarStore";
import MyButton from "../../Components/MyButton";

// 定义商品类型
interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number; // 新增数量字段
}

// 定义组件 Props 和 State 类型
interface CartProps {}

interface CartState {
  items: Item[];
  totalPrice: number;
}

const Cart = () => {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const handleAddItem = () => {
    const newItem: Item = {
      id: Math.random().toString(36).substr(2, 9), // 生成一个随机 ID
      name: `Product ${items.length + 1}`,
      price: Math.floor(Math.random() * 100) + 1, // 随机价格
      quantity: 1, // 默认数量为 1
    };
    useCartStore.getState().addItem(newItem);
  };
  return (
    <div>
      <h1>Shopping Cart</h1>
      <MyButton
        types="primary"
        BtnTtitle="Add Item"
        BtnClick={handleAddItem}
      />
      <MyButton
        types="primary"
        BtnTtitle="Clear Cart"
        BtnClick={useCartStore.getState().clearCart}
      />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <MyButton
              types="primary"
              BtnTtitle="+"
              BtnClick={() => useCartStore.getState().increaseQuantity(item.id)}
            />
            <MyButton
              types="primary"
              BtnTtitle="-"
              BtnClick={() => useCartStore.getState().decreaseQuantity(item.id)}
            />
            <MyButton
              types="primary"
              BtnTtitle="Remove"
              BtnClick={() => useCartStore.getState().removeItem(item.id)}
            />
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};


export default Cart;
