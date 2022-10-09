import "./MostPopular.css"

import popular_01 from "../../assets/images/popular-01.jpg"

const MostPopular = () => {
  return (
    <>
    <div className="section-wrapper">

        <div className="section-header">
            <h4>Most popular</h4>
        </div>

        <div className="most-popular-items">

            <div className="most-popular-item">
                <div className="card-wrapper">
                    <img className="most-popular-item-img" src={popular_01} alt=""/>
                    <div className="most-popular-item-content">
                        <h4 className="most-popular-item-title">
                            Fortnite <br/>
                            <span>Sandbox</span>
                        </h4>
                        <ul>
                            <li><span>4.9</span></li>
                            <li><span>2.3</span></li>

                        </ul>
                    </div>
                </div>

            </div>

            <div className="most-popular-item">
                <div className="card-wrapper">
                    <img className="most-popular-item-img" src={popular_01} alt=""/>
                    <div className="most-popular-item-content">
                        <h4 className="most-popular-item-title">
                            Fortnite <br/>
                            <span>Sandbox</span>
                        </h4>
                        <ul>
                            <li><span>4.8</span></li>
                            <li><span>2.3</span></li>

                        </ul>
                    </div>
                </div>

            </div>

            <div className="most-popular-item">
                <div className="card-wrapper">
                    <img className="most-popular-item-img" src={popular_01} alt=""/>
                    <div className="most-popular-item-content">
                        <h4 className="most-popular-item-title">
                            Fortnite <br/>
                            <span>Sandbox</span>
                        </h4>
                        <ul>
                            <li><span>4.8</span></li>
                            <li><span>2.3</span></li>

                        </ul>
                    </div>
                </div>

            </div>

            <div className="most-popular-item">
                <div className="card-wrapper">
                    <img className="most-popular-item-img" src={popular_01} alt=""/>
                    <div className="most-popular-item-content">
                        <h4 className="most-popular-item-title">
                            Fortnite <br/>
                            <span>Sandbox</span>
                        </h4>
                        <ul>
                            <li><span>4.8</span></li>
                            <li><span>2.3</span></li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>

    </div>
    
    </>
  )
}

export default MostPopular