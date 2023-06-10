export const createInstance = <T extends object>(
  entity: { new (): T },
  data: Partial<T>,
): T => {
  return Object.assign(new entity(), data);
};

export const createRequiredInstance = <T extends object>(
  entity: { new (): T },
  data: Omit<T, '@modelType'>,
): T => {
  return Object.assign(new entity(), data);
};
