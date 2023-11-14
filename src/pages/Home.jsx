
import MainContent from "../components/MainContent.jsx";
import Properties from "../components/Properties.jsx";
import FeaturedProd from "../components/FeaturedProdSect/FeaturedProd.jsx";
import CallToAction from "../components/CallToAction.jsx"
import ArrivalProd from "../components/ArrivalProd/ArrivalProd.jsx";
import BannersSect from "../components/bannerSection/BannersSect.jsx";
import NewsLetter from "../components/NewsLetter.jsx";


export default function Home(){
    return(
        <>
            <MainContent />
            <Properties />
            <FeaturedProd />
            <CallToAction />
            <ArrivalProd />
            <BannersSect />
            <NewsLetter />
        </>
    )
}