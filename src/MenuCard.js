import React from 'react'
import Maggi from './assets/Maggi.jpg'

//receives the props from Restaurent
const MenuCard = ({menuData}) => {
    console.log(menuData)
    return (
        

        //mapping through all elements of object
        <>
            <section className="main-card--container">

            {menuData.map((currElem) => {

            //destructuring 
            const {id,name,category,image,description} = currElem
            //now we need not write currElem every time
            return (
                <>
                <div className="card-container" key={id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">
                           {id}
                        </span>
                        <span className="card-author subtle" style={{ color: "red" }}>
                            
                        </span>
                        <h2 className="card-title">{name}</h2>
                        <span className="card-description subtle">
                            {description}
                        </span>
                        <div className="card-read">Read</div>

                    </div>

                    <img src={Maggi} alt="images" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
            </>
            )
        })}
            
      



            </section>
            </>
        
    )
}

export default MenuCard
