import React from "react";
import kids from "../assets/kids.png";
import bussines from "../assets/bussines.png";
import teens from "../assets/teens.png";
import science from "../assets/science1.png";
import health from "../assets/health.png";

const Category = () => {
    let data=[
        {
            id: 1,
            imgSrc: kids,
            ctgTitle: "Kids",
        },
        {
            id: 2,
            imgSrc: teens,
            ctgTitle: "Teen Fiction",
        },
        {
            id: 3,
            imgSrc: science,
            ctgTitle: "Science",
        },
        {
            id: 4,
            imgSrc: health,
            ctgTitle: "Health",
        },
        {
            id: 5,
            imgSrc: bussines,
            ctgTitle: "Bussines",
        },
    ]

return(
    <>
        {data.map((item,index)=>
        {
            return(
                <div className="card" key={index}>
                    <img src={item.imgSrc} alt=""/>
                    <div className="bottom">
                    <h3 className="book-title">{item.ctgTitle}</h3>
                    </div>
                </div>
            )
        })}       
    </>
)
}

export default Category;