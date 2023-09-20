import { Header, Title, Paragraph, StartSearchingLink } from './HomePageContent.styled';

export default function HomePageContent() {
  return (
    <Header>
      <Title>Car Rent</Title>
      <Paragraph>Find the best car for your trip</Paragraph>
      <StartSearchingLink to="/catalog">Start searching</StartSearchingLink>
    </Header>
  );
}