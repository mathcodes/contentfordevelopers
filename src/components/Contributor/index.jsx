const Contributor = ({ contributor }) => {
  return (
    <div className="p-2 flex flex-col items-center" key={contributor?.id}>
      <a href={contributor?.html_url} target="blank">
        <img
          className="rounded-full md:h-24 md:w-24 h-16 w-16 m-1 hover:scale-150 transition-all duration-150"
          src={contributor?.avatar_url}
          alt={contributor?.login}
        />
      </a>
    </div>
  );
};
export default Contributor;
