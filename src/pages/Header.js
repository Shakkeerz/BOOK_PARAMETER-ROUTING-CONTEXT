import React, { useRef, useState } from "react";

function Header() {
  const inputRef = useRef();
  // inputRef.current.g
  const [searchInput, setSearchInput] = useState({
    isShowPlaceholder: true,
    searchQuery: "",
    inputFocus:()=>{} ,
  });
  console.log(inputRef.current);
  return (
    <div
      className="flex justify-between p-5"
      // onClick={()=>setSearchInput({
      //   isShowPlaceholder: true,
      // })}
    >
      <div className="w-1/3">Logo</div>
      <div
        className="w-2/3 h-10 relative z-20"
        onClick={() =>
          setSearchInput({ 
            isShowPlaceholder: false,
             inputFocus:inputRef.current.focus()
          })
        }
      >
        <input
          ref={inputRef}
          className="w-full pl-4 py-2 h-full "
          
        />

        {searchInput.isShowPlaceholder && (
          <span
            className=" absolute top-0 left-4 right-4 bottom-0 flex justify-between items-center opacity-50   "
            style={{}}
          >
            <p>Search Book or jump to...</p>
            <p>/</p>
          </span>
        )}
      </div>
    </div>
  );
}

export default Header;
