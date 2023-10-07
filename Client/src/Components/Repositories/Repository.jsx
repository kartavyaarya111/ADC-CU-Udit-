import PropTypes from 'prop-types';

import './styles/Repository.css'

const Repository = ({ repo }) => (
    <div className='repo-card' key={repo.id}>
        <img className='repo-img' src={repo.image} alt={repo.name} />
        <div className='repo-content-container'>
            <div className='repo-content'>
                <h2 className='repo-heading'>{repo.name}</h2>
                <p className='repo-desc'>{repo.description}</p>
            </div>
            <a className='repo-button' href={repo.link} target="_blank" rel="noreferrer">
                <button className="repo-special-button">Visit Repository</button>
            </a>
        </div>
    </div>

);

export default Repository;

Repository.propTypes = {
    repo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
};