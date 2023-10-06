const TermButton = ({term, termFilter, setTermFilter}) => (
    <div>
      <input type="radio" id={term} className="btn-check" checked={term === termFilter} autoComplete="off"
        onChange={() => setTermFilter(term)} />
      <label className="btn btn-success mb-1 p-2" htmlFor={term}>
      { term }
      </label>
    </div>
  );

const TermSelector = ({terms, termFilter, setTermFilter}) => (
    <div className="btn-group">
      { 
        Object.keys(terms).map(term => <TermButton key={term} term={term} termFilter={termFilter} setTermFilter={setTermFilter} />)
      }
    </div>
  );

export default TermSelector