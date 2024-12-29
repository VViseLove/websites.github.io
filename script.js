document.addEventListener('DOMContentLoaded', () => { 

    const mobileMenu = document.getElementById('mobile-menu'); 
    const navLinks = document.querySelector('.nav-links'); 

    if (mobileMenu && navLinks) { 
        mobileMenu.addEventListener('click', () => { 
            navLinks.classList.toggle('show'); }); 
        } 
    else { 
        console.error('Элемент меню не найден'); 
    } 
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.getElementById('scrollButton');
    const section2 = document.getElementById('HeroesSECTION');

    scrollButton.addEventListener('click', () => {
        section2.scrollIntoView({ behavior: 'smooth' });
    });
});
    document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
        anchor.addEventListener('click', function (e) { 
            e.preventDefault(); 
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({ 
                behavior: 'smooth' 
            }); 
        }); 
    }); 

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedback-form');
    const reviewsContainer = document.getElementById('reviews');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем стандартное действие отправки формы

        const formData = new FormData(form);

        // Отправляем данные на getform.io
        fetch('https://getform.io/f/bdrrpkmb', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Спасибо за ваш отзыв!');
                form.reset();
                fetchReviews(); // Обновляем отзывы после успешной отправки
            } else {
                alert('Произошла ошибка, попробуйте ещё раз.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Произошла ошибка, попробуйте ещё раз.');
        });
    });

    // Функция для получения и отображения отзывов
    function fetchReviews() {
        const url = 'https://api.getform.io/v1/forms/bdrrpkmb?token=twWds7wnNpfKMCeKCy8o41AQ6g0ATeUEx34tuH0ePHR3YX3earurG1jrbyO5';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.success && Array.isArray(data.data.submissions)) {
                    reviewsContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых отзывов

                    data.data.submissions.forEach(submission => {
                        const reviewElement = document.createElement('div');
                        reviewElement.classList.add('review');
                        reviewElement.innerHTML = `<div class="created"><b>${submission.name}:</b></div><div class="insider"><p>${submission.message}</p></div>`;
                        reviewsContainer.appendChild(reviewElement);
                    });
                } else {
                    console.error('Unexpected data format:', data);
                    alert('Произошла ошибка при получении отзывов.');
                }
            })
            .catch(error => console.error('Error fetching reviews:', error));
    }

    // Получаем отзывы при загрузке страницы
    fetchReviews();
});
