import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            <button onClick={() => {history.push('/posts')}}>
                버어튼
            </button>
        </div>
    );
};

export default Home;