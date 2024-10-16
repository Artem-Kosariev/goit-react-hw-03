import css from './SearchBox.module.css'

 function SearchBox({ value, onFilter }) {
  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
export default SearchBox