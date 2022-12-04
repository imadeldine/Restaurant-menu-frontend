import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dialog, DialogContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Items = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openda, setOpenda] = useState(false);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchitems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/items");
      const data = await response.json();
      setItems(data.data);
    } catch (err) {}
  };

  const fetchcategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/categories");
      const data1 = await response.json();
      setCategories(data1.data);
    } catch (err) {}
  };

  async function deleteItem(id) {
    if (window.confirm(`Do you want to delete this item?`)) {
      let response = await axios.delete(
        `http://localhost:5000/api/items/${id}`
      );
      try {
        alert(response.data.message);
        fetchitems();
      } catch (error) {}
    }
  }

  async function updateItem(e) {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("name", item.name);
    formdata.append("price", item.price);
    formdata.append("description", item.description);
    formdata.append("image", item.image);
    formdata.append("category", item.category);
    let response = await axios.put(
      `http://localhost:5000/api/items/${item._id}`,
      item
    );
    try {
      alert(response.data.message);
      fetchitems();
    } catch (error) {}
  }
  async function addItem(e) {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("name", item.name);
    formdata.append("price", item.price);
    formdata.append("description", item.description);
    formdata.append("image", item.image);
    formdata.append("category", item.category);
    let response = await axios.post(
      `http://localhost:5000/api/items`,
      formdata
    );
    try {
      if (
        response.data.message ===
        "undefined"
      ) 
        
        alert(response.data.message);
        fetchitems();
        
    } catch (error) {}
  }

  const openDialog = (item) => {
    setItem(item);
    setOpen(true);
  };
  const openAddDialog = () => {
    setOpenda(true);
    setItem({});
  };

  useEffect(() => {
    fetchitems();
    fetchcategories();
  }, []);
  return (
    <div class=" flex justify-center ">
      <div class="flex flex-col ">
        <div class="w-full">
          <div class="border-b border-gray-200 shadow w-[1200px]">
            <div class="flex justify-between items-center py-6 px-6 sm:px-10 lg:px-16">
              <div class="mt-4 flex sm:mt-0 sm:ml-4">
                <span class="hidden sm:block shadow-sm rounded-md">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    onClick={() => navigate("/categories")}
                  >
                    Go to categories
                  </button>
                </span>
              </div>
              <div class="mt-4 flex sm:mt-0 sm:ml-4">
                <span class="hidden sm:block shadow-sm rounded-md">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    onClick={() => navigate("/")}
                  >
                    Go to Menu
                  </button>
                </span>
              </div>
              <div class="flex-1 min-w-0">
                <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  Items
                </h1>
              </div>
              <div class="mt-4 flex sm:mt-0 sm:ml-4">
                <span class="hidden sm:block shadow-sm rounded-md">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    onClick={openAddDialog}
                  >
                    Add Item
                  </button>
                </span>
              </div>
            </div>
            <table class="divide-y divide-gray-300 w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-2 text-xs text-gray-500">Name</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Description</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Price</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Image</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Edit</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Delete</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                {items.map((item) => (
                  <tr>
                    <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      {item.description}
                    </td>
                    <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      {item.price}
                    </td>
                    <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      <img
                        class="rounded-t-lg"
                        src={`http://localhost:5000/${
                          item.image.split("/")[1]
                        }`}
                        alt=""
                      />
                    </td>
                    <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      <button
                        type="button"
                        class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        onClick={() => openDialog(item)}
                      >
                        Edit
                      </button>
                    </td>
                    <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      <button
                        type="button"
                        class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
                        onClick={() => deleteItem(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                <Dialog open={open} onClose={() => setOpen(false)}>
                  <DialogContent>
                    <form>
                      <label>
                        Name:{" "}
                        <input
                          type="text"
                          defaultValue={item.name}
                          onChange={(e) =>
                            setItem({ ...item, name: e.target.value })
                          }
                        />
                      </label>
                      <br />
                      <label>
                        Description:{" "}
                        <input
                          type="text"
                          defaultValue={item.description}
                          onChange={(e) =>
                            setItem({ ...item, description: e.target.value })
                          }
                        />
                      </label>
                      <br />
                      <label>
                        Price:{" "}
                        <input
                          type="text"
                          defaultValue={item.price}
                          onChange={(e) =>
                            setItem({ ...item, price: e.target.value })
                          }
                        />
                      </label>
                      <br />
                      <label>
                        Image:{" "}
                        <input
                          type="file"
                          onChange={(e) =>
                            setItem({ ...item, image: e.target.files[0] })
                          }
                        />
                      </label>
                      <br />
                      <label>
                        Categories:{" "}
                        <select
                          onChange={(e) =>
                            setItem({ ...item, category: e.target.value })
                          }
                        >
                          {categories.map((category) => (
                            <option value={category._id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </label>
                      <br />
                      <button
                        type="submit"
                        onClick={updateItem}
                        style={{
                          marginTop: 10,
                          borderRadius: 5,
                          backgroundColor: "#f3b500",
                          padding: "8px 30px",
                          fontSize: "18px",
                        }}
                      >
                        Update
                      </button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Dialog open={openda} onClose={() => setOpenda(false)}>
                  <DialogContent>
                    <form>
                      <label>
                        Name:{" "}
                        <input
                          type="text"
                          defaultValue={item.name}
                          onChange={(e) =>
                            setItem({ ...item, name: e.target.value })
                          }
                        />
                      </label>
                      <br />
                      <label>
                        Description:{" "}
                        <input
                          type="text"
                          defaultValue={item.description}
                          onChange={(e) =>
                            setItem({ ...item, description: e.target.value })
                          }
                        />
                      </label>
                      <br />
                      <label>
                        Price:{" "}
                        <input
                          type="text"
                          defaultValue={item.price}
                          onChange={(e) =>
                            setItem({ ...item, price: e.target.value })
                          }
                        />
                      </label>
                      <br />
                      <label>
                        Image:{" "}
                        <input
                          type="file"
                          onChange={(e) =>
                            setItem({ ...item, image: e.target.files[0] })
                          }
                        />
                      </label>
                      <br />
                      <label>
                        Categories:{" "}
                        <select
                          onChange={(e) =>
                            setItem({ ...item, category: e.target.value })
                          }
                        >
                          {categories.map((category) => (
                            <option value={category._id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </label>
                      <br />

                      <button
                        type="submit"
                        onClick={addItem}
                        style={{
                          marginTop: 10,
                          borderRadius: 5,
                          backgroundColor: "#6366f1",
                          padding: "8px 30px",
                          fontSize: "18px",
                          color: "white",
                        }}
                      >
                        Add
                      </button>
                    </form>
                  </DialogContent>
                </Dialog>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
