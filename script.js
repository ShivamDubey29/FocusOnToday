// const checkBoxlist = document.querySelectorAll('.custom-checkbox')
// const inputFields = document.querySelectorAll('.goal-input')
// const errorLabel = document.querySelector('.error-label')
// const progressLabel = document.querySelector('.progress-label')
// const cheerLabel = document.querySelector('.quote')
// const progressBar = document.querySelector('.progress-bar')
// const progressValue = document.querySelector('.progress-value')

// const allQuotes = ['Raise the bar by completing your goals!', 
// 'Well Begun is half dine !',
// 'Just a step away, keep going!',
// "Whoa ! You just completed all the goals, time for chill :D"
//  ]

//  const CheerQuotes = ['Move one step ahead, today!',
//  'Keep Going, You’re making great progress!',
//  'You are almost their!',
//  'Cheers You have completed today goal, Time to do it tomorrow again !'
//  ]


// const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {first:{
//     name : '',
//     completed : false,
// },
// second:{
//     name : '',
//     completed : false,
// },
// third:{
//     name : '',
//     completed : false,
// },
// }

// let completedGoalsCount = Object.values(allGoals).filter((goal)=>goal.completed).length
// progressValue.style.width = `${completedGoalsCount / 3 * 100}%`
// progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`
// progressLabel.innerText = allQuotes[completedGoalsCount]
// cheerLabel.innerText = CheerQuotes[completedGoalsCount]


// checkBoxlist.forEach((checkbox)=>{
//     checkbox.addEventListener('click',(e)=>{

//         const allGoalsAdded = [...inputFields].every(function(input){
//             return input.value
//         })
        
//         if (allGoalsAdded){ 
//         checkbox.parentElement.classList.toggle('completed')    
         
//         const inputId = checkbox.nextElementSibling.id
//         allGoals[inputId].completed = !allGoals[inputId].completed
//         completedGoalsCount = Object.values(allGoals).filter((goal)=>goal.completed).length
//         progressValue.style.width = `${completedGoalsCount / 3 * 100}%`
//         progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`
//         progressLabel.innerText = allQuotes[completedGoalsCount]
//         cheerLabel.innerText = CheerQuotes[completedGoalsCount]
//         localStorage.setItem('allGoals',JSON.stringify(allGoals))
        
//         }else{
//             progressBar.classList.add('show-error')

//         }
//     })
// })

// inputFields.forEach((input)=>{
//     input.value = allGoals[input.id].name

//     if (allGoals[input.id].completed){
//         input.parentElement.classList.add('completed')
//     }

//     input.addEventListener('focus',()=>{
//         progressBar.classList.remove('show-error')    
//     })

//     input.addEventListener('input',(e)=>{
//         if (allGoals[input.id].completed){
//             input.value = allGoals[input.id].name
//             return
//         }
//         allGoals[input.id].name = input.value

//         localStorage.setItem('allGoals',JSON.stringify(allGoals))
        
//     })
// })



//The below code will automatically reset the entered value after 24 hiurs 
// ✅ 24 Hour Reset Logic (Added)
const savedTime = localStorage.getItem('goalsTimestamp')

if (savedTime) {
    const currentTime = Date.now()
    const timeDifference = currentTime - savedTime
    const hours24 = 24 * 60 * 60 * 1000

    if (timeDifference > hours24) {
        localStorage.removeItem('allGoals')
        localStorage.removeItem('goalsTimestamp')
    }
}

const checkBoxlist = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressLabel = document.querySelector('.progress-label')
const cheerLabel = document.querySelector('.quote')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')

const allQuotes = [
'Raise the bar by completing your goals!', 
'Well Begun is half dine !',
'Just a step away, keep going!',
"Whoa ! You just completed all the goals, time for chill :D"
]

const CheerQuotes = [
'Move one step ahead, today!',
'Keep Going, You’re making great progress!',
'You are almost their!',
'Cheers You have completed today goal, Time to do it tomorrow again !'
]

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
    first:{ name : '', completed : false },
    second:{ name : '', completed : false },
    third:{ name : '', completed : false },
}

let completedGoalsCount = Object.values(allGoals).filter((goal)=>goal.completed).length

progressValue.style.width = `${completedGoalsCount / 3 * 100}%`
progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`
progressLabel.innerText = allQuotes[completedGoalsCount]
cheerLabel.innerText = CheerQuotes[completedGoalsCount]

checkBoxlist.forEach((checkbox)=>{
    checkbox.addEventListener('click',(e)=>{

        const allGoalsAdded = [...inputFields].every(function(input){
            return input.value
        })
        
        if (allGoalsAdded){ 

        checkbox.parentElement.classList.toggle('completed')    
         
        const inputId = checkbox.nextElementSibling.id
        allGoals[inputId].completed = !allGoals[inputId].completed

        completedGoalsCount = Object.values(allGoals).filter((goal)=>goal.completed).length

        progressValue.style.width = `${completedGoalsCount / 3 * 100}%`
        progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`
        progressLabel.innerText = allQuotes[completedGoalsCount]
        cheerLabel.innerText = CheerQuotes[completedGoalsCount]

        localStorage.setItem('allGoals',JSON.stringify(allGoals))
        localStorage.setItem('goalsTimestamp', Date.now()) // ✅ timestamp added
        
        }else{
            progressBar.classList.add('show-error')
        }
    })
})

inputFields.forEach((input)=>{
    input.value = allGoals[input.id].name

    if (allGoals[input.id].completed){
        input.parentElement.classList.add('completed')
    }

    input.addEventListener('focus',()=>{
        progressBar.classList.remove('show-error')    
    })

    input.addEventListener('input',(e)=>{
        if (allGoals[input.id].completed){
            input.value = allGoals[input.id].name
            return
        }

        allGoals[input.id].name = input.value

        localStorage.setItem('allGoals',JSON.stringify(allGoals))
        localStorage.setItem('goalsTimestamp', Date.now()) // ✅ timestamp added
    })
})