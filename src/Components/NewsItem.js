import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,aurther,date,description,imgurl,url} = this.props;
    
    return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                
        <img src={imgurl} className="card-img-top" alt="Picture Not Given"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <label className="aurther">By {aurther}</label>
            <br></br>
            <label className="date">{(new Date(date).toDateString()).slice(4,15)}</label>
            <p className="card-text">{description}</p>

            <a href={url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
            </div>
    )
  }
}

export default NewsItem
