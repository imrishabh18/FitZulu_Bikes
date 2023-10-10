const {
    filterByBrand,
    filterByRange,
    filterByRating,
  } = require('../utils/utils');
  
  describe('filterByBrand', () => {
    const bikeData = [
      { brand: 'Honda', price: 5000, rating: 4.5 },
      { brand: 'Kawasaki', price: 6000, rating: 4.8 },
      { brand: 'Yamaha', price: 5500, rating: 4.2 },
    ];
  
    it('should filter by brand "Honda"', () => {
      const result = filterByBrand(bikeData, 'Honda');
      expect(result).toHaveLength(1);
      expect(result[0].brand).toBe('Honda');
    });
  
    it('should return all bikes if no brand is specified', () => {
      const result = filterByBrand(bikeData);
      expect(result).toHaveLength(3);
    });
  
    it('should be case-insensitive', () => {
      const result = filterByBrand(bikeData, 'honda');
      expect(result).toHaveLength(1);
      expect(result[0].brand).toBe('Honda');
    });
  
    it('should return an empty array if no matches are found', () => {
      const result = filterByBrand(bikeData, 'Suzuki');
      expect(result).toHaveLength(0);
    });
  });
  
  describe('filterByRange', () => {
    const bikeData = [
      { brand: 'Honda', price: 5000, rating: 4.5 },
      { brand: 'Kawasaki', price: 6000, rating: 4.8 },
      { brand: 'Yamaha', price: 5500, rating: 4.2 },
    ];
  
    it('should filter by price range', () => {
      const result = filterByRange(bikeData, 5000, 5500);
      expect(result).toHaveLength(2);
      expect(result[0].brand).toBe('Honda');
      expect(result[1].brand).toBe('Yamaha');
    });
  
    it('should return all bikes if no range is specified', () => {
      const result = filterByRange(bikeData);
      expect(result).toHaveLength(3);
    });
  
    it('should filter by min price only', () => {
      const result = filterByRange(bikeData, 5500);
      expect(result).toHaveLength(2);
      expect(result[0].brand).toBe('Kawasaki');
      expect(result[1].brand).toBe('Yamaha');
    });
  
    it('should return an empty array if no matches are found', () => {
      const result = filterByRange(bikeData, 7000, 8000);
      expect(result).toHaveLength(0);
    });
  });
  
  describe('filterByRating', () => {
    const bikeData = [
      { brand: 'Honda', price: 5000, rating: 4.5 },
      { brand: 'Kawasaki', price: 6000, rating: 4.8 },
      { brand: 'Yamaha', price: 5500, rating: 4.2 },
    ];
  
    it('should filter by rating', () => {
      const result = filterByRating(bikeData, 4.5);
      expect(result).toHaveLength(2);
      expect(result[0].brand).toBe('Honda');
      expect(result[1].brand).toBe('Kawasaki');
    });
  
    it('should return all bikes if no rating is specified', () => {
      const result = filterByRating(bikeData);
      expect(result).toHaveLength(3);
    });
  
    it('should return an empty array if no matches are found', () => {
      const result = filterByRating(bikeData, 4.9);
      expect(result).toHaveLength(0);
    });
  });
  