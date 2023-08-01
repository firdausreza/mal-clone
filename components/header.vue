<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div v-show="windowWidth > 768" id="header-top" class="max-w-screen-xl flex flex-wrap items-center justify-between px-4 pt-4 pb-2 mx-auto">
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
    <div id="header-bottom" class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 pt-4 md:pt-2 pb-4">
      <a v-show="windowWidth < 769" href="/" class="flex items-center">
        <img src="~/assets/img/logo/mal-logo.png" class="h-8 mr-3 dark:brightness-[25]" alt="MAL Logo" />
      </a>
      <div class="flex md:order-2">
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="sm" class="w-5 h-5 text-gray-500" />
          <span class="sr-only">Search</span>
        </button>
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="sm" class="w-5 h-5 text-gray-500" />
            <span class="sr-only">Search icon</span>
          </div>
          <input 
            type="text" 
            id="search-navbar"
            v-model="searchKeyword"
            @keyup="debounceSearch"
            class="block w-[300px] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500
            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Search..."
          />
          <div v-if="searchKeyword.length > 0 || searchKeyword !== ''" class="w-full z-10 top-[50px] absolute flex flex-col bg-gray-600 rounded-md">
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
              <li>
                <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                  Recommendations
                </a>
              </li>
            </ul>
            <div class="px-4 py-2 border-t-2 border-gray-400 cursor-pointer">
              <a href="#" class="w-full text-decoration-none text-gray-300">
                View all results for <span class="font-semibold text-underline">{{ searchKeyword }}</span>
              </a>
            </div>
          </div>
        </div>
        <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <font-awesome-icon icon="fa-solid fa-bars" size="sm" class="w-5 h-5" />
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="sm" class="w-5 h-5 text-gray-500" />
          </div>
          <input 
            type="text" 
            id="search-navbar" 
            v-model="searchKeyword"
            @keyup.once="debounceSearch"
            class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Search..."
          />
        </div>
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li @mouseover="showHoverDropdown('anime')" class="relative">
            <button @click="showClickDropdown('anime')" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-mal-blue md:p-0 md:w-auto dark:text-white md:dark:hover:text-mal-blue dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              Anime 
              <font-awesome-icon icon="fa-solid fa-chevron-down" size="xs" class="ml-2" />
            </button>
            <!-- Dropdown menu -->
            <div @mouseleave="showHoverDropdown('leave')" v-show="showAnimeDropdown" class="w-full my-2 md:my-0 md:w-max md:z-10 md:absolute md:top-[30px] md:left-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-600 dark:divide-gray-600">
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
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Recommendations
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li @mouseover="showHoverDropdown('manga')" class="relative">
            <button @click="showClickDropdown('manga')" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-mal-blue md:p-0 md:w-auto dark:text-white md:dark:hover:text-mal-blue dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              Manga 
              <font-awesome-icon icon="fa-solid fa-chevron-down" size="xs" class="ml-2" />
            </button>
            <!-- Dropdown menu -->
            <div @mouseleave="showHoverDropdown('leave')" v-show="showMangaDropdown" class="w-full my-2 md:my-0 md:w-max md:z-10 md:absolute md:top-[30px] md:left-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-600 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Manga Search
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Top Manga
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Manga Store
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Recommendations
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li @mouseover="showHoverDropdown('community')" class="relative">
            <button @click="showClickDropdown('community')" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-mal-blue md:p-0 md:w-auto dark:text-white md:dark:hover:text-mal-blue dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              Community 
              <font-awesome-icon icon="fa-solid fa-chevron-down" size="xs" class="ml-2" />
            </button>
            <!-- Dropdown menu -->
            <div @mouseleave="showHoverDropdown('leave')" v-show="showCommunityDropdown" class="w-full my-2 md:my-0 md:w-max md:z-10 md:absolute md:top-[30px] md:left-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-600 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Interest Stacks
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Clubs
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Users
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li @mouseover="showHoverDropdown('industry')" class="relative">
            <button @click="showClickDropdown('industry')" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-mal-blue md:p-0 md:w-auto dark:text-white md:dark:hover:text-mal-blue dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              Industry 
              <font-awesome-icon icon="fa-solid fa-chevron-down" size="xs" class="ml-2" />
            </button>
            <!-- Dropdown menu -->
            <div @mouseleave="showHoverDropdown('leave')" v-show="showIndustryDropdown" class="w-full my-2 md:my-0 md:w-max md:z-10 md:absolute md:top-[30px] md:left-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-600 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Featured Articles
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    People
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Characters
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Companies
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li @mouseover="showHoverDropdown('watch')" class="relative">
            <button @click="showClickDropdown('watch')" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-mal-blue md:p-0 md:w-auto dark:text-white md:dark:hover:text-mal-blue dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              Watch 
              <font-awesome-icon icon="fa-solid fa-chevron-down" size="xs" class="ml-2" />
            </button>
            <!-- Dropdown menu -->
            <div @mouseleave="showHoverDropdown('leave')" v-show="showWatchDropdown" class="w-full my-2 md:my-0 md:w-max md:z-10 md:absolute md:top-[30px] md:left-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-600 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Episode Videos
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-mal-blue dark:hover:text-white">
                    Anime Trailers
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
import { MAL_API } from '~/functions/api/mal';
import { AnimeDetail } from '../functions/interface/anime-detail.interface';

