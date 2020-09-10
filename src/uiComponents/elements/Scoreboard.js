import Styled from 'styled-components';

export const CoinIcon = Styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`;

export const ScoreBoardContainer = Styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 2rem;
    background-color: transparent;
    margin-bottom: 5rem;
`;

export const ItemContainer = Styled.div`
    display: flex;
    flex-direction: vertical;
    justify-content: space-between;
    align-items: bottom;
`;

export const ScoreItem = Styled.div`
    text-transform: uppercase;
`;
