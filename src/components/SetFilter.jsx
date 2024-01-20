
const SetFilter = (filterName, filterOptions, categoryProducts, setFilteredProd, t) => {
  const updatedFilterOptions = [...filterOptions]
  const allFilterIndex = updatedFilterOptions.findIndex(filter => filter.filterName === t("AllProductPage.all"))
  let allFilterState = updatedFilterOptions[allFilterIndex].filterState

  if(filterName === t("AllProductPage.all")){
    //ყველა ფილტრი გახდეს იგივე სატუსის რაც 'all' ფილტრია
    updatedFilterOptions[allFilterIndex].filterState = !allFilterState
    updatedFilterOptions.forEach(filter => filter.filterState = updatedFilterOptions[allFilterIndex].filterState)
  }else{
    updatedFilterOptions.forEach(filter => {
      if(filterName === filter.filterName) {
        filter.filterState = !filter.filterState
      }
      //თუ ყველა ფილტრს მოვნიშნავთ 'all' ფილტრი მოინიშნოს და პირიქით
      const allOtherFiltersSelected = updatedFilterOptions
      .filter(filter => filter.filterName !== 'All')
      .every(filter => filter.filterState)

      if (allOtherFiltersSelected) {
        updatedFilterOptions[allFilterIndex].filterState = true
      }else{
        updatedFilterOptions[allFilterIndex].filterState = false
      }

    })
  }

  //თუ 'all' ფილტრი მონიშნულია ყველა პროდუქტი გამოვაჩინოთ, თუარა და მხოლოდ ამორჩეული ფილტრები
  if (updatedFilterOptions[allFilterIndex].filterState) {
    setFilteredProd(categoryProducts)
  } else {
    const selectedFilterIds = updatedFilterOptions
      .filter(filter => filter.filterState)
      .map(filter => filter.id)

    setFilteredProd(categoryProducts.filter(product => selectedFilterIds.includes(product.filter)))
  }

  return updatedFilterOptions;

};

export default SetFilter;
