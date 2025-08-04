import barba from '@barba/core';
import { cursor } from './cursor.js';
import { scroll } from './scroll.js';
import { removeFlowers, addFlowers } from './removeFlowers.js';
 
let time = 750;

barba.init({
  views: [
    {
        namespace: 'home',
        afterEnter() {
            cursor();
            addFlowers();
        }
    },
    {
        namespace: 'mywork',
        afterEnter() {
            cursor();
            scroll();
            addFlowers();
        }
    },
    {
        namespace: 'aboutme',
        afterEnter() {
            cursor();
            addFlowers();
        }
    },
    {
        namespace: 'contact',
        afterEnter() {
            cursor();
            removeFlowers();
        }
    }
  ],
  transitions: [
    {
      name: 'default-transition',
      leave(data) {

        return new Promise(resolve => {
          data.current.container.classList.add('barba-leave-active');
          setTimeout(resolve, time);
        });
      },
      enter(data) {
        const nextContainer = data.next.container;

        // SAFETY CHECK
        if (!nextContainer) {
          console.log('Barba: next.container is undefined');
          return Promise.resolve();
        }

        nextContainer.classList.add('barba-enter-active');

        return new Promise(resolve => {
          setTimeout(() => {
            nextContainer.classList.remove('barba-enter-active');
            nextContainer.classList.add('barba-enter-done');
            resolve();
          }, 50);
        });
      },
    },
  ],
});