import Rating from "./Rating";
export default function Cards({product,handleClick,index}) {
  const handleAddorRemove=(e) =>{
    handleClick(e.target.value);
  }
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Sale badge--> */}
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          {product.saleTag}
        </div>
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">

          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{product.cardName}</h5>
            {/* <!-- Product reviews--> */}

            <div>
              <Rating />
            </div>
            {/* <!-- Product price--> */}
            <span className="text-muted text-decoration-line-through">
              {product.mutedAmount}
            </span>
            {product.Amount}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"  value={product}> 
              <button onClick={handleAddorRemove} value={index}>{product.isAdded? "Remove from Cart" : "Add to Cart"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
