import Styled from 'styled-components';
import BackgroundImg from '../../assets/menu/menuBackground.png';

export const MenuImage = Styled.img`
    width: auto;
    height: 400px;
    object-fit: cover;
`;

export const ModeText = Styled.p``;

export const ModeCursor = Styled.img`
    visibility: hidden;
    width: 20px;
    height: 20px; 
    ${ModeText}:hover {
        visibility: visible;
    }
`;

export const Selector = Styled.div`
    display: flex:
    justify-content: space-around;
`;

export const SelectorContainer = Styled.div`
    margin-bottom: 2rem;
`;

export const MenuContainer = Styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
`;