
function Filter(props){
    let filterData =props.filterData;
    let category =props.category;
    let setcategory = props.setcategory;

    function filterHandler(title){
        setcategory(title);
    }
    return(
        <div className="w-11/12 flex items-center flex-wrap   max-w-max space-x-4 gap-y-4 max-auto py-4 ">
            {filterData.map((data)=>{
                return <button 
                className={`text-lg px-2 py-1 rounded-md font-medium items-center
                text-white bg-black hover:bg-opacity-50 border-2  transition-all duration-300
                ${category=== data.title ?
                    "bg-opacity-60 border-white":
                    "bg-opacity-40 border-transparent"
                }
                `}
                key={data.id}
                onClick={()=>filterHandler(data.title)}
                >{data.title}</button>
})}
        </div>
    )
}

export default Filter;