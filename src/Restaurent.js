import React,{useState} from 'react'
import './style.css'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

//spread operator used to get categories as direct child of array
const uniqueList = [...new Set (Menu.map((currElem) => {
    return currElem.category
})
),"All",
]

// console.log(uniqueList)

const Restaurent = () => {

  //useState hooks is used to get and hold data 
    //we want to store our api data using useState
    //returns array which has two items --> state variable and updated data
    const [menuData,setMenuData] = useState(Menu)
    const [menuList,setMenuList] = useState(uniqueList)

    const filterItem = (category) => {

      if  (category === "All"){
        setMenuData(Menu)
        return
      }




//filtering as per category
      const updatedList = Menu.filter ((currElem) => {
        return currElem.category === category 
      })
      //storing filtered item to display
        setMenuData(updatedList)
    }
  return (    
    
//style is written as JSX object
//using props passing data from parent to child
    <>

    <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
      
    </>
  )
}
//passsing reference to filterItem using props as there is no mention of it in 
//Navbar but it is being used
export default Restaurent
