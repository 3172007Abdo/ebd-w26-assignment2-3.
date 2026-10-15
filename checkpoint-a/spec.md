# Checkpoint A specification

Generated for this repository from the GitHub owner.

- city: Mansoura
- status: paid
- summary: highest single price
- label: {student}: {item} x{quantity}
- missing: Order {id} not found
- fields: item, price

Your solution must export:

1. loadOrders()
2. myOrders(orders)
3. summarize(orders)
4. describeOrder(id)
5. toJsonLines(orders)

Rules:
- myOrders keeps only orders where city === "Mansoura" and status === "paid".
- summarize computes highest single price using: The largest `price` of any one order in the list. Ignore quantity. For an empty list, the answer is 0.
- describeOrder returns {student}: {item} x{quantity} for a found order and Order {id} not found for a missing one.
- toJsonLines keeps only item, price and returns a JSON string.
