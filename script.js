let interviewsList=[1,2,3,4];
let rejectedList=[1,3,4];

let total = document.getElementById('total');
let interviews = document.getElementById('interview-count');
let rejected = document.getElementById('rejected-count');
let jobsCount = document.getElementById('job')

// get all buttons
const allJobsFilterBtn = document.getElementById('all-jobs-filter-btn');
const interviewsFilterBtn = document.getElementById('interviews-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allJobsSection = document.getElementById('all-jobs-section');
const mainSection = document.querySelector('main')
// console.log(mainSection);



function count(){
    total.innerText = allJobsSection.children.length;
    jobsCount.innerText = allJobsSection.children.length;
    interviews.innerText = interviewsList.length;
    rejected.innerText = rejectedList.length;
}

count();


function toggolBtn(id){

    allJobsFilterBtn.classList.remove('bg-blue-600', 'text-white');
    interviewsFilterBtn.classList.remove('bg-blue-600', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-600', 'text-white')

    allJobsFilterBtn.classList.add('bg-white', 'text-gray-600');
    interviewsFilterBtn.classList.add('bg-white', 'text-gray-600');
    rejectedFilterBtn.classList.add('bg-white', 'text-gray-600');
    
    const selected= document.getElementById(id);
    // console.log(selected)
    selected.classList.remove('bg-white', 'text-gray-60');
    selected.classList.add('bg-blue-600', 'text-white')

}
toggolBtn();
