---
sidebar_position: 6
---

# Shetify – Complete User Guide 📘

Welcome to the advanced documentation of **Shetify**.  
This guide explains every major feature in detail, including imports, exports, metafields, configuration, and data handling.

---

# 1️⃣ Installation & Store Connection

## Step 1: Install the App
- Install Shetify from the Shopify App Store.
- Click **Install App**.
- Approve required permissions.

## Step 2: Secure Authentication
Shetify uses Shopify OAuth authentication.

- Store owner approves access.
- Secure token is generated.
- All API communication happens via encrypted HTTPS.

No passwords are stored.

---

# 2️⃣ Dashboard Overview

After installation, you’ll see:

- Store Status
- Sync Status
- Import / Export Tools
- Metafields Manager
- Settings Panel

The dashboard gives a real-time overview of store activity.

---

# 3️⃣ Data Import System 📥

Shetify allows importing structured data into your Shopify store.

## Supported Import Types

- Products
- Variants
- Collections
- Custom Data
- Metafields

## Import Methods

### Method 1: CSV Upload
1. Go to **Import Section**
2. Upload CSV file
3. Map columns to Shopify fields
4. Validate data
5. Click Import

### Method 2: Manual Entry
You can manually add:
- Product Title
- Description
- Price
- SKU
- Inventory
- Tags
- Metafields

### Validation System
Before importing:
- Duplicate products are detected
- Missing required fields are highlighted
- Incorrect formats are flagged

---

# 4️⃣ Data Export System 📤

Export your store data anytime.

## Export Options

- Export All Products
- Export Selected Products
- Export Metafields
- Export Custom Data

## Export Formats

- CSV
- Structured JSON

## How Export Works

1. Select export type
2. Choose filters (optional)
3. Click Generate Export
4. Download file

Export does NOT modify store data.

---

# 5️⃣ Metafields Management 🏷️

Metafields allow storing custom information in Shopify.

Shetify provides full metafield control.

---

## What Are Metafields?

Metafields are custom fields added to:

- Products
- Variants
- Collections
- Orders
- Customers

Example:
- Size Guide
- Custom Specifications
- Extra Product Details
- Internal Notes

---

## Adding Metafields Manually

1. Open Product
2. Click “Add Metafield”
3. Enter:
   - Namespace
   - Key
   - Value
   - Type (text, number, json, etc.)
4. Save

Changes sync instantly with Shopify.

---

## Bulk Metafield Import

You can import metafields via CSV.

Required Columns:

- Product ID / Handle
- Namespace
- Key
- Value
- Type

System automatically:
- Creates namespace if missing
- Updates existing metafields
- Skips invalid rows

---

## Editing Metafields

- Click product
- Select metafield
- Modify value
- Save changes

All updates are done via Shopify API.

---

# 6️⃣ Permissions & Data Access 🔐

Shetify only requests necessary permissions such as:

- Read Products
- Write Products
- Read Collections
- Write Metafields

We DO NOT:
- Access customer passwords
- Sell store data
- Modify themes without permission

All data is processed securely.

---

# 7️⃣ Sync & Automation ⚙️

Shetify uses:

- Real-time API sync
- Background job processing
- Error logging system

When importing/exporting:
- System queues requests
- Prevents Shopify API rate limit issues
- Retries failed operations automatically

---

# 8️⃣ Error Handling & Logs 🧾

If an import fails:

You will see:
- Error message
- Row number
- Reason
- Suggested fix

Logs include:
- Import history
- Export history
- Sync status

---

# 9️⃣ Manual vs Automated Workflow

## Manual Mode
- User uploads data
- User confirms actions

## Automated Mode
- Scheduled sync
- Automatic data validation
- Background updates

---

# 🔟 Best Practices

✔ Always validate CSV before upload  
✔ Keep metafield namespace consistent  
✔ Avoid duplicate SKUs  
✔ Export backup before bulk import  

---

# 1️⃣1️⃣ Troubleshooting

### Import Not Working?
- Check required columns
- Ensure correct product handle
- Validate file format (UTF-8)

### Metafield Not Showing?
- Confirm namespace/key
- Check metafield definition in Shopify

### API Errors?
- Usually caused by rate limits
- Retry after few seconds

---

# 1️⃣2️⃣ Support

If you experience any issue:

📧 support@shetify.com  
🌐 https://www.shetify.com  

Provide:
- Store URL
- Screenshot
- Error message

---

# 🚀 Final Notes

Shetify is built to make Shopify data management:

- Fast
- Secure
- Automated
- Scalable

Thank you for using **Shetify**.