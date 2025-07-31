import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
});

const MyPDFDocument = ({ data }: { data: any }) => {
  return (<Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Name: {data.name}</Text>
        <Text>Email: {data.email}</Text>
      </View>
    </Page>
  </Document>
)};

export default MyPDFDocument;
