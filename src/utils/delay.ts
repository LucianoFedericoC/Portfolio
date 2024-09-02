export const delay = async (cb: any, ms: any) => {
	setTimeout(() => {
		cb();
	}, ms);
    return;
};
