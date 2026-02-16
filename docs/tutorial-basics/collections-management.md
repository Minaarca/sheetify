---
slug: collections-management-guide
title: Collections Management – Smart & Custom Collections Import
authors:
  - name: Shetify Team
    title: Product Documentation
tags: [collections, smart collections, custom collections]
---

# 📁 Collections Management

Supports both Smart and Custom collections.

---

## 📤 Export Collections

Includes:
- Collection ID
- Handle
- Rules
- Linked Products
- Metafields

Steps:
1. Collections → Export
2. Choose Type
3. Generate File

---

## 📥 Import Collections

### 📄 Sheet Name
`Collections`

| Column | Required |
|--------|----------|
| Collection ID | For update |
| Handle | For create |
| Title | Yes |
| Type | smart/custom |

### Smart Collection Rule Columns
- Rule Column
- Rule Relation
- Rule Condition

### Update Logic
- Handle match → Update
- No match → Create new