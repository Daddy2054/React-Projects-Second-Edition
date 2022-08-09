import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Link from '../components/Link';

function Project({ userName }) {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState([]);
  const { name } = useParams();
  //const [profile, setProfile] = useState({});

  useEffect(() => {
    async function fetchData() {
      //const profile = await fetch(`https://api.github.com/users/${userName}`);
   
      const data = await fetch(
        `https://api.github.com/repos/${userName}/${name}`,
      );
      const result = await data.json();

      if (result) {
        setProject(result);
        setLoading(false);
      }
    }

    if (userName && name) {
      fetchData();
    }
  }, [userName, name]);

  return (
    <div className='Project-container'>
      <h2>Project: {project.name}</h2>
      {loading ? <span>Loading...</span> : <div>
      <Link url={`https://github.com/${userName}/${name}`} />
      </div>}
    </div>
  );
}

export default Project;
