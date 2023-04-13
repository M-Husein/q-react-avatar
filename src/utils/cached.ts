/**
 * 
 * @param {*} fn 
 * @returns 
 */
export function cached(fn: any){
	let cache = Object.create(null);
	return (function cachedFn(s: any){
		let hit = cache[s];
		return hit || (cache[s] = fn(s))
	})
}