export default {
  name: 'Header',
  setup() {
    const windowWidth = ref<number>(0);
    const showAnimeDropdown = ref<boolean>(false);
    const showMangaDropdown = ref<boolean>(false);
    const showCommunityDropdown = ref<boolean>(false);
    const showIndustryDropdown = ref<boolean>(false);
    const showWatchDropdown = ref<boolean>(false);
    const showReadDropdown = ref<boolean>(false);
    const searchKeyword = ref<string>('');
    const searchResults = ref<Array<AnimeDetail> | null>([]);
    const showSearchResults = ref<boolean>(false);
    let searchTimeout: any = null;

    onUpdated(() => {
      window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth;
      })
    })

    onMounted(() => {
      initFlowbite();
      windowWidth.value = window.innerWidth;
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', () => {})
    });

    function showClickDropdown(element: string) {
      if (windowWidth.value < 769) {
        switch(element) {
          case 'anime':
            showAnimeDropdown.value = !showAnimeDropdown.value;
            showMangaDropdown.value = false;
            showCommunityDropdown.value = false;
            showIndustryDropdown.value = false;
            showWatchDropdown.value = false;
            showReadDropdown.value = false;
            break;
          case 'manga':
            showAnimeDropdown.value = false;
            showMangaDropdown.value = !showMangaDropdown.value;
            showCommunityDropdown.value = false;
            showIndustryDropdown.value = false;
            showWatchDropdown.value = false;
            showReadDropdown.value = false;
            break;
          case 'community':
            showAnimeDropdown.value = false;
            showMangaDropdown.value = false;
            showCommunityDropdown.value = !showCommunityDropdown.value;
            showIndustryDropdown.value = false;
            showWatchDropdown.value = false;
            showReadDropdown.value = false;
            break;
          case 'industry':
            showAnimeDropdown.value = false;
            showMangaDropdown.value = false;
            showCommunityDropdown.value = false;
            showIndustryDropdown.value = !showIndustryDropdown.value;
            showWatchDropdown.value = false;
            showReadDropdown.value = false;
            break;
          case 'watch':
            showAnimeDropdown.value = false;
            showMangaDropdown.value = false;
            showCommunityDropdown.value = false;
            showIndustryDropdown.value = false;
            showWatchDropdown.value = !showWatchDropdown.value;
            showReadDropdown.value = false;
            break;
          case 'read':
            showAnimeDropdown.value = false;
            showMangaDropdown.value = false;
            showCommunityDropdown.value = false;
            showIndustryDropdown.value = false;
            showWatchDropdown.value = false;
            showReadDropdown.value = !showReadDropdown.value;
            break;
        }
      }
    }

    function showHoverDropdown(element: string) {
      if (windowWidth.value > 768) {
        switch(element) {
          case 'anime':
            showAnimeDropdown.value = true;
            showMangaDropdown.value = false;
            showCommunityDropdown.value = false;
            showIndustryDropdown.value = false;
            showWatchDropdown.value = false;
            showReadDropdown.value = false;
            break;
          case 'manga':
            showAnimeDropdown.value = false;
            showMangaDropdown.value = true;
            showCommunityDropdown.value = false;
            showIndustryDropdown.value = false;
            showWatchDropdown.value = false;
            showReadDropdown.value = false;
            break;
          case 'community':
            showAnimeDropdown.value = false;
            showMangaDropdown.value = false;
            showCommunityDropdown.value = true;
            showIndustryDropdown.value = false;
            showWatchDropdown.value = false;
            showReadDropdown.value = false;
            break;
          case 'industry':
            showAnimeDropdown.value = false;
            showMangaDropdown.value = false;
            showCommunityDropdown.value = false;
            showIndustryDropdown.value = true;
            showWatchDropdown.value = false;
            showReadDropdown.value = false;
            break;
          case 'watch':
            showAnimeDropdown.value = false;
            showMangaDropdown.value = false;
            showCommunityDropdown.value = false;
            showIndustryDropdown.value = false;
            showWatchDropdown.value = true;
            showReadDropdown.value = false;
            break;
          case 'read':
            showAnimeDropdown.value = false;
            showMangaDropdown.value = false;
            showCommunityDropdown.value = false;
            showIndustryDropdown.value = false;
            showWatchDropdown.value = false;
            showReadDropdown.value = true;
            break;
          default: 
            showAnimeDropdown.value = false;
            showMangaDropdown.value = false;
            showCommunityDropdown.value = false;
            showIndustryDropdown.value = false;
            showWatchDropdown.value = false;
            showReadDropdown.value = false;
        }
      }
    }

    function debounceSearch() {
      if (searchKeyword.value !== '') {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(async () => {
          await MAL_API.getAnimeSearchResults(searchKeyword.value).then((res) => {
            console.log(res, "response debounceSearch");
          })
        }, 2500)
      }
    }

    return {
      windowWidth, showAnimeDropdown, showMangaDropdown, showCommunityDropdown, showIndustryDropdown, showWatchDropdown, showReadDropdown,
      showHoverDropdown, showClickDropdown, searchKeyword, debounceSearch
    }
  }
}
</script>
