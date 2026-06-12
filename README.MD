# Centro Thrift

A modern, curated thrift-commerce platform designed to replace chaotic social-media product dumps with a structured browsing, reservation, and delivery experience.

---

## Vision

Centro Thrift helps customers discover unique one-off thrift finds through a clean and professional online storefront.

The platform focuses on:

* Curated product discovery
* Reservation-based purchasing
* Inventory protection
* Scheduled deliveries
* Simple operations for store staff
* Scalable architecture for future growth

---

## Core Principles

### Customer First

The platform should reduce friction and make browsing enjoyable.

### One-Off Inventory

Most products exist only once.

Inventory accuracy is critical.

### Operational Simplicity

Store staff should manage products, reservations, and deliveries with minimal effort.

### Scalability

The architecture should support future features without requiring major rewrites.

### SOLID Design

Business logic, UI, and database access remain separated.

---

## Technology Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes

### Database

* PostgreSQL

### ORM

* Prisma

### Authentication

* NextAuth

### Image Storage

* Cloudinary

### Deployment

* Vercel
* Supabase PostgreSQL

---

## Architecture

UI

↓

Services

↓

Repositories

↓

Prisma

↓

PostgreSQL

---

## User Roles

### Admin

Full platform access.

### Sales Assistant

Can:

* Create products
* Edit products
* Manage reservations
* Manage deliveries

Cannot:

* Modify platform settings
* Manage admin permissions

### Customer

No account required during MVP.

Customers browse products and reserve items through WhatsApp.

---

## MVP Features

### Storefront

* Homepage
* Product Listings
* Product Details
* Collections
* Search
* Filtering

### Cart

* Add Products
* Remove Products
* Delivery Day Selection

### Reservations

* WhatsApp Reservation Workflow
* Reservation Tracking

### Admin

* Authentication
* Product CRUD
* Collection Management
* Reservation Management
* Order Management
* Delivery Management

---

## Core Domains

### Products

Inventory management.

### Collections

Seasonal and promotional product grouping.

### Reservations

Temporary inventory locking.

### Orders

Confirmed purchases.

### Deliveries

Delivery scheduling and tracking.

### Authentication

Staff access control.

---

## Future Roadmap

### Phase 2

* Customer Accounts
* Wishlists
* Promotions
* Notifications
* Audit Logs

### Phase 3

* Mobile Money Automation
* Customer Purchase History
* Analytics Dashboard
* Recommendation Engine

---

## Development Roadmap

### Sprint 1

Project Setup

* Next.js
* Tailwind
* Prisma
* PostgreSQL
* Authentication

### Sprint 2

Authentication

### Sprint 3

Product CRUD

### Sprint 4

Collections

### Sprint 5

Storefront

### Sprint 6

Cart & Reservations

### Sprint 7

Orders & Deliveries

### Sprint 8

Deployment

---

## Project Status

Current Phase:

Architecture Complete

Next Phase:

Sprint 1 - Project Setup

---

## Source of Truth

The Centro Thrift Master Specification is the authoritative project document.

All architecture, business rules, workflows, and future development decisions should remain aligned with that specification.
