function Cart({ cart }) {
  return (
    <div className="mt-10 p-5 border rounded-lg shadow-md bg-gray-50">
      <h2 className="text-xl font-bold mb-3">Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>{item.title}</span>
              <span className="font-bold">{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
