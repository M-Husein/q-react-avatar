let lastId = 0;

export function incrementId(prefix = 'q'){
  lastId++;
  return prefix + lastId;
}
