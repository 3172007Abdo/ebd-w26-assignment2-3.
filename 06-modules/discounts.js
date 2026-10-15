// 06-modules/discounts.js — a module written for others to import.

// A NAMED export: others import it with { halfPrice }.
export function halfPrice(amount) {
  return amount / 2;
}

// A DEFAULT export: others import it with any name they like.
export default "Winter sale";
