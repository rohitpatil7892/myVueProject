<template>
    <addTutorial></addTutorial>

    <table id="tutorials">
        <thead>
            <tr>
                <th>Id</th>
                <th>Tutorial Title</th>
                <th>Description</th>
                <th>Published Status</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in tutorials" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.published }}</td>
                <td>{{ item.createdAt }}</td>
                <td>{{ item.updatedAt }}</td>
                <td> <router-link :to="'./update-tutorial/' + item.id">Update Tutorial</router-link></td>
                <td> <router-link :to="'./delete-tutorial/' + item.id">Delete Tutorial</router-link></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import addTutorial from "./addTutorial.vue";



export default {
    name: "allTutorials",
    components: {
        addTutorial
    },
    data() {
        return {
            tutorials: []
        }
    },
    async mounted() {
        let allTutorials = await axios.get('http://localhost:3000/api/tutorials');
        console.log(allTutorials);
        if (allTutorials.status = 200) {
            this.tutorials = allTutorials.data.
        }
    }
}
</script>
<style></style>