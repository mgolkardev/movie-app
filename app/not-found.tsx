import { Link } from "shared/components";



const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
