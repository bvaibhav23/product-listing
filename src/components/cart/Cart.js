import { useEffect, useState } from "react";

const Cart = (props) => {
    // console.log(props.cartItem);
    const [getCart, setCart] = useState([]);
    useEffect(() => {

        if (!getCart.includes(props.cartItem))
            setCart(props.cartItem)
    },
        [props.cartItem, getCart])



    return <>
        {getCart.length === 0 && <h1 className="container text-center mt-5 shadow p-2 ">Empty Cart</h1>}
        {getCart.length > 0 &&
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Color</th>
                            <th scope="col">Price</th>
                            <th scope="col">Offer</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody >
                        {getCart.map((val, index) =>
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td><img src={val.image} style={{ width: "5rem", height: "7rem" }} alt="" /></td>
                                <td className="pt-3" ><p className="d-flex flex-column fw-bold">{val.name}<span className="fw-light">{val.description}</span></p></td>
                                <td className="pt-3" ><div style={{ backgroundColor: `${val.color}`, width: "2rem", height: "2rem" }}></div></td>
                                <td className="pt-3">{val.price}</td>
                                <td id="total" className="pt-3">{val.selling_price}</td>
                                <td id="total" className="pt-3"><button className="btn btn-danger" onClick={() => props.removeHandler(val.id_product)}>X</button></td>
                            </tr>)}
                    </tbody>

                </table>
            </div>
        }



    </>
}
export default Cart;