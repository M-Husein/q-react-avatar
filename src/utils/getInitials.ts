import { cached } from './cached';

/**
 * 
 */
export const getInitials = cached((name: string) => {
	if(typeof name !== 'string' || name.trim().length < 1){
    return;
  }
	
  let [first, last] = name.split(" ");

  if(first && last){
    return first[0] + last[0];
  }
	return first[0];
});
