<ul>
{#each colors as color}
<li><label for="{color.name}">{color.name}: "{color.hex}"</label>
<input type="color" id="{color.name}" bind:value="{color.hex}" />
</li>{/each}
</ul>
<script>
    let colors = [{name:"primary", hex:"#ffffff"},{name:"secondary",hex:"#00ffff"},{name:"accent",hex:"#000000"}, {name:"info",hex:"#0000ff"},{name:"success",hex:"#00ff00"},{name:"warning",hex:"#ccff00"}]
</script>