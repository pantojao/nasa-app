
import React, { useState, useEffect} from 'react';

function ImageInfo(props){
    const [query] = useState(props.location.state.id)
    const [data, setData] = useState(null);
    const [img, setImg] = useState(null);
    const [description, setDescription] = useState(null);
    const [title, setTitle] =  useState(null);
    const [display, setDisplay] = useState(false);
    
    function changeDisplay(){
        setDisplay(!display)
    }

    useEffect(() => {  
        const fetchData = async () => {
          const result = await fetch(`https://images-api.nasa.gov/search?nasa_id=${query}`)
            .then(res => res.json())
            .then(data => {
                setData(data.collection.items)
                setImg(data.collection.items[0].links[0].href)
                setDescription(data.collection.items[0].data[0].description)
                setTitle(data.collection.items[0].data[0].title)
                console.log(data.collection.items[0].links[0].href)
            });
        }
        fetchData();
        }, [query] 
    )

    let style;
    if (img!==null){
        style={backgroundImage: `url(${img})` }
        } else {
        style = {backgroundColor: "blue"};
    }

    // function GoBack(){
    //     props.history.goBack()
    // }

    if (description!==null) {
        if (description.includes('<a')){
            var describe = description.substr(0, description.indexOf('<a'))
        } else{
            describe = description
        }
    }
   
    return(
        <div>
        
        {(title && description && img) ? 
            <div style={style} className="image-info">
                <button type="button" className="back-btn btn btn-dark btn-sm" onClick= {() => props.history.goBack()}>Back</button> 
                <div className="content" >
                    <div className="buttons">
                        <button onClick={() => changeDisplay()} className="btn btn-info btn-sm about-btn" >About Image</button>
                    </div>
                    {display === true ? 
                        (
                    <div className="info">
                        <h1 className = "image-title">{title}</h1> 
                        <p className = "image-paragraph">{describe}</p>
                    </div>
                        ) 
                        : null}
                </div>
            </div>
            : null}


        </div>
        
    )
}

export default ImageInfo

