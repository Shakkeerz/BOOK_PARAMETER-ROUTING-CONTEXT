import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { AppContext } from "../context/AppContext";
// import {AiOutlineMenuAiOutlineMenu}from 'react-icons/ai'
import BookFilterSideBar from '../components/BookFilterSideBar'

function Books() {
  const { name, address, books, loading, setBookLimit, BookLimit ,fetchBook ,error } =
    useContext(AppContext);

  return (
    <div className="relative">

      <BookFilterSideBar />

      {loading && <div className="text-center bold text-3xl">Loading...</div>}
      {error && <div className="font-bold text-red-500 flex justify-center">
          {error}
        </div>}
      <div className="flex gap-2 mt-10  overflow-x-scroll pt-10">
        {/* <AiOutlineMenuAiOutlineMenu/> */}
        <Link
        // to={`/morebooks/${50}`}
          to="/morebooks"
          className="absolute text-xs cursor-pointer hover:text-blue-500  z-10 right-4 top-0"
          onClick={()=>setBookLimit(51)}
        >
          <div>ShowMore</div>
        </Link>

        {books?.map((book) => {
          return (
            <div className="flex" key={book.id}>
              <BookCard book={book}  />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;
