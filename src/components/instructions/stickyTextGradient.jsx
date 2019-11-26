import React from 'react';
import styled from 'styled-components';


const StickyTextGradient = styled.div`
    position: sticky;
    bottom: 0;  
    height: 15vh;
    width: 100%;
    background: linear-gradient(to top,
        rgba(255,255,255, 1) 5%, 
        rgba(255,255,255, 0) 95%
    );
    pointer-events: none;
`;

const TextGradient = () => {
    return(
        <StickyTextGradient 
        // className='DarkModeTextGradient'
        />
    )
};


export default TextGradient;