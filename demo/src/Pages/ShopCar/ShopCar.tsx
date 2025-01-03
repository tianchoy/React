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

// 定义组件 Props 和 State 类型
interface CartProps {}

interface CartState {
  items: Item[];
  totalPrice: number;
}

class Cart extends React.Component<CartProps, CartState> {
  // 订阅 Zustand Store 的状态
  unsubscribe: () => void;

  constructor(props: CartProps) {
    super(props);
    this.state = {
      items: useCartStore.getState().items,
      totalPrice: useCartStore.getState().totalPrice,
    };

    // 订阅 Zustand Store 的变化
    this.unsubscribe = useCartStore.subscribe((state) => {
      this.setState({
        items: state.items,
        totalPrice: state.totalPrice,
      });
    });
  }

  // 组件卸载时取消订阅
  componentWillUnmount() {
    this.unsubscribe();
  }

  // 添加商品
  handleAddItem = () => {
    const newItem: Item = {
      id: Math.random().toString(36).substr(2, 9), // 生成一个随机 ID
      name: `Product ${this.state.items.length + 1}`,
      price: Math.floor(Math.random() * 100) + 1, // 随机价格
      quantity: 1, // 默认数量为 1
    };
    useCartStore.getState().addItem(newItem);
  };

  render() {
    const { items, totalPrice } = this.state;

    return (
      <div>
        <h1>Shopping Cart</h1>
        <MyButton
          types="primary"
          BtnTtitle="Add Item"
          BtnClick={this.handleAddItem}
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
                BtnClick={() =>
                  useCartStore.getState().increaseQuantity(item.id)
                }
              />
              <MyButton
                types="primary"
                BtnTtitle="-"
                BtnClick={() =>
                  useCartStore.getState().decreaseQuantity(item.id)
                }
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
  }
}

export default Cart;
