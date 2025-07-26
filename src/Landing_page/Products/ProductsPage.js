import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductsPage() {
    return ( 
        <div>
            <Hero />
            <LeftSection imgUrl="./Images/kite.png" title="Kite" description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." try_demo="Try demo " learn_more="Learn more " play_store="./Images/googlePlayBadge.svg" app_badge="./Images/appstoreBadge.svg" arrow1={"fa-solid fa-arrow-right"} arrow2={"fa-solid fa-arrow-right"}/>
            <RightSection imgUrl="./Images/console.png" title="Console" description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learn_more="Learn more "/>
            <LeftSection imgUrl="./Images/coin.png" title="Coin" description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." try_demo="Coin " play_store="./Images/googlePlayBadge.svg" app_badge="./Images/appstoreBadge.svg" arrow1={"fa-solid fa-arrow-right"}/>
            <RightSection imgUrl="./Images/kiteconnect.png" title="Kite Connect API" description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learn_more="Kite Connect  " arrow1={"fa-solid fa-arrow-right"}/>
            <LeftSection imgUrl="./Images/varsity.png" title="Varsity mobile" description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." play_store="./Images/googlePlayBadge.svg" app_badge="./Images/appstoreBadge.svg"/>
            <Universe />
        </div>
     );
}

export default ProductsPage;
