const styles = {
  default: {
    header:
      'overflow-hidden bg-gray-50 dark:bg-gray-900 z-10 w-screen px-5 py-5 transition duration-700 flex flex-nowrap flex-row justify-between content-center items-center',
    logo: 'h-20',
    nav: {
      mobile:
        'sm:hidden z-20 h-5/6 transform w-screen fixed bottom-0 flex bg-gray-50 dark:bg-gray-900 flex-col content-center items-center justify-around',
      desktop: 'hidden sm:block',
    },
    rightSide: 'flex',
  },
  mobileOpened: {
    container: 'h-screen',
  },
  mobileNotOpened: {
    nav: 'hidden',
  },
  scrolled: {
    true: {
      div: {
        invisible: 'w-screen h-30',
      },
      header: 'h-1/6 sm:h-28 shadow-lg fixed top-0',
    },
    false: {
      header: 'h-1/6 sm:h-28',
    },
  },
};

export default styles;
