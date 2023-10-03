
import MainContent from "../components/MainContent";
import Properties from "../components/Properties";
import FeaturedProd from "../components/FeaturedProdSect/FeaturedProd";
import CallToAction from "../components/CallToAction"
import ArrivalProd from "../components/ArrivalProd/ArrivalProd.jsx";
import BannersSect from "../components/bannerSection/BannersSect";
import NewsLetter from "../components/NewsLetter";


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