import { useEffect, useRef } from "react";

export const ReviewOnScroll = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return; // Ensure element exists

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add("visible");
                } else {
                    element.classList.remove("visible"); // Optional: Remove when out of view
                }
            },
            { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
        );

        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element); // Cleanup safely
        };
    }, []); // Run only once on mount

    return <div ref={ref} className="reveal">{children}</div>;
};
