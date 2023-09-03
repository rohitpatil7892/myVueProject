<template>
    <div class="test">
        <div class="w3-container w3-green">
            <h2>Delete Tutorial {{ title }}</h2>
        </div>
        <form class="w3-container">
            <p>
                <label>Tutorial name: </label>
                <input class="w3-input" type="text" placeholder="Tutorial name" v-model="title" readonly>
            </p>
            <p>
                <label>Tutorial Description</label>
                <input class="w3-input" type="text" placeholder="Tutorial description" v-model="description" readonly>
            </p>
            <p>
                <label for="lang">Published Status is <b>{{ published }}</b></label>
            </p>
            <p>
                <input class="w3-btn w3-blue" type="button" value="Delete tutorial" v-on:click="deleteTutorial">
            </p>
        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "deleteTutorial",
    data() {
        return {
            id: "",
            title: "",
            description: "",
            published: true
        }
    },
    methods: {
        async deleteTutorial() {
            const options = {
                url: 'http://localhost:3000/api/tutorials/' + this.$route.params.id,
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            };

            await axios(options)
                .then(response => {
                    console.log(response.status);
                    this.$router.push({ name: "Home" })
                }).catch(error => {
                    console.error(error.message);
                    alert('Failed to update tutorial ' + error.message);
                    this.$router.push({ name: "Home" })
                });

        }
    },
    async mounted() {
        this.id = this.$route.params.id
        let result = await axios.get("http://localhost:3000/api/tutorials/" + this.$route.params.id)
        console.log(result);
        if (result.data) {
            this.title = result.data.title
            this.description = result.data.description
            this.published = result.data.published
        } else {
            alert('Data is not available');
            this.$router.push({ name: "Home" })
        }
    }
}
</script>