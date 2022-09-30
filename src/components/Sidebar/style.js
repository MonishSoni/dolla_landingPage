import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
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
  /* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; */
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

export const SidebarWrapper = styled.aside`
`;
export const SidebarMenu = styled.div`
`;
export const SidebarLink = styled(Links)`
`;
