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
      site: data.site,
      noOfItem: parseInt(data.noOfItem) || 0,
      status: data.status,
    });
    setCurrentStep("items");
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleTransactionSubmit)}>
      <p>
        <label htmlFor="date">Date </label>
        <input type="date" {...register("date")} required />
      </p>
      <p>
        <label htmlFor="site">Site </label>
        <select id="site" {...register("site")} required>
          {sites.map((site) => {
            return (
              <option value={site.name} key={site._id}>
                {site.name}
              </option>
            );
          })}
        </select>
      </p>
      <p>
        <label htmlFor="noOfItem">Number Of Items </label>
        <input
          type="number"
          id="noOfItem"
          {...register("noOfItem")}
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
      <input type="submit" value="Next - Add Items" />
    </form>
  );
}

export default RenderTransactionForm;
