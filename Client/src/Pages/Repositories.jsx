/* eslint-disable */
import React, { useState, useEffect } from 'react';

import ReposSearchInput from '../Components/Repositories/ReposSearchInput';
import Repository from '../Components/Repositories/Repository';;

import '../Components/Repositories/styles/Repositories.css'

import reposData from '../Data/ReposData';


const RepositoryList = ({ repos, searchTerm }) => {
    const filteredRepos = repos.filter((repo) =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {filteredRepos.map((repo) => (
                <Repository key={repo.id} repo={repo} />
            ))}
        </div>
    );
};

const Repositories = () => {
    const [repos, setRepos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setRepos(reposData);
    }, []);

    return (
        <div className='repos-container'>
            <div className='repos-header'>
                <div>
                    <h3 className="repos-heading"> {'>>>'} <span style={{color:"#01caff"}}>ADC </span>Repositories</h3>
                    <div className='underline'></div>
                </div>
                <div className='repo-search-bar'>
                    <ReposSearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
            </div>
            <RepositoryList repos={repos} searchTerm={searchTerm} />
        </div>
    );
};

export default Repositories;
