function RenderSiteForm({
  handleSubmit,
  setTransactionData,
  setCurrentStep,
  reset,
  register,
  sites,
  transactionData,
}) {
  const handleSiteSubmit = (data) => {
    const siteName = data.siteName;
    const noOfItems = parseInt(data.noOfItems) || 0;

    // Add this site to the sites array
    const newSite = {
      siteName,
      noOfItems,
      items: [],
    };

    setTransactionData((prev) => ({
      ...prev,
      sites: [...prev.sites, newSite],
    }));

    // If this is the last site, move to items step
    if (transactionData.sites.length + 1 >= transactionData.noOfSites) {
      setCurrentStep("items");
      setTransactionData((prev) => ({
        ...prev,
        currentSiteIndex: 0, // Start with first site
      }));
    }

    reset();
  };

  const currentSiteNumber = transactionData.sites.length + 1;

  return (
    <form onSubmit={handleSubmit(handleSiteSubmit)}>
      <p>
        <label htmlFor="siteName">
          Site Name (Site {currentSiteNumber} of {transactionData.noOfSites}){" "}
        </label>
        <select id="siteName" {...register("siteName")} required>
          <option value="">Select a site</option>
          {sites?.map((site) => (
            <option key={site._id} value={site._id}>
              {site.name}
            </option>
          ))}
        </select>
      </p>
      <p>
        <label htmlFor="noOfItems">Number of Items for this Site </label>
        <input
          type="number"
          id="noOfItems"
          {...register("noOfItems")}
          min="1"
          required
        />
      </p>
      <input type="submit" value={`Add Site ${currentSiteNumber}`} />
    </form>
  );
}

export default RenderSiteForm;
