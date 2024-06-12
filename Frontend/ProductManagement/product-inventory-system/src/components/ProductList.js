// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('/api/products');
//         setProducts(response.data);
//       } catch (err) {
//         setError('An error occurred while fetching products');
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2>Product List</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {products.map((product) => (
//           <div key={product.id} className="col">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 {product.variants.map((variant) => (
//                   <ul key={variant.id} className="list-group list-group-flush">
//                     <li className="list-group-item">
//                       <strong>Variant:</strong> {variant.name}
//                       <ul className="list-group list-group-flush">
//                         {variant.subVariants.map((subVariant) => (
//                           <li key={subVariant.id} className="list-group-item">
//                             <strong>Sub-Variant:</strong> {subVariant.name}
//                           </li>
//                         ))}
//                       </ul>
//                     </li>
//                   </ul>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products/');
        setProducts(response.data);
      } catch (err) {
        setError('An error occurred while fetching products');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Product List</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" style={{textAlign:'center'}}>{product.name}</h5>
                {product.variants.map((variant) => (
                  <ul key={variant.id} className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Variant:</strong> {variant.name}
                      <ul className="list-group list-group-flush">
                        {variant.subVariants.map((subVariant) => (
                          <li key={subVariant.id} className="list-group-item">
                            <strong>Sub-Variant:</strong> {subVariant.name}
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
