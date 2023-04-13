// size = xs = 26, sm = 38, md = 56, lg = 84
export const parseSize = (size: number | string) => {
  if(typeof size === 'number'){
    return size;
  }

  switch(size){
    case 'xs':
      return 26;
    case 'sm':
      return 38;
    case 'md':
      return 56;
    case 'lg':
      return 84;
    default:
      return 56;
  }
}