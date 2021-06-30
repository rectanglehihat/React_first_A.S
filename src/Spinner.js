import React from "react";
import styled from "styled-components";

const Spinner = (props) => {
    return (
        <Wrap>
            <div style={{fontSize: "150px", color: "#673ab7"}}>메롱</div>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

export default Spinner;