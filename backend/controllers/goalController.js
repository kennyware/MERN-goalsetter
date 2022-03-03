const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// @desc Get Goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({user: req.user.id})

    res.json(goals)
})

// @desc Set Goal
// @route POST /api/goals
// @access Private

const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text field.')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.json(goal)
})

// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found.')
    }

    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString() !== user.id) {
        res.status('401')
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.json(updatedGoal)
})

// @desc Delete Goal
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found.')
    }

    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString() !== user.id) {
        res.status('401')
        throw new Error('User not authorized')
    }

    await goal.remove()

    res.json({ id: goal._id, message: `Goal Deleted` })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}