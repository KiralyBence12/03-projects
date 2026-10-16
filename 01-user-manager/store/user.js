import { getUsers } from "../apis/userAPI.js";
import { ref } from "vue";
const users = ref([]);

export  function useUserStore() {
    async function fetchUsers() {
        users.value = await getUsers();
    }

    return {
        users,
        fetchUsers
    };
}