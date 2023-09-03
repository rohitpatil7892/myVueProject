<template>
    <div class="test">
        <div class="w3-container w3-green">
            <h2>Add new Tutorial</h2>
        </div>

        <form class="w3-container">
            <p>
                <label>Tutorial name: </label>
                <input class="w3-input" type="text" placeholder="Tutorial name" v-model="name">
            </p>
            <p>
                <label>Tutorial Description</label>
                <input class="w3-input" type="text" placeholder="Tutorial description" v-model="description">
            </p>
            <p>
                <input class="w3-btn w3-blue" type="submit" value="Add tutorial" v-on:click="addTutorial">
            </p>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "addTutorial",
    data() {
        return {
            name: "",
            description: ""
        }
    },
    methods: {
        async addTutorial() {
            const options = {
                url: 'http://localhost:3000/api/tutorials',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data: {
                    title: this.name,
                    description: this.description
                }
            };

            await axios(options)
                .then(response => {
                    console.log(response.status);
                }).catch(error => {
                    console.error(error.message);
                });

            this.name = ""
            this.description = ""
        }
    }
}
</script>