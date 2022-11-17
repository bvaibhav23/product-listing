import { useState } from "react";

const ShowMore = (props) => {
    const [toast, setToast] = useState(true);


    return (
        <div className='container  '>
            {props.ShowItem.map(({ name, image, price, selling_price, gallery, description }, index) => (
                <div className="card m-3 shadow rounded p-3 d-flex overflow-auto" key={index}  >
                    <h2 className="card-title ">{name}</h2>
                    <div className={"card-body  d-flex felx-column "}>
                        {
                            gallery.map((val, i) => {
                                return <div className="d-flex flex-wrap  m-2" key={i}  >
                                    <img src={val.image} className="shadow border border-dark" alt="" style={{ width: "10rem" }} />
                                </div>

                            })
                        }
                    </div>
                    <div className="d-inline ">
                        <img src={image} className="card-img-top border border-dark" alt={name} style={{ width: "18rem" }} />

                        <button className=" btn btn-outline-primary  m-3 " onClick={() => {
                            setToast(false)
                            console.log("Added to cart")
                            setTimeout(() => setToast(true), 1000)
                            return props.AddToCart(props.ShowItem[index])
                        }}>Add to Cart  </button>
                        {toast ? <span></span> : <span className="border shadow border-dark p-2">Added to cart</span>}
                    </div>
                    <p className="card-text ">Price:<del>₹{price} </del><span className="fw-bold fs-2"> Selling Price: ₹{selling_price}</span></p>

                    <p className="d-inline ">{description}</p>



                </div>
            ))
            }

        </div>

    )
}

export default ShowMore;