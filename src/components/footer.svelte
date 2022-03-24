<script>
    import Icon from "./icon.svelte";
    export let author
    export let icons
</script>

<footer class="flex flex-row"><span class="mt-4 mx-4 justify-start">Designed and developed with ❤️ by {author} @2022</span>
    <div class = "fixed right-10 ">
{#each icons as icon}
<Icon iconclass="{icon['iconclass']}" href="{icon['href']}" buttonclass="{icon['buttonclass']}"/>
{/each}
</div>
</footer>