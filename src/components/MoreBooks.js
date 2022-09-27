import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {BsCaretDownFill} from 'react-icons/bs'
function MoreBooks() {
    // infinite looping INTERSECTION OBSERVER
  const { books, loading, error ,setBookLimit} = useContext(AppContext);
  return (
    <div className="relative p-5">
      <Link to="/">
        <p className="absolute cursor-pointer hover:text-blue-500">Back page</p>
      </Link>
      <div className="flex gap-2 flex-wrap w-full mt-8 ">
        {loading && (
          <div className="flex  h-screen w-full justify-center items-start font-bold"> Loading...</div>
        )}
        {error && <div>Error</div>}

        {books?.map((book) => {
          const { id, title, image_url } = book;
          return (
            <div key={id}>
              <Link to={`/fullbookdetails/${id}`}><div className="w-40">
                <img src={image_url} alt={title} className="w-full" />
              </div></Link>
            </div>
          );
        })}
        
      </div>
      {loading && <div>Loading...</div>}
     {  (!loading) && books &&
       < div className="bg-blue-700 hover:bg-blue-900 text-center font-semibold flex justify-center items-center gap-1 cursor-pointer" onClick={()=>setBookLimit(currLimit=>currLimit + 20)}>
       Show More
       <BsCaretDownFill className=""/>
     </div>
     }
        
    </div>
  );
}

export default MoreBooks;
