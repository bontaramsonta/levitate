import type { Product, ProductFilters } from '../types/types';
import { includes, any } from 'rambda';

export function filterProducts(products: Product[], filter: ProductFilters) {
  return products.filter((product) => {
    const isCategoryMatching =
      filter.category.length == 0 ||
      includes(product.category, filter.category);

    const isSizesMatching =
      filter.sizes.length == 0 ||
      any((size) => includes(size, filter.sizes), product.sizes);

    const isColorMatching =
      filter.colours.length == 0 ||
      any((colour) => includes(colour, filter.colours), product.colours);

    const isMaterialMatching =
      filter.materials.length == 0 ||
      includes(product.material, filter.materials);

    const isDiscountMatching =
      filter.discount.length == 0 ||
      any(
        (discount) => discount <= product.discount && !!discount,
        filter.discount
      );
    return (
      isCategoryMatching &&
      isSizesMatching &&
      isColorMatching &&
      isMaterialMatching &&
      isDiscountMatching
    );
  });
}
