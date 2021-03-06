import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

const Wrapper = styled.div`
    display: block;
    float: left;
    width: 100%;
    height: 100%;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;

    h3 {
        text-transform: uppercase;
    }
`

class Sidebar extends Component {
    render () {
        return (
            <Wrapper>
                <Logo>
                    <h3>Dojo Today</h3>
                </Logo>
            </Wrapper>
        )
    }
}
    
export default Sidebar