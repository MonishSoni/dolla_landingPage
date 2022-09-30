import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as Linkr } from "react-router-dom";
import { Link as Links } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 111;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  background-color: transparent;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SidebarLink = styled(Links)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  list-style-type: none;
  cursor: pointer;
  transition: 0.3s all ease;
  margin-top: 25px;

  &:hover {
    color: #01bf71;
  }
`;
export const SidebarBtn = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(Linkr)`
  text-decoration: none;
  border-radius: 50px;
  white-space: nowrap;
  padding: 16px 65px;
  background-color: #01bf71;
  color: #010606;
  outline: none;
  border: none;
  font-weight: 600;
  transition: 0.3s all ease;
  margin-top: 50px;

  &:hover {
    color: #01bf71;
    background-color: #fff;
  }
`;
