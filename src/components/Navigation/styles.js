import styled from 'styled-components';

export const Navigation = styled.nav`
    display: flex;
    align-items: flex-end;
`;

export const NavContainer = styled.ul`
    border-radius: 12px 12px 0 0;
    box-shadow: #00000038 1px 0px 6px;
    display: flex;
    list-style: none;
    margin-bottom: 0;
    padding: 0;
    transition: 0.8s;
    &:hover {
        box-shadow: #00000066 1px 1px 9px;
    }
`;

export const MenuItem = styled.li`
    cursor: pointer;
    font-weight: 500;
    padding: 16px 8px 14px 8px;
    transition: 0.4s;
    &:first-child {
        border-radius: 12px 0 0 0;
        padding-left: 10px;
    }
    &:last-child {
        border-radius: 0 12px 0 0;
        padding-right: 10px;
    }
    &:hover {
        background: #00cbd2;
        color: #e4eff9;
    }
`;
