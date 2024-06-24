document.addEventListener('DOMContentLoaded', () => {
    // 페이지 1: Learning Planner 및 Mental Care

    // Learning Planner
    const plannerForm = document.getElementById('planner-form');
    const planList = document.getElementById('plan-list');
    let plans = [];

    if (plannerForm) {
        plannerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const subject = document.getElementById('subject').value;
            const date = document.getElementById('date').value;
            const goal = document.getElementById('goal').value;

            const plan = { subject, date, goal };
            plans.push(plan);
            displayPlans();
            plannerForm.reset();
        });
    }

    function displayPlans() {
        planList.innerHTML = '';
        plans.forEach(plan => {
            const li = document.createElement('li');
            li.textContent = `${plan.date} - ${plan.subject}: ${plan.goal}`;
            planList.appendChild(li);
        });
    }

    // Mental Care - Random Quote and Image
    const randomQuoteDiv = document.getElementById('random-quote');
    const randomImageDiv = document.getElementById('random-image');

    if (randomQuoteDiv) {
        fetch('https://corsproxy.io/?' + encodeURIComponent('https://zenquotes.io/api/random'))
            .then(response => response.json())
            .then(data => {
                const quote = data[0];
                randomQuoteDiv.innerHTML = `<p>"${quote.q}"</p><p>- ${quote.a}</p>`;
            })
            .catch(error => console.error('Error fetching random quote:', error));

        fetch('https://corsproxy.io/?' + encodeURIComponent('https://zenquotes.io/api/image'))
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.url;
                randomImageDiv.innerHTML = `<img src="${imageUrl}" alt="Inspirational Image">`;
            })
            .catch(error => console.error('Error fetching random image:', error));
    }


    // 페이지 2: Community 및 Resources

    // Community - Posts
    const postForm = document.getElementById('post-form');
    const postList = document.getElementById('post-list');
    let posts = [];

    if (postForm) {
        postForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const content = document.getElementById('post-content').value;

            const post = { content, date: new Date().toLocaleString() };
            posts.push(post);
            displayPosts();
            postForm.reset();
        });
    }

    function displayPosts() {
        postList.innerHTML = '';
        posts.forEach(post => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${post.date}</strong><p>${post.content}</p>`;
            postList.appendChild(li);
        });
    }

    // Resources - Study Resources
    const studyResourcesList = document.getElementById('study-resources-list');
    const mentalHealthResourcesList = document.getElementById('mental-health-resources-list');
    const interactiveToolsList = document.getElementById('interactive-tools-list');

    // Fetch study resources (simulated data)
    const studyResources = [
        { name: 'Khan Academy', link: 'https://www.khanacademy.org/' },
        { name: 'Coursera', link: 'https://www.coursera.org/' },
        { name: 'edX', link: 'https://www.edx.org/' }
    ];

    if (studyResourcesList) {
        studyResources.forEach(resource => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${resource.link}" target="_blank">${resource.name}</a>`;
            studyResourcesList.appendChild(li);
        });
    }

    // Fetch mental health resources (simulated data)
    const mentalHealthResources = [
        { name: 'National Alliance on Mental Illness (NAMI)', link: 'https://www.nami.org/' },
        { name: 'Mental Health America', link: 'https://www.mhanational.org/' },
        { name: 'Headspace', link: 'https://www.headspace.com/' }
    ];

    if (mentalHealthResourcesList) {
        mentalHealthResources.forEach(resource => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${resource.link}" target="_blank">${resource.name}</a>`;
            mentalHealthResourcesList.appendChild(li);
        });
    }
});
