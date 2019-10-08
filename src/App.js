import React, { Component } from "react";
import styled from "styled-components";
import homeSVG from "./img/home.svg";

const imgStyle = {
  height: "1500px",
  width: "100%"
};

const Container = styled.div`
  margin: ${props => props.margin || "0px"};
  padding: ${props => props.padding || "0px"};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  text-align: center;
  background-image: ${props => props.backgroundImage || ""};
  background-color: ${props => props.backgroundColor || "white"};
  display: ${props => props.display || ""};
  justify-content: ${props => props.justifyContent || ""};
  border-bottom: ${props => props.borderBottom || ""};
  box-shadow: ${props => props.boxShadow || ""};
`;

const NavBar = styled.nav`
  width: 70%;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
`;

const H1 = styled.h1`
  font-size: ${props => props.fontSize || "52px"};
`;

const Button = styled.button`
  background-color: ${props => props.color || ""};
  border-radius: ${props => props.borderRadius || "4px"};
  height: ${props => props.height || "70px"};
  width: ${props => props.width || "175px"};
  background-color: ${props => props.backgroundColor || ""};
  margin: ${props => props.margin || "10px"};
  padding: ${props => props.padding || "0px"};
  font-size: ${props => props.fontSize || "32px"};
  border: 2px solid black;

  &:hover {
    opacity: 0.9;
  }
`;

const Input = styled.input`
  height: 30px;
  width: 100%;
  border: 1px solid black;
  border-radius: 4px;
  padding: 3px;
  margin: 20px;
`;

const Question = styled.div`
  height: 100px;
  width: 50%;
  border: black 2px solid;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
`;

const LikeOrDislike = styled.div`
  display: flex;
  flex-direction: column;
`;

const Like = styled.button`
  border-right: 2px solid black;
  height: 50%;
`;

const Dislike = styled.button`
  border-right: 2px solid black;
  height: 50%;
`;

const Answer = styled.button`
  border-left: 2px solid black;
`;

const Footer = styled.footer`
  width: 100%;
  height: 60px;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 100px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  render() {
    return (
      <div>
        <Container>
          <NavBar>
            <H1 fontSize="24px">Saidit</H1>
            <div>
              <form>
                <Input
                  placeholder="Search for..."
                  ref={input => (this.search = input)}
                  onChange={this.handleInputChange}
                />
              </form>
            </div>
            <H1 fontSize="24px">Popular</H1>
          </NavBar>
        </Container>

        <Container margin="200px auto 50px auto">
          <H1>Ask & Answer anything you want</H1>
        </Container>

        <Container display="flex" justifyContent="center" height="50vh">
          <Button>Ask</Button>
          <Button>Answer</Button>
        </Container>
        {/* <img src={homeSVG} style={imgStyle}></img> */}
        <Container>
          <Question>
            <LikeOrDislike>
              <Like>Like</Like>
              <Dislike>Dislike</Dislike>
            </LikeOrDislike>
            <H1 fontSize="32px">Why did dinosaurs die?</H1>
            <Answer>Answer</Answer>
          </Question>

          <Question>
            <LikeOrDislike>
              <Like>Like</Like>
              <Dislike>Dislike</Dislike>
            </LikeOrDislike>
            <H1 fontSize="32px">What is the meaning of life?</H1>
            <Answer>Answer</Answer>
          </Question>

          <Question>
            <LikeOrDislike>
              <Like>Like</Like>
              <Dislike>Dislike</Dislike>
            </LikeOrDislike>
            <H1 fontSize="32px">How tall is Shaq?</H1>
            <Answer>Answer</Answer>
          </Question>

          <Question>
            <LikeOrDislike>
              <Like>Like</Like>
              <Dislike>Dislike</Dislike>
            </LikeOrDislike>
            <H1 fontSize="32px">Am I stupid?</H1>
            <Answer>Answer</Answer>
          </Question>

          <Question>
            <LikeOrDislike>
              <Like>Like</Like>
              <Dislike>Dislike</Dislike>
            </LikeOrDislike>
            <H1 fontSize="32px">The best question ever</H1>
            <Answer>Answer</Answer>
          </Question>
        </Container>

        <Footer>Copyright 2019 Saidit LLC</Footer>
      </div>
    );
  }
}

export default App;
