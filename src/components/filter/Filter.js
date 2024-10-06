import { useDispatch, useSelector } from 'react-redux'
import {
  SET_TITLE_FILTER,
  RESET_FILTER,
  selectTitleFilter,
} from '../../redux/slices/FilterSlice'
import './Filter.css'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)

  const handleTitleFilter = (e) => {
    dispatch(SET_TITLE_FILTER(e.target.value))
  }

  const resetTitleFilters = () => {
    dispatch(RESET_FILTER())
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="filter by title..."
            onChange={handleTitleFilter}
            value={titleFilter}
          ></input>
          <button type="button" onClick={resetTitleFilters}>
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filter
