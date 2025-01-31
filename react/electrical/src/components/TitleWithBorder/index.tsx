import '../TitleWithBorder/style.css';

interface Props {
  subtitle: string | string[];
}

export const TitleWithBorder = ({ subtitle }: Props) => {
  return (
    <div className="TitleWithBorder">
      <div className="wrapper">
        <div className="TitleWithBorder">
          {Array.isArray(subtitle) ? (
            subtitle.map((text, index) => (
              <p key={index}>{text}</p>
            ))
          ) : (
            <p>{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleWithBorder;
