import axios from "axios";

const URL = '/api/goals/'

const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(URL, goalData, config)

    return response.data
}

const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(URL, config)

    return response.data
}

const deleteGoal = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(URL + id, config)

    return response.data
}

const goalService = {
    createGoal,
    getGoals,
    deleteGoal
}

export default goalService;
