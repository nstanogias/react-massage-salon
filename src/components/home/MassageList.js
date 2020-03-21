import React, { Component } from "react";
import Massage from "./Massage";
import styled from "styled-components";
import Title from "../globals/Title";
import Section from "../globals/Section";
import massage from "./massageList-data";
import { setColor, media, setRem } from "../../styles";
export default class massageList extends Component {
  state = {
    massageList: massage
  };
  render() {
    return (
      <Section color={setColor.lightGrey}>
        <Title title="our massages" center />
        <MassagesCenter>
          {this.state.massageList.map(massage => {
            return <Massage key={massage.id} massage={massage} />;
          })}
        </MassagesCenter>
      </Section>
    );
  }
}

const MassagesCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.tablet`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:${setRem(32)};
  `};
  ${media.desktop`
  width:100vw;
  max-width:1170px;
  `};
  ${media.large`
    grid-template-columns:repeat(3,1fr);
  `};
`;
