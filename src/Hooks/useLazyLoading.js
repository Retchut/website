import { useEffect } from "react";

const swapImage = (img) => {
    const srcHiRes = img.getAttribute('src-hi-res');
    img.setAttribute('src', srcHiRes);
};

function useLazyLoading() {
    useEffect(() => {
        const targets = document.querySelectorAll('img');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    swapImage(entry.target);
                    observer.unobserve(entry.target);
                }
            })
        },
        {
            threshold: 1.0
        })
        
        // observe 
        for(const el of targets){
            observer.observe(el)
        }

        }, []);
}

export default useLazyLoading;