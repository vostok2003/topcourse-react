import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";



function Card(props){
    let course = props.course;
    let likedcourses =props.likedcourses;
    let setlikedcourses=props.setlikedcourses;
    function clickHandler(){
        if(likedcourses.includes(course.id)){
            //pahle se like ho rakha hai
            setlikedcourses((prev)=>prev.filter((cid)=>(cid!== course.id)));
            toast.warning('like removed');
        }
        else{
            //pahle se like nahi ho rakha
            if(likedcourses.length===0){
                setlikedcourses([course.id]);
            }
            else{
                setlikedcourses((prev)=>[...prev,course.id]);
            }
            toast.success('liked successfully');
        }
    }
    return(
        <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80 ">
            <div className="relative">
                <img src={course.image.url}/>
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3
                                grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedcourses.includes(course.id)?
                            (<FcLike fontSize="1.75rem"/>):
                            (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {
                    course.description.length>100?
                    (course.description.substr(0,100))+"....":
                    (course.description)
                    }
                    </p>
            </div>
        </div>)
}

export default Card;