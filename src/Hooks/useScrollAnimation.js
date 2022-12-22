import { useEffect } from "react";

const toggleAnimation = (target, bool) => target.classList.toggle("animate", bool)

function useScrollAnimation(parentRef, threshold, stateDependencies) {
    useEffect(() => {
        const children = parentRef.current.children;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            toggleAnimation(entry.target, entry.isIntersecting)
            })
        },
        {
            threshold: threshold
        })
        
        // observe 
        for(const el of children)
            observer.observe(el)

        }, [parentRef, threshold].concat(stateDependencies));
}

export default useScrollAnimation;