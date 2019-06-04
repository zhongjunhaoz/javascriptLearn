<template>
    <div class="look">
        {{message}}
        {{$route.params.id}}
        <router-view />
    </div>
</template>

<script>
export default {
    name:'Look',
    data () {
        return {
            message:'来看我啊'
        }
    }
}
</script>