import { MutableRefObject, useEffect, useState } from 'react';

const useInView = <T extends Element>(
	target: MutableRefObject<T | null>,
	options: IntersectionObserverInit = {}
) => {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		if (!target.current) return;

		const handleIntersect = (entries: IntersectionObserverEntry[]) => {
			setIsIntersecting(entries[0].isIntersecting);
		};

		const observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(target.current);

		return () => {
			observer.disconnect();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [target.current, options.root, options.rootMargin, options.threshold]);

	return isIntersecting;
};

export default useInView;
