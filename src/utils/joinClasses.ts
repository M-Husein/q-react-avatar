export function joinClasses(...args: any){
  return args.filter(Boolean).join(' ');
}
