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




function count(){
    const totalJobs = allJobsSection.children.length;
    
    total.innerText = totalJobs;
    interviews.innerText = interviewsList.length;
    rejected.innerText = rejectedList.length;

    jobsCount.innerText = totalJobs +' '+'Jobs';

    if(currentStatus == 'all-jobs-filter-btn'){
        jobsCount.innerText = totalJobs +' '+'Jobs';
    }
    else if(currentStatus == 'interviews-filter-btn'){
        jobsCount.innerText = interviewsList.length +' '+ 'of'+' '+totalJobs+' '+ 'Jobs';
    }
    else if(currentStatus == 'rejected-filter-btn'){
        jobsCount.innerText = rejectedList.length +' '+ 'of'+' '+totalJobs+' '+ 'Jobs';
    }
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
        const salary = parentNode.querySelector('.salary').innerText
        const status = parentNode.querySelector('.status').innerText
        const description = parentNode.querySelector('.description').innerText

        parentNode.querySelector('.status').innerText = 'INTERVIEW';

        const jobsInfo ={
            companyName,
            positionName,
            salary,
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

        // renderInterviews();
        // if(currentStatus == 'rejected-filter-btn'){
        //     renderRejected();
        //     renderInterviews();
        // }

        count();
        // renderInterviews();
        renderInterviews();
        renderRejected();
    }
    else if(event.target.classList.contains('rejected-btn'))
        {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const positionName = parentNode.querySelector('.position-name').innerText;
        const salary = parentNode.querySelector('.salary').innerText
        const status = parentNode.querySelector('.status').innerText
        const description = parentNode.querySelector('.description').innerText


        parentNode.querySelector('.status').innerText = 'REJECTED';
        const jobsInfo ={
            companyName,
            positionName,
            salary,
            status :'REJECTED',
            description,
        }
        // console.log(jobsInfo);
        const rejectedListItem = rejectedList.find(item=> item.companyName == jobsInfo.companyName)

        if(!rejectedListItem){
            rejectedList.push(jobsInfo);
        }
        interviewsList = interviewsList.filter(item=> item.companyName != jobsInfo.companyName);

        // if(currentStatus == 'interviews-filter-btn'){
        //     renderInterviews();
        //     renderRejected()
        // }
        // console.log(interviewsList);
        count();
        // renderRejected()
        
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


function renderInterviews(){
    interviewSection.innerHTML = '';
    // console.log(interviewsList, interviewsList.length<1);
    if(interviewsList.length<1){
        // console.log('hello')
        let div = document.createElement('div');
        div.innerHTML = `<div id="container" class="flex justify-center items-center bg-[#f1f2f4] rounded-md h-96">
               <div class="text-center space-y-5">
                  <img src="images/file.png" alt="file.png" class="mx-auto">
                  <h2 class="text-4xl text-[#002c5c] font-semibold">No Jobs Available</h2>
                  <p class="text-gray-400">Check back soon for new job opportunities</p>
               </div>
            </div>`
        interviewSection.appendChild(div);
        // return;
    }

    for (let interview of interviewsList){
        // console.log(interview)
        let div = document.createElement('div');
        div.className = 'flex justify-between bg-[#f1f2f4] rounded-md p-10';
        div.innerHTML = `
                <div class="space-y-6">
                    <div>
                        <p class="company-name text-2xl font-bold text-[#002c5c] ">${interview.companyName}</p>
                        <p class="position-name text-gray-400">${interview.positionName}</p>
                        <p class="salary text-gray-400 mt-4">${interview.salary}</p>
                    </div>
                    
                    <button class="status bg-blue-100 px-4 py-3 rounded-md">${interview.status}</button>

                    <p class="description">${interview.description}</p>

                    <div class=" flex gap-5">
                        <button class="interview-btn border-2 border-green-600 text-green-600 px-4 py-2 rounded-md cursor-pointer">INTERVIEW</button>

                        <button class="rejected-btn border-2 border-red-600 text-red-600 px-4 py-2 rounded-md cursor-pointer">REJECTED</button>
                    </div>
                </div>    
                <div>
                    <button class="delete-btn text-gray-500 mt-5 cursor-pointer"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `
        // filterContainer.classList.add('hidden');
        interviewSection.appendChild(div);
    }
    count();

}
function renderRejected(){
    rejectedSection.innerHTML = '';
    if(rejectedList.length<1){
        let div = document.createElement('div');
        div.innerHTML = `<div id="container" class="flex justify-center items-center bg-[#f1f2f4] rounded-md h-96">
               <div class="text-center space-y-5">
                  <img src="images/file.png" alt="file.png" class="mx-auto">
                  <h2 class="text-4xl text-[#002c5c] font-semibold">No Jobs Available</h2>
                  <p class= "text-gray-400">Check back soon for new job opportunities</p>
               </div>
            </div>`
        rejectedSection.appendChild(div);
        return;
    }
    for (let rejected of rejectedList){
        // console.log(interview)
        let div = document.createElement('div');
        div.className = 'flex justify-between bg-[#f1f2f4] rounded-md p-10 space-y-5';
        div.innerHTML = `
                <div class="space-y-6">
                    <div>
                        <p class="company-name text-2xl font-bold text-[#002c5c] ">${rejected.companyName}</p>
                        <p class="position-name text-gray-400">${rejected.positionName}</p>
                        <p class="salary text-gray-400 mt-4">${rejected.salary}</p>
                    </div>
                    
                    <button class="status bg-blue-100 px-4 py-3 rounded-md">${rejected.status}</button>

                    <p class="description">${rejected.description}</p>

                    <div class=" flex gap-5">
                        <button class="interview-btn border-2 border-green-600 text-green-600 px-4 py-2 rounded-md cursor-pointer">INTERVIEW</button>

                        <button class="rejected-btn border-2 border-red-600 text-red-600 px-4 py-2 rounded-md cursor-pointer">REJECTED</button>
                    </div>
                </div>    
                <div>
                    <button class="delete-btn text-gray-500 mt-5 cursor-pointer"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `
        // filterContainer.classList.add('hidden');
        rejectedSection.appendChild(div);

    }
}


