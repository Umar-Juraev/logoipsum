import "./InfoCard.scss";

const InfoCard = ({ title, subTitle, img, click }) => {
  return (
    <div className="" onClick={click}>
      <img src={img} alt="card" />
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </div>
  );
};

export default InfoCard;
