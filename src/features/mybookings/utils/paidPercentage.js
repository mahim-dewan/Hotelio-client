export const paidPercentage = (booking) =>
  booking?.payments?.reduce((acc, p) => {
    if (p?.status === "success") {
      return (acc += p.paymentPercentage);
    }
    return acc;
  }, 0);
