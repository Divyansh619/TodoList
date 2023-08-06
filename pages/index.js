import Image from "next/image";
import React, { useState } from "react";

const index = () => {
  const [addTodo, setAddTodo] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [error, setError] = useState("");

  const addTodobtn = () => {
    if (addTodo === "" || !addTodo) {
      setError("Enter something");
    } else {
      setTodoData([...todoData, addTodo]);
      setAddTodo("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodo = todoData.filter((item, index) => index !== id);
    setTodoData(updatedTodo);
  };
  

  return (
    <section class="py-10 bg-gradient-to-r from-[#f44369] to-[#3e3b92] min-h-screen">
      <div class="relative max-w-2xl px-4 mx-auto sm:px-0">
        <div class="overflow-hidden bg-gray-900 rounded-md shadow-md">
          <div class="px-4 py-6 sm:px-8 sm:py-7">
            <div class="text-center">
              <h2 class="text-3xl font-bold text-white">Todo List</h2>
              <p class="my-10 text-base text-white">
                Create a to-do list by jotting down tasks and deadlines to stay
                organized and focused on accomplishing your goals efficiently.
                Update and prioritize tasks regularly to manage time effectively
                and reduce stress.
              </p>
            </div>

            <div class="space-y-15 bg-gray-900">
              <label for="" class="text-base font-medium text-white">
                {" "}
                Add Your Todo's
              </label>
              <div class="mt-1.5 flex justify-between items-center">
                <input
                  type="text"
                  name="text"
                  id="txt"
                  value={addTodo}
                  onChange={(e) => {
                    setAddTodo(e.target.value);
                    setError("");
                  }}
                  placeholder="Add your todos here"
                  class="flex-1 p-4 text-white placeholder-gray-500 transition-all duration-200 bg-gray-900 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
                <span class="ml-3  text-gray-400">
                  <Image
                    onClick={() => addTodobtn()}
                    className="cursor-pointer"
                    height={50}
                    width={50}
                    src={"/add.png"}
                  />
                </span>
              </div>
            </div>
            {error ? <div className="text-white">{error}</div> : ""}
            {/* #list */}
            <div className="space-y-2">
              {todoData?.map((item, idx) => (
                <div
                  key={idx}
                  className="flex py-3 rounded-lg mt-8 px-4 bg-gradient-to-r from-[#f40752] to-[#f9ab8f] items-center justify-between"
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="todoItem"
                      id={`todoItem_${idx}`}
                      value={item}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`todoItem_${idx}`}
                      className="text-base text-white"
                    >
                      {item}
                    </label>
                  </div>
                  <Image
                  onClick={()=>deleteTodo(idx)}
                    src={"/delete.png"}
                    className="cursor-pointer"
                    height={40}
                    width={40}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
