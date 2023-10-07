import { AddForm } from "./components/AddForm";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { State } from "./components/State";

export default function App() {
  return (
    <div className="app">
      <Header />
      <AddForm />
      <List />
      <State />
    </div>
  );
}
