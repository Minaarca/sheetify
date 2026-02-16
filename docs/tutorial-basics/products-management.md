---
slug: products-management-import-export
title: Products Management – Complete Import & Export Guide
authors:
  - name: Shetify Team
    title: Product Documentation
tags: [products, import, export, variants, metafields]
---

# 📦 Products Management

Shetify allows full bulk import and export of Shopify products including variants, images, and metafields.

---

## 📤 Export Products

### Scope Options
- Entire Store
- Specific Collection ID
- Selected Product IDs

### Include Options
- Basic Info
- Variants
- Images
- Product Metafields
- Variant Metafields

### Export Steps
1. Go to Products → Export
2. Select Scope
3. Choose Data Types
4. Click Generate Export
5. Download CSV

---

## 📥 Import Products

### 📄 Sheet Name
`Products`

### Required Columns

| Column | Required | Purpose |
|--------|----------|---------|
| Product ID | For update | Updates existing product |
| Handle | For create | Creates new product |
| Title | Yes | Product name |
| SKU | Yes | Unique identifier |
| Price | Yes | Product price |

### Update Logic
- Product ID exists → Update
- No ID but Handle exists → Create
- Variant ID exists → Update variant
- SKU match → Update SKU

---

## 🏷️ Metafields Format

Column format:
Metafield: namespace.key

Example:
Metafield: custom.material

If exists → Update  
If not → Create new

---

Bulk update example:
- 1000 SKUs price change
- Add new metafield to all products