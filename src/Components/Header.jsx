import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    if (searchValue === "") {
      return;
    }
    getData();
  }, [searchValue]);

  async function getData() {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${searchValue}`
      );

      const data = await res.json();
      console.log(data.products);

      setSearchedProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <header className="flex sm:flex-row flex-col justify-between px-[4vw] sm:px-[8vw]  py-2 sm:py-4 items-center fixed top-0 right-0 left-0 bg-yellow-300">
      <Link
        to="/"
        className="text-2xl font-bold text-violet-600 hover:text-violet-950 hover:text-3xl transition "
      >
        Product Shoppy
      </Link>
      <input
        type="search"
        placeholder="Search product"
        className="border rounded-md text-black border-black hover:to-blue-50 bg-white p-1"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      {/* <button onClick={getData}>Search</button> */}

      <ul className="flex flex-col gap-4 absolute top-14 right-0 bg-neutral-50 p-4 ">
        {searchedProducts.map((p) => {
          return <Link to={`/product/${p.id}`}>{p.title}</Link>;
        })}
      </ul>
    </header>
    </>
  
  );
};

export default Header;