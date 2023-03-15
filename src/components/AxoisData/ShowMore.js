import { useState } from "react";

const ShowMore = (props) => {
    const [toast, setToast] = useState(true);


    return (
        <div className='container'>
            {props.ShowItem.map(({ name, image, price, selling_price, gallery, description }, index) => (
                <div className="card m-3 shadow rounded p-3 d-flex overflow-auto" key={index}  >
                    <h2 className="card-title ">{name}</h2>
                    <div className="d-inline ">
                        <img src={image} className="card-img-top border border-dark" alt={name} style={{ width: "18rem" }} />


                        <button className=" btn btn-outline-primary  m-3 " onClick={() => {
                            setToast(false)
                            console.log("Added to cart")
                            return props.AddToCart(props.ShowItem[index])
                        }}>{toast ? <span>Add To Cart</span> : <span>Added</span>}</button>
                    </div>
                    <p className="card-text ">Price:<del>₹{price} </del><span className="fw-bold fs-2"> Selling Price: ₹{selling_price}</span></p>

                    <p className="d-inline ">{description}</p>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade  bg-dark" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active"   >
                                <img src={image} className="d-block m-auto w-25 " alt="" />
                            </div>

                            {

                                gallery.map((val, i) => {
                                    return i !== 0 && <div className="carousel-item " key={i}  >
                                        <img src={val.image} className="d-block w-25 m-auto" alt="" />
                                    </div>

                                })
                            }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                    {/* <div className={"card-body  d-flex felx-column "}>
                        {
                            
                            gallery.map((val, i) => {
                                return <div className="d-flex flex-wrap  m-2" key={i}  >
                                    <img src={val.image} className="shadow border border-dark" alt="" style={{ width: "10rem" }} />
                                </div>

                            })
                        }
                    </div> */}



                </div>
            ))
            }

        </div>

    )
}

export default ShowMore;