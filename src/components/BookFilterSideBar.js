import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const BookFilterSideBar = () => {
  const { books } = useContext(AppContext);
  const sortyBy = ["title", "authors", "genres", "rating", "format"];
  books.map((b) => console.log(b.authors));
  useEffect(() => {}, []);
  return (
    <>
      <div className="absolute w-1/4 h-screen  bg-slate-300">

    {/* SORT BY TITLES */}
        <ul className="list-none shadow-lg flex gap-2 flex-wrap p-4  relative overflow-hidden">
         
          {books.slice(0, 5).map((book) => {
            const { id, title } = book;
            return (
              <div className="">
                <Link to={`/fullbookdetails/${id}`}>
                  {" "}
                  <li
                    key={id}
                    className="text-xs rounded-lg bg-slate-900 w-fit cursor-pointer px-2 hover:bg-slate-700 border-2 "
                  >
                    {title}
                  </li>
                </Link>
              </div>
            );
          })}

        </ul>
          {/* SORT BY AUTHORS */}
        <ul className="list-none shadow-lg flex gap-2 flex-wrap p-4  relative overflow-hidden">
         
          {books.slice(0, 5).map((book) => {
            const { id, authors } = book;
            return (
              <div className="">
                <Link to={`/fullbookdetails/${id}`}>
                  {" "}
                  <li
                    key={id}
                    className="text-xs rounded-lg bg-slate-900 w-fit cursor-pointer px-2 hover:bg-slate-700 border-2 "
                  >
                    {authors}
                  </li>
                </Link>
              </div>
            );
          })}

        </ul>
          {/* SORT BY RATING */}
        <ul className="list-none shadow-lg flex gap-2 flex-wrap p-4  relative overflow-hidden">
         
         {books.slice(0, 5).map((book) => {
           const { id, rating } = book;
           return (
             <div className="">
               <Link to={`/fullbookdetails/${id}`}>
                 {" "}
                 <li
                   key={id}
                   className="text-xs rounded-lg bg-slate-900 w-fit cursor-pointer px-2 hover:bg-slate-700 border-2 "
                 >
                   {rating}
                 </li>
               </Link>
             </div>
           );
         })}

       </ul>

        {/* SORT BY FORMAT */}
        <ul className="list-none shadow-lg flex gap-2 flex-wrap p-4  relative overflow-hidden">
         
          {books.slice(0, 5).map((book) => {
            const { id, format } = book;
            return (
              <div className="">
                <Link to={`/fullbookdetails/${id}`}>
                  {" "}
                  <li
                    key={id}
                    className="text-xs rounded-lg bg-slate-900 w-fit cursor-pointer px-2 hover:bg-slate-700 border-2 "
                  >
                    {format}
                  </li>
                </Link>
              </div>
            );
          })}

        </ul>

        

      </div>
    </>
  );
};
export default BookFilterSideBar;
