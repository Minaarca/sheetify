---
slug: customers-management-guide
title: Customers Management – Bulk Update & Sync
authors:
  - name: Shetify Team
    title: Product Documentation
tags: [customers, marketing, bulk update]
---

# 👥 Customers Management

Bulk manage customer data safely.

---

## 📤 Export Customers

Exports:
- Customer ID
- Email
- Address
- Marketing Status
- Tags

---

## 📥 Import Customers

### 📄 Sheet Name
`Customers`

| Column | Required |
|--------|----------|
| Customer ID | For update |
| Email | For create |
| First Name | Yes |
| Last Name | Yes |
| Accepts Marketing | TRUE/FALSE |

### Logic
ID match → Update  
Email exists → Update  
Else → Create