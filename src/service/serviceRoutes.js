import axios from "axios";

const getAllTutorials = async (pageNum, size, title) => {
    try {
        let url = `http://localhost:3000/api/tutorials?page=${pageNum ? pageNum : 0}&size=${size ? size : 4}`
        if (title) {
            console.log(`title=${title}`);
            url = url + `&title=${title}`
        }
        let allTutorials = await axios.get(url);
        return allTutorials.data

    } catch (error) {
        console.log(error);
    }
}

export default {
    getAllTutorials
}