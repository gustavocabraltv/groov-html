    

    document.addEventListener('DOMContentLoaded', function() {
        const swiper = new Swiper('.mySwiper', {
            // Configurações para scroll infinito
            loop: true,
            centeredSlides: true,
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
            grabCursor: true,
            loopFillGroupWithBlank: true,
            loopedSlides: 6,
            loopAdditionalSlides: 2,
            
            // Breakpoints para responsividade
            breakpoints: {
                // Mobile pequeno
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 12,
                    centeredSlides: true,
                    loopedSlides: 3,
                },
                // Mobile
                480: {
                    slidesPerView: 2.5,
                    spaceBetween: 15,
                    centeredSlides: true,
                    loopedSlides: 4,
                },
                // Tablet
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                    centeredSlides: true,
                    loopedSlides: 4,
                },
                // Desktop pequeno
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    centeredSlides: true,
                    loopedSlides: 5,
                },
                // Desktop
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    centeredSlides: true,
                    loopedSlides: 4,
                }
            },

            // Navegação customizada
            navigation: {
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            },

            // Configurações de comportamento
            speed: 600,
            allowTouchMove: true,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            loopFillGroupWithBlank: true,
            watchOverflow: true,
            normalizeSlideIndex: true,
            
            // Keyboard navigation
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },

            // Eventos
            on: {
                init: function() {
                    updateCounter(this);
                },
                slideChange: function() {
                    updateCounter(this);
                }
            }
        });

        // Função corrigida para atualizar contador no modo loop
        function updateCounter(swiperInstance) {
            const currentSlideEl = document.querySelector('.current-slide');
            const totalSlidesEl = document.querySelector('.total-slides');
            
            if (currentSlideEl && totalSlidesEl) {
                // Pega o número total de slides originais (sem duplicatas do loop)
                const originalSlides = document.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)');
                const totalSlides = originalSlides.length;
                
                // Usa realIndex para obter o índice real do slide ativo
                const currentIndex = swiperInstance.realIndex + 1;
                
                currentSlideEl.textContent = currentIndex;
                totalSlidesEl.textContent = totalSlides;
            }
        }

        // Adiciona eventos personalizados para melhor UX
        swiper.on('touchStart', function() {
            document.body.style.overflow = 'hidden';
        });

        swiper.on('touchEnd', function() {
            document.body.style.overflow = '';
        });

        // Adiciona suporte a gestos avançados
        let startY = 0;
        swiper.on('touchStart', function(swiper, event) {
            startY = event.touches[0].clientY;
        });

        swiper.on('touchMove', function(swiper, event) {
            const currentY = event.touches[0].clientY;
            const diff = Math.abs(currentY - startY);
            
            // Se o movimento vertical for maior que horizontal, permite scroll da página
            if (diff > 50) {
                swiper.allowTouchMove = false;
            } else {
                swiper.allowTouchMove = true;
            }
        });

        swiper.on('touchEnd', function() {
            swiper.allowTouchMove = true;
        });
    });
