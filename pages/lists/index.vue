<template>
    <div class="lists">
        <h1>Lists</h1>

        <ul>
            <li>
                <nuxt-link to="/lists/slides">Slides</nuxt-link> - I used to do talks during my undergrad years at UC Riverside! I'm hoping to muster up the courage to get back into doing them for an industry audience.
            </li>
            <li>
                <nuxt-link to="/lists/reads">Recommended Reads</nuxt-link> - My shelf is small, but deliberate.
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    .lists {
        padding: 0 25%;
        margin-top: 5%;
    }

    li {
        display: list-item;
        margin: 2%;
        margin-left: 0;
        line-height: 1.5;
        font-size: 18px;
        list-style: none;
    }
</style>