import React, { useState } from "react";
// import './Dashboard.css';

const Dashboard = () => {
  return (
      <div class="min-h-screen bg-gray-100">
        <div class="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
          <div class="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <div class="w-max p-2.5">
                <h1>
                  <a href="#" class="text-2xl font-bold text-gray-900">
                    <span class="text-blue-500">D</span>ash
                    <span class="text-blue-500">B</span>oard
                  </a>
                </h1>
              </div>
              <ul class="mt-6 space-y-2 tracking-wide">
                <li class="min-w-max">
                  <a
                    href="#"
                    aria-label="dashboard"
                    class="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                  >
                    <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                        class="fill-current text-cyan-400 dark:fill-slate-600"
                      ></path>
                      <path
                        d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                        class="fill-current text-cyan-200 group-hover:text-cyan-300"
                      ></path>
                      <path
                        d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                        class="fill-current group-hover:text-sky-300"
                      ></path>
                    </svg>
                    <span class="-mr-1 font-medium">Items</span>
                  </a>
                </li>
                <li class="min-w-max">
                  <a
                    href="#"
                    class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        class="fill-current text-gray-300 group-hover:text-cyan-300"
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                        clip-rule="evenodd"
                      />
                      <path
                        class="fill-current text-gray-600 group-hover:text-cyan-600"
                        d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                      />
                    </svg>
                    <span class="group-hover:text-gray-700">Categories</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
  );
};

export default Dashboard;
