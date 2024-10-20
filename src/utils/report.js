import { Page, Text, View, Image, Document, StyleSheet } from "@react-pdf/renderer";
import Glasses from "../assets/glasses-dark.png";

const PDFReport = ({ report }) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
      padding: 24,
    },
    title: {
      fontWeight: "700",
      fontSize: "32px",
    },
    image: {
      width: "12.5%"
    },
    subheading: {
      fontWeight: "600",
      fontSize: "18px",
    },
    text: {
      fontSize: "12px",
      color: "grey",
    },
    smallSection: {
      padding: "16px 0",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid grey",
    },
    largeSection: {
      padding: "16px 0",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      justifyContent: "left",
      textAlign: "left",
      borderBottom: "1px solid grey",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.smallSection}>
          <Text style={styles.title}>{`${report.data.name} - ${report.date}`}</Text>
          <Image style={styles.image} src={Glasses} />
        </View>
        <View style={styles.smallSection}>
          <Text style={styles.subheading}>Age</Text>
          <Text style={styles.text}>{report.data.age}</Text>
        </View>
        <View style={styles.largeSection}>
          <Text style={styles.subheading}>Chief Complaint</Text>
          <Text style={styles.text}>{report.data.chief_complaint}</Text>
        </View>
        <View style={styles.largeSection}>
          <Text style={styles.subheading}>{"History of Present Illness (location, quality, severity, timing, setting, alleviating/aggravating factors, associated signs and symptoms)"}</Text>
          <Text style={styles.text}>{report.data.history_of_present_illness}</Text>
        </View>
        <View style={styles.largeSection}>
          <Text style={styles.subheading}>Family History</Text>
          <Text style={styles.text}>{report.data.family_history}</Text>
        </View>
        <View style={styles.largeSection}>
          <Text style={styles.subheading}>Social History</Text>
          <Text style={styles.text}>{report.data.social_history}</Text>
        </View>
        <View style={styles.largeSection}>
          <Text style={styles.subheading}>Review of Symptoms</Text>
          <Text style={styles.text}>{report.data.review_of_symptoms}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFReport;
