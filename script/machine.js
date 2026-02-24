// function for jobs count 
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

// interviews render Function 
function renderInterviews(){
    interviewSection.innerHTML = '';
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
                        <p class="job-info text-gray-400 mt-4">${interview.info}</p>
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
        interviewSection.appendChild(div);
    }
    count();

}

// rejected render function 
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
                        <p class="job-info text-gray-400 mt-4">${rejected.info}</p>
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
        rejectedSection.appendChild(div);

    }
}