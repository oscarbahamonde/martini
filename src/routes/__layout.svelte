
<script>
// @ts-nocheck
    import Footer from '../components/footer.svelte'
    import Login from './login.svelte'
    import '../app.scss';
    import { page } from '$app/stores';
    import { writable} from 'svelte/store'

    let nav = [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Blog', path: '/blog'},    
        {title: 'Contact', path: '/contact'},    
        {title: 'Login', path: '/login'},
    ]

    let icons = [
        {
            iconclass:"mdi mdi-linkedin text-2xl active rounded-full p-2 m-2 btn btn-circle",
            buttonclass:"btn btn-square",
            href:"https://github.com"
        },
        {
            iconclass:"mdi mdi-github text-2xl active rounded-full p-2 m-2 btn btn-circle",
            buttonclass:"btn btn-square",
            href:"https://github.com"
        },
        {
            iconclass:"mdi mdi-codepen text-2xl active rounded-full p-2 m-2 btn btn-circle",
            buttonclass:"btn btn-square",
            href:"https://github.com"
        },
        {
            iconclass:"mdi mdi-youtube text-2xl active rounded-full p-2 m-2 btn btn-circle",
            buttonclass:"btn btn-square",
            href:"https://github.com"
        },
        {
            iconclass:"mdi mdi-whatsapp text-2xl active rounded-full p-2 m-2 btn btn-circle",
            buttonclass:"btn btn-square",
            href:"https://github.com"
        }
    ]
let author = "Oscar Bahamonde"

let isAuthed = writable(Boolean(page.user))





</script>
<div class="grid">
<nav class="nav navbar bg-gradient-to-b from-cyan-300 via-teal-500 to-gray-600 flex flex-row justify-around text-neutral overflow-hidden" >
    <figure>
        <img src="/favicon.png" alt="brand-logo" class="logo">
    </figure>
    {#each nav as item}
     <a class:active="{$page.url.pathname == item.path}" class="translate-y-3" href="{item.path}" ><span class="p-2 m-4 ">{item.title}</span></a>
     {/each}
     
 </nav>
 
 {#if $page.url.pathname == '/'}
 <slot />
 <Footer icons={icons} author={author} class='align-end'/>
 {/if}
 {#if $page.url.pathname == '/about'}
 <slot />
 <Footer icons={icons} author={author} class='align-end'/>
    {/if}
    {#if $page.url.pathname == '/blog'}
    <slot />
    {/if}
    {#if $page.url.pathname == '/contact'}
    <slot />
    {/if}
    {#if $page.url.pathname == '/profile'}
    <Login />
    {/if}
    {#if $page.url.pathname == '/admin'}
    <Login />
    {/if}
    {#if $page.url.pathname == '/login'}
    <Login />
    {/if}
</div> 


