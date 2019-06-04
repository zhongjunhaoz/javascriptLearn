<template>
    <div class="look">
        {{message}}
        {{$router.params}}
    </div>
</template>

<script>
export default {
    name:'Look',
    data () {
        return {
            message:'sks'
        }
    }
}
</script>