import './style.css'

let curX : number = 0;
let curY : number = 0;
let tgX : number = 0;
let tgY : number = 0;


document.addEventListener('DOMContentLoaded', () : void => {
    const interBubble: HTMLDivElement = document.querySelector<HTMLDivElement>('.interactive')!;


    function move(): void {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() : void => {
            move();

        });
    }
    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();

    const headings = document.querySelectorAll<HTMLElement>('.animated-heading');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    headings.forEach(heading => {
        observer.observe(heading);
    });

});

