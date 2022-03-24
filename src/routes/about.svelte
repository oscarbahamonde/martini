<svelte:head>
  <title>OB | About</title>
</svelte:head>

<h1>About this site</h1>
<header>This site is to showcase tech related content from a variety of sources, please take note that in this site the thumbnail, author and summary of the content is showcased which means no curation of content and redirection to the content's original source was made.</header>
<h2>About the author</h2>
<section class="flex flex-row bg-white">
  <img src="/ob.png" alt="ob"  class="w-32 bg-white rounded-full m-4"/>
  <div class="w-1/3">
    <h3>{author}</h3>
    <article class="mx-8 bio">I am a {#each gosu as go}{go}{/each}. I am currently working on a company called <a href="https://bluetab.net">
    {company}</a> as an {role}, for more information about my career you can check up my resume in spanglish 👻 <a href="/ob.pdf"><strong class="link">Here</strong></a></article>
  </div>
</section>

<script>
 let gosu = ['Data Engineer','Web Developer','Cloud Developer']
let author = 'Oscar Bahamonde'
let company = 'Bluetab America an IBM Company'
let role = 'Experienced Technician'
</script>