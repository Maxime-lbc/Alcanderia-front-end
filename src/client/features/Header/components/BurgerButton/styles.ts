const styles = {
  default: {
    container: 'sm:hidden',
    rectangle: {
      1: 'w-7 h-1 bg-black transform dark:bg-gray-100 rounded-full my-1 duration-700',
      2: 'w-9 h-1 bg-black dark:bg-gray-100 rounded-full my-1 transform duration-700',
      3: 'h-1 bg-black dark:bg-gray-100 rounded-full my-1 transform duration-700',
    },
  },
  opened: {
    rectangle: {
      1: '-rotate-45 translate-y-2',
      2: 'scale-0',
      3: 'w-7 rotate-45 -translate-y-2',
    },
  },
  notOpened: 'w-8',
};

export default styles;
