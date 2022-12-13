<template>
  <nav id="header">
    <div class="topbar">
      <div class="grid">
        <div class="grid-col-sm-1 ">
          <picture class="logo">
            <img class="searchbarimage" src="@/assets/img/googlelogo.png" :alt="$t('nav.alt_image_logo')" />
          </picture>
        </div>
        <div class="grid-col-lg-9">
          <div class="searchbar" type="text">
            <input class="searchbartext" type="text" value="" />
            <button class="searchbarmic">
              <svg
                class="goxjub"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285f4"
                  d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                ></path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path
                  fill="#fbbc05"
                  d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                ></path>
                <path
                  fill="#ea4335"
                  d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                ></path>
              </svg>
            </button>
            <button class="searchbarbutton">
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="grid-col-lg-2 ">
          <div class="content-options">
            <picture class="boxesicon">
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"
                ></path>
                <circle cx="12" cy="12" r="3.5"></circle>
              </svg>
            </picture>
            <picture class="boxesicon">
              <svg class="gb_Ve" focusable="false" viewBox="0 0 24 24">
                <path
                  d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                ></path>
              </svg>
            </picture>

            <button class="custom-btn custom-btn-primary">{{ $t("nav.button_text") }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="optionsbar">
      <ul class="optionsmenu1">
        <li class="optionsmenuactive tab-item">
          <span class="icon"
            ><svg focusable="false" viewBox="0 0 24 24">
              <path
                fill="#34a853"
                d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
              ></path>
              <path
                fill="#ea4335"
                d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
              ></path>
              <path
                fill="#fbbc04"
                d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
              ></path>
              <path
                fill="#4285f4"
                d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
              ></path></svg
          ></span>
          Todos
        </li>
        <li class="tab-item">
          <span class="icon"
            ><svg focusable="false" viewBox="0 0 24 24">
              <path
                fill="#5f6368"
                d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"
              ></path></svg
          ></span>
          Imagenes
        </li>
        <li class="tab-item">
          <span class="icon">
            <svg focusable="false" viewBox="0 0 24 24">
              <path
                fill="#5f6368"
                d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"
              ></path>
            </svg>
          </span>
          Noticias
        </li>
        <li class="tab-item">
          <span class="icon"
            ><svg focusable="false" viewBox="0 0 24 24">
              <path
                fill="#5f6368"
                d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"
              ></path></svg></span
          >Videos
        </li>
        <li class="tab-item">
          <span class="icon"
            ><svg focusable="false" viewBox="0 0 24 24">
              <path
                fill="#5f6368"
                d="M18 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16"
              ></path></svg></span
          >Libros
        </li>
        <li class="tab-item">
               <span class="icon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#5f6368" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></span> 
            Mas</li>
      </ul>

      <ul class="optionsmenu2">
        <li>
            <button class="custom-btn ">Herramientas</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNav"
};
</script>
