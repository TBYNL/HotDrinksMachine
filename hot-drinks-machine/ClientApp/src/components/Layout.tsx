import React from 'react';
import { Container } from 'reactstrap';

type props = {
  children: React.ReactElement
}

export const Layout = ({ children }: props) => {
    return (
      <div>
        <Container>
          {children}
        </Container>
      </div>
    );
}
