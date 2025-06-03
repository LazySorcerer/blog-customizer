import { useEffect } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean;
	onClick: (newValue: boolean) => void;
	rootRef: React.RefObject<HTMLDivElement>;
};

export const useOutsideClickClose = ({
	isOpen,
	rootRef,
	onClick,
}: UseOutsideClickClose) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (
				isOpen &&
				target instanceof Node &&
				!rootRef.current?.contains(target)
			) {
				onClick?.(false);
			}
		};

		window.addEventListener('mousedown', handleClick);

		return () => {
			window.removeEventListener('mousedown', handleClick);
		};
	}, [onClick, isOpen]);
};
