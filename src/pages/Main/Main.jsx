import InfoCard from "../../components/InfoCard/InfoCard";
import card1 from "../../Images/Icon001.png";
import card2 from "../../Images/Icon002.png";
import card3 from "../../Images/Icon003.png";

import "./Main.scss";

const Main = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <main>
      <div className="grid">
        <InfoCard
          click={handleClick}
          img={card1}
          subTitle={
            "See how you stack up against comparable companies in similar stages."
          }
          title={"Benchmarks"}
        />
        <InfoCard
          click={handleClick}
          img={card2}
          subTitle={
            "Benchmark the health of your monetization and pricing strategy."
          }
          title={"Pricing Audit"}
        />
        <InfoCard
          click={handleClick}
          img={card3}
          subTitle={
            "Audit where revenue leakage exists and where you can increase retention."
          }
          title={"Retention Audit"}
        />
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Main;
