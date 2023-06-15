function App() {
  return (
    <div>
      <Tweet
        name="Dean Lunn"
        username="AdenKaine"
        date={new Date().toDateString()}
        message="Finally learning React!"
      />
      <Tweet
        name="Emili Perry-Davis"
        username="TurtleButt"
        date={new Date().toDateString()}
        message="He's almost done!"
      />
      <Tweet
        name="Badi Tolo"
        username="The6thMan"
        date={new Date().toDateString()}
        message="Sleep is for the weak!"
      />
    </div>
  );
}
