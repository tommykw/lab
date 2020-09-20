import * as React from "react"
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const Header = styled.header`
  font-size: 1.5rem;
  height: 2rem;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
`

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`

export const DemoDetail: React.FC = () => {
    return (
      <>
        <Header>
          Lab
        </Header>
        <Wrapper>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </Wrapper>
      </>
    )
  }
  