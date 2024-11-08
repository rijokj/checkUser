import React, { useState } from "react";
import './list.css'

const List =()=>{
    const [primaryField , setprimaryField] = useState("")
    const[secondaryField , setSecondary] = useState("")
    const [isActive, setisActive] = useState(false)
    const [data , setData]  = useState([])
    const [filter, setFilter] = useState('All')

    const handleTitle = (event)=>{
        const value = event.target.value
        setprimaryField(value)
    } 

    const handleDescription = (event)=>{
        const value = event.target.value
        setSecondary(value)
    }
    const handleCheck = (event)=>{
       
        setisActive(event.target.checked)
    }

const addToList = ()=>{

        setData([...data ,{ title:primaryField , description:secondaryField, isActive: isActive }])
        setprimaryField('')
        setSecondary('')
        setisActive(false)


}

const handleFilter = (event)=>{
    const value = event.target.value
    setFilter(value)
}

const filterData= data.filter((item)=>{
    if(filter==='Active'){
        return item.isActive
    }if(filter==='Non-Active'){
        return !item.isActive
    }
    return true
})



    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="enter the title"
            onChange={handleTitle}
            value={primaryField}
          />
          <input
            type="text"
            placeholder="enter a description"
            onChange={handleDescription}
            value={secondaryField}
          />
          <input type="checkbox" onChange={handleCheck} />
          <button className="btn" onClick={addToList}>
            Add
          </button>
        </div>
        <div className="filter">
          <select id="filter-sec"  onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Non-Active">Non-Active</option>
          </select>
        </div>
        <div>
            {filterData.map((item,index)=>{
              return (<div key ={index}>
                 <h2>Title:{item.title}</h2>
                 <p>Description : {item.description}</p>
                 <p>Status:{isActive?'Active':'Non-Active'}</p>
               </div>)
            })}
        </div>
      </div>
    )
}

export default List ;