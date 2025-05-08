import React, {use} from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/public/categories.json").then(res=>res.json());
const Catagories = () => {
    const categories = use(categoryPromise);
    return (
      <div>
        <h2 className="text-primary text-lg font-semibold">All Caterogy</h2>
        <ul className="space-y-2 mt-5">
          {categories.map((categorie) => (
            <li key={categorie.id}>
              <NavLink to={`/category/${categorie.id}`}>
                {({ isActive }) => (
                  <button
                    className={`w-full cursor-pointer text-left px-8 py-2 font-medium rounded-md text-lg hover:bg-base-300 ${
                      isActive ? "bg-base-300 text-base-content" : ""
                    }`}
                  >
                    {categorie.name}
                  </button>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Catagories;