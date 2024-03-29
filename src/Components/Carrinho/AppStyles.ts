import styled from "styled-components";

/////////////////////////// PROPS ///////////////////////

export type ContainerProps = {
  color?: string;
  id?: any;
  width?: string;
  heigth?: string;
  backgroundColor?: string;
  displayFlex?: boolean;
  flex?: string;
  flexWrap?: boolean;
  alignItems?: string;
  margin?: string;
  padding?: string;
  column?: boolean;
  border?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  justifyContent?: string;
  bold?: boolean;
  fontSize?: string;
  textAlign?: string;
};

export type TextProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  textAlign?: string;
  margin?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
  zIndex?: boolean;
};

export type ContainerCart = {
  width?: string;
  heigth?: string;
  padding?: string;
};

/////////////////////////// GENERAL ///////////////////////

export const Container = styled.div<ContainerProps>`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => (props.displayFlex ? "flex" : "block")};
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  flex-wrap: ${(props) => props.flexWrap && "wrap"};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-image: url(${(props) => props.backgroundImage});
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: no-repeat;
  background-size: ${(props) => props.backgroundSize};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : null)};
  overflow: hidden;
`;

export const Text = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "light")};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : null)};
  z-index: ${(props) => (props.zIndex ? "1" : "")};
  line-height: 15px;

  @media (max-width: 1024px) {
    font-size: 0.6rem;
  }
`;

export const Link = styled.a<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "light")};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  cursor: pointer;
  text-decoration: none;
`;

/////////////////////////// ITEMS ///////////////////////

export const MainContainerCart = styled.div<ContainerCart>`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease 0.2s;
  width: ${(props) => (props.width == "cartopen" ? "40vw" : "0vw")};
  

  @media (max-width: 425px) {
    width: ${(props) => (props.width == "cartopen" ? "100%" : "0vw")};
    height: ${(props) => (props.width == "cartopen" ? "auto" : "0vh")};
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    overflow-x: hidden;
    opacity: 1;
    transition: all ease 0.5s;
    z-index: 99;
  }
`;

export const ContainerCart = styled.div<ContainerCart>`
padding: ${(props) => (props.padding == "cartopen" ? "20px" : "0")};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.width == "cartopen" ? "90%" : "0vw")};
`;

export const ContainerImgClose = styled.div<ContainerProps>`
  width: 100%;
  justify-content: flex-end;
`;

export const ImgClose = styled.img<ContainerProps>`
  width: 50px;
  cursor: pointer;
`;

export const ItemsCart = styled.div<ContainerProps>`
  width: 100%;
  border-bottom: 5px solid black;
  margin-bottom: 1rem;
`;

export const ContainerModal = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29%;
  height: 100%;
  position: fixed;
  top: 0;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.322);
  opacity: 1;
  transition: all ease 0.5s;
  padding: ${(props) => (props.padding == "showModal" ? "12px" : "0")};

  @media (max-width: 425px) {
    width: ${(props) => (props.width == "showModal" ? "100%" : "0vw")};
    padding: ${(props) => (props.padding == "showModal" ? "20px" : "0")};
  }
`;

export const InformationsCartItem = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ImgCartItem = styled.img<ContainerProps>`
  height: 120px;
  max-width: 120px;
  cursor: pointer;
  border: 1px solid black;
  transition: 0.4s;

  :hover {
    box-shadow: 2px 2px 5px black;
  }
`;

export const IconDeleteItem = styled.img<ContainerProps>`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

export const ButtonFinish = styled.button<ContainerProps>`
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 10px;
  background-color: black;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  transition: 0.4s;
  margin-top: 15px;

  :hover {
    box-shadow: 5px 5px 13px black;
  }
`;

////////////////////////////// MODAL ///////////////////////////

export const Modal = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid black;
  width: 50%;
  height: 130px;
  background-color: white;
  padding: 10px;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 425px) {
    width: 60%;
  }

  @media (max-width: 375px) {
    padding: 10px;
  }
`;

export const ContainerButtons = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: white;
`;

////////////////////////////// BUTTONS ///////////////////////////

export const ContainerButton = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  cursor: pointer;
`;

export const ContainerQt = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;
