import React from 'react'

const Purchasedhistory = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const products = [
    { ProductID: 101, ProductName: "Classic White Shirt", Category: "Tops", Price: 2399, ImageURL: "https://thrd.store/images/carousal2/drop2/Armani%20Exchange%20_%20Graphic%20Tee%20_%20Blue.webp" },
    { ProductID: 102, ProductName: "Denim Jeans", Category: "Bottoms", Price: 3999, ImageURL: "https://thrd.store/images/carousal2/drop2/Calvin%20Klein%20_%20Logo%20Polo%20_%20Blue.webp" },
    { ProductID: 103, ProductName: "Leather Jacket", Category: "Outerwear", Price: 7299, ImageURL: "https://thrd.store/images/carousal2/drop2/Polo%20Ralph%20Lauren%20_%20Graphic%20Tee%20_%20Beige.webp" },
    { ProductID: 104, ProductName: "Black T-Shirt", Category: "Tops", Price: 1599, ImageURL: "https://thrd.store/images/carousal2/drop2/Superdry%20_%20Graphic%20Tee%20_%20Maroon.webp" },
    { ProductID: 105, ProductName: "Chinos", Category: "Bottoms", Price: 3199, ImageURL: "https://thrd.store/images/carousal2/drop2/DKNY%20_%20Graphic%20Tee%20_%20Light%20Gray.webp" },
    { ProductID: 106, ProductName: "Hoodie", Category: "Outerwear", Price: 4799, ImageURL: "https://thrd.store/images/carousal2/drop2/Gas%20_%20Graphic%20Tee%20_%20Black.webp" },
    { ProductID: 107, ProductName: "Striped Shirt", Category: "Tops", Price: 2799, ImageURL: "https://thrd.store/images/carousal2/drop2/Jack%20&%20Jones%20_%20Graphic%20Tee%20_%20Beige.webp" },
    { ProductID: 108, ProductName: "Shorts", Category: "Bottoms", Price: 1999, ImageURL: "https://thrd.store/images/carousal2/drop2/Guess%20_%20Graphic%20Tee%20_%20White.webp" },
    { ProductID: 109, ProductName: "Blazer", Category: "Outerwear", Price: 7999, ImageURL: "https://thrd.store/images/carousal2/drop2/Von%20Dutch%20_%20Graphic%20Tee%20_%20Black.webp" },
    { ProductID: 110, ProductName: "Graphic Tee", Category: "Tops", Price: 1999, ImageURL: "https://thrd.store/images/carousal2/drop2/Ecko%20_%20Logo%20Tee%20_%20Navy.webp" }
  ];

  const purchaseHistory = [
    { UserID: 1, ProductID: 101, PurchaseDate: '2023-01-15' },
    { UserID: 1, ProductID: 104, PurchaseDate: '2023-02-20' },
    { UserID: 1, ProductID: 105, PurchaseDate: '2023-03-05' },
    { UserID: 2, ProductID: 102, PurchaseDate: '2023-01-25' },
    { UserID: 2, ProductID: 106, PurchaseDate: '2023-04-18' },
    { UserID: 3, ProductID: 103, PurchaseDate: '2023-02-10' },
    { UserID: 3, ProductID: 107, PurchaseDate: '2023-03-22' },
    { UserID: 3, ProductID: 108, PurchaseDate: '2023-05-30' }
  ];

  function userPurchaseHistory(user, products, purchaseHistory) {
    if (!user) {
      console.error("User data not found in localStorage");
      return products;
    }
  
    const userId = user.id;
    const userPurchases = purchaseHistory.filter(purchase => purchase.UserID === userId);
    const purchasedProductIds = userPurchases.map(purchase => purchase.ProductID);

    return products.filter(product => purchasedProductIds.includes(product.ProductID));
  }

  const purchasedItems = userPurchaseHistory(user, products, purchaseHistory);

  return (
    <>
        <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Purchased History</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {purchasedItems.map((purchasedItems) => (
              <div key={purchasedItems.ProductID} className="group relative">
                <img
                  alt={purchasedItems.ProductName}
                  src={purchasedItems.ImageURL}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                />
                <h3 className="mt-4 text-xl text-gray-700">{purchasedItems.ProductName}</h3>
              <p>Category: {purchasedItems.Category}</p>
              <p className="mt-1 text-lg font-medium text-gray-900">Price : {purchasedItems.Price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Purchasedhistory