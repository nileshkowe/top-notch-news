import React,{useState,useEffect} from "react";
import Newsitem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=> {
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);
  
  const capitalize=(s)=> {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  const updateData = async()=> {
    props.onLoaderFinished(10);
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${page}&pagesize=${props.pagesize}`
    );
    props.onLoaderFinished(30);
    let parsedData = await data.json();
    props.onLoaderFinished(70);
    setarticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.onLoaderFinished(100);
  }
  useEffect(() => {
    updateData();
    document.title = `${capitalize(props.category)}-News`;
    //eslint-disable-next-line
  },[])
  const fetchMoreData = async()=> {
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${page+1}&pagesize=${props.pagesize}`
    );
    setpage(page + 1);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }
    return (
      <>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container my-3">
          <h4 className="text-center " style={{'marginTop' : '4rem'}}>
            News⪼{capitalize(props.category)}
          </h4>
          <div className="row">
            {articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <Newsitem
                      urlToImage={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://cdn.pixabay.com/index/2021/11/02/07-35-50-740_1440x550.jpg"
                      }
                      title={element.title}
                      description={element.description}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      name={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        </InfiniteScroll>
      </>
    );
}
export default News;