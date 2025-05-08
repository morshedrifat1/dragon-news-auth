import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomeComponent/LeftAside';
import RightAside from '../components/HomeComponent/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <LatestNews></LatestNews>
                <Navbar></Navbar>
            <main className='max-w-[1250px] p-5 mx-auto grid grid-cols-12 gap-6'>
                <aside className='col-span-3'>
                    <div className='sticky top-10'>
                    <LeftAside></LeftAside>
                    </div>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <div className='sticky top-10'>
                    <RightAside></RightAside>
                    </div>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayout;