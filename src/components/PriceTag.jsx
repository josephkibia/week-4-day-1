const PriceTag = ({price, currency='KES',discount}) =>{ 
    const styles = {
  wrapper: { display: "inline-flex", alignItems: "baseline", gap: 8 },
  normal: { fontWeight: 600, color: "#111" },
  discounted: { fontWeight: 700, color: "red" },
  original: { textDecoration: "line-through", color: "#888" },
  badge: { color: "red", fontSize: "0.85em" },
};
const format = (currency, amount) =>
  `${currency} ${amount.toLocaleString("en-US")}`;

    const hasDiscount = typeof discount === "number" && discount > 0;

    if (!hasDiscount) {
    return (
      <span style={styles.wrapper}>
        <span style={styles.normal}>{format(currency, price)}</span>
      </span>
    );
  }
  const discounted = Math.round(price * (1 - discount / 100));
   return(
    <span style={styles.wrapper}>
      <span style={styles.discounted}>{format(currency, discounted)}</span>
      <span style={styles.original}>{format(currency, price)}</span>
      <span style={styles.badge}>(-{discount}%)</span>
    </span>

   )

}
export default PriceTag