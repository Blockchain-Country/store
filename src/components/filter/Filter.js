import { useDispatch, useSelector } from 'react-redux'
import {
  SET_TITLE_FILTER,
  SET_AUTHOR_FILTER,
  SET_ONLY_FAVORITE,
  RESET_FILTER,
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavorite,
} from '../../redux/slices/FilterSlice'
import './Filter.css'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavorite)

  const handleTitleFilter = (e) => {
    dispatch(SET_TITLE_FILTER(e.target.value))
  }

  const handleAuthorFilter = (e) => {
    dispatch(SET_AUTHOR_FILTER(e.target.value))
  }

  const handleOnlyFavoriteFilter = () => {
    dispatch(SET_ONLY_FAVORITE())
  }

  const resetAllFilters = () => {
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
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="filter by author..."
            onChange={handleAuthorFilter}
            value={authorFilter}
          ></input>
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFavoriteFilter}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={resetAllFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Filter
