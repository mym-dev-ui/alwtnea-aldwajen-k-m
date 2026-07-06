export default function KnetPayment() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#eee",
      padding: "24px",
      direction: "rtl",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>
        عمليات الدفع
      </h1>

      <section style={{
        background: "#fff",
        border: "4px solid #8f8f8f",
        borderRadius: "32px",
        padding: "28px",
        maxWidth: "720px",
        margin: "0 auto 24px auto"
      }}>
        <div style={{ textAlign: "center", fontSize: "34px", fontWeight: "bold", color: "#003d79" }}>
          NBK
        </div>

        <div style={{ marginTop: "30px", display: "flex", justifyContent: "space-between" }}>
          <strong style={{ color: "#0072bc" }}>المستفيد:</strong>
          <span>stc - Kuwait Telecom Company</span>
        </div>

        <hr />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <strong style={{ color: "#0072bc" }}>المبلغ:</strong>
          <span>KD 2.000</span>
        </div>
      </section>

      <section style={{
        background: "#fff",
        border: "4px solid #8f8f8f",
        borderRadius: "32px",
        padding: "28px",
        maxWidth: "720px",
        margin: "0 auto 24px auto"
      }}>
        <p style={{ textAlign: "center", fontSize: "20px", color: "#444" }}>
          اضغط على الزر للانتقال إلى بوابة الدفع الرسمية
        </p>

        <button style={{
          width: "100%",
          height: "58px",
          borderRadius: "12px",
          border: "1px solid #ccc",
          background: "#eaeaea",
          fontSize: "22px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          الدفع عبر كي نت
        </button>
      </section>
    </main>
  );
}
