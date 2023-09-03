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
    <paginate :page-count="pagesSize" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'Prev'"
        :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'">
    </paginate>
</template>
<script>
/* eslint-disable */
import addTutorial from "./addTutorial.vue";

import Paginate from "vuejs-paginate-next";

import service from "../service/serviceRoutes.js";



export default {
    name: "allTutorials",
    components: {
        paginate: Paginate,
        addTutorial
    },
    data() {
        return {
            tutorials: [],
            pageNum: 0,
            size: 4,
            page: 10,
            filterTitle: "",
            pagesSize : 0
        }
    },

    methods: {
        async clickCallback(pageNum1) {
            this.pageNum = pageNum1 - 1;
            let allTutorials = await service.getAllTutorials(this.pageNum, this.size)
            this.tutorials = allTutorials.tutorials
        }
    },
    async mounted() {
        let allTutorials = await service.getAllTutorials(0, 4)
        this.tutorials = allTutorials.tutorials
        this.pagesSize = allTutorials.totalPages
    }
}
</script>
<style>
/* Adopt bootstrap pagination stylesheet. */
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

/* Write your own CSS for pagination */
.pagination {}

.page-item {}
</style>