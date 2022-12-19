import React from "react";

const products = [
  { name: "notebook", price: "3500", title: "blablabla" },
  { name: "Tv", price: "6500", title: "blablabla" },
  { name: "SmarthTv", price: "7500", title: "blablabla" },
];

const Search = () => {
  const [search, setSearch] = React.useState("");
  const productsFilter = products.filter(({ name }) =>
    name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
      <input
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      ></input>
      <h1>Produtct</h1>
      {productsFilter.map(({ name, price }) => (
        <>
          <li key={name}>{name}</li>
          <p>{price}</p>
        </>
      ))}
    </div>
  );
};

export default Search;
