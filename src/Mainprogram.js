import Cards from "./Cards";

export default function Mainprogram({productList,handleClick}) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {productList.map((product,i)=>(
            <Cards 
            key={i}
            handleClick={handleClick}
            product={product}
            index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
