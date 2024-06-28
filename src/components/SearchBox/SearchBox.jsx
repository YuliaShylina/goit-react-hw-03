import css from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        placeholder=""
        value={value}
        onChange={(e) => {
          onChange(e.target.value.toLowerCase());
        }}
      />
    </div>
  );
}

export default SearchBox;
