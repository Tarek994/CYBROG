import "./MostPopular.css"
import {Card ,SectionHeader,SectionWrapper} from "../../components/index"

import popular_01 from "../../assets/images/popular-01.jpg"
import popular_02 from "../../assets/images/popular-02.jpg"
import popular_03 from "../../assets/images/popular-03.jpg"
import popular_04 from "../../assets/images/popular-04.jpg"
import popular_05 from "../../assets/images/popular-05.jpg"
import popular_06 from "../../assets/images/popular-06.jpg"
import popular_07 from "../../assets/images/popular-07.jpg"
import popular_08 from "../../assets/images/popular-08.jpg"



const MostPopular = () => {
  return (
    <>
    <SectionWrapper>

       <SectionHeader>Most Popular</SectionHeader>

        <div className="most-popular-items">

            <Card image={popular_01} title="Fortnite"   category="Sandbox"    rate="3.8"  download="2.8M"/>
            <Card image={popular_02} title="Pubg"       category="Stream-x"   rate="4.8"  download="1.1M"/>
            <Card image={popular_03} title="Dota2"      category="Legendary"  rate="2.7"  download="5.3M"/>
            <Card image={popular_04} title="Cs-Go "     category="Battle S"   rate="3.9"  download="6.1M"/>
            <Card image={popular_05} title="Fortnite"   category="Sandbox"    rate="3.8"  download="2.8M"/>
            <Card image={popular_06} title="Pubg"       category="Stream-x"   rate="4.8"  download="1.1M"/>
            <Card image={popular_07} title="Dota2"      category="Legendary"  rate="2.7"  download="5.3M"/>
            <Card image={popular_08} title="Cs-Go "     category="Battle S"   rate="3.9"  download="6.1M"/>
        </div>
        </SectionWrapper>
    
    </>
  )
}

export default MostPopular