import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Return every order
export async function loadOrders() {
  return await findAllOrders();
}

// 2. City AND status
export function myOrders(orders) {
  return orders.filter((o) => o.city === "Mansoura" && o.status === "paid");
}

// 3. Highest single-item price (0 for an empty list)
export function summarize(orders) {
  if (orders.length === 0) return 0;
  return Math.max(...orders.map((o) => o.price));
}

// 4. Label for one order; never throws
export async function describeOrder(id) {
  try {
    const o = await findOrderById(id);
    return `${o.student}: ${o.item} x${o.quantity}`;
  } catch (error) {
    return `Order ${id} not found`;
  }
}

// 5. Keep only item and price, in that order
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((o) => ({ item: o.item, price: o.price }))
  );
}