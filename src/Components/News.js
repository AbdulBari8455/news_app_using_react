import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
articale=[
    {
    "source": {
    "id": null,
    "name": "Gizmodo.com"
    },
    "author": "Andrew Liszewski",
    "title": "Sony Once Again Delivers the Best Noise Canceling Wireless Headphones",
    "description": "If there’s one word that sums up Sony’s flagship wireless headphones year over year, it’s consistency. The WH-1000XM line has seen only subtle design updates since the original WH-1000XM1, but four iterations later, the new WH-1000XM5 bring some big changes. …",
    "url": "https://gizmodo.com/sony-wh-1000xm5-wireless-active-noise-cancelling-headph-1848892065",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/147f11b8c4ae3f7e0f1405da3d4046c0.jpg",
    "publishedAt": "2022-05-12T16:00:00Z",
    "content": "If theres one word that sums up Sonys flagship wireless headphones year over year, its consistency. The WH-1000XM line has seen only subtle design updates since the original WH-1000XM1, but four iter… [+9595 chars]"
    }
    ]
constructor()
{
    super();
    this.state={
         articles:[] 
    }
}
async componentDidMount()
{
    let URL="https://newsapi.org/v2/top-headlines?country=us&apiKey=12dac502644c489a86116830580ea19b";
    let data= await fetch(URL);
    let parseddata= await data.json();
    this.setState({articles:parseddata.articles})
}

  render() {
    return (
        <>
        <div className='container'>
        
            {this.state.articles.map((element)=>{
                return <div className="NewData" key={element.url}>
                    <NewsItem  title={element.title} aurther={element.author} date={element.publishedAt.slice(0,10)} description={element.description} imgurl={element.urlToImage} url={element.url}/>
                </div>
            })}
            
        </div>
        </>
    )
  }
}

export default News
