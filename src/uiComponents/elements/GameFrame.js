import Styled from 'styled-components'
import React from 'react'

export const Frame = Styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: transparent;
`

export const FrameContent = Styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
`
