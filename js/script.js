'use strict'

{
   window.addEventListener('DOMContentLoaded', () => {
      //////////////////////////////////////////////

      // ハンバーガー
      const navli =  document.querySelectorAll('#g-nav li');
      const nav =   document.querySelector('#g-nav');
       const btn = document.querySelector('.open-btn');
       
       btn.addEventListener('click', () => {
         btn.classList.toggle('active');
         nav.classList.toggle('nav-active');
       });

       navli.forEach(el => {
         el.addEventListener('click', () => {
            btn.classList.remove('active');
            nav.classList.remove('nav-active');
          });
       });

      // ヒーローキャッチ
      gsap.to('.hero-catch p', {
         clipPath: 'inset(0% 0% 0% 0%)',
         duration: .7,
         delay: .3,
         scrollTrigger: {
            trigger: '.hero-catch p',
            start: 'top 100%',
            end: 'bottom 0%',
            toggleActions: 'play reset play reset',
         }
      })


      // ヒーロースライド
      gsap.to('.clip', {
         clipPath: 'inset(0% 0% 0% 0%)',
         duration: 1.5,
         stagger: 3,
         delay: 1.5,
         ease: 'power4.inOut',
         repeat: -1,
         repeatDelay: 1.5,
      });


      // ヒーローパララックス
      gsap.to('.heroImg-wrapper', {
         scale: 3,
         scrollTrigger: {
            scrub: .5,
            trigger: '.heroImg-wrapper',
            start: 'top 0%',
            end: 'bottom 0%'
         }
      })


      // 無限テキスト
      gsap.to('.infinite-text p', {
         xPercent: -50,
         duration: 30,
         repeat: -1,
         ease: 'none',
         scrollTrigger: {
            trigger: '.infinite-text',
            start: 'top 100%',
            end: 'bottom 0%',
            toggleActions: 'play pause play pause',
         }
      });


      // ボトムヒーローパララックス
      gsap.to('#bottom-hero img', {
         scale: 1,
         scrollTrigger: {
            scrub: 2,
            trigger: '#bottom-hero',
            start: '70% 100%',
            end: '80% 90%'
         }
      })


      // 各種アイテムフェードイン
      document.querySelectorAll('.inset').forEach(el => {
         gsap.to(el, {
            opacity: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: .7,
            delay: .2,
            scrollTrigger: {
               trigger: el,
               start: 'top 100%',
               end: 'bottom 0%',
               toggleActions: 'play none none reset'
            }
         });
      });

      // プロダクト・スプライド

      const target = '.splide';
      const options = {
         type: 'slide',
         mediaQuery: 'max',
         perMove: 1,
         fixedWidth: 'clamp(300px, 50vw, 700px)',
         gap: 32,
         updateOnMove: true,
         omitEnd: true,
         breakpoints: {
            630: {
               type: 'loop',
               omitEnd: false,
            }
         }
      }

      const productSplide = new Splide(target, options);

      productSplide.mount();






      //////////////////////////////////////////////
   });
} 
