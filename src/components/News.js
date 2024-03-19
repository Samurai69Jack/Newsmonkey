import React from 'react';
import { useEffect,useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News=(props)=>{
  const [articles,setarticles]= useState([])
  const [loading,setloading]=useState(true)
  const [page,setpage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)

 // document.title=`${this.capitalisefirstLetter(props.category)} - Mohalle wali Aunty`;


  const capitalisefirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  };
  

  

  const updateNews=async()=>{
    props.setProgress(10);
    const apiKey=process.env.react_app_news_api
    const url=`https://newsapi.org/v2/top-headlines?${props.country}&category=${props.category}&language=${props.language}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data=await fetch(url);
    props.setProgress(30);
    let parsedData= await data.json()
    props.setProgress(70);
    setarticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setloading(false);
    props.setProgress(100);

}

useEffect(()=>{
  updateNews();
},[])


  /*      const handleprevclick=()=>{
                  setpage(page-1);
                  updateNews();

        }

        const handlenextclick =() => {
                  setpage(page+1);
                  updateNews();
        };
        */


const fetchMoreData=async()=>{
        
        const url=`https://newsapi.org/v2/top-headlines?${props.country}&category=${props.category}&language=${props.language}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        
        let data=await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        setarticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
}



return (
  <div className="container my-5">
    <h1 className='text-center' style={{margin:"90px 0px"}}>Mohalle wali Aunty - Top {capitalisefirstLetter(props.category)} Headlines</h1>
    {/* Display Spinner or content based on loading state */}
    {loading ? (
      <Spinner />
    ) : (
      articles && ( // Check if articles exist
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData()}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="row">
          {articles &&
  articles.map((element) => (
    <div className="col-md-4 my-4" key={element.url}>
      <NewsItem
        title={element.title || "Untitled"} // Use fallback value if 'title' is undefined
        description={element.description || "No description available"} // Fallback for 'description'
        imageUrl={element.urlToImage || "https://via.placeholder.com/150"} // Fallback image URL
        Newsurl={element.url || "#"} // Fallback URL
        author={element.author || "Unknown"} // Fallback for 'author'
        date={element.publishedAt || "Unknown"} // Fallback for 'date'
        source={element.source?.name || "Unknown"} // Fallback for 'source.name' (using optional chaining)
      />
    </div>
  ))}

          </div>
        </InfiniteScroll>
      )
    )}
  </div>
);

  
}
News.defaultProps={
  country:"in",
  pageSize:6,
  category:'general'
  
}

News.propType={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

export default News;