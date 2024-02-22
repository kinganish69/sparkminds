function expandForm() {
    const additionalFields = document.querySelector('.additional-fields');
    if (!additionalFields.classList.contains('expanded')) {
        additionalFields.style.maxHeight = additionalFields.scrollHeight + "px";
        additionalFields.classList.add('expanded');
    }
}

function closeForm() {
    const additionalFields = document.querySelector('.additional-fields');
    additionalFields.style.maxHeight = null;
    additionalFields.classList.remove('expanded');
}

const jobs = document.querySelectorAll(".job")

jobs.forEach(job => {
    const jobTitle = job.querySelector(".job-title");
    const jobDescription = job.querySelector(".job-description");

    jobTitle.addEventListener("click", () => {
        job.classList.toggle("active");
        if (job.classList.contains("active")) {
            jobDescription.style.maxHeight = jobDescription.scrollHeight + "px";
        } else {
            jobDescription.style.maxHeight = null;
        }
    });
});

function validateForm() {
    const requiredFields = document.querySelectorAll('.additional-fields [required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (field.value.trim() === '') {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });

    if (!isValid) {
        document.getElementById('error-msg').innerText = 'Please fill in all required fields.';
    } else {
        document.getElementById('error-msg').innerText = '';
    }

    return isValid;
}