import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <img className="not-found__icon" alt="not found icon" />
      <h2 className="not-found__title">Nothing found</h2>
      <p className="not-found__text">
        Sorry, but nothing matched your seach terms.
      </p>
    </div>
  );
}

export default NotFound;
