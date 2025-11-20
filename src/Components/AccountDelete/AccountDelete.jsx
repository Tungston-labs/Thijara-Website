import React from "react";
import { PageWrapper, Card, Title, SectionTitle, Text, List, ListItem, Email } from "./AccountDelete.styles";
import Footer from "../Footer";


export default function AccountDeletionPage() {
return (
    <>
<PageWrapper>
<Card>
<Title>Account Deletion Request – Thijara Mobile App</Title>


<SectionTitle>1. How to Request Account Deletion</SectionTitle>
<Text>
The <strong>Thijara app</strong> currently does not provide an in-app option to delete user accounts. Users may request deletion of their
account and personal data through email.
</Text>
<Text>To request deletion, please contact:</Text>
<Text>
📩 <Email href="mailto:support@yourcompany.com">thijaraofficials@gmail.com</Email>
</Text>
<List>
<ListItem>Full Name</ListItem>
<ListItem>Registered Email or Mobile Number</ListItem>
<ListItem>Any additional details for verification</ListItem>
<ListItem>Reason for deletion (optional)</ListItem>
</List>


<SectionTitle>2. Data That Will Be Deleted</SectionTitle>
<List>
<ListItem>User Profile Information</ListItem>
<ListItem>Personal Details</ListItem>
<ListItem>Activity Logs</ListItem>
<ListItem>Uploaded Files & Documents</ListItem>
<ListItem>Any stored personal data within our system</ListItem>
</List>


<SectionTitle>3. Data That May Be Retained</SectionTitle>
<Text>We may retain certain data for legal and security purposes:</Text>
<List>
<ListItem>Audit Logs</ListItem>
<ListItem>Fraud Prevention Records</ListItem>
<ListItem>Compliance-related Information</ListItem>
</List>
<Text><strong>Retention Period:</strong> Up to 90 days or as required by law.</Text>


<SectionTitle>4. Processing Time</SectionTitle>
<Text>Your account and associated data will be deleted within:</Text>
<Text><strong>7–30 business days</strong> after verifying your request.</Text>


<SectionTitle>5. Contact</SectionTitle>
<Text>
For additional support or questions, contact us at <Email href="mailto:support@yourcompany.com">thijaraofficials@gmail.com</Email>.
</Text>
</Card>

</PageWrapper>
      <Footer />
</>
);
}