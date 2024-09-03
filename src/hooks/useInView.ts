import { MutableRefObject, useEffect, useState } from 'react';

const useInView = <T extends Element>(
	target: MutableRefObject<T | null>,
	options: IntersectionObserverInit = {}
) => {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		if (!target.current) return; // Verifica si el target existe

		const handleIntersect = (entries: IntersectionObserverEntry[]) => {
			setIsIntersecting(entries[0].isIntersecting);
		};

		const observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(target.current);

		return () => {
			observer.disconnect();
		};
	}, [target.current, options.root, options.rootMargin, options.threshold]);

	return isIntersecting;
};

export default useInView;
