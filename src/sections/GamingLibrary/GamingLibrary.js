import "./GamingLibrary.css"
import {GamingLibraryCard ,SectionHeader,SectionWrapper} from "../../components/index"
import GamingLibraryData from "../../Data/GamingLibraryData"


const GamingLibrary = () => {

    // const cards = GamingLibraryData.map(card => {
    //     return <Card key={card.id} image={card.image}
    //                  title={card.title}
    //                  category={card.category}
    //                  rate={card.rate}
    //                  download={card.download}/>
    //  })


  return (
    <>
    <SectionWrapper>
       <SectionHeader> GamingLibrary </SectionHeader>
        <div className="most-popular-items">
          {/* {cards} */}
          <GamingLibraryCard/>
        </div>
        </SectionWrapper>
    </>

  )
}

export default GamingLibrary