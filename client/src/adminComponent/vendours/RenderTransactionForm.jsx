function RenderTransactionForm({
  handleSubmit,
  setTransactionData,
  setCurrentStep,
  reset,
  register,
  sites,
  transactionData,
}) {
  const handleTransactionSubmit = (data) => {
    setTransactionData({
      ...transactionData,
      date: data.date,
      noOfSites: parseInt(data.noOfSites) || 0,
      status: data.status,
    });
    setCurrentStep("sites");
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleTransactionSubmit)}>
      <p>
        <label htmlFor="date">Date </label>
        <input type="date" {...register("date")} required />
      </p>
      <p>
        <label htmlFor="noOfSites">Number of Sites </label>
        <input
          type="number"
          id="noOfSites"
          {...register("noOfSites")}
          min="1"
          required
        />
      </p>
      <p>
        <label htmlFor="status">Status </label>
        <select id="status" {...register("status")} required>
          <option value="paid">Paid</option>
          <option value="not paid">Not Paid</option>
        </select>
      </p>
      <input type="submit" value="Next - Add Sites" />
    </form>
  );
}

export default RenderTransactionForm;
