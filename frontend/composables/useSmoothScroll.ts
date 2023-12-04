import Scrollbar from 'smooth-scrollbar';

export default function useSmoothScroll() {
    onNuxtReady(() => {
        setSmoothScroll();
    });

    const setSmoothScroll = (): void => {
        const element = document.querySelector('.smoothLayer');
    
        if (element instanceof HTMLElement) {
            Scrollbar.init(element, {
              alwaysShowTracks: false,
              continuousScrolling: true,
              renderByPixels: true,
              damping: 0.05,
            });
          } else {
            console.error('Element not found');
        }
    }
}