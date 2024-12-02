const products = [
    {
      id: 1,
      name: 'Armani Exchange',
      href: '#',
      imageSrc: 'https://thrd.store/images/carousal2/drop2/Armani%20Exchange%20_%20Graphic%20Tee%20_%20Blue.webp',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₹ 1199',
      color: 'Blue Graphic Tee',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://thrd.store/images/carousal2/drop2/Polo%20Ralph%20Lauren%20_%20Graphic%20Tee%20_%20Beige.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹ 1199',
        color: 'Black',
      },
      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://thrd.store/images/carousal2/drop2/Superdry%20_%20Graphic%20Tee%20_%20Maroon.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹ 1199',
        color: 'Black',
      },
      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://thrd.store/images/carousal2/drop2/Jack%20&%20Jones%20_%20Graphic%20Tee%20_%20Beige.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹ 1199',
        color: 'Black',
      }
    // More products...
  ]
  
  export default function ProductLists() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="items-center text-2xl font-bold tracking-tight text-gray-900">Sneak Peak</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  