using Core.Entities;

namespace Core.Specifications
{
    public class ProductWithBrandsAndTypesSpecifications : BaseSpecification<Product>
    {
        public ProductWithBrandsAndTypesSpecifications(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductBrand);
            AddInclude(x => x.ProductType);
        }

        public ProductWithBrandsAndTypesSpecifications()
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }
    }
}