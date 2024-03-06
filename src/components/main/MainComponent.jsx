import React from "react"

export default function MainComponent() {
    return (
      <div class="max-w-screen-xl mx-auto">
      <div class="grid ">
          <div
              class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <img src="https://img.freepik.com/free-photo/view-3d-coffee-cup-with-roasted-beans_23-2151083732.jpg" class="w-full  h-[250px] object-cover"/>
              <div class="p-4 pt-2">
                  <div class="mb-8">
                      <p class="text-sm text-gray-600 flex items-center">
                          <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20">
                              <path
                                  d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">
                              </path>
                          </svg>
                          Members only
                      </p>
                      <a href="#" class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">Can
                          coffee make you a better developer?</a>
                      <p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                  </div>
                  <div class="flex items-center">
                      <a
                          href="#"><img class="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/></a>
                      <div class="text-sm">
                          <a href="#" class="text-gray-900 font-semibold leading-none hover:text-indigo-600">Jonathan
                              Reinink</a>
                          <p class="text-gray-600">Aug 18</p>
                      </div>
                  </div>
              </div>
          </div>
  

      </div>
  </div>
    )
}