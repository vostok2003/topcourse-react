import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl,filterData } from "./data";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const [courses,setcourse] = useState([]);
  const [loading,setLoading] = useState(true);
  const [category,setcategory] = useState(filterData[0].title);

  const fetchData =async()=>{
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      setcourse(output.data);
    }
    catch(error){
      toast.error("something went wrong");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 ">
    <div><Navbar/></div>
    <div  > 
      <Filter filterData={filterData}
              category={category}
              setcategory={setcategory} />
    </div>
    <div className={`w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]`}>
      {loading ?(<Spinner/>) :(<Cards courses={courses} category={category}/>)}
    </div>
    
    <ToastContainer/>
  </div>
  )
  
};

export default App;
