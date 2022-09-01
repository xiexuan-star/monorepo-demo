// import { useFormRequest } from '~/form-render';

function getRandomList(maxLength = 20, prefix = '') {
	return Array.from({ length: Math.floor(Math.random() * maxLength + 3) }).map((_, idx) => {
		return { text: prefix + idx, value: prefix + idx };
	});
}

function getCascaderResult(level: number) {
	return Math.random() > Math.pow(0.8, level) ? [] : getRandomList(20, `level-${level}-`);
}

export function useMock() {
	const request = {
		post(url: string, params: Record<string, any>) {
			if (url === '/cascader') {
				return new Promise(resolve => {
					console.log('发送模拟请求=>', url, params);
					setTimeout(() => {
						resolve({
							success: true,
							data: getCascaderResult(params.lvlnr)
						});
					}, 200);
				});
			}
			return new Promise(resolve => {
				console.log('发送模拟请求=>', url, params);
				setTimeout(
					() =>
						resolve({
							success: true,
							data: getRandomList(20, 'text')
						}),
					Math.floor(Math.random() * 1000)
				);
			});
		}
	};

	// useFormRequest().registGlobHttpInstance(request as any);
}
