<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div id="header-top" class="max-w-screen-xl flex flex-wrap items-center justify-between px-4 pt-4 pb-2 mx-auto">
      <a href="/" class="flex items-center">
        <img src="~/assets/img/logo/mal-logo.png" class="h-8 mr-3 dark:brightness-[25]" alt="MAL Logo" />
      </a>
      <div class="flex items-center gap-2">
        <button class="px-4 py-1 rounded-md bg-transparent text-sm text-mal-blue font-semibold border-2 border-mal-blue hover:bg-mal-blue hover:text-white transition-colors">
          Login
        </button>
        <button class="px-4 py-1 rounded-md bg-mal-blue/90 text-sm text-white font-semibold border-2 border-mal-blue/90 hover:border-mal-blue/100 hover:bg-mal-blue/100 transition-colors">
          Sign Up
        </button>
      </div>
    </div>  
    <div id="header-bottom" class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 pt-2 pb-4">
      <div class="flex md:order-2">
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Search</span>
        </button>
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
        </div>
        <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
        </div>
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li class="relative">
            <button @mouseover="showDropdown('anime')" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-mal-blue md:p-0 md:w-auto dark:text-white md:dark:hover:text-mal-blue dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              Anime 
              <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div @mouseleave="showDropdown('leave')" v-show="showAnimeDropdown" class="z-10 absolute top-[30px] left-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-600 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Anime Search
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Top Anime
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Seasonal Anime
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="relative">
            <button @mouseover="showDropdown('manga')" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-mal-blue md:p-0 md:w-auto dark:text-white md:dark:hover:text-mal-blue dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              Manga 
              <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div @mouseleave="showDropdown('leave')" v-show="showMangaDropdown" class="z-10 absolute top-[30px] left-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-600 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="relative">
            <button @mouseover="showDropdown('community')" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-mal-blue md:p-0 md:w-auto dark:text-white md:dark:hover:text-mal-blue dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              Community 
              <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div @mouseleave="showDropdown('leave')" v-show="showCommunityDropdown" class="z-10 absolute top-[30px] left-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-600 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { initFlowbite } from 'flowbite';

export default {
  name: 'Header',
  mounted() {
    initFlowbite();
  },
  data() {
    return {
      showAnimeDropdown: false,
      showMangaDropdown: false,
      showCommunityDropdown: false,
      showIndustryDropdown: false
    }
  },
  methods: {
    showDropdown(element: string) {
      switch(element) {
        case 'anime':
          this.showAnimeDropdown = true;
          this.showMangaDropdown = false;
          this.showCommunityDropdown = false;
          this.showIndustryDropdown = false;
          break;
        case 'manga':
          this.showAnimeDropdown = false;
          this.showMangaDropdown = true;
          this.showCommunityDropdown = false;
          this.showIndustryDropdown = false;
          break;
        case 'community':
          this.showAnimeDropdown = false;
          this.showMangaDropdown = false;
          this.showCommunityDropdown = true;
          this.showIndustryDropdown = false;
          break;
        default: 
          this.showAnimeDropdown = false;
          this.showMangaDropdown = false;
          this.showCommunityDropdown = false;
          this.showIndustryDropdown = false;
      }
    }
  }
}
</script>
