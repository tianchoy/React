import React from "react";
import useCartStore from "../../Store/CarStore";
import MyButton from "../../Components/MyButton";

// 定义商品类型
interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number; // 新增数量字段
}

const Cart: React.FC = () => {
  const {
    items,
    addItem,
    removeItem,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCartStore();

  const handleAddItem = () => {
    const newItem: Item = {
      id: Math.random().toString(36).substr(2, 9), // 生成一个随机 ID
      name: `Product ${items.length + 1}`,
      price: Math.floor(Math.random() * 100) + 1, // 随机价格
      quantity: 1, // 默认数量为 1
    };
    addItem(newItem);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <MyButton types="primary" BtnTtitle="Add Item" BtnClick={handleAddItem} />
      <MyButton types="primary" BtnTtitle="Clear Cart" BtnClick={clearCart} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <MyButton
              types="primary"
              BtnTtitle="+"
              BtnClick={() => increaseQuantity(item.id)}
            />
            <MyButton
              types="primary"
              BtnTtitle="-"
              BtnClick={() => decreaseQuantity(item.id)}
            />
            <MyButton
              types="primary"
              BtnTtitle="Remove"
              BtnClick={() => removeItem(item.id)}
            />
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};
export default Cart;
