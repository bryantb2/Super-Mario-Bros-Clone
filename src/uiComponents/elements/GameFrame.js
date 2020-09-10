import Styled from 'styled-components';
import React from "react";

export const FrameContainer = Styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
`;

export const FrameContent = Styled.div`
    position: absolute;
    width: 90%;
    top: 0;
    left: 50%;
`;

export const OverviewContainer = Styled.div`
    display: flex;
    width: 40%;
    flex-direction: vertical;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

export const MarioIcon = Styled.img`
    width: 25px;
    height: 30px;
`;