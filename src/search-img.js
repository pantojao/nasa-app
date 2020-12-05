import React, { useState, useEffect } from "react";
import { withRouter, useHistory, useParams, Link } from "react-router-dom";
import queryString from "query-string";

function SearchPage(props) {
  const [search, setSearch] = useState(null);
  const [data, setData] = useState(null);
  const [Input, setInput] = useState("");

  const fetchData = async (query) => {
    let result = await fetch(
      `https://images-api.nasa.gov/search?page=1&media_type=image&q=${query}`
    );
    result = await result.json();
    console.log(result.collection.items);
    setData(result.collection.items);
  };

  useEffect(() => {
    const { query } = queryString.parse(props.location.search);
    fetchData(query);
  }, []);

  useEffect(() => {
    if (search !== "") {
      const { query } = queryString.parse(props.location.search);
      fetchData(query);
    }
  }, [search]);

  function onSubmit(event) {
    event.preventDefault();
    setSearch(Input);
    props.history.push(`/search?query=${Input}`);
  }

  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <button type="button" className="random-btn btn btn-dark btn-sm ">
            Random Image
          </button>
        </Link>
        <img
          className="icon"
          alt="nasa icon"
          src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
        />
      </div>

      <div>
        <form
          onSubmit={(event) => onSubmit(event)}
          className="form-group input-form"
        >
          <input
            size="50"
            type="text"
            className="form-control task-input"
            placeholder="Space"
            value={Input}
            onChange={(event) => setInput(`${event.target.value}`)}
            required
          />
          <button className="srch-btn btn btn-primary">Search</button>
        </form>
      </div>

      <div className="search-images">
        {data !== null
          ? data.map((object) => (
              <Link
                to={{
                  pathname: `/${object.data[0].nasa_id}`,
                  state: { id: object.data[0].nasa_id },
                }}
              >
                <div className="image-container">
                  <img
                    className="search-result"
                    alt=""
                    src={`${object.links[0].href}`}
                  />
                </div>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}

export default withRouter(SearchPage);

// useEffect(() => {
//     if (props.location.state!== undefined){
//         setSearch(`${props.location.state}`)
//     } else {setSearch("supernova")}

//     const fetchData = async () => {
//       const result = await fetch(`https://images-api.nasa.gov/search?page=1&media_type=image&q=${search}`)
//         .then(res => res.json())
//         .then(data => {
//             setData(data.collection.items)
//             // console.log(data.collection.items[0].data[0].nasa_id)
//         });
//     }
//     fetchData();
//     }, [search]
// )
