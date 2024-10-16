const WriteButton = ({ children }) => (
  <button
    className="
      bg-primary-300 hover:bg-primary-400 
      dark:bg-red-600 dark:hover:bg-red-900
      py-2 w-full rounded-lg transition-colors"
  >
    {children}
  </button>
);

export default WriteButton;
