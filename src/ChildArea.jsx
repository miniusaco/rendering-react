const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChileArea = (props) => {
  const { open } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
