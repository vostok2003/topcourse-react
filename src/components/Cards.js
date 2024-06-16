import { useState } from "react";
import Card from "./Card";
function Cards(props){
    let courses =props.courses;
    let category =props.category;
    const [likedcourses,setlikedcourses]=useState([]);

    let allcourses=[];
    function getcourses(){
        if(category==="All"){
            Object.values(courses).forEach((coursecategory)=>{
                coursecategory.forEach((course)=>{
                    allcourses.push(course);
                })
            })
            return allcourses;
        }
        else{
            return courses[category];
        }
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getcourses().map((course)=>{
                return <Card key={course.id} course={course}
                            likedcourses={likedcourses}
                            setlikedcourses={setlikedcourses}    />
            })}
        </div>)
}
export default Cards;