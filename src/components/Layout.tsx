import Navbar from 'components/Navbar';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

type LayoutProps = {
  children?: React.ReactNode;
};

const App = styled.div`
  min-height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContent = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <App>
      <Global styles={GlobalStyles} />
      <Navbar />
      <MainContent>{children}</MainContent> 
    </App>
  )
}
