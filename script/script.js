let interviewsList=[];
let rejectedList=[];
let currentStatus = 'all'

let total = document.getElementById('total');
let interviews = document.getElementById('interview-count');
let rejected = document.getElementById('rejected-count');
let jobsCount = document.getElementById('job')

// get all buttons
const allJobsFilterBtn = document.getElementById('all-jobs-filter-btn');
const interviewsFilterBtn = document.getElementById('interviews-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')


const allJobsSection = document.getElementById('all-jobs-section');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filter-section');
const interviewSection = document.getElementById('interview-section');
const rejectedSection = document.getElementById('rejected-section');
const filterContainer = document.getElementById('container');
// console.log(mainSection);


count();



function toggolBtn(id){

    allJobsFilterBtn.classList.remove('bg-blue-600', 'text-white');
    interviewsFilterBtn.classList.remove('bg-blue-600', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-600', 'text-white')

    allJobsFilterBtn.classList.add('bg-white', 'text-gray-600');
    interviewsFilterBtn.classList.add('bg-white', 'text-gray-600');
    rejectedFilterBtn.classList.add('bg-white', 'text-gray-600');
    
    const selected= document.getElementById(id);
    currentStatus= id;

    selected.classList.remove('bg-white', 'text-gray-600');
    selected.classList.add('bg-blue-600', 'text-white')

    
    allJobsSection.classList.add('hidden');
    interviewSection.classList.add('hidden');
    rejectedSection.classList.add('hidden');

    if(id === 'all-jobs-filter-btn'){
        allJobsSection.classList.remove('hidden');
    }
    else if(id === 'interviews-filter-btn'){
        interviewSection.classList.remove('hidden');
    }
    else if(id === 'rejected-filter-btn'){
        rejectedSection.classList.remove('hidden');
    }
    renderInterviews();
    renderRejected();
    count(); 
}

mainContainer.addEventListener('click', function(event){
    console.log(event.target.classList.contains('interview-btn'));

    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const positionName = parentNode.querySelector('.position-name').innerText;
        const info = parentNode.querySelector('.job-info').innerText
        const status = parentNode.querySelector('.status').innerText
        const description = parentNode.querySelector('.description').innerText

        parentNode.querySelector('.status').innerText = 'INTERVIEW';

        const jobsInfo ={
            companyName,
            positionName,
            info,
            status :'INTERVIEW',
            description,
        }
        // console.log(jobsInfo);
        const interviewsListItem = interviewsList.find(item=> item.companyName == jobsInfo.companyName)


        if(!interviewsListItem){
            interviewsList.push(jobsInfo);
        }
        // console.log(interviewsList);

        rejectedList = rejectedList.filter(item=> item.companyName != jobsInfo.companyName);


        count();
        renderInterviews();
        renderRejected();
    }
    else if(event.target.classList.contains('rejected-btn'))
        {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const positionName = parentNode.querySelector('.position-name').innerText;
        const info = parentNode.querySelector('.job-info').innerText
        const status = parentNode.querySelector('.status').innerText
        const description = parentNode.querySelector('.description').innerText

        parentNode.querySelector('.status').innerText = 'REJECTED';

        const jobsInfo ={
            companyName,
            positionName,
            info,
            status :'REJECTED',
            description,
        }
        
        const rejectedListItem = rejectedList.find(item=> item.companyName == jobsInfo.companyName)

        if(!rejectedListItem){
            rejectedList.push(jobsInfo);
        }
        // console.log(rejectedList);

        interviewsList = interviewsList.filter(item=> item.companyName != jobsInfo.companyName);
        

        count();
        renderInterviews();
        renderRejected();
    }
    else if(event.target.closest('.delete-btn')){
        
        const deleteBtn = event.target.closest('.delete-btn');
        const parentNode = deleteBtn.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company-name').innerText;

        parentNode.remove();

        interviewsList = interviewsList.filter(
            item => item.companyName !== companyName
        );
        renderInterviews();

        rejectedList = rejectedList.filter(
            item => item.companyName !== companyName
        );
        renderRejected();

        count();
    }
   
})





