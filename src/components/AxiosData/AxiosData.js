import axios from "axios";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import "./AxiosData.css"

const AxiosData = (props) => {
    const [items, setItems] = useState([]);
    const [getHasMore, setHasMore] = useState(true);
    let [page, setPage] = useState(1);

    const fetchData = (setItems, items) => {

        axios
            .get(
                `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=${page}&count=8&sort_by=&sort_dir=&filter=`
            )

            .then((res) => {
                setItems([...items, ...res.data.result.products]);
                setPage(page + 1);
                if (items.length > 100) {
                    setHasMore(false);
                }
                // console.log(items);
            });
    };

    useEffect(() => {
        fetchData(setItems, items);
    },
        // eslint-disable-next-line
        []);
    return (<>
        <InfiniteScroll
            dataLength={items.length} //This is important field to render the next data
            next={() => {
                fetchData(setItems, items);
            }}
            hasMore={getHasMore}
            loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >

            <div className="d-flex flex-wrap m-3  justify-content-center " >

                {

                    items.filter((val) => {

                        if (props.getSearch === "") { return val; }

                        if (val.name.toLowerCase().includes(props.getSearch.toLowerCase())) {
                            return val;
                        }
                        else return false;

                    }).map(({ name, image, price, selling_price, variation, fit }, index) => (
                        <div className="card m-3 shadow " key={index} style={{ width: "18rem" }} >
                            <img src={image} className="card-img-top" alt={name} width="260vh" height="400vh" />
                            <div className={"card-body d-flex flex-column align-items-center text-center justify-content-between"}>
                                <h6 className="card-title">{name}</h6>
                                <p className="card-text "><del>₹{price} </del><span className="fw-bold">  ₹{selling_price}</span></p>
                                {/* <p>{fit}</p> */}
                                <div> <Link to='/ShowMore'> <button className="btn btn-primary" onClick={() => { return props.onClickHandle(items[index]) }} >Show</button></Link>
                                </div>
                            </div>
                        </div>
                    ))

                }

            </div>

        </InfiniteScroll>
    </>
    );
}
export default AxiosData