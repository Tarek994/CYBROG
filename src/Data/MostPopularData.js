import popular_01 from "../assets/images/popular-01.jpg"
import popular_02 from "../assets/images/popular-02.jpg"
import popular_03 from "../assets/images/popular-03.jpg"
import popular_04 from "../assets/images/popular-04.jpg"
import popular_05 from "../assets/images/popular-05.jpg"
import popular_06 from "../assets/images/popular-06.jpg"
import popular_07 from "../assets/images/popular-07.jpg"
import popular_08 from "../assets/images/popular-08.jpg"

const MostPopularData = [
    {id:"most_popular_item_0", image: popular_01, title: "Fortnite", category: "Sandbox", rate:"3.8",download:"2.2" },
    {id:"most_popular_item_1", image: popular_02, title: "Pubg", category: "Stream-x", rate:"4.8",download:"2.2" },
    {id:"most_popular_item_2", image: popular_03, title: "Cs-Go", category: "Legandary", rate:"3.8",download:"2.2" },
    {id:"most_popular_item_3", image: popular_04, title: "Dota2", category: "Battle s", rate:"5.8",download:"2.2" },
    {id:"most_popular_item_4", image: popular_05, title: "Pubg", category: "Stream-x", rate:"3.8",download:"2.2" },
    {id:"most_popular_item_5", image: popular_06, title: "Cs-go", category: "Legandary", rate:"4.8",download:"2.2" },
    {id:"most_popular_item_6", image: popular_07, title: "Dota2", category: "Battle s", rate:"5.8",download:"2.2" },
    {id:"most_popular_item_7", image: popular_08, title: "Fortnite", category: "Sandbox", rate:"3.8",download:"2.2" }


]
export default MostPopularData;



// const cards = MostPopularData.map(card =>{
//     return <Card image={card.image}
//                  title={card.title}
//                  category={card.category}
//                  rate={card.rate}
//                  download={card.download}
//   })