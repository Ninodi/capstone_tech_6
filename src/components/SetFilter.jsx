const SetFilter = (filter, filterOptions, categoryProducts, setFilteredProd) => {
  const updatedFilterOptions = { ...filterOptions };

  if (filter === "all") {
    updatedFilterOptions[filter].filterState = !updatedFilterOptions[filter].filterState

    if (updatedFilterOptions.all.filterState) {
      Object.keys(updatedFilterOptions).forEach((key) => {
        updatedFilterOptions[key].filterState = true
      })
    } else {
      Object.keys(updatedFilterOptions).forEach((key) => {
        if (key !== "all") {
          updatedFilterOptions[key].filterState = false
        }
      })
    }
  } else {
    updatedFilterOptions[filter].filterState = !updatedFilterOptions[filter].filterState

    // Check if any individual filter is unselected
    const anyFilterUnselected = Object.keys(updatedFilterOptions)
      .filter((key) => key !== "all")
      .some((key) => !updatedFilterOptions[key].filterState)

    // If any filter is unselected, unselect the "all" filter
    if (anyFilterUnselected) {
      updatedFilterOptions.all.filterState = false
    } else {
      // Check if every other filter is selected
      const everyOtherFilterSelected = Object.keys(updatedFilterOptions)
        .filter((key) => key !== filter && key !== "all")
        .every((key) => updatedFilterOptions[key].filterState)

      // If every other filter is selected, also select the "all" filter
      if (everyOtherFilterSelected) {
        updatedFilterOptions.all.filterState = true
      }
    }
  }

  // If "all" filter is selected, display all products
  if (updatedFilterOptions.all.filterState) {
    setFilteredProd(categoryProducts)
  } else {
    // Find selected filters
    const selectedFilterIds = Object.keys(updatedFilterOptions)
      .filter((key) => key !== "all" && updatedFilterOptions[key].filterState)
      .map((key) => updatedFilterOptions[key].id)

    // Filter categoryProducts based on selected filter IDs
    const filteredProducts = categoryProducts.filter((product) =>
      selectedFilterIds.includes(product.filter)
    )

    // Update the state with the filtered products
    setFilteredProd(filteredProducts)
  }

  return updatedFilterOptions
};

export default SetFilter;
