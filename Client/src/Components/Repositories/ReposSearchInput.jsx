import './styles/ReposSearch.css'

import PropTypes from 'prop-types';
const ReposSearchInput = ({ searchTerm, setSearchTerm }) => (
    <div>
        <input
            className='repos-search'
            type="text"
            placeholder="Search Repositories"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
);
export default ReposSearchInput;

ReposSearchInput.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
}