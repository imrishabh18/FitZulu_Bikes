//functions to filter
const filterByBrand = (bikeData, brand = "") => {
  return bikeData.filter((bike) => {
    if (brand !== "") {
      return bike.brand.toLowerCase() === brand.toLowerCase();
    }
    return true;
  });
};

// Max price of the product
const MAX_PRICE = Number.MAX_VALUE;

const filterByRange = (bikeData, minprice = 0, maxprice = MAX_PRICE) => {
  return bikeData.filter(
    (bike) => bike.price >= minprice && bike.price <= maxprice
  );
};

// Filter the product by rating
const filterByRating = (bikeData, rating = 0) => {
  return bikeData.filter((bike) => bike.rating >= rating);
};

module.exports = { filterByBrand, filterByRange, filterByRating };
