import React from "react";

const products = ["Notebook", "Smartphone", "Tablet", "tv", "smarthTv"];

const Search = () => {
  const [search, setSearch] = React.useState("");
  const productsFilter = products.filter((product) =>
    product.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
      <input
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      ></input>
      <h1>Produtct</h1>
      {productsFilter.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </div>
  );
};

export default Search;
