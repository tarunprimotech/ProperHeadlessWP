export default function HelloPage() {
    return (
      <div style={styles.container as React.CSSProperties}>
        <h1>This is ASTROGENIUS PAGE.</h1>
      </div>
    );
  }
  
  const styles = {
    container: {
      textAlign: "center",
      padding: "50px",
      fontFamily: "Arial, sans-serif",
    },
  };
  