const Avatar = ({ letter }) => (
  <div
    className="
      rounded-full bg-rose-300 dark:bg-rose-600
      h-10 w-10 grid place-content-center"
  >
    <span className="mb-0.5">{letter}</span>
  </div>
);

export default Avatar;
