import React from "react";

const NewsItem=(props)=>{
    let { title, description, imageUrl, Newsurl, author, date, source } = props;
    return (
      <div>
        <div className="card">
        <div style={{position:"absolute",right:'0'}}>
        <span class=" badge rounded-pill bg-danger d-flex justify-content-flex-end">
              {source}
            </span>
        </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 45)}...</h5>
            <p className="card-text">{description.slice(0, 80)}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={Newsurl} target="blank" className="btn btn-sm btn-danger">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
