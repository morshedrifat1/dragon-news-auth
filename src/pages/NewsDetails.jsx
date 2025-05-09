import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header';
import RightAside from '../components/HomeComponent/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {
    const newsDatas = useLoaderData()
    const {id} = useParams();
    const [news,setNews] = useState({});
    useEffect(()=>{
        const data = newsDatas?.find(news=>news.id===id);
        setNews(data)

    },[id,newsDatas])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='max-w-[1250px] p-5 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                <h2 className="text-primary text-lg font-semibold">Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>             
                </section>
                <aside className='col-span-3'>
                    <div className='sticky top-10'>
                       <RightAside></RightAside >
                    </div>
                </aside>
            </main>

            
        </div>
    );
};

export default NewsDetails;