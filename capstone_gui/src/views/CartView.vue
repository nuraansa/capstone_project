<template>
    <div class="container border">
        <h1 class="display-1 cart">Cart</h1>
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="#" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import spinner from "@/components/SpinnerComp.vue"
export default {
    components: {
        spinner
    }, 
    props: []
}
</script>

<style scoped>
.cart {
    color: #92700f;
    text-shadow: 3px 2px 3px rgb(118, 112, 112);
}
</style>