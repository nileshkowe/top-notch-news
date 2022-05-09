import React from 'react';

const NewsItem = (props)=> {
        let {urlToImage,title,description,url,author,date,name} = props;
        return (
            <div>
                <div className="card" style={{"width": "100%"}}>
                    <img src={urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{name}</span>
                    <a rel="noreferrer" href={url} target="_blank" className="btn btn:hover">Read more</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
