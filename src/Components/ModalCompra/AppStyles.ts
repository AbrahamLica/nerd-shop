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

export type InputProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  width?: string;
  backgroundColor?: string;
  margin?: string;
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

export type ImgDetailsProps = {
  ImgDetailsCharactersWidth?: boolean;
  ImgDetailsCharactersHeight?: boolean;

  ImgDetailsComicsWidth?: boolean;
  ImgDetailsComicsHeight?: boolean;

  ImgDetailsCreatorsWidth?: boolean;
  ImgDetailsCreatorsHeight?: boolean;

  ImgDetailsEventssWidth?: boolean;
  ImgDetailsEventssHeight?: boolean;

  ImgDetailsSeriesWidth?: boolean;
  ImgDetailsSeriesHeight?: boolean;

  ImgDetailsStoriesWidth?: boolean;
  ImgDetailsStoriesHeight?: boolean;
};

export type MainContainerDetailsProps = {
  background: any;
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

export const ContainerModal = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.322);
  opacity: 1;
  transition: all ease 0.5s;
`;

export const Modal = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  background-color: white;
  min-width: 35vw;
  z-index: 10;
  border-radius: 20px;

  @media (max-width: 425px) {
    width: 330px;
    padding: 10px;
  }

  @media (max-width: 320px) {
    width: 290px;
    /* padding: 10px; */
  }
`;

export const IconClose = styled.img<ContainerProps>`
  width: 60px;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 40px;
  }
`;

export const ContainerClose = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ImgItem = styled.img<ContainerProps>`
  border: 1px solid black;
  box-shadow: 2px 2px 4px black;
  width: 230px;
`;

export const Name = styled.p<ContainerProps>`
  font-size: 1.5rem;
  margin-top: 15px;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;

export const Value = styled.p<ContainerProps>`
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const ContainerQt = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const ContainerButton = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  cursor: pointer;
`;

export const Button = styled.div<ContainerProps>`
  font-size: 1rem;
  padding: 8px;
  margin: 0px 10px;
  border-radius: 10px;
  border: none;
  background-color: black;
  cursor: pointer;
  color: white;
  transition: 0.4s;

  :hover {
    box-shadow: 5px 5px 13px black;
  }

  @media (max-width: 425px) {
    font-size: 0.7rem;
    margin-top: 9px;
  }
`;

export const ContainerButtons = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

// @media (max-width: 768px) {
//     .modal {
//       width: 70vw;
//       padding: 20px;
//     }
//   }

//   @media (max-width: 425px) {
//     .imgItem {
//       max-width: 200px;
//     }

//     .modal {
//       width: 70vw;
//       padding: 5px;
//     }

//     .name {
//       font-size: 1.2rem;
//     }

//     .valor {
//       font-size: 1.2rem;
//       margin: 0;
//     }

//     .containerButtons {
//       flex-direction: column;
//       margin-top: 5px;
//     }

//     .containerButtons button {
//       margin-bottom: 10px;
//       margin-left: 0;
//     }

//     .btnCancelar {
//       display: none;
//     }

//   }

// #B3001B
// #255C99
// #7EA3CC
