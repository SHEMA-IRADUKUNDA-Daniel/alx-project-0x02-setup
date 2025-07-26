import Header from "@/components/layout/Header";
import Card from "@/components/layout/Card";
export default function Home() {
  return (
    <div>
      <Header />
      <Card
        title="I am the title"
        content="Wake up to the sound of waves in this stunning oceanfront property."
      ></Card>
    </div>
  );
}
