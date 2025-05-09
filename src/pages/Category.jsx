import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const Category = () => {
    const {id} = useParams();
    const allNews = useLoaderData();
    const [catagoryNews,setCatagoryNews] = useState([]);
    useEffect(()=>{
        
        if(id==0){
            setCatagoryNews(allNews);
            return
        }
        else if(id==1){
            const todayNews = allNews?.filter(news=>news.others.is_today_pick===true);
            setCatagoryNews(todayNews);
            return
        }
        else{
            const filterNews = allNews?.filter(news=>news.category_id===parseInt(id));
            setCatagoryNews(filterNews)
        }

    },[id,allNews])
    return (
      <div className='space-y-10'>
        {catagoryNews?.map((newsData,index) => (
          <NewsCard key={index} newsData={newsData}></NewsCard>
        ))}
      </div>
    );
};

export default Category;